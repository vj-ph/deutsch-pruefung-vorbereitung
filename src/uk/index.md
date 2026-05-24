---
layout: base
templateEngineOverride: njk
title: "Deutsch Kompass DTZ, ÖIF і fide"
description: "Готуйтеся до іспитів DTZ B1 у Німеччині, ÖIF B1 в Австрії та fide A2 у Швейцарії за допомогою книжок для говоріння й письма та безкоштовних зразків."
permalink: /uk/
lang: uk
dir: ltr
currentLang: uk
homeUrl: /uk/
pageExamOrder:
  - dtz
  - oeif
  - fide
pageBookOrder:
  - dtz-speaking
  - dtz-writing
  - oeif-speaking
  - oeif-writing
  - fide-speaking
  - fide-writing
languageSwitcherLabel: "Мова"
languageLinks:
  - code: en
    label: English
    url: /
  - code: ar
    label: العربية
    url: /ar/
  - code: uk
    label: Українська
    url: /uk/
  - code: tr
    label: Türkçe
    url: /tr/
  - code: sr
    label: BCS / Srpski
    url: /sr/
  - code: ru
    label: Русский
    url: /ru/
ui:
  homeLabel: Головна
  footerIntro: "Книжки для підготовки з говоріння та письма до іспитів DTZ B1 у Німеччині, ÖIF B1 в Австрії та fide A2 у Швейцарії."
  examSectionsLabel: Розділи іспиту
  booksLabel: Книги
  sampleLabel: Безкоштовний зразок
  fullBookLabel: Повна книга
  rightsReserved: Усі права захищені.
---

{% from "cta-helpers.njk" import ctaLink, ctaTrackingAttrs with context %}
{% set homeExamOrder = pageExamOrder or site.examOrder %}
{% set purchaseFlow = {
  eyebrow: "Перед тим як натиснути",
  title: "Що буде після натискання?",
  intro: "Кожен зразок на цьому сайті безкоштовний. Книжки DTZ і ÖIF доступні як PDF зі знижкою на Gumroad, а також на Amazon. Книжки fide A2 зараз доступні на Amazon у форматах Kindle і м'якої обкладинки.",
  steps: [
    {
      title: "Відкрийте зразок або сторінку магазину",
      text: "Кнопка зразка відкриває безкоштовний PDF прямо з цього сайту. Кнопки покупки відкривають вибраний магазин у новій вкладці."
    },
    {
      title: "Спочатку перегляньте безкоштовний зразок",
      text: "Відкрийте безкоштовний PDF прямо з цього сайту й вирішіть, чи підходить вам книжка."
    },
    {
      title: "Купуйте у потрібному форматі",
      text: "Коли будете готові, оберіть магазин за назвою: Gumroad для PDF зі знижкою у книжок DTZ та ÖIF, або Amazon для Kindle і м'якої обкладинки, включно з книжками fide A2."
    }
  ]
} %}
{% set productUi = {
  fullBook: "Повна книга",
  freeSample: "Безкоштовний зразок",
  format: "Формат",
  pages: "Сторінки",
  free: "Безкоштовно",
  discountPrefix: "Використайте код знижки ",
  discountSuffix: " для знижки 20% на Gumroad.",
  clickNote: "Кнопка зразка відкриває PDF прямо з цього сайту, а кнопки покупки відкривають вибраний магазин у новій вкладці."
} %}
{% set heroButtonLabels = {
  dtzShort: "Переглянути книги DTZ B1",
  oeifShort: "Переглянути книги ÖIF B1",
  fideShort: "Переглянути книги fide A2"
} %}
{% set reviewsSection = {
  eyebrow: "Відгуки про книжки",
  title: "Що учні кажуть про ці книжки?",
  intro: "Це короткі відгуки від учнів, які використовували ці книжки для практичної підготовки до іспиту з німецької.",
  items: [
    {
      quote: "Щоденне спілкування для мене не проблема, і я добре спілкуюся з колегами у сфері логістики. Однак іспит DTZ охоплює теми, з якими я рідко стикаюся у повсякденному житті. Ці книжки дали мені велику різноманітність завдань із говоріння та письма разом із прикладами відповідей, і це було надзвичайно важливо для моєї підготовки до B1 та допомогло мені успішно скласти іспит!",
      author: "Ahmed"
    },
    {
      quote: "Тоді як офіційна книжка для підготовки до DTZ містить лише кілька пробних тестів, ця книжка з говоріння DTZ B1 пропонує 60 різних вправ! Це набагато повніший ресурс для кожного, хто серйозно налаштований скласти іспит.",
      author: "Mehmet"
    },
    {
      quote: "Я двічі не склав іспит ÖIF B1 через частини з говоріння та письма, хоча читання давалося мені доволі легко. Ці книжки стали справжнім порятунком для моєї третьої спроби: вони ґрунтовно охопили всі теми іспиту й нарешті допомогли мені скласти його.",
      author: "Oleksandr"
    }
  ]
} %}
{% set localizedExamContent = {
  dtz: {
    booksHeading: "Книги DTZ B1 і безкоштовні зразки",
    booksIntro: "Почніть із тієї навички, яка зараз найслабша, або використовуйте обидві книги, якщо хочете повніший план підготовки до говоріння й письма.",
    comparisonEyebrow: "DTZ B1",
    comparisonTitle: "Практичний шлях B1 для Німеччини",
    comparisonIntro: "DTZ B1 зосереджується на завданнях із говоріння та письма, які часто зустрічаються в німецькому міграційному та інтеграційному контексті.",
    comparisonFacts: [
      { title: "Країна", text: "Німеччина" },
      { title: "Рівень", text: "B1" },
      { title: "Фокус", text: "Самопрезентація, говоріння за картинкою, планування та короткі практичні повідомлення" }
    ],
    comparisonLink: "Переглянути книги DTZ B1",
    overviewTitle: "Огляд іспиту DTZ B1",
    overviewDescription: "Deutsch-Test für Zuwanderer (DTZ) — це практичний іспит з німецької мови в Німеччині. Цей розділ пояснює формат і допомагає вибрати правильну книгу DTZ B1 для говоріння або письма.",
    overviewFacts: [
      { title: "Формат говоріння", text: "Усна частина DTZ містить 3 типи завдань: коротко представитися, говорити про зображення та власний досвід, а також планувати щось разом із партнером." },
      { title: "Формат письма", text: "Письмове завдання DTZ зазвичай це коротке практичне повідомлення приблизно на 80-100 слів із чотирма змістовими пунктами." },
      { title: "Чому підтвердження рівня B1 важливе", text: "Сертифікат DTZ на рівні B1 може використовуватися як підтвердження знання німецької мови для таких заяв, як постійне проживання в Німеччині або натуралізація. Але остаточне рішення завжди залежить і від інших юридичних вимог у вашій ситуації." },
      { title: "Для кого ці книги", text: "Вони підходять для самостійного навчання, занять із викладачем і навчальних груп, яким потрібна практична підготовка саме під формат іспиту." }
    ]
  },
  oeif: {
    booksHeading: "Книги ÖIF B1 і безкоштовні зразки",
    booksIntro: "Ці книги допомагають відпрацьовувати поширені завдання з говоріння та письма в австрійському форматі, а перед покупкою можна спробувати безкоштовний зразок.",
    comparisonEyebrow: "ÖIF B1",
    comparisonTitle: "Інтеграційний шлях для Австрії",
    comparisonIntro: "ÖIF B1 зосереджується на завданнях із говоріння та письма, які використовуються в офіційному інтеграційному контексті Австрії.",
    comparisonFacts: [
      { title: "Країна", text: "Австрія" },
      { title: "Рівень", text: "B1" },
      { title: "Фокус", text: "Австрійські теми, планування, опис картинки та кероване письмо" }
    ],
    comparisonLink: "Переглянути книги ÖIF B1",
    overviewTitle: "Огляд іспиту ÖIF B1",
    overviewDescription: "ÖIF B1 Integrationprüfung — офіційний інтеграційний іспит в Австрії. Цей розділ пояснює іспит і допомагає вибрати правильну книгу ÖIF B1 для говоріння або письма.",
    overviewFacts: [
      { title: "Мета іспиту", text: "Цей іспит є частиною інтеграційної системи в Австрії й використовується як офіційне підтвердження мови та інтеграції." },
      { title: "Чому може допомогти успіх", text: "Успішний результат може бути важливим для таких вимог, як Modul 2 у межах інтеграційної угоди, а в деяких випадках і для ПМП або громадянства." },
      { title: "Що підтверджує сертифікат", text: "Сертифікат показує, що ви досягли рівня німецької B1 в офіційно визнаному форматі ÖIF." },
      { title: "Важлива примітка", text: "Юридичні вимоги залежать від вашого статусу проживання та особистої ситуації, тому завжди перевіряйте актуальні правила ÖIF і офіційних органів Австрії." }
    ]
  },
  fide: {
    booksHeading: "Книги fide A2 і безкоштовні зразки",
    booksIntro: "Ці дві книги зосереджені на завданнях з говоріння та письма для іспиту fide A2 у Швейцарії. PDF-зразок поки англійською, але він використовується для всіх мов.",
    comparisonEyebrow: "fide A2",
    comparisonTitle: "Підготовка A2 для Швейцарії",
    comparisonIntro: "fide A2 зосереджується на комунікативних завданнях із повсякденного життя у Швейцарії.",
    comparisonFacts: [
      { title: "Країна", text: "Швейцарія" },
      { title: "Рівень", text: "A2" },
      { title: "Фокус", text: "Опис картинки, рольова гра, розмова, формуляр і короткий e-mail" }
    ],
    comparisonLink: "Переглянути книги fide A2",
    overviewTitle: "Огляд іспиту fide A2",
    overviewDescription: "Іспит fide перевіряє вміння спілкуватися у повсякденних ситуаціях у Швейцарії. Цей розділ коротко показує, до яких типів завдань готують книги fide A2 для говоріння й письма.",
    overviewFacts: [
      { title: "Формат говоріння", text: "Усна частина включає опис картинки, рольову гру та коротку розмову. Теми пов'язані з повсякденним життям у Швейцарії: робота, житло, здоров'я, школа, транспорт і установи." },
      { title: "Формат письма", text: "Письмова частина особливо зосереджується на завданнях Formular + Bemerkungen і Kurze E-Mail." },
      { title: "Рівень і використання", text: "Ці книги підходять учням, які готуються на рівні fide A2 і хочуть більш цільову підготовку до повсякденних ситуацій у Швейцарії." },
      { title: "Що дають книги", text: "Книга з говоріння містить 43 набори, а книга з письма — 22 набори, тож після зразка можна перейти до регулярної практики за повною книгою." }
    ]
  }
} %}
{% set localizedBookContent = {
  "dtz-speaking": {
    panelLabel: "Книга з говоріння",
    title: site.books["dtz-speaking"].localizedTitles[currentLang] or site.books["dtz-speaking"].title,
    summary: "Книга для говоріння DTZ B1 містить 60 вправ для самопрезентації, опису картинки та власного досвіду, а також спільного планування з партнером, із модельними відповідями, корисними фразами, follow-up questions і словником німецька-англійська.",
    features: [
      "60 вправ для всіх 3 частин усного іспиту",
      "Модельні відповіді або діалоги з можливими питаннями екзаменатора",
      "Корисні фрази, словник німецька-англійська та короткі speaking drills"
    ],
    sampleTitle: "Безкоштовний зразок із 3 завданнями",
    sampleDescription: "Допомагає побачити формат завдань і тип підтримки, який є у повній книзі.",
    ctaLabel: "Отримати зразок DTZ Speaking"
  },
  "dtz-writing": {
    panelLabel: "Книга з письма",
    title: site.books["dtz-writing"].localizedTitles[currentLang] or site.books["dtz-writing"].title,
    summary: "Книга для письма DTZ B1 зосереджена на головному письмовому завданні іспиту: коротких повідомленнях із чотирма змістовими пунктами. Вона містить 30 модулів і 5 повних mock-завдань.",
    features: [
      "30 практичних модулів для основних типів текстів DTZ",
      "Модельні тексти, корисні фрази, типові помилки та швидкі checklists",
      "5 повних письмових mock-завдань із модельними відповідями"
    ],
    sampleTitle: "Безкоштовний зразок із 4 завданнями",
    sampleDescription: "Показує тип письмових завдань, структуру та підтримку, що є у повній книзі.",
    ctaLabel: "Отримати зразок DTZ Writing"
  },
  "oeif-speaking": {
    panelLabel: "Книга з говоріння",
    title: site.books["oeif-speaking"].localizedTitles[currentLang] or site.books["oeif-speaking"].title,
    summary: "Книга з говоріння ÖIF B1 містить 85 сфокусованих модулів: 30 діалогів планування, 30 тем для думки та дискусії і 25 завдань на опис картинок, із підтримкою словника та follow-up questions.",
    features: [
      "30 діалогів планування, 30 тем для дискусії та 25 завдань на опис картинок",
      "Модельні відповіді, питання екзаменатора та повторно вживані фрази",
      "Повсякденні теми в австрійському стилі: записи, житло, робота, покупки"
    ],
    sampleTitle: "Безкоштовний зразок із 3 завданнями",
    sampleDescription: "Показує стиль діалогів, словник і тип follow-up questions у книзі.",
    ctaLabel: "Отримати зразок ÖIF Speaking"
  },
  "oeif-writing": {
    panelLabel: "Книга з письма",
    title: site.books["oeif-writing"].localizedTitles[currentLang] or site.books["oeif-writing"].title,
    summary: "Книга з письма ÖIF B1 містить 30 керованих модулів для особистих і формальних повідомлень, скарг і коротких думок, а також австрійські життєві ситуації, checklists і mock-завдання.",
    features: [
      "30 керованих модулів письма у чотирьох практичних розділах",
      "Австрійські ситуації з готовими фразами, checklists і модельними текстами",
      "Вбудована підтримка для іспиту, включно з mock-завданнями і структурою на випадок стресу"
    ],
    sampleTitle: "Безкоштовний зразок із 4 завданнями",
    sampleDescription: "Показує стиль письма, структуру й підтримку у повній книзі.",
    ctaLabel: "Отримати зразок ÖIF Writing"
  },
  "fide-speaking": {
    panelLabel: "Книга з говоріння",
    title: "fide A2 Speaking",
    summary: "Книга fide A2 з говоріння пропонує 43 набори вправ для опису картинки, рольової гри та розмови на теми з повсякденного життя у Швейцарії.",
    features: [
      "43 набори для трьох ключових типів завдань усної частини fide A2",
      "Теми зі швейцарського повсякденного життя: робота, житло, здоров'я, школа, транспорт і установи",
      "Формати Kindle і м'яка обкладинка для продовження підготовки після безкоштовного зразка"
    ],
    sampleTitle: "Безкоштовний зразок із 1 набором",
    sampleDescription: "Англійський PDF-зразок показує, як виглядає усна частина fide A2: опис картинки, рольова гра та розмова.",
    ctaLabel: "Відкрити зразок fide Speaking"
  },
  "fide-writing": {
    panelLabel: "Книга з письма",
    title: "fide A2 Writing",
    summary: "Книга fide A2 з письма пропонує 22 набори для форматів Formular + Bemerkungen і Kurze E-Mail на основі повсякденних ситуацій у Швейцарії.",
    features: [
      "22 набори для двох основних форматів письмової частини fide A2",
      "Теми: робота, установи, здоров'я, житло, школа і транспорт",
      "Безкоштовний зразок, щоб швидко побачити структуру до покупки повної книги"
    ],
    sampleTitle: "Безкоштовний зразок із 1 набором",
    sampleDescription: "Англійський PDF-зразок показує одне завдання з формуляром і один короткий e-mail для fide A2 writing.",
    ctaLabel: "Відкрити зразок fide Writing"
  }
} %}
{% set comparisonSection = {
  eyebrow: "Швидке порівняння",
  title: "Оберіть правильний іспитовий шлях, перш ніж обирати книжку.",
  intro: "Усі три шляхи дають сфокусовану підготовку до говоріння й письма, але контекст іспиту, країна та використання сертифіката відрізняються між Німеччиною, Австрією та Швейцарією."
} %}
{% set finalCta = {
  eyebrow: "Спочатку оберіть іспит, потім навичку",
  title: "Оберіть іспит, відкрийте зразок і переходьте до повної книжки, коли будете готові.",
  intro: "Якщо вам потрібна підготовка до DTZ B1 для Німеччини, переходьте одразу до розділу DTZ. Якщо вам потрібна підготовка до ÖIF B1 для Австрії, використовуйте розділ ÖIF. Якщо вам потрібна підготовка до fide A2 для Швейцарії, відкрийте розділ fide. У кожному випадку можна почати з безкоштовного зразка, а потім перейти до повної книжки з говоріння або письма."
} %}

<section class="hero hero-dual">
  <div class="container">
    <div class="hero-layout">
      <div class="hero-copy">
        <p class="eyebrow">Підготовка до DTZ B1, ÖIF B1 і fide A2</p>
        <h1>Оберіть практичні книжки з говоріння та письма для Німеччини, Австрії чи Швейцарії.</h1>
        <p class="hero-intro">Якщо ви готуєтеся до DTZ B1 у Німеччині, ÖIF B1 в Австрії або fide A2 у Швейцарії, почніть тут. Ця сторінка допоможе порівняти іспитові шляхи, вибрати правильну книжку для говоріння чи письма й відкрити безкоштовний зразок перед покупкою.</p>
        {% set switcherClass = 'language-switcher--hero' %}
        {% include "language-switcher.njk" %}
        <div class="button-row hero-actions">
          <a href="#dtz-b1-books" class="btn btn-primary">{{ heroButtonLabels.dtzShort }}</a>
          <a href="#oeif-b1-books" class="btn btn-outline btn-outline-light">{{ heroButtonLabels.oeifShort }}</a>
          <a href="#fide-a2-books" class="btn btn-outline btn-outline-light">{{ heroButtonLabels.fideShort }}</a>
        </div>
      </div>
    </div>
  </div>
</section>

{% include "book-reviews.njk" %}

{% for examKey in homeExamOrder %}
  {% set exam = site.exams[examKey] %}
  {% set examCopy = localizedExamContent[examKey] %}
  <section id="{{ exam.anchor }}-books" class="home-section{% if loop.index % 2 == 0 %} home-section-alt{% endif %}">
    <div class="container">
      <div class="section-heading">
        <h2>{{ examCopy.booksHeading }}</h2>
        <p>{{ examCopy.booksIntro }}</p>
      </div>
      <div class="hero-book-grid">
        {% for bookKey in exam.books %}
          {% set book = site.books[bookKey] %}
          {% set copy = localizedBookContent[bookKey] %}
          {% set bookDisplayTitle = copy.title %}
          <article class="book-panel{% if loop.first %} book-panel-accent{% endif %}">
            <p class="book-panel__label">{{ copy.panelLabel }}</p>
            <h2>{{ copy.title }}</h2>
            <p>{{ copy.summary }}</p>
            <ul class="check-list">
              {% for feature in copy.features %}
                <li>{{ feature }}</li>
              {% endfor %}
            </ul>
            <p><strong>{{ copy.sampleTitle }}:</strong> {{ copy.sampleDescription }}</p>
            {% include "book-facts.njk" %}
            <div class="button-row">
              <a href="{{ ctaLink(book | samplePdfPath(currentLang), { content: book.key ~ '-sample-section' }) }}" class="btn btn-primary" target="_blank" rel="noopener" {{ ctaTrackingAttrs('sample_pdf', book.key, 'books-section') }}>{{ copy.ctaLabel }}</a>
              {% set purchaseLocation = 'books-section' %}
              {% include "purchase-links.njk" %}
            </div>
          </article>
        {% endfor %}
      </div>
    </div>
  </section>
{% endfor %}

<section class="home-section comparison-section">
  <div class="container">
    <div class="section-heading section-heading-centered">
      <p class="eyebrow">{{ comparisonSection.eyebrow }}</p>
      <h2>{{ comparisonSection.title }}</h2>
      <p>{{ comparisonSection.intro }}</p>
    </div>
    <div class="comparison-grid">
      {% for examKey in homeExamOrder %}
        {% set examCopy = localizedExamContent[examKey] %}
        {% set exam = site.exams[examKey] %}
        <article class="comparison-card">
          <p class="comparison-card__eyebrow">{{ examCopy.comparisonEyebrow }}</p>
          <h3>{{ examCopy.comparisonTitle }}</h3>
          <p class="comparison-card__intro">{{ examCopy.comparisonIntro }}</p>
          <ul class="comparison-list">
            {% for fact in examCopy.comparisonFacts %}
              <li>
                <strong>{{ fact.title }}:</strong>
                {{ fact.text }}
              </li>
            {% endfor %}
          </ul>
          <a href="#{{ exam.anchor }}-books" class="text-link">{{ examCopy.comparisonLink }}</a>
        </article>
      {% endfor %}
    </div>
  </div>
</section>

{% include "purchase-flow.njk" %}

<section class="home-section home-section-alt">
  <div class="container">
    <div class="section-heading">
      <p class="eyebrow">Огляд іспитів</p>
      <h2>Порівняйте іспити DTZ B1, ÖIF B1 і fide A2</h2>
      <p>Якщо після перегляду книжок ви хочете побачити деталі іспитів, цей розділ збирає основний формат, мету й контекст сертифіката для всіх трьох шляхів.</p>
    </div>
    <div class="exam-overview-stack">
      {% for examKey in homeExamOrder %}
        {% set exam = site.exams[examKey] %}
        {% set examCopy = localizedExamContent[examKey] %}
        <div id="{{ exam.anchor }}" class="exam-overview-block">
          <div class="section-heading">
            <p class="eyebrow">{{ examCopy.comparisonEyebrow }}</p>
            <h2>{{ examCopy.overviewTitle }}</h2>
            <p>{{ examCopy.overviewDescription }}</p>
          </div>
          <div class="feature-grid">
            {% for fact in examCopy.overviewFacts %}
              <article class="feature-card">
                <h3>{{ fact.title }}</h3>
                <p>{{ fact.text }}</p>
              </article>
            {% endfor %}
          </div>
        </div>
      {% endfor %}
    </div>
  </div>
</section>

<section class="home-section final-cta-section">
  <div class="container">
    <div class="final-cta">
      <div>
        <p class="eyebrow">{{ finalCta.eyebrow }}</p>
        <h2>{{ finalCta.title }}</h2>
        <p>{{ finalCta.intro }}</p>
      </div>
      <div class="button-row">
        <a href="#dtz-b1-books" class="btn btn-secondary">{{ heroButtonLabels.dtzShort }}</a>
        <a href="#oeif-b1-books" class="btn btn-secondary">{{ heroButtonLabels.oeifShort }}</a>
        <a href="#fide-a2-books" class="btn btn-secondary">{{ heroButtonLabels.fideShort }}</a>
      </div>
    </div>
  </div>
</section>
