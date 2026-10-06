const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const books = path.resolve(root, "../german_exam_books");
const catalog = {};
const prompts = {};

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function sections(source, pattern) {
  const headings = [...source.matchAll(pattern)];
  return headings.map((heading, index) => ({
    title: heading[1].trim(),
    body: source.slice(heading.index + heading[0].length, headings[index + 1]?.index ?? source.length),
    heading: heading[0]
  }));
}

function chapter(source, number) {
  const match = source.match(new RegExp(`^# Kapitel ${number}:.*$`, "m"));
  assert(match, `Missing chapter ${number}`);
  const end = source.indexOf("\n# Kapitel ", match.index + match[0].length);
  return source.slice(match.index + match[0].length, end < 0 ? undefined : end);
}

function part(source, number) {
  const match = source.match(new RegExp(`^# Teil ${number}:.*$`, "m"));
  assert(match, `Missing part ${number}`);
  const end = source.indexOf("\n# Teil ", match.index + match[0].length);
  return source.slice(match.index + match[0].length, end < 0 ? undefined : end);
}

function numberedAudio(directory) {
  const files = fs.readdirSync(directory).filter(name => name.endsWith(".mp3")).sort();
  files.forEach((name, index) => assert(name.startsWith(`${String(index + 1).padStart(3, "0")}-`),
    `Unexpected MP3 sequence ${directory}/${name}`));
  return files;
}

function group(audio, pattern, expected, context) {
  const found = audio.filter(file => pattern.test(file));
  assert(found.length === expected, `${context}: expected ${expected} MP3s, found ${found.length}`);
  return found;
}

function taskSection(body, heading, context) {
  const start = body.indexOf(`### ${heading}\n`);
  assert(start >= 0, `${context}: missing ${heading}`);
  const content = body.slice(start + `### ${heading}\n`.length)
    .split(/^#{1,3} |^\\newpage\s*$/m)[0].trim();
  assert(content, `${context}: empty ${heading}`);
  return content;
}

function taskBullets(body, context) {
  const bullets = [...body.matchAll(/^- (.+)$/gm)].map(match => match[1].trim());
  assert(bullets.length, `${context}: missing task points`);
  return bullets.map(point => `- ${point}`).join("\n");
}

function taskText(body, context) {
  const text = body.split(/^\*\*[^*\n]+:\*\*\s*$/m)[0].trim();
  assert(text, `${context}: missing task context`);
  return text;
}

function inlineBullets(body, label, context) {
  const match = body.match(new RegExp(`^\\*\\*${label}:\\*\\*\\s*\\n((?:- .+\\n?)+)`, "m"));
  assert(match, `${context}: missing ${label}`);
  return taskBullets(match[1], context);
}

function add(items, section, title, files, options = {}) {
  assert(options.context?.trim(), `Missing prompt context for ${title}`);
  items.push({ section, title, files, ...options });
}

function oeifA2(source, audio) {
  const items = [];
  const contact = sections(chapter(source, 1), /^## Kontaktgespräch \d+: (.+)$/gm);
  const dialogs = sections(chapter(source, 2), /^## (.+)$/gm).filter(item => item.body.includes("### Situation"));
  const opinions = sections(chapter(source, 3), /^## (.+)$/gm).filter(item => item.body.includes("### Thema"));
  const images = sections(chapter(source, 4), /^## (.+)$/gm).filter(item => item.body.includes("![](images/"));
  assert([contact.length, dialogs.length, opinions.length, images.length].join() === "5,10,10,13",
    "ÖIF A2 book exercise structure changed");
  const models = group(audio, /kontakt_beispiel\.mp3$/, 5, "ÖIF A2 contacts");
  const dialogAudio = group(audio, /-dialog\.mp3$/, 10, "ÖIF A2 dialogs");
  const answers = group(audio, /-antwort\.mp3$/, 10, "ÖIF A2 opinions");
  const imageModels = group(audio, /-beispiel\.mp3$/, 13, "ÖIF A2 pictures");
  const imageExperience = group(audio, /-uber-die-eigene-situation-sprechen\.mp3$/, 13, "ÖIF A2 experiences");
  contact.forEach((item, index) => add(items, 0, `Kontaktgespräch ${index + 1}: ${item.title}`,
    [{ file: models[index], label: "Modellantwort" }], {
      mode: "intro",
      context: `Impulswörter:\n${inlineBullets(item.body, "Impulswörter", item.title)}\nMögliche Nachfragen:\n${inlineBullets(item.body, "Mögliche Fragen von der prüfenden Person", item.title)}`
    }));
  dialogs.forEach((item, index) => add(items, 1, item.title,
    [{ file: dialogAudio[index], label: "Modelldialog" }], {
      mode: "dialog",
      context: `Situation und Rollen:\n${taskSection(item.body, "Situation", item.title)}\nSprecht über:\n${taskBullets(taskSection(item.body, "Aufgabe", item.title), item.title)}`
    }));
  opinions.forEach((item, index) => add(items, 2, item.title,
    [{ file: answers[index], label: "Modellantwort" }], {
      mode: "opinion",
      context: `Frage:\n${taskSection(item.body, "Thema", item.title)}\nLeitfragen:\n${taskBullets(taskSection(item.body, "Leitfragen", item.title), item.title)}`
    }));
  images.forEach((item, index) => {
    const image = item.body.match(/!\[\]\((images\/\d+\.jpg)\)/)?.[1];
    assert(image && fs.existsSync(path.join(books, "a2/speaking_oeif_gpt_v1", image)),
      `Missing ÖIF A2 image ${image}`);
    add(items, 3, item.title, [
      { file: imageModels[index], label: "Bildbeschreibung" },
      { file: imageExperience[index], label: "Über die eigene Situation sprechen" }
    ], {
      image, mode: "picture",
      context: `Bildauftrag:\n${taskSection(item.body, "Bildauftrag", item.title)}\nMögliche Nachfragen:\n${taskBullets(taskSection(item.body, "Mögliche Fragen", item.title), item.title)}`
    });
  });
  return { titles: ["Kontaktgespräch", "Dialog / Alltagssituationen", "Kurze Meinung / Gespräch", "Bildbeschreibung"], items };
}

function oeifB1(source, audio) {
  const items = [];
  const contact = sections(part(source, 1), /^## Modellantwort \d+: (.+)$/gm);
  const pictures = sections(part(source, 2), /^## (.+)$/gm).filter(item => item.body.includes("![](images/"));
  const planning = sections(part(source, 3), /^## (.+)$/gm)
    .filter(item => item.body.includes("### Situation") || item.body.includes("### Gemeinsame Situation"));
  assert([contact.length, pictures.length, planning.length].join() === "5,31,36",
    `ÖIF B1 book exercise structure changed: ${[contact.length, pictures.length, planning.length]}`);
  const intros = group(audio, /-selbstvorstellung\.mp3$/, 5, "ÖIF B1 intros");
  const pictureAudio = group(audio, /-beispiel\.mp3$/, 31, "ÖIF B1 pictures");
  const dialogs = group(audio, /-dialog\.mp3$/, 37, "ÖIF B1 dialogs");
  const cards = sections(part(source, 1), /^### Karte \d+: (.+)$/gm).slice(0, 8);
  assert(cards.length === 8, "ÖIF B1: missing speaking cards");
  const cardGroups = [[1, 4, 5], [2, 6, 8], [3, 7], [4], [5, 8]];
  contact.forEach((item, index) => add(items, 0, `Modellantwort ${index + 1}: ${item.title}`,
    [{ file: intros[index], label: "Modellantwort" }], {
      mode: "intro",
      context: `Sprechimpulse aus den Karten im Buch:\n${cardGroups[index].map(number =>
        `- ${cards[number - 1].title}: ${cards[number - 1].body.split(/^## /m)[0].trim()}`).join("\n")}`
    }));
  pictures.forEach((item, index) => {
    const image = item.body.match(/!\[\]\((images\/\d+\.jpg)\)/)?.[1];
    assert(image === `images/${String(index + 1).padStart(2, "0")}.jpg`, `Unexpected ÖIF B1 image ${image}`);
    add(items, 1, item.title, [{ file: pictureAudio[index], label: "Modellantwort" }],
      {
        mode: "picture", image,
        context: `Bildauftrag und eigene Erfahrung:\n${taskSection(item.body, "Bildbeschreibung und Erfahrung", item.title)}\nMögliche Nachfragen:\n${[...taskSection(item.body, "Mögliche Prüfer-Nachfragen mit Modellantworten", item.title)
          .matchAll(/^- \*\*Frage:\*\* (.+)$/gm)].slice(0, 3).map(match => `- ${match[1]}`).join("\n")}`
      });
  });
  let dialogIndex = 0;
  planning.forEach(item => {
    const count = item.title.startsWith("Zusatzdialog: Im Restaurant") ? 2 : 1;
    const files = dialogs.slice(dialogIndex, dialogIndex + count);
    assert(files.length === count, `Missing dialogue for ${item.title}`);
    dialogIndex += count;
    add(items, 2, item.title, files.map((file, index) => ({
      file, label: count === 1 ? "Modelldialog" : `Modelldialog ${index + 1}`
    })), {
      mode: item.title.startsWith("Zusatzdialog") ? "roleplay" : "planning",
      context: `Situation und Rollen:\n${taskSection(item.body,
        item.body.includes("### Gemeinsame Situation") ? "Gemeinsame Situation" : "Situation",
        item.title)}\nAufgabenpunkte:\n${taskBullets(taskSection(item.body, "Aufgabe", item.title), item.title)}`
    });
  });
  assert(dialogIndex === dialogs.length, "Unused ÖIF B1 dialogues");
  return { titles: ["Über sich sprechen", "Bild, Erfahrung und Nachfragen", "Gemeinsam planen und entscheiden"], items };
}

const b2PartLabels = {
  presentation: "Teil 1 – Präsentation",
  discussion: "Teil 2 – Diskussion",
  planning: "Teil 3 – Problemlösung (gemeinsam planen)"
};

function oeifB2(source, audio) {
  const items = [];
  const presentation = sections(chapter(source, 1), /^## (.+)$/gm).filter(item => item.body.includes("### Aufgabe"));
  const discussion = sections(chapter(source, 2), /^## (.+)$/gm).filter(item => item.body.includes("### Impulstext"));
  const planning = sections(chapter(source, 3), /^## (.+)$/gm)
    .filter(item => item.body.includes("### Situation") || item.title === "Vom Stichwort zur gemeinsamen Lösung");
  const mocks = sections(chapter(source, 7), /^## Prüfungssatz \d+: (.+)$/gm);
  assert([presentation.length, discussion.length, planning.length, mocks.length].join() === "10,10,11,9",
    `ÖIF B2 book exercise structure changed: ${[presentation.length, discussion.length, planning.length, mocks.length]}`);
  const presAudio = group(audio, /-praesentation\.mp3$/, 10, "ÖIF B2 presentations");
  const discAudio = group(audio, /-diskussion\.mp3$/, 10, "ÖIF B2 discussions");
  const planAudio = group(audio, /-planung\.mp3$/, 11, "ÖIF B2 planning");
  const mockAudio = group(audio, /-pruefung_(?:praesentation|dialog)\.mp3$/, 27, "ÖIF B2 mock exams");
  presentation.forEach((item, index) => add(items, 0, item.title,
    [{ file: presAudio[index], label: "Modellpräsentation" }], {
      mode: "presentation",
      context: `Präsentationsauftrag:\n${taskSection(item.body, "Aufgabe", item.title)}\nMögliche Rückfragen:\n${taskBullets(taskSection(item.body, "Mögliche Rückfragen", item.title), item.title)}`
    }));
  discussion.forEach((item, index) => {
    const steps = taskSection(item.body, "Gestufter Diskussionsauftrag", item.title)
      .split("\n").filter(line => /^- \*\*[23]\./.test(line));
    assert(steps.length === 2, `Missing discussion steps in ${item.title}`);
    const readingText = taskSection(item.body, "Impulstext", item.title);
    assert(readingText.length > 400, `Incomplete reading text in ${item.title}`);
    add(items, 1, item.title, [{ file: discAudio[index], label: "Modelldiskussion" }], {
      mode: "discussion",
      context: `Vollständiger Impulstext aus dem Buch:\n${readingText}\n\nReagieren Sie zuerst kurz auf eine konkrete Textinformation.\nDiskussionsauftrag:\n${steps.join("\n")}`
    });
  });
  planning.forEach((item, index) => add(items, 2, item.title,
    [{ file: planAudio[index], label: "Modellgespräch" }], {
      mode: "planning",
      context: item.title === "Vom Stichwort zur gemeinsamen Lösung"
        ? "Übung zur Gesprächsstruktur: Kläre mit mir Ziel, Personen und Rahmen. Entwickle mit mir einen Vorschlag, nenne einen Einwand, finde einen Kompromiss und vereinbare eine Zuständigkeit. Wähle dafür ein eigenes Planungsthema aus dem Buch."
        : `Situation:\n${taskSection(item.body, "Situation", item.title)}\nSprecht über:\n${taskBullets(taskSection(item.body, "Sprechen Sie über", item.title), item.title)}`
    }));
  mocks.forEach((item, index) => {
    const files = mockAudio.slice(index * 3, index * 3 + 3);
    assert(files.length === 3 && files.every(file => file.includes(`prufungssatz-${index + 1}-`)),
      `ÖIF B2 mock ${index + 1}: missing audio`);
    const presentationTask = taskSection(item.body, "Teil 1 – Präsentation", item.title);
    const choices = [...presentationTask.matchAll(/^\|\s*\d+\.\s*([^|]+)\|\s*([^|]+)\|/gm)];
    assert(choices.length === 5, `Missing presentation choices in ${item.title}`);
    const debate = taskSection(item.body, "Teil 2 – Text, Erstreaktion und Diskussion", item.title);
    const readingTitle = debate.match(/^\*\*Lesetext: ([^*]+)\*\*/m)?.[1];
    const readingText = debate.match(/^\*\*Lesetext: [^*\n]+\*\*\s*\n([\s\S]*?)(?=^\*\*Stufe 1 –)/m)?.[1].trim();
    const discussionTask = debate.match(/^\*\*Stufe 2 – Diskussion:\*\* (.+)$/m)?.[1];
    assert(readingTitle && readingText?.length > 400 && discussionTask,
      `Missing full reading text or discussion instructions in ${item.title}`);
    const discussionPoints = taskBullets(debate.split(/^\*\*Stufe 2 – Diskussion:\*\*/m)[1]
      .split(/^\*\*Interaktionsauftrag:\*\*/m)[0], item.title);
    const planningTask = taskSection(item.body, "Teil 3 – Gemeinsam planen", item.title)
      .split(/^\*\*Partnerhinweis:\*\*|^\*\*Planungsnotizen/m)[0];
    const planningSituation = taskText(planningTask.split(/^Entscheiden Sie gemeinsam:|^Planen Sie gemeinsam:|^Einigen Sie sich auf:/m)[0], item.title);
    const planningPoints = taskBullets(planningTask, item.title);
    const contexts = [
      `Wählen Sie eines dieser Themen und präsentieren Sie es:\n${choices.map(match => `- ${match[1].trim()}: ${match[2].trim()}`).join("\n")}\nStrukturieren Sie Ihre Präsentation mit einem Beispiel und einer Schlussfolgerung.`,
      `Vollständiger Lesetext aus dem Buch („${readingTitle}“):\n${readingText}\n\nBeziehen Sie sich auf eine konkrete Textinformation und nennen Sie einen Grund.\nDiskussionsfrage: ${discussionTask}\nGesprächspunkte:\n${discussionPoints}`,
      `Planungssituation: ${planningSituation}\nEntscheidet gemeinsam:\n${planningPoints}`
    ];
    ["Präsentation", "Diskussion", "Gemeinsam planen"].forEach((partTitle, partIndex) => {
      const mode = ["presentation", "discussion", "planning"][partIndex];
      add(items, 4, `Prüfungssatz ${index + 1}: ${item.title} · ${b2PartLabels[mode]}`,
        [{ file: files[partIndex], label: `Modell: ${partTitle}` }],
        { mode, mock: true, context: contexts[partIndex] });
    });
  });
  return { titles: ["Präsentation", "Diskussion", "Problemlösung", null, "Prüfungssimulationen"], items };
}

function fideA2(directory, audio) {
  const items = [];
  const pictureAudio = group(audio, /-picture\.mp3$/, 43, "fide A2 pictures");
  const roleAudio = group(audio, /-roleplay\.mp3$/, 43, "fide A2 role-plays");
  let index = 0;
  const titles = [];
  for (let chapterNumber = 1; chapterNumber <= 11; chapterNumber++) {
    const filename = fs.readdirSync(directory).find(name => name.startsWith(`${String(chapterNumber).padStart(2, "0")}_`) && name.endsWith(".md"));
    assert(filename, `fide A2: missing chapter ${chapterNumber}`);
    const source = fs.readFileSync(path.join(directory, filename), "utf8");
    titles.push(source.match(/^# Topic Unit \d+: (.+)$/m)?.[1]);
    const sets = sections(source, /^## [4-7]\. Speaking practice set \d+: (.+)$/gm);
    assert(sets.length >= 3 && sets.length <= 4, `fide A2 chapter ${chapterNumber}: unexpected set count`);
    sets.forEach((set, setIndex) => {
      const image = `images_no/${String(chapterNumber).padStart(2, "0")}_${String(setIndex + 1).padStart(2, "0")}.jpg`;
      assert(fs.existsSync(path.join(directory, image)), `Missing picture ${image}`);
      assert(pictureAudio[index]?.includes(`set-${setIndex + 1}-`) &&
        roleAudio[index]?.includes(`set-${setIndex + 1}-`), `fide A2 audio mismatch at set ${index + 1}`);
      const pictureTask = taskSection(set.body, "Candidate task type", set.title);
      const examinerPrompt = taskSection(set.body, "Examiner-style prompt", set.title);
      const situation = taskSection(set.body, "Situation", set.title);
      const candidateGoal = taskSection(set.body, "Candidate goal", set.title);
      const examinerCue = taskSection(set.body, "Examiner cue", set.title);
      add(items, chapterNumber - 1, `Set ${setIndex + 1}: ${set.title} · Bild`,
        [{ file: pictureAudio[index], label: "Modellantwort" }], {
          image, mode: "picture",
          context: `Bildauftrag (Buch-Stichpunkte auf Englisch):\n${pictureTask}\nEinstiegsfrage der prüfenden Person:\n${examinerPrompt}`
        });
      add(items, chapterNumber - 1, `Set ${setIndex + 1}: ${set.title} · Rollenspiel`,
        [{ file: roleAudio[index], label: "Modelldialog" }], {
          mode: "roleplay",
          context: `Situation (Buch-Stichpunkte auf Englisch):\n${situation}\nZiele der lernenden Person:\n${candidateGoal}\nEinstieg der prüfenden Person:\n${examinerCue}`
        });
      index++;
    });
  }
  assert(index === 43, `fide A2: expected 43 practice sets, found ${index}`);
  return { titles, items };
}

function fideB1(source, audio) {
  const items = [];
  const topics = sections(source, /^# Thema \d+: (.+)$/gm);
  assert(topics.length === 8, `fide B1: expected 8 topics, found ${topics.length}`);
  const answers = group(audio, /-answer\.mp3$/, 64, "fide B1 answers");
  let index = 0;
  topics.forEach((topic, topicIndex) => {
    const sets = sections(topic.body, /^## Set ([12])$/gm);
    assert(sets.length === 2, `fide B1 topic ${topicIndex + 1}: expected 2 sets`);
    sets.forEach((set, setIndex) => {
      const questions = sections(set.body, /^### Frage ([1-4])$/gm);
      assert(questions.length === 4, `fide B1 topic ${topicIndex + 1}, set ${setIndex + 1}: expected 4 questions`);
      questions.forEach((question, questionIndex) => {
        const text = question.body.match(/^\*\*(.+?)\*\*/m)?.[1];
        const duration = question.body.match(/^\*\*Ziel:\*\* (.+)$/m)?.[1];
        assert(text && answers[index]?.includes(`thema-${topicIndex + 1}-`) &&
          answers[index]?.includes(`set-${setIndex + 1}-`) && duration,
          `fide B1 audio/question mismatch at ${index + 1}`);
        add(items, topicIndex, `Set ${setIndex + 1} · Frage ${questionIndex + 1}`,
          [{ file: answers[index++], label: "Modellantwort" }],
          { mode: "question", context: `Prüferfrage: ${text}\nZielzeit: ${duration}` });
      });
    });
  });
  assert(index === 64, `fide B1: expected 64 questions, found ${index}`);
  return { titles: topics.map(topic => topic.title), items };
}

function practicePrompt(book, item) {
  const bookName = `${book.exam === "oeif" ? "ÖIF" : "fide"} ${book.level.toUpperCase()}`;
  const examPart = book.exam === "oeif" && book.level === "b2"
    ? `\nPrüfungsteil: ${b2PartLabels[item.mode]}. Übe mit mir nur diesen Teil${item.mock ? " des Prüfungssatzes" : ""}.`
    : "";
  const modes = {
    intro: "Bitte mich, frei über die Impulse zu sprechen. Wenn ich fertig bin, stelle bis zu zwei passende Nachfragen einzeln; wähle eigene Beispiele statt der Modellantwort.",
    dialog: "Übernimm die Rolle der prüfenden Person aus der Situation. Beginne mit einer kurzen passenden Begrüßung und führe mit mir ein natürliches Gespräch zu den Aufgabenpunkten; warte nach jeder Reaktion.",
    roleplay: "Übernimm die andere Rolle in der beschriebenen Situation. Beginne mit dem vorgegebenen Einstieg, falls vorhanden. Antworte natürlich auf meine Aussagen, ohne meinen Part vorwegzunehmen.",
    opinion: "Stelle mir die Frage aus dem Auftrag. Lass mich eine kurze Meinung mit Grund und Beispiel geben und stelle danach eine passende Nachfrage.",
    picture: "Ich habe das Bild im Buch oder auf der Übungsseite vor mir; du siehst es nicht. Bitte mich zuerst, es zu beschreiben, dann über eine eigene Erfahrung oder Meinung zu sprechen. Stelle eine passende Nachfrage aus dem Auftrag, ohne Bilddetails zu erfinden.",
    planning: "Übernimm die zweite Rolle in der Planung. Bitte mich um einen ersten Vorschlag und reagiere darauf mit einer kurzen eigenen Idee oder einem Einwand. Einigt euch am Ende auf einen konkreten Plan; gib mir Raum für eigene Vorschläge.",
    presentation: "Bitte mich, ein Thema aus dem Auftrag zu wählen, falls mehrere zur Auswahl stehen. Höre meiner freien Präsentation zu, unterbrich mich nicht und stelle danach eine passende Rückfrage.",
    discussion: "Du hast den vollständigen Lesetext im Prompt. Bitte mich um eine kurze Reaktion auf eine konkrete Textinformation und meinen Standpunkt. Diskutiere dann eine andere Perspektive, reagiere auf meine Argumente und stelle eine echte Nachfrage.",
    question: "Stelle mir die Prüferfrage. Warte, bis ich fertig bin, und stelle eine passende Rückfrage. Unterbrich mich nicht unnötig."
  };
  return `Du bist mein freundlicher Gesprächspartner für das Sprechtraining zum Buch ${bookName} Sprechen. Wir üben „${item.title}“ im Abschnitt „${book.titles[item.section]}“. Sprich mit mir auf Deutsch (${book.level.toUpperCase()}-Niveau${book.exam === "fide" ? ", Schweizer Standarddeutsch" : ""}) und stelle immer nur eine Frage auf einmal.${examPart}

Situation und Aufgabenpunkte aus dem Buch:
${item.context}

${modes[item.mode || "intro"]}

Beginne jetzt mit der Übung. Lass mich möglichst viel selbst sprechen und antworte pro Gesprächsrunde kurz. Gib weder die Modellantwort noch eine vollständige Musterlösung vor und erfinde keine Angaben, die nicht in der Aufgabe oder meinen Antworten stehen. Korrigiere mich erst am Schluss. Wenn ich „Die Übung ist beendet. Bitte gib mir jetzt Feedback“ sage, beende das Gespräch und gib mir kurzes, ermutigendes Feedback zu den Aufgabenpunkten, Verständlichkeit, Grammatik und Wortschatz mit höchstens drei konkreten Verbesserungen. Gib keine offizielle Prüfungsbewertung.`;
}

const definitions = [
  { exam: "oeif", level: "a2", parse: oeifA2, source: "book_no_toc.md", skip: /_fragen\.mp3$/ },
  { exam: "oeif", level: "b1", parse: oeifB1, source: "book.md", skip: file => file.startsWith("001-") || /-fragen\.mp3$/.test(file) },
  { exam: "oeif", level: "b2", parse: oeifB2, source: "book_no_toc.md", skip: /mini-drills|mini-dialog|upgrade-|kontaktreaktion/i },
  { exam: "fide", level: "a2", parse: fideA2, source: null, skip: /-conversation\.mp3$/ },
  { exam: "fide", level: "b1", parse: fideB1, source: "book_no_toc.md", skip: file => file.startsWith("001-") || /-followups\.mp3$/.test(file) }
];

for (const definition of definitions) {
  const { exam, level } = definition;
  const slug = `${exam}-${level}-speaking`;
  const sourceDir = path.join(books, level, `speaking_${exam}_gpt_v1`);
  const audioDir = path.join(sourceDir, "audio/qwen-1.7b/mp3");
  const allAudio = numberedAudio(audioDir);
  const included = allAudio.filter(file => !(typeof definition.skip === "function"
    ? definition.skip(file) : definition.skip.test(file)));
  const parsed = definition.parse(definition.source
    ? fs.readFileSync(path.join(sourceDir, definition.source), "utf8") : sourceDir, included);
  const { titles, items } = parsed;
  const used = items.flatMap(item => item.files.map(audio => audio.file));
  assert(used.length === included.length && new Set(used).size === included.length &&
    included.every(file => used.includes(file)), `${slug}: not every retained MP3 maps to exactly one exercise`);
  const output = path.join(root, "src", slug);
  if (slug === "oeif-b2-speaking") {
    const oldPages = path.join(output, "abschnitt-4");
    if (fs.existsSync(oldPages)) {
      for (let number = 1; number <= 10; number++) {
        const page = path.join(oldPages, `uebung-${String(number).padStart(2, "0")}.md`);
        if (!fs.existsSync(page)) continue;
        const contents = fs.readFileSync(page, "utf8");
        assert(contents.includes(`promptKey: "oeif-b2-speaking-4-${number}"`) &&
          contents.includes(`exerciseTitle: "Kontaktimpuls ${number}:`),
          `Unexpected file in former contact section: ${page}`);
        fs.unlinkSync(page);
      }
      fs.rmdirSync(oldPages);
    }
    const contactAudio = group(allAudio, /-kontaktreaktion\.mp3$/, 10, "ÖIF B2 removed contact audio");
    for (const file of contactAudio) {
      const copied = path.join(output, "audio", file);
      if (fs.existsSync(copied)) fs.unlinkSync(copied);
    }
  }
  fs.mkdirSync(path.join(output, "audio"), { recursive: true });
  const images = new Set(items.map(item => item.image).filter(Boolean));
  for (const image of images) {
    const dest = path.join(output, "images", path.basename(image));
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(path.join(sourceDir, image), dest);
  }
  included.forEach(file => fs.copyFileSync(path.join(audioDir, file), path.join(output, "audio", file)));
  const metadata = items.map((item, index) => {
    const number = items.slice(0, index).filter(other => other.section === item.section).length + 1;
    return { section: item.section, number, title: item.title,
      url: `/${slug}/abschnitt-${item.section + 1}/uebung-${String(number).padStart(2, "0")}/` };
  });
  catalog[slug] = { exam: exam === "oeif" ? "ÖIF" : "fide", level: level.toUpperCase(),
    sections: titles.map((title, index) => title && ({
      title, number: index + 1,
      label: slug === "oeif-b2-speaking" && index === 4 ? "Kapitel 7" : `Abschnitt ${index + 1}`,
      items: metadata.filter(item => item.section === index)
    })).filter(Boolean) };
  items.forEach((item, index) => {
    const page = metadata[index];
    const key = `${slug}-${item.section + 1}-${page.number}`;
    prompts[key] = practicePrompt({ ...definition, titles }, item);
    const data = {
      layout: "speaking-companion-exercise.njk",
      title: `${item.title} · ${catalog[slug].exam} ${level.toUpperCase()} Sprechen`,
      description: `Online-Material zum Buch ${catalog[slug].exam} ${level.toUpperCase()} Sprechen: ${item.title}. Mit Sprechtraining und Modell-Audio.`,
      permalink: page.url,
      lang: exam === "oeif" ? "de-AT" : "de-CH",
      extraStylesheet: "/css/dtz-b1-speaking.css",
      extraScript: "/dtz-b1-cards/assets/practice.js",
      speakingBookKey: slug,
      exerciseTitle: item.title,
      sectionTitle: titles[item.section],
      exerciseNumber: page.number,
      imageUrl: item.image ? `/${slug}/images/${path.basename(item.image)}` : null,
      audios: item.files.map(audio => ({ label: audio.label, url: `/${slug}/audio/${audio.file}` })),
      promptKey: key,
      previousExercise: metadata[index - 1] ?? null,
      nextExercise: metadata[index + 1] ?? null
    };
    const dir = path.join(output, `abschnitt-${item.section + 1}`);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, `uebung-${String(page.number).padStart(2, "0")}.md`),
      `---\n${Object.entries(data).map(([key, value]) => `${key}: ${JSON.stringify(value)}`).join("\n")}\n---\n`);
  });
  fs.writeFileSync(path.join(output, "index.njk"),
    `---\nlayout: "speaking-companion-index.njk"\ntitle: "${catalog[slug].exam} ${level.toUpperCase()} Sprechen · Online-Material zum Buch"\ndescription: "ChatGPT-Sprechtraining und Modell-Audio zu ${items.length} Übungen aus dem Buch ${catalog[slug].exam} ${level.toUpperCase()} Sprechen."\npermalink: "/${slug}/"\nlang: "${exam === "oeif" ? "de-AT" : "de-CH"}"\nextraStylesheet: "/css/dtz-b1-speaking.css"\nspeakingBookKey: "${slug}"\n---\n`);
  console.log(`${slug}: ${items.length} pages, ${included.length} MP3s, ${images.size} images`);
}
fs.writeFileSync(path.join(root, "src/_data/speakingCompanionCatalog.json"), JSON.stringify(catalog, null, 2) + "\n");
fs.writeFileSync(path.join(root, "src/_data/speakingCompanionPrompts.json"), JSON.stringify(prompts, null, 2) + "\n");
