const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const booksRoot = path.resolve(root, "../german_exam_books");
const topics = [
  "Arbeit", "Arbeitssuche", "Behörden", "Gesundheit", "Wohnen",
  "Kinder und Schule", "Einkaufen", "Verkehr", "Post, Bank und Versicherung",
  "Medien und Freizeit", "Weiterbildung"
];

function threePoints(body, context) {
  const beforeModel = body.split(/^\*\*Beispieltext|^#{3,4} Modelltext|^## Modelllösungen/m)[0];
  const points = [...beforeModel.matchAll(/^\d+\.\s+(.+)$/gm)].map(match => match[1].trim());
  if (points.length !== 3) throw new Error(`${context}: expected 3 points, found ${points.length}`);
  return points;
}

function sourceFiles(level) {
  const directory = path.join(booksRoot, level, "writing_fide");
  const names = fs.readdirSync(directory).filter(name => /^(0[1-9]|1[01])_.*\.md$/.test(name)).sort();
  if (names.length !== 11) throw new Error(`${level}: expected 11 topic chapters, found ${names.length}`);
  return names.map((name, index) => {
    if (Number(name.slice(0, 2)) !== index + 1) throw new Error(`Unexpected chapter: ${name}`);
    return fs.readFileSync(path.join(directory, name), "utf8");
  });
}

function a2Items(sources) {
  return sources.flatMap((source, chapterIndex) => {
    const sets = [...source.matchAll(/^## ([56])\. Practice set ([12])\s*$/gm)];
    if (sets.length !== 2) throw new Error(`A2 chapter ${chapterIndex + 1}: expected 2 practice sets`);
    return sets.flatMap((set, setIndex) => {
      const body = source.slice(set.index + set[0].length, sets[setIndex + 1]?.index ?? source.length);
      const exercises = [...body.matchAll(/^### [56]\.([12]) (Formular|E-Mail)\s*$/gm)];
      if (exercises.length !== 2) throw new Error(`A2 chapter ${chapterIndex + 1}, set ${setIndex + 1}: expected 2 exercises`);
      return exercises.map((exercise, exerciseIndex) => {
        const kind = exerciseIndex ? "email" : "form";
        if (Number(exercise[1]) !== exerciseIndex + 1 || exercise[2] !== (exerciseIndex ? "E-Mail" : "Formular")) {
          throw new Error(`Unexpected A2 exercise in chapter ${chapterIndex + 1}, set ${setIndex + 1}`);
        }
        const task = body.slice(exercise.index + exercise[0].length, exercises[exerciseIndex + 1]?.index ?? body.length);
        const points = threePoints(task, `A2 chapter ${chapterIndex + 1}, set ${setIndex + 1}, ${kind}`);
        const chapter = chapterIndex + 1;
        const setNumber = setIndex + 1;
        return {
          level: "a2", chapter, setNumber, kind, points,
          key: `a2-k${chapter}-s${setNumber}-${kind}`,
          label: `Übungsset ${setNumber} · ${exercise[2]}`,
          title: `${exercise[2]}: ${topics[chapterIndex]}`,
          url: `/fide-a2-writing/kapitel-${String(chapter).padStart(2, "0")}-set-${setNumber}-${kind}/`,
          guidance: kind === "form"
            ? "Übertragen Sie die Formularangaben aus dem Buch und schreiben Sie die drei Punkte unter «Fragen und Bemerkungen» in dasselbe Textfeld. Orientieren Sie sich für die Bemerkungen an 30–50 Wörtern. Verwenden Sie nur fiktive Angaben, keine echten persönlichen Daten."
            : "Schreiben Sie eine kurze Antwort auf das E-Mail im Buch (Orientierung: 40–60 Wörter). Achten Sie auf passende Anrede und Schlussformel."
        };
      });
    });
  });
}

function b1Tasks(body, chapter, setNumber, mock = false) {
  const headings = [...body.matchAll(/^#{2,3} Aufgabe ([ABC]): (.+)\s*$/gm)];
  if (headings.length !== 3) throw new Error(`B1 ${mock ? "mock" : `chapter ${chapter}, set ${setNumber}`}: expected A, B and C`);
  return headings.map((heading, index) => {
    const letter = "ABC"[index];
    if (heading[1] !== letter) throw new Error(`Unexpected B1 task: ${heading[0]}`);
    const task = body.slice(heading.index + heading[0].length, headings[index + 1]?.index ?? body.length);
    const points = threePoints(task, `B1 ${mock ? "mock" : `chapter ${chapter}, set ${setNumber}`}, ${letter}`);
    const kind = { A: "E-Mail-Antwort", B: "Formeller Brief", C: "Informelles E-Mail" }[letter];
    const prefix = mock ? "Probeprüfung" : `Kapitel ${chapter} · Übungsset ${setNumber}`;
    const slug = mock ? `probepruefung-${letter.toLowerCase()}` : `kapitel-${String(chapter).padStart(2, "0")}-set-${setNumber}-${letter.toLowerCase()}`;
    const guidance = {
      A: "Antworten Sie auf das E-Mail im Buch mit mindestens 30 Wörtern. Schreiben Sie mit passender Anrede und Schlussformel.",
      B: "Schreiben Sie einen einfachen formellen Brief (Trainingslänge: etwa 50–70 Wörter) mit passender Anrede und Schlussformel. Wenn im Buch ein Briefanfang vorgegeben ist, ergänzen Sie ihn.",
      C: "Schreiben Sie ein informelles E-Mail mit mindestens 50 Wörtern und passender Anrede und Schlussformel."
    }[letter];
    return {
      level: "b1", chapter, setNumber, kind: letter, mock, points,
      key: mock ? `b1-mock-${letter.toLowerCase()}` : `b1-k${chapter}-s${setNumber}-${letter.toLowerCase()}`,
      label: `${prefix} · Aufgabe ${letter}`,
      title: `${kind}: ${mock ? "Probeprüfung" : topics[chapter - 1]}`,
      url: `/fide-b1-writing/${slug}/`, guidance
    };
  });
}

function b1Items(sources) {
  const items = sources.flatMap((source, chapterIndex) => {
    const sets = [...source.matchAll(/^## Übungsset ([12])\s*$/gm)];
    if (sets.length !== 2) throw new Error(`B1 chapter ${chapterIndex + 1}: expected 2 practice sets`);
    return sets.flatMap((set, index) => {
      const body = source.slice(set.index + set[0].length, sets[index + 1]?.index ?? source.length);
      return b1Tasks(body, chapterIndex + 1, index + 1);
    });
  });
  const mock = fs.readFileSync(path.join(booksRoot, "b1/writing_fide/12_mock_test.md"), "utf8");
  return items.concat(b1Tasks(mock.split(/^## Modelllösungen zur Probeprüfung/m)[0], 12, 1, true));
}

function feedbackPrompt(item) {
  const a2 = item.level === "a2";
  const form = a2 && item.kind === "form";
  const wordGoal = form
    ? "Schätze die Wortzahl der Bemerkungen; im Buch sind 30–50 Wörter eine Orientierung, keine Mindestzahl."
    : a2
      ? "Schätze die Wortzahl; im Buch sind 40–60 Wörter eine Orientierung, keine Mindestzahl."
      : item.kind === "B"
        ? "Schätze die Wortzahl; etwa 50–70 Wörter sind das Trainingsziel im Buch, aber keine offizielle Mindestzahl für diesen Brief."
        : `Schätze die Wortzahl und prüfe, ob ${item.kind === "A" ? "mindestens 30" : "mindestens 50"} Wörter geschrieben wurden.`;
  const format = form
    ? "Prüfe, ob Formularfelder und «Fragen und Bemerkungen» unterscheidbar sind, wenn beides im Entwurf steht. Erfinde keine Formulardaten und verlange für Formularbemerkungen keine Anrede oder Schlussformel."
    : `Prüfe Anrede und Schlussformel, den zur Empfängerin oder zum Empfänger passenden Ton und den Aufbau.${item.mock && item.kind === "B" ? " Der Briefanfang ist im Buch vorgegeben: Bewerte nur meine Ergänzung und bestrafe mich nicht dafür, dass ich den gedruckten Anfang nicht abgetippt habe." : ""}`;
  return `Du bist mein freundlicher Schreibcoach für das fide-${item.level.toUpperCase()}-Schreibbuch (Schweiz). Mein eigener Entwurf steht vor diesem Prompt in derselben Nachricht. Wenn er fehlt, bitte mich zuerst darum. Beurteile nur meinen Entwurf, nicht den Modelltext im Buch.

${item.label} · ${topics[item.chapter - 1] || "Probeprüfung"}
Textsorte: ${form ? "Formular und Bemerkungen" : item.title.split(":")[0]}. Die Aufgabe steht im Buch.
Die drei Leitpunkte:
${item.points.map((point, index) => `${index + 1}. ${point}`).join("\n")}

Gib kurzes, verständliches Feedback auf Deutsch (${item.level.toUpperCase()}-Niveau, Schweizer Schreibweise):
1. Prüfe jeden Leitpunkt einzeln: vorhanden, teilweise oder fehlt. Begründe knapp, was ich noch ergänzen sollte. Erfinde keine Angaben.
2. ${format} Prüfe Klarheit, Grammatik und Wortschatz. ${wordGoal} Beginne mit einer Stärke und nenne höchstens drei wichtige Verbesserungen anhand kurzer Beispiele aus meinem Text.
3. Bitte mich, meinen Entwurf selbst zu überarbeiten und die neue Fassung zu schicken. Schreibe keine vollständige Musterlösung oder fertig polierte Ersatzfassung.

Wenn ich eine neue Fassung sende, vergleiche sie kurz mit der ersten und prüfe die Leitpunkte erneut. Du bist ein Übungspartner, keine offizielle fide-Bewertung.`;
}

function frontmatter(fields) {
  return `---\n${Object.entries(fields).map(([key, value]) => `${key}: ${JSON.stringify(value)}`).join("\n")}\n---\n`;
}

const catalog = {};
const prompts = {};
for (const level of ["a2", "b1"]) {
  const sources = sourceFiles(level);
  const items = level === "a2" ? a2Items(sources) : b1Items(sources);
  const expected = level === "a2" ? 44 : 69;
  if (items.length !== expected) throw new Error(`${level}: expected ${expected} exercises, found ${items.length}`);
  const slug = `fide-${level}-writing`;
  const sections = topics.map((title, index) => ({
    id: `kapitel-${index + 1}`, label: `Kapitel ${index + 1}`, title, note: "",
    items: items.filter(item => item.chapter === index + 1).map(item => ({
      label: item.label, title: item.title, url: item.url,
      badge: level === "a2" ? `${item.setNumber}${item.kind === "form" ? "F" : "E"}` : `${item.setNumber}${item.kind}`
    }))
  }));
  if (level === "b1") sections.push({
    id: "probepruefung", label: "Probeprüfung", title: "Drei Schreibaufgaben",
    note: "Lösen Sie alle drei Aufgaben und lesen Sie auch die Leseaufgaben im Buch.",
    items: items.filter(item => item.mock).map(item => ({
      label: item.label, title: item.title, url: item.url, badge: item.kind
    }))
  });
  catalog[level] = { level: level.toUpperCase(), slug, sections };
  const directory = path.join(root, "src", slug);
  fs.mkdirSync(directory, { recursive: true });
  for (const [index, item] of items.entries()) {
    prompts[item.key] = feedbackPrompt(item);
    const filename = item.url.split("/").filter(Boolean).at(-1);
    fs.writeFileSync(path.join(directory, `${filename}.md`), frontmatter({
      layout: "oeif-writing-exercise.njk",
      title: `${item.label}: ${item.title} · fide ${level.toUpperCase()} Schreiben`,
      description: `Online-Material zum fide-${level.toUpperCase()}-Schreibbuch: ${item.title}. Eigenen Text verfassen und mit Feedback selbst überarbeiten.`,
      permalink: item.url,
      lang: "de-CH",
      extraStylesheet: "/css/oeif-writing.css",
      extraScript: "/dtz-b1-cards/assets/practice.js",
      bookLevel: level,
      writingCompanionSlug: slug,
      writingCompanionName: "fide",
      writingPracticeGuidance: item.guidance,
      exerciseLabel: item.label,
      exerciseTitle: item.mock ? `${item.title} · Aufgabe ${item.kind}` : `${item.title} · Set ${item.setNumber}`,
      sectionTitle: item.mock ? "Probeprüfung" : topics[item.chapter - 1],
      exerciseNote: level === "b1" && item.mock
        ? "Im fide A2–B1-Modul gelten die 60 Minuten für Lesen und Schreiben zusammen, nicht für diese einzelne Schreibaufgabe." : "",
      promptKey: item.key,
      previousExercise: items[index - 1]?.url ?? null,
      nextExercise: items[index + 1]?.url ?? null
    }));
  }
  console.log(`${slug}: ${items.length} exercise pages`);
}
fs.writeFileSync(path.join(root, "src/_data/fideWritingCatalog.json"), JSON.stringify(catalog, null, 2) + "\n");
fs.writeFileSync(path.join(root, "src/_data/fideWritingPrompts.json"), JSON.stringify(prompts, null, 2) + "\n");
