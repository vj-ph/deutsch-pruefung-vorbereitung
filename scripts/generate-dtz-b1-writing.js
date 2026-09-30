const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const bookPath = path.resolve(root, "../german_exam_books/b1/writing_dtz/book_no_toc.md");
const source = fs.readFileSync(bookPath, "utf8");
const output = path.join(root, "src/dtz-b1-writing");
const headings = [...source.matchAll(/^## Einheit (\d+): (.+?) \{#einheit-\d+\}\s*$/gm)];
const chapterNames = [
  "Persönliche Nachrichten und Kursalltag",
  "Formelle Nachrichten in Alltag und Integration",
  "Beschwerden, Klärungen und Entschuldigungen",
  "Transfertraining"
];
const chapterFor = number => number <= 24 ? Math.ceil(number / 8) : 4;
const unitUrl = number => `/dtz-b1-writing/einheit-${String(number).padStart(2, "0")}/`;

if (headings.length !== 30) throw new Error(`Expected 30 writing units, found ${headings.length}`);

const units = headings.map((heading, index) => {
  const number = Number(heading[1]);
  if (number !== index + 1) throw new Error(`Unexpected unit number ${number}`);
  const title = heading[2];
  const body = source.slice(heading.index + heading[0].length,
    headings[index + 1]?.index ?? source.indexOf("# Häufige Fehler im DTZ-Schreiben", heading.index));

  function section(name) {
    const match = body.match(new RegExp(`^### ${name}\\s*\\n([\\s\\S]*?)(?=^### |^\\\\newpage|^# )`, "m"));
    if (!match) throw new Error(`Missing ${name} in unit ${number}`);
    return match[1].trim();
  }

  const situation = section("Situation");
  const assignment = section("Schreibauftrag");
  const points = section("Was Sie schreiben müssen").split("\n").map(line => {
    if (!line.startsWith("- ")) throw new Error(`Unexpected content point format in unit ${number}: ${line}`);
    return line.slice(2);
  });
  if (points.length !== 4) throw new Error(`Expected four content points in unit ${number}`);

  const chapter = chapterFor(number);
  const prompt = `Du bist mein freundlicher Schreibcoach für das DTZ-B1-Übungsbuch. Mein eigener Entwurf steht in derselben Nachricht unmittelbar vor dieser Anweisung. Beurteile nur diesen Entwurf, nicht einen Beispieltext. Falls kein Entwurf vorhanden ist, bitte mich zuerst darum.

Einheit ${number}: ${title}
${chapter === 4 ? "Dies ist Transfertraining und keine typische DTZ-Kernaufgabe." : "Dies ist Training für die DTZ-Schreibaufgabe."}

Situation: ${situation}
Schreibauftrag: ${assignment}
Die vier Inhaltspunkte aus dem Buch:
${points.map((point, i) => `${i + 1}. ${point}`).join("\n")}

Gib mir kurzes, konkretes Feedback auf Deutsch (B1-Niveau):
1. Prüfe jeden der vier Inhaltspunkte einzeln: vorhanden, teilweise oder fehlt. Nenne kurz, was ich ergänzen sollte; erfinde keine Fakten.
2. Beurteile Ton und Anrede passend zu Empfänger und Textsorte, Klarheit und Aufbau, Grammatik sowie Wortschatz. Nenne zuerst, was gut gelungen ist, und dann höchstens drei wichtige Verbesserungen mit kurzen Beispielen aus meinem Text.
3. Bitte mich anschließend, meinen eigenen Entwurf anhand des Feedbacks selbst zu überarbeiten und die neue Version zu schicken. Schreibe keine vollständige Musterlösung und ersetze meinen Text nicht durch eine fertig polierte Fassung.

Wenn ich eine neue Version schicke, vergleiche sie knapp mit meinem ersten Entwurf und prüfe die vier Punkte noch einmal. Du bist ein Übungspartner und kein offizieller DTZ-Prüfer.`;
  return { number, title, chapter, url: unitUrl(number), prompt };
});

fs.mkdirSync(output, { recursive: true });
fs.writeFileSync(path.join(root, "src/_data/dtzB1WritingUnits.json"),
  JSON.stringify(units.map(({ number, title, chapter, url }) => ({ number, title, chapter, url })), null, 2) + "\n");
fs.writeFileSync(path.join(root, "src/_data/dtzB1WritingPrompts.json"),
  JSON.stringify(Object.fromEntries(units.map(({ number, prompt }) => [number, prompt])), null, 2) + "\n");

for (const [index, unit] of units.entries()) {
  const { number, title, chapter } = unit;
  const fields = {
    layout: "dtz-writing-exercise.njk",
    title: `Einheit ${number}: ${title} · DTZ B1 Schreiben`,
    description: `Schreibtraining zu Einheit ${number} aus dem Buch DTZ B1 Schreiben: ${title}. Eigenen Text verfassen und mit ChatGPT gezielt überarbeiten.`,
    permalink: unit.url,
    lang: "de-DE",
    extraStylesheet: "/css/dtz-b1-writing.css",
    extraScript: "/dtz-b1-cards/assets/practice.js",
    unitNumber: number,
    unitTitle: title,
    chapterNumber: chapter,
    chapterTitle: chapterNames[chapter - 1],
    previousUnit: index ? units[index - 1].url : null,
    nextUnit: units[index + 1]?.url ?? null
  };
  fs.writeFileSync(path.join(output, `einheit-${String(number).padStart(2, "0")}.md`),
    `---\n${Object.entries(fields).map(([key, value]) => `${key}: ${JSON.stringify(value)}`).join("\n")}\n---\n`);
}

console.log(`Generated ${units.length} DTZ B1 writing units from ${bookPath}`);
