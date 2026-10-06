const assert = require("node:assert/strict");
const { test } = require("node:test");
const fs = require("node:fs");
const path = require("node:path");
const catalog = require("../src/_data/speakingCompanionCatalog.json");
const prompts = require("../src/_data/speakingCompanionPrompts.json");

const expected = {
  "oeif-a2-speaking": [5, 10, 10, 13],
  "oeif-b1-speaking": [5, 31, 36],
  "oeif-b2-speaking": [10, 10, 11, 27],
  "fide-a2-speaking": [8, 8, 8, 8, 6, 8, 8, 8, 8, 8, 8],
  "fide-b1-speaking": [8, 8, 8, 8, 8, 8, 8, 8]
};

test("every speaking-book exercise has a context-rich, book-specific prompt", () => {
  let count = 0;
  for (const [bookKey, sections] of Object.entries(expected)) {
    const book = catalog[bookKey];
    assert.deepEqual(book.sections.map(section => section.items.length), sections);
    for (const section of book.sections) {
      for (const item of section.items) {
        const key = `${bookKey}-${section.number}-${item.number}`;
        const prompt = prompts[key];
        assert.ok(prompt, `Missing ${key}`);
        const context = prompt.match(/Situation und Aufgabenpunkte aus dem Buch:\n([\s\S]+?)\n\n(?:Bitte|Übernimm|Ich habe|Stelle|Wähle|Höre|Beginne)/)?.[1];
        assert.ok(context && context.length > 75, `${key}: missing task context`);
        assert.ok(prompt.includes("Gib weder die Modellantwort"), `${key}: missing model-answer guard`);
        assert.ok(prompt.includes(item.title), `${key}: wrong exercise title`);
        count++;
      }
    }
  }
  assert.equal(Object.keys(prompts).length, count);
  assert.equal(count, 318);
});

test("B2 companion excludes unscored contact exercises and copied audio", () => {
  const book = catalog["oeif-b2-speaking"];
  assert.deepEqual(book.sections.map(section => section.number), [1, 2, 3, 5]);
  assert.ok(!book.sections.some(section => /Kontakt/i.test(section.title)));
  assert.ok(!Object.keys(prompts).some(key => key.startsWith("oeif-b2-speaking-4-")));
  assert.ok(!fs.existsSync(path.resolve(__dirname, "../src/oeif-b2-speaking/abschnitt-4")));
  const audioDir = path.resolve(__dirname, "../src/oeif-b2-speaking/audio");
  const audio = fs.readdirSync(audioDir);
  assert.equal(audio.length, 58);
  assert.ok(!audio.some(file => /kontaktreaktion/i.test(file)));
  assert.equal(book.sections.at(-1).items[0].url, "/oeif-b2-speaking/abschnitt-5/uebung-01/");
});

test("every B2 prompt names the correct exam part, including mock simulations", () => {
  const labels = [
    "Teil 1 – Präsentation",
    "Teil 2 – Diskussion",
    "Teil 3 – Problemlösung (gemeinsam planen)"
  ];
  for (const section of catalog["oeif-b2-speaking"].sections) {
    for (const item of section.items) {
      const part = section.number === 5 ? (item.number - 1) % 3 : section.number - 1;
      const label = labels[part];
      const prompt = prompts[`oeif-b2-speaking-${section.number}-${item.number}`];
      assert.ok(prompt.includes(`Prüfungsteil: ${label}.`), `${item.url}: missing exam part`);
      if (section.number === 5) {
        assert.ok(item.title.endsWith(label), `${item.url}: unclear mock-exam page title`);
        assert.ok(prompt.includes("nur diesen Teil des Prüfungssatzes"), `${item.url}: unclear practice scope`);
      }
    }
  }
});

test("task-specific details are available without copying model answers", () => {
  const samples = {
    "oeif-a2-speaking-1-1": ["Impulswörter:", "Heimat", "Mögliche Nachfragen:"],
    "oeif-a2-speaking-2-1": ["Sie sind krank und brauchen schnell einen Termin", "was man mitbringen muss"],
    "oeif-a2-speaking-4-1": ["Bildauftrag:", "Was essen oder trinken die Personen?"],
    "oeif-b1-speaking-1-1": ["Sprechimpulse aus den Karten", "Sprachen und Kommunikation"],
    "oeif-b1-speaking-2-1": ["Bildauftrag und eigene Erfahrung", "Was könnten die Personen essen"],
    "oeif-b1-speaking-3-1": ["Person A:", "Tag und Uhrzeit"],
    "oeif-b2-speaking-1-1": ["Thema", "Autor/in", "Mögliche Rückfragen:"],
    "oeif-b2-speaking-2-1": ["Vollständiger Impulstext aus dem Buch:", "Sommerzeit", "Diskussionsauftrag:"],
    "oeif-b2-speaking-3-2": ["32 Personen", "55 Euro", "barrierefreie Verpflegung"],
    "oeif-b2-speaking-5-1": ["Wählen Sie eines dieser Themen", "Flexible Arbeitszeit"],
    "oeif-b2-speaking-5-2": ["Vollständiger Lesetext aus dem Buch", "berufliche Weiterbildung überwiegend in die Arbeitszeit"],
    "oeif-b2-speaking-5-3": ["Lerntag für 18 Beschäftigte", "1.200 Euro"],
    "fide-a2-speaking-1-1": ["who is in the picture", "Was sehen Sie auf diesem Bild?"],
    "fide-a2-speaking-1-2": ["The learner does not understand", "Ich bin Ihre Kollegin."],
    "fide-b1-speaking-1-1": ["Erzählen Sie von einer Wohnsituation", "60-90 Sekunden"]
  };
  for (const [key, details] of Object.entries(samples)) {
    for (const detail of details) assert.ok(prompts[key].includes(detail), `${key}: missing ${detail}`);
  }
  for (const prompt of Object.values(prompts)) {
    for (const modelExcerpt of [
      "Ich heiße Samira Hassan. Ich komme aus Syrien",
      "Als ich in die Schweiz gezogen bin, musste ich ziemlich schnell",
      "Ich möchte kurz ein Buch vorstellen, das mich sehr beeindruckt hat"
    ]) assert.ok(!prompt.includes(modelExcerpt), `Copied model answer: ${modelExcerpt}`);
  }
});

test("all B2 discussion prompts include their complete book reading passages", () => {
  const book = fs.readFileSync(path.resolve(__dirname,
    "../../german_exam_books/b2/speaking_oeif_gpt_v1/book_no_toc.md"), "utf8");
  const discussionChapter = book.split(/^# Kapitel 2: Diskussion\s*$/m)[1]
    .split(/^# Kapitel 3:/m)[0];
  const discussionHeadings = [...discussionChapter.matchAll(/^## (.+)$/gm)];
  const standalone = discussionHeadings.map((heading, index) =>
    discussionChapter.slice(heading.index + heading[0].length, discussionHeadings[index + 1]?.index))
    .filter(body => body.includes("### Impulstext"));
  assert.equal(standalone.length, 10);
  standalone.forEach((body, index) => {
    const passage = body.match(/^### Impulstext\s*\n([\s\S]*?)(?=^### Gestufter Diskussionsauftrag)/m)?.[1].trim();
    assert.ok(passage?.length > 400, `Incomplete standalone passage ${index + 1}`);
    assert.ok(prompts[`oeif-b2-speaking-2-${index + 1}`].includes(passage),
      `Missing full standalone passage ${index + 1}`);
  });

  const mockChapter = book.split(/^# Kapitel 7: /m)[1].split(/^# Kapitel 8:/m)[0];
  const mockHeadings = [...mockChapter.matchAll(/^## Prüfungssatz \d+: (.+)$/gm)];
  const mocks = mockHeadings.map((heading, index) =>
    mockChapter.slice(heading.index + heading[0].length, mockHeadings[index + 1]?.index));
  assert.equal(mocks.length, 9);
  mocks.forEach((body, index) => {
    const passage = body.match(/^\*\*Lesetext: [^*\n]+\*\*\s*\n([\s\S]*?)(?=^\*\*Stufe 1 –)/m)?.[1].trim();
    assert.ok(passage?.length > 400, `Incomplete mock passage ${index + 1}`);
    assert.ok(prompts[`oeif-b2-speaking-5-${index * 3 + 2}`].includes(passage),
      `Missing full mock passage ${index + 1}`);
  });
});
