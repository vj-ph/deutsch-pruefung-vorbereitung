const assert = require("node:assert/strict");
const { test } = require("node:test");
const fs = require("node:fs");
const path = require("node:path");

const book = fs.readFileSync(path.resolve(__dirname,
  "../../german_exam_books/b2/writing_oeif_gpt_v2/book_no_toc.md"), "utf8");
const catalog = require("../src/_data/oeifWritingCatalog.json");
const prompts = require("../src/_data/oeifWritingPrompts.json");
const output = path.resolve(__dirname, "../src/oeif-b2-writing-v2");

function checkTask(key, title, body, label, mock) {
  const prompt = prompts[`b2v2-${key}`];
  const situation = mock
    ? body.match(/^\*\*Situation:\*\* (.+)$/m)?.[1]
    : body.match(/^### Situation\s*\n([\s\S]*?)(?=^### )/m)?.[1].trim();
  const task = mock
    ? body.match(/^\*\*Aufgabe:\*\* (.+)$/m)?.[1]
    : body.match(/^### Aufgabe\s*\n([\s\S]*?)(?=^### |^\\newpage)/m)?.[1].trim();
  assert.ok(situation && task?.includes("Schreiben Sie einen Aufsatz"), `Incomplete book task ${key}`);
  const aspects = [...(mock ? body : task).matchAll(/^- (.+)$/gm)].map(match => match[1]);
  assert.equal(aspects.length, 4, `Wrong number of aspects for ${key}`);
  assert.ok(prompt?.includes(`${label}: ${title}`), `Missing book title in ${key}`);
  assert.ok(prompt.includes(`Situation: ${situation}`), `Missing book situation in ${key}`);
  aspects.forEach((aspect, index) => {
    assert.ok(prompt.includes(`${index + 1}. ${aspect}`), `Missing aspect ${index + 1} in ${key}`);
  });
  assert.ok(prompt.includes("40 Minuten Schreibzeit und mindestens 200 Wörtern"), key);
  assert.ok(prompt.includes("mindestens drei"), key);
  assert.ok(prompt.includes("Schreibe keinen vollständigen Musteraufsatz"), key);
  assert.equal(prompt.includes("210–240 Wörter"), !mock, `Wrong training target for ${key}`);
  const filename = key.startsWith("essay-")
    ? `thema-${String(Number(key.slice(6))).padStart(2, "0")}` : key;
  const page = fs.readFileSync(path.join(output, `${filename}.md`), "utf8");
  assert.ok(page.includes(`promptKey: "b2v2-${key}"`), `Wrong prompt key in ${key}`);
  assert.ok(page.includes(`permalink: "/oeif-b2-writing-v2/`), `Wrong permalink in ${key}`);
}

test("v2 essays contain every revised situation and task aspect", () => {
  const chapter = book.split("# Kapitel 3: Übungsaufsätze")[1]
    .split("# Kapitel 4:")[0];
  const headings = [...chapter.matchAll(/^## Thema (\d+): (.+)$/gm)];
  assert.equal(headings.length, 16);
  headings.forEach((heading, index) => {
    assert.equal(Number(heading[1]), index + 1);
    checkTask(`essay-${index + 1}`, heading[2],
      chapter.slice(heading.index + heading[0].length, headings[index + 1]?.index),
      `Kapitel 3, Thema ${index + 1}`, false);
  });
});

test("v2 mock prompts use the book's six A/B choices", () => {
  const chapter = book.split("# Kapitel 5: Probeprüfungen")[1]
    .split("# Lösungsvorschläge zu den Probeprüfungen")[0];
  const exams = [...chapter.matchAll(/^## Probeprüfung (\d+)\s*$/gm)];
  assert.equal(exams.length, 3);
  exams.forEach((exam, index) => {
    assert.equal(Number(exam[1]), index + 1);
    const body = chapter.slice(exam.index + exam[0].length, exams[index + 1]?.index);
    const choices = [...body.matchAll(/^### Thema ([AB]): (.+)$/gm)];
    assert.deepEqual(choices.map(choice => choice[1]), ["A", "B"]);
    choices.forEach((choice, choiceIndex) => {
      checkTask(`mock-${index + 1}-${choice[1].toLowerCase()}`, choice[2],
        body.slice(choice.index + choice[0].length, choices[choiceIndex + 1]?.index),
        `Probeprüfung ${index + 1}, Thema ${choice[1]}`, true);
    });
  });
});

test("v2 has 22 separate, linked pages and leaves the original catalog intact", () => {
  const sections = catalog.b2v2.sections;
  assert.deepEqual(sections.map(section => [section.label, section.items.length]),
    [["Kapitel 3", 16], ["Kapitel 5", 6]]);
  assert.equal(catalog.b2.sections.length, 2);
  assert.equal(catalog.b2.sections.flatMap(section => section.items).length, 22);
  const items = sections.flatMap(section => section.items);
  assert.equal(new Set(items.map(item => item.url)).size, 22);
  for (const [index, item] of items.entries()) {
    const basename = item.url.split("/").filter(Boolean).at(-1);
    const page = fs.readFileSync(path.join(output, `${basename}.md`), "utf8");
    assert.ok(page.includes(`permalink: "${item.url}"`));
    assert.ok(page.includes(`previousExercise: ${JSON.stringify(items[index - 1]?.url ?? null)}`));
    assert.ok(page.includes(`nextExercise: ${JSON.stringify(items[index + 1]?.url ?? null)}`));
  }
  assert.equal(fs.readdirSync(output).length, 23);
});
