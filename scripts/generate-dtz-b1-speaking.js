const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const bookPath = path.resolve(root, "../german_exam_books/b1/speaking_dtz/book_no_toc.md");
const cardsPath = path.join(root, "src/dtz-b1-cards");
const outputPath = path.join(root, "src/dtz-b1-speaking");
const book = fs.readFileSync(bookPath, "utf8");
const headings = [...book.matchAll(/^## Übung (\d+): (.+?) \{#teil-(\d)-[^}]+\}\s*$/gm)];
const exercises = [];

for (let index = 0; index < headings.length; index++) {
  const heading = headings[index];
  const number = Number(heading[1]);
  const title = heading[2];
  const part = Number(heading[3]);
  const end = headings[index + 1]?.index ?? book.length;
  const content = book.slice(heading.index + heading[0].length, end)
    .split(/^## Kurz-Checkliste|^# (?:Teil |Anhang )/m)[0]
    .replace(/\\newpage\s*$/g, "")
    .trim();
  exercises.push({ part, number, title, content });
}

if (exercises.length !== 60 || [1, 2, 3].some(part => exercises.filter(e => e.part === part).length !== 20)) {
  throw new Error("Expected 20 book exercises in each of the three parts");
}

const cards = fs.readdirSync(cardsPath)
  .filter(name => /^\d{3}$/.test(name))
  .sort()
  .map(name => {
    const html = fs.readFileSync(path.join(cardsPath, name, "index.html"), "utf8");
    const part = Number(html.match(/<body class="part(\d)"/)?.[1]);
    const title = html.match(/<h1>(.*?)<\/h1>/)?.[1];
    const audio = html.match(/<source src="\.\.\/assets\/audio\/([^"]+\.mp3)"/)?.[1];
    const prompt = html.match(/<textarea class="practice-prompt"[^>]*>([\s\S]*?)<\/textarea>/)?.[1];
    if (!part || !title || !audio || !prompt || !fs.existsSync(path.join(cardsPath, "assets/audio", audio))) {
      throw new Error(`Missing card metadata, prompt or audio for ${name}`);
    }
    const exercise = exercises.find(e => e.part === part && e.title === title);
    if (!exercise) throw new Error(`No book exercise matches card ${name}: ${title}`);
    const cardHeading = `DTZ-Sprechtraining, Karte ${name}: ${title}`;
    if (!prompt.includes(cardHeading)) throw new Error(`Unexpected practice prompt for card ${name}`);
    const bookPrompt = prompt.replace(cardHeading,
      `DTZ-Sprechtraining zum Buch, Teil ${part}, Übung ${exercise.number}: ${title}`)
      .replace("Ich habe das zugehörige Bild auf meiner Karte vor mir.",
        "Ich habe das zugehörige Bild in meinem Buch vor mir.");
    return { ...exercise, card: name, audio, prompt: bookPrompt };
  })
  .sort((a, b) => a.part - b.part || a.number - b.number);

if (cards.length !== 52 || new Set(cards.map(e => `${e.part}-${e.number}`)).size !== 52) {
  throw new Error("Expected 52 distinct matched card exercises");
}

const url = exercise => `/dtz-b1-speaking/teil-${exercise.part}/uebung-${String(exercise.number).padStart(2, "0")}/`;
const metadata = cards.map(({ part, number, title }) => ({ part, number, title, url: url({ part, number }) }));
fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(path.join(root, "src/_data/dtzB1SpeakingExercises.json"), JSON.stringify(metadata, null, 2) + "\n");
fs.writeFileSync(path.join(root, "src/_data/dtzB1SpeakingPrompts.json"),
  JSON.stringify(Object.fromEntries(cards.map(({ card, prompt }) => [card, prompt])), null, 2) + "\n");

for (const [index, exercise] of cards.entries()) {
  const { part, number, title, card, audio } = exercise;
  const image = part === 2 ? `/dtz-b1-cards/assets/images/teil2-${String(number).padStart(2, "0")}.jpg` : "";
  if (image && !fs.existsSync(path.join(root, "src", image.slice(1)))) {
    throw new Error(`Missing image for Teil 2, Übung ${number}`);
  }
  const content = exercise.content.replace(/^!\[\]\(images\/\d+\.jpg\)/m,
    `![Bildimpuls: ${title}](${image})`);
  const frontMatter = {
    layout: "dtz-book-exercise.njk",
    title: `Teil ${part}, Übung ${number}: ${title} · DTZ B1 Sprechen`,
    description: `Online-Übung zum Buch DTZ B1 Sprechen: ${title}. Mit Modell-Audio, Aufgaben und Schnelltraining.`,
    permalink: url(exercise),
    lang: "de-DE",
    extraStylesheet: "/css/dtz-b1-speaking.css",
    extraScript: "/dtz-b1-cards/assets/practice.js",
    part,
    exerciseNumber: number,
    exerciseTitle: title,
    cardNumber: card,
    audioUrl: `/dtz-b1-cards/assets/audio/${audio}`,
    previousExercise: index ? metadata[index - 1] : null,
    nextExercise: metadata[index + 1] || null
  };
  const directory = path.join(outputPath, `teil-${part}`);
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(path.join(directory, `uebung-${String(number).padStart(2, "0")}.md`),
    `---\n${Object.entries(frontMatter).map(([key, value]) =>
      `${key}: ${JSON.stringify(value)}`).join("\n")}\n---\n\n${content}\n`);
}

console.log(`Generated ${cards.length} book exercise pages from ${bookPath}`);
