const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const booksRoot = path.resolve(root, "../german_exam_books");
const dataRoot = path.join(root, "src/_data");
const chapters = {
  a2: [
    "Persönliche Nachrichten",
    "Formelle Nachrichten im Alltag",
    "Bitten, Entschuldigungen und Änderungen",
    "Österreichischer Alltag"
  ],
  b1: [
    "Informelle Nachrichten",
    "Formelle und funktionale Nachrichten",
    "Beschwerden, Bitten und Entschuldigungen",
    "Transfertraining – kurze Meinungen und Alltagstexte"
  ],
  b2: [
    "Übungsaufsätze",
    "Mock Exams – Thema A oder B"
  ]
};

function section(body, name, context) {
  const match = body.match(new RegExp(`^### ${name}\\s*\\n([\\s\\S]*?)(?=^### |^## |^# |^\\\\newpage)`, "m"));
  if (!match || !match[1].trim()) throw new Error(`Missing ${name} in ${context}`);
  return match[1].trim();
}

function pointsFrom(body, count, context) {
  const points = body.split("\n").filter(line => line.startsWith("- ")).map(line => line.slice(2).trim());
  if (points.length !== count) throw new Error(`Expected ${count} points in ${context}, found ${points.length}`);
  return points;
}

function messagePrompt(level, number, title, situation, assignment, points, transfer) {
  const prefix = `Du bist mein freundlicher Schreibcoach für das ÖIF-${level.toUpperCase()}-Übungsbuch. Mein eigener Entwurf steht in derselben Nachricht vor dieser Anweisung. Beurteile nur meinen Entwurf, nicht einen Beispieltext. Wenn kein Entwurf da ist, bitte mich zuerst darum.`;
  return `${prefix}

Einheit ${number}: ${title}
${transfer ? "Dies ist zusätzliches Transfertraining, keine typische ÖIF-B1-Kernaufgabe." : `Dies ist Schreibtraining auf ${level.toUpperCase()}-Niveau.`}

Situation: ${situation}
Schreibauftrag: ${assignment}
Die ${points.length} Inhaltspunkte aus dem Buch:
${points.map((point, i) => `${i + 1}. ${point}`).join("\n")}

Gib mir kurzes, verständliches Feedback auf Deutsch (${level.toUpperCase()}-Niveau):
1. Prüfe jeden der ${points.length} Inhaltspunkte einzeln: vorhanden, teilweise oder fehlt. Sage konkret, was ich noch ergänzen sollte. Erfinde keine Angaben.
2. Prüfe den passenden Ton, Klarheit und Aufbau, Grammatik und Wortschatz. ${level === "a2" ? "Prüfe, ob die Nachricht eine zur Empfängerin oder zum Empfänger passende Anrede und Grußformel hat. Schätze die Wortzahl: Das Trainingsziel sind mindestens 50 Wörter, möglichst etwa 80 Wörter. Sage, wenn der Text unter 50 Wörtern bleibt oder für die drei Inhaltspunkte zu knapp ist; 80 Wörter sind ein Zielwert, keine Obergrenze." : "Prüfe bei Nachrichten und E-Mails eine passende Anrede und Grußformel; bei anderen Textsorten beurteile den passenden Einstieg und Schluss. Schätze die Wortzahl und prüfe, ob der Text mindestens 100 Wörter hat. Sage, wenn er kürzer ist, und welche Inhaltspunkte ich selbst genauer ausführen könnte."} Beginne mit einer Stärke und nenne höchstens drei wichtige Verbesserungen mit kleinen Beispielen aus meinem Text.
3. Bitte mich, meinen eigenen Entwurf selbst zu überarbeiten und die neue Fassung zu schicken. Schreibe keine vollständige Musterlösung und ersetze meinen Text nicht durch eine fertig polierte Fassung.

${level === "a2" ? "Für diese Übung sind 25 Minuten Schreibzeit vorgesehen." : "Für diese Übung sind 30 Minuten Schreibzeit vorgesehen."} Die benötigte Zeit lässt sich aus dem Entwurf nicht ablesen; behaupte nicht, ich hätte das Zeitlimit eingehalten. Wenn ich die überarbeitete Version schicke, vergleiche sie kurz mit meinem ersten Entwurf und prüfe die Inhaltspunkte erneut. Du bist ein Übungspartner, keine offizielle ÖIF-Bewertung.`;
}

function essayPrompt(label, title, situation, aspects, mock) {
  return `Du bist mein Schreibcoach für einen ÖIF-B2-Aufsatz. Mein eigener Entwurf steht in derselben Nachricht vor dieser Anweisung. Beurteile nur diesen Entwurf. Wenn er fehlt, bitte mich zuerst darum.

${label}: ${title}
${mock ? "Dies ist ein Thema aus einem Mock Exam: Man wählt nur eines der beiden Themen." : "Dies ist ein Übungsaufsatz aus dem Buch."} Üben Sie mit 40 Minuten Schreibzeit und mindestens 200 Wörtern.
Situation: ${situation}
Aufgabe: Schreiben Sie einen Aufsatz und gehen Sie auf mindestens drei der folgenden Aspekte ein:
${aspects.map((aspect, i) => `${i + 1}. ${aspect}`).join("\n")}

Gib mir konkretes, knappes Feedback auf Deutsch (B2-Niveau):
1. Welche der vier möglichen Aspekte habe ich bearbeitet? Prüfe, ob mindestens drei davon sinnvoll entwickelt sind (Begründung, Beispiel oder Folge), statt nur erwähnt zu werden. Nenne fehlende oder zu knappe Aspekte.
2. Prüfe, ob eine passende Überschrift, eine Einleitung, sinnvoll gegliederte Absätze und ein zusammenfassender Schluss vorhanden sind. Beurteile Themenbezug, eine begründete Position, Argumente und gegebenenfalls Gegenargumente, Beispiele, logische Verknüpfungen, Ton, Klarheit, Grammatik und Wortschatz. Schätze die Wortzahl und prüfe, ob der Aufsatz mindestens 200 Wörter hat. Wenn nicht, sage wie viele ungefähr fehlen und welche Argumente ich selbst ausbauen könnte; keine amtliche Bewertung. Die Schreibzeit lässt sich aus dem Entwurf nicht überprüfen; behaupte nicht, ich hätte die 40 Minuten eingehalten.
3. Beginne mit einer Stärke und nenne höchstens drei priorisierte Verbesserungen anhand meiner eigenen Sätze. Bitte mich danach, meinen Entwurf selbst zu überarbeiten und die neue Fassung zu schicken. Schreibe keinen vollständigen Musteraufsatz und keine fertig polierte Ersatzfassung.

Vergleiche eine neue Fassung kurz mit dem ersten Entwurf und prüfe die entwickelten Aspekte erneut. Du bist ein Übungspartner, kein offizieller ÖIF-Prüfer.`;
}

function readBook(level) {
  return fs.readFileSync(path.join(booksRoot, level, "writing_oeif/book_no_toc.md"), "utf8");
}

function numberedUnits(level, source) {
  const headings = [...source.matchAll(/^## Einheit (\d+): (.+?) \{#einheit-(\d+)\}\s*$/gm)];
  const expected = level === "a2" ? 16 : 30;
  if (headings.length !== expected) throw new Error(`Expected ${expected} ${level} units, found ${headings.length}`);
  const end = source.indexOf("# Häufige Fehler", headings.at(-1).index);
  if (end < 0) throw new Error(`Missing end of ${level} numbered units`);
  return headings.map((heading, index) => {
    const number = Number(heading[1]);
    if (number !== index + 1 || Number(heading[3]) !== number) {
      throw new Error(`Unexpected unit number in ${level}: ${heading[0]}`);
    }
    const title = heading[2];
    const body = source.slice(heading.index + heading[0].length, headings[index + 1]?.index ?? end);
    const context = `${level} unit ${number}`;
    const situation = section(body, "Situation", context);
    const assignment = section(body, "Schreibauftrag", context);
    const points = pointsFrom(section(body, "Was Sie schreiben müssen", context), level === "a2" ? 3 : 4, context);
    const group = level === "a2" ? Math.ceil(number / 4) : Math.min(Math.ceil(number / 8), 4);
    const label = `Einheit ${number}`;
    return {
      key: `unit-${number}`, group, label, title,
      url: `/oeif-${level}-writing/einheit-${String(number).padStart(2, "0")}/`,
      prompt: messagePrompt(level, number, title, situation, assignment, points, level === "b1" && group === 4),
      note: level === "b1" && group === 4 ? "Zusätzliches Transfertraining, keine typische ÖIF-B1-Kernaufgabe." : ""
    };
  });
}

function b2Exercises(source) {
  const exercises = [];
  const essayStart = source.indexOf("# Kapitel 3: Übungsaufsätze");
  const mockStart = source.indexOf("# Kapitel 4: Mock Exams", essayStart);
  if (essayStart < 0 || mockStart < 0) throw new Error("Missing B2 essay or mock chapter");
  const essaySection = source.slice(essayStart, mockStart);
  const essayHeadings = [...essaySection.matchAll(/^## Thema (\d+): (.+)$/gm)];
  if (essayHeadings.length !== 16) throw new Error(`Expected 16 B2 essays, found ${essayHeadings.length}`);
  for (const [index, heading] of essayHeadings.entries()) {
    const number = Number(heading[1]);
    if (number !== index + 1) throw new Error(`Unexpected B2 essay ${number}`);
    const body = essaySection.slice(heading.index + heading[0].length, essayHeadings[index + 1]?.index);
    const situation = section(body, "Situation", `B2 Thema ${number}`);
    const aspects = pointsFrom(section(body, "Aufgabe", `B2 Thema ${number}`), 4, `B2 Thema ${number}`);
    exercises.push({
      key: `essay-${number}`, group: 1, label: `Thema ${number}`, title: heading[2],
      url: `/oeif-b2-writing/thema-${String(number).padStart(2, "0")}/`,
      prompt: essayPrompt(`Kapitel 3, Thema ${number}`, heading[2], situation, aspects, false)
    });
  }

  const mockEnd = source.indexOf("# Lösungsvorschläge zu den Mock Exams", mockStart);
  if (mockEnd < 0) throw new Error("Missing end of B2 mock exams");
  const mockSection = source.slice(mockStart, mockEnd);
  const mockHeadings = [...mockSection.matchAll(/^## Mock Exam (\d+)\s*$/gm)];
  if (mockHeadings.length !== 3) throw new Error(`Expected three B2 mock exams, found ${mockHeadings.length}`);
  for (const [index, heading] of mockHeadings.entries()) {
    const exam = Number(heading[1]);
    if (exam !== index + 1) throw new Error(`Unexpected B2 mock exam ${exam}`);
    const body = mockSection.slice(heading.index + heading[0].length, mockHeadings[index + 1]?.index);
    const topics = [...body.matchAll(/^### Thema ([AB]): (.+)$/gm)];
    if (topics.length !== 2) throw new Error(`Expected topics A and B in mock exam ${exam}`);
    for (const [topicIndex, topic] of topics.entries()) {
      if (topic[1] !== (topicIndex ? "B" : "A")) throw new Error(`Unexpected mock exam ${exam} choice ${topic[1]}`);
      const task = body.slice(topic.index + topic[0].length, topics[topicIndex + 1]?.index)
        .split(/^\\newpage/m)[0];
      const situation = task.match(/^\*\*Situation:\*\*\s*(.+)$/m)?.[1];
      const assignment = task.match(/^\*\*Aufgabe:\*\*\s*(.+)$/m)?.[1];
      if (!situation || !assignment?.includes("Aufsatz")) throw new Error(`Missing B2 mock task ${exam}${topic[1]}`);
      const aspects = pointsFrom(task, 4, `B2 mock ${exam}${topic[1]}`);
      exercises.push({
        key: `mock-${exam}-${topic[1].toLowerCase()}`, group: 2, label: `Mock Exam ${exam} · Thema ${topic[1]}`,
        title: topic[2], url: `/oeif-b2-writing/mock-${exam}-${topic[1].toLowerCase()}/`,
        prompt: essayPrompt(`Mock Exam ${exam}, Thema ${topic[1]}`, topic[2], situation, aspects, true),
        note: "Wählen Sie im Mock Exam nur eines der beiden Themen. Schreiben Sie zuerst ohne Hilfe."
      });
    }
  }
  if (exercises.length !== 22) throw new Error(`Expected 22 B2 essays and mock topics, found ${exercises.length}`);
  return exercises;
}

const catalog = {};
const prompts = {};
for (const level of ["a2", "b1", "b2"]) {
  const source = readBook(level);
  const items = level === "b2" ? b2Exercises(source) : numberedUnits(level, source);
  const bookSlug = `oeif-${level}-writing`;
  const sections = chapters[level].map((title, index) => ({
    id: `gruppe-${index + 1}`,
    title,
    label: level === "b2" ? ["Kapitel 3", "Kapitel 4"][index] : `Kapitel ${index + 1}`,
    note: level === "b1" && index === 3
      ? "Zusätzliches Transfertraining, nicht die typische ÖIF-B1-Kernaufgabe." : "",
    items: items.filter(item => item.group === index + 1).map(({ key, label, title, url }) => ({
      label, title, url,
      badge: key.startsWith("mock-") ? key.match(/^mock-(\d+)-([ab])$/).slice(1).join("").toUpperCase()
        : label.match(/\d+/)[0].padStart(2, "0")
    }))
  }));
  catalog[level] = { level: level.toUpperCase(), slug: bookSlug, sections };
  const directory = path.join(root, "src", bookSlug);
  fs.mkdirSync(directory, { recursive: true });
  for (const [index, item] of items.entries()) {
    prompts[`${level}-${item.key}`] = item.prompt;
    const fields = {
      layout: "oeif-writing-exercise.njk",
      title: `${item.label}: ${item.title} · ÖIF ${level.toUpperCase()} Schreiben`,
      description: `Online-Schreibtraining zum ÖIF-${level.toUpperCase()}-Buch: ${item.title.replace(/[?.!]$/, "")}. Eigenen Text schreiben und mit Feedback selbst überarbeiten.`,
      permalink: item.url,
      lang: "de-AT",
      extraStylesheet: "/css/oeif-writing.css",
      extraScript: "/dtz-b1-cards/assets/practice.js",
      bookLevel: level,
      exerciseLabel: item.label,
      exerciseTitle: item.title,
      sectionTitle: sections[item.group - 1].title,
      exerciseNote: item.note ?? "",
      promptKey: `${level}-${item.key}`,
      previousExercise: items[index - 1]?.url ?? null,
      nextExercise: items[index + 1]?.url ?? null
    };
    const filename = item.url.split("/").filter(Boolean).at(-1);
    fs.writeFileSync(path.join(directory, `${filename}.md`),
      `---\n${Object.entries(fields).map(([key, value]) => `${key}: ${JSON.stringify(value)}`).join("\n")}\n---\n`);
  }
  console.log(`${bookSlug}: ${items.length} exercise pages`);
}
fs.writeFileSync(path.join(dataRoot, "oeifWritingCatalog.json"), JSON.stringify(catalog, null, 2) + "\n");
fs.writeFileSync(path.join(dataRoot, "oeifWritingPrompts.json"), JSON.stringify(prompts, null, 2) + "\n");
