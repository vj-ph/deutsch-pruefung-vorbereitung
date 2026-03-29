---
layout: base
templateEngineOverride: njk
title: "Deutsch Kompass DTZ & ÖIF"
description: "Готуйтеся до іспиту DTZ B1 у Німеччині та іспиту ÖIF B1 Integrationprüfung в Австрії за допомогою книжок для говоріння й письма та безкоштовних зразків перед покупкою."
permalink: /uk/
lang: uk
dir: ltr
currentLang: uk
homeUrl: /uk/
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
  footerIntro: "Книги для підготовки з говоріння та письма до іспиту DTZ B1 у Німеччині та ÖIF B1 Integrationprüfung в Австрії."
  examSectionsLabel: Розділи іспиту
  booksLabel: Книги
  sampleLabel: Безкоштовний зразок
  fullBookLabel: Повна книга
  rightsReserved: Усі права захищені.
---

{% from "cta-helpers.njk" import ctaLink, samplePagePath with context %}
{% set heroTrustBullets = [
  "Усі повні книги коштують " ~ site.sales.fullBookPriceDisplay,
  "Безкоштовні PDF-сторінки зі зразками на сайті",
  "Купуйте повні книги на Gumroad і завантажуйте PDF там"
] %}
{% set purchaseFlow = {
  eyebrow: "Перед тим як натиснути",
  title: "Що буде після натискання?",
  intro: "Кожна повна книга коштує " ~ site.sales.fullBookPriceDisplay ~ ", кожен зразок безкоштовний, і кожна книга доступна у форматі PDF.",
  steps: [
    {
      title: "Відкрийте сторінку товару",
      text: "Кнопка зразка відкриває коротку сторінку на сайті, а кнопка повної книги відкриває Gumroad для платної версії."
    },
    {
      title: "Спочатку перегляньте безкоштовний зразок",
      text: "На сторінці зразка можна відкрити безкоштовний PDF прямо з цього сайту й зрозуміти, чи підходить вам книга."
    },
    {
      title: "Купіть і завантажте",
      text: "Коли будете готові, купіть повну книгу на Gumroad і завантажте PDF там."
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
  discountSuffix: " для знижки 20% під час оформлення замовлення.",
  clickNote: "Кнопка зразка відкриває сторінку зразка на сайті з прямим посиланням на PDF, а кнопка повної книги відкриває Gumroad для покупки та завантаження."
} %}
{% set heroButtonLabels = {
  dtz: "Переглянути книги, зразки й ціни DTZ B1",
  oeif: "Переглянути книги, зразки й ціни ÖIF B1"
} %}

<section class="hero hero-dual">
  <div class="container">
    <p class="eyebrow">Підготовка до DTZ B1 та ÖIF B1</p>
    <h1>Складіть DTZ B1 або ÖIF B1 з практичними книгами з говоріння та письма, які чітко показують, як готуватися.</h1>
    <p class="hero-intro">Якщо ви готуєтеся до DTZ B1 у Німеччині або до ÖIF B1 Integrationprüfung в Австрії, ця сторінка допоможе вам вибрати правильну книгу для говоріння чи письма, порівняти обидва формати іспитів і завантажити безкоштовний зразок перед покупкою.</p>
    {% set switcherClass = 'language-switcher--hero' %}
    {% include "language-switcher.njk" %}
    {% include "hero-trust-strip.njk" %}
    <div class="hero-book-grid">
      <article class="book-panel book-panel-accent">
        <p class="book-panel__label">Підготовка до DTZ B1 у Німеччині</p>
        <h2>Успіх у DTZ B1 починається з чіткої книги для говоріння та книги для письма.</h2>
        <ul class="check-list">
          <li>Книга з говоріння містить 60 вправ для всіх 3 частин усного іспиту</li>
          <li>Книга з письма містить 30 практичних модулів і 5 повних письмових mock-завдань</li>
          <li>Спочатку можна завантажити безкоштовний зразок, а потім купити повну книгу</li>
        </ul>
        <div class="button-row">
          <a href="#dtz-b1-books" class="btn btn-primary">{{ heroButtonLabels.dtz }}</a>
        </div>
      </article>
      <article class="book-panel">
        <p class="book-panel__label">Підготовка до ÖIF B1 в Австрії</p>
        <h2>Успіх в ÖIF B1 стає простішим із окремими книгами для говоріння та письма.</h2>
        <ul class="check-list">
          <li>Книга з говоріння містить діалоги, теми для обговорення та опис картинок</li>
          <li>Книга з письма зосереджується на австрійських ситуаціях, моделях текстів і mock-завданнях</li>
          <li>Для обох книг доступні безкоштовні зразки</li>
        </ul>
        <div class="button-row">
          <a href="#oeif-b1-books" class="btn btn-primary">{{ heroButtonLabels.oeif }}</a>
        </div>
      </article>
    </div>
  </div>
</section>

<section id="dtz-b1-books" class="home-section">
  <div class="container">
    <div class="section-heading">
      <h2>Книги DTZ B1 і безкоштовні зразки</h2>
      <p>Почніть із тієї навички, яка зараз найслабша, або використовуйте обидві книги, якщо хочете повніший план підготовки до говоріння й письма.</p>
    </div>
    <div class="hero-book-grid">
      <article class="book-panel book-panel-accent">
        <p class="book-panel__label">Книга з говоріння</p>
        <h2>DTZ B1 Speaking - Practice and Pass</h2>
        <p>Книга для говоріння DTZ B1 містить 60 вправ для самопрезентації, опису картинки та власного досвіду, а також спільного планування з партнером, із модельними відповідями, корисними фразами, follow-up questions і словником німецька-англійська.</p>
        <ul class="check-list">
          <li>60 вправ для всіх 3 частин усного іспиту</li>
          <li>Модельні відповіді або діалоги з можливими питаннями екзаменатора</li>
          <li>Корисні фрази, словник німецька-англійська та короткі speaking drills</li>
        </ul>
        <p><strong>Безкоштовний зразок із 3 завданнями:</strong> допомагає побачити формат завдань і тип підтримки, який є у повній книзі.</p>
        {% set bookKey = 'dtz-speaking' %}
        {% include "book-facts.njk" %}
        <div class="button-row">
          <a href="{{ ctaLink(samplePagePath('dtz-speaking', currentLang or 'en'), { content: 'dtz-speaking-sample-uk' }) }}" class="btn btn-primary">Отримати зразок DTZ Speaking</a>
          <a href="{{ ctaLink(site.books['dtz-speaking'].gumroad.fullBook, { content: 'dtz-speaking-full-uk' }) }}" class="btn btn-outline" target="_blank" rel="noopener">Купити книгу DTZ Speaking</a>
        </div>
      </article>
      <article class="book-panel">
        <p class="book-panel__label">Книга з письма</p>
        <h2>DTZ Schreiben B1 - Practice Book</h2>
        <p>Книга для письма DTZ B1 зосереджена на головному письмовому завданні іспиту: коротких повідомленнях із чотирма змістовими пунктами. Вона містить 30 модулів і 5 повних mock-завдань.</p>
        <ul class="check-list">
          <li>30 практичних модулів для основних типів текстів DTZ</li>
          <li>Модельні тексти, корисні фрази, типові помилки та швидкі checklists</li>
          <li>5 повних письмових mock-завдань із модельними відповідями</li>
        </ul>
        <p><strong>Безкоштовний зразок із 4 завданнями:</strong> показує тип письмових завдань, структуру та підтримку, що є у повній книзі.</p>
        {% set bookKey = 'dtz-writing' %}
        {% include "book-facts.njk" %}
        <div class="button-row">
          <a href="{{ ctaLink(samplePagePath('dtz-writing', currentLang or 'en'), { content: 'dtz-writing-sample-uk' }) }}" class="btn btn-primary">Отримати зразок DTZ Writing</a>
          <a href="{{ ctaLink(site.books['dtz-writing'].gumroad.fullBook, { content: 'dtz-writing-full-uk' }) }}" class="btn btn-outline" target="_blank" rel="noopener">Купити книгу DTZ Writing</a>
        </div>
      </article>
    </div>
  </div>
</section>

<section id="oeif-b1-books" class="home-section home-section-alt">
  <div class="container">
    <div class="section-heading">
      <h2>Книги ÖIF B1 і безкоштовні зразки</h2>
      <p>Ці книги допомагають відпрацьовувати поширені завдання з говоріння та письма в австрійському форматі, а перед покупкою можна спробувати безкоштовний зразок.</p>
    </div>
    <div class="hero-book-grid">
      <article class="book-panel book-panel-accent">
        <p class="book-panel__label">Книга з говоріння</p>
        <h2>ÖIF B1 Speaking Exam Prep</h2>
        <p>Книга з говоріння ÖIF B1 містить 85 сфокусованих модулів: 30 діалогів планування, 30 тем для думки та дискусії і 25 завдань на опис картинок, із підтримкою словника та follow-up questions.</p>
        <ul class="check-list">
          <li>30 діалогів планування, 30 тем для дискусії та 25 завдань на опис картинок</li>
          <li>Модельні відповіді, питання екзаменатора та повторно вживані фрази</li>
          <li>Повсякденні теми в австрійському стилі: записи, житло, робота, покупки</li>
        </ul>
        <p><strong>Безкоштовний зразок із 3 завданнями:</strong> показує стиль діалогів, словник і тип follow-up questions у книзі.</p>
        {% set bookKey = 'oeif-speaking' %}
        {% include "book-facts.njk" %}
        <div class="button-row">
          <a href="{{ ctaLink(samplePagePath('oeif-speaking', currentLang or 'en'), { content: 'oeif-speaking-sample-uk' }) }}" class="btn btn-primary">Отримати зразок ÖIF Speaking</a>
          <a href="{{ ctaLink(site.books['oeif-speaking'].gumroad.fullBook, { content: 'oeif-speaking-full-uk' }) }}" class="btn btn-outline" target="_blank" rel="noopener">Купити книгу ÖIF Speaking</a>
        </div>
      </article>
      <article class="book-panel">
        <p class="book-panel__label">Книга з письма</p>
        <h2>ÖIF B1 Schreiben - Übungsbuch</h2>
        <p>Книга з письма ÖIF B1 містить 30 керованих модулів для особистих і формальних повідомлень, скарг і коротких думок, а також австрійські життєві ситуації, checklists і mock-завдання.</p>
        <ul class="check-list">
          <li>30 керованих модулів письма у чотирьох практичних розділах</li>
          <li>Австрійські ситуації з готовими фразами, checklists і модельними текстами</li>
          <li>Вбудована підтримка для іспиту, включно з mock-завданнями і структурою на випадок стресу</li>
        </ul>
        <p><strong>Безкоштовний зразок із 4 завданнями:</strong> показує стиль письма, структуру й підтримку у повній книзі.</p>
        {% set bookKey = 'oeif-writing' %}
        {% include "book-facts.njk" %}
        <div class="button-row">
          <a href="{{ ctaLink(samplePagePath('oeif-writing', currentLang or 'en'), { content: 'oeif-writing-sample-uk' }) }}" class="btn btn-primary">Отримати зразок ÖIF Writing</a>
          <a href="{{ ctaLink(site.books['oeif-writing'].gumroad.fullBook, { content: 'oeif-writing-full-uk' }) }}" class="btn btn-outline" target="_blank" rel="noopener">Купити книгу ÖIF Writing</a>
        </div>
      </article>
    </div>
  </div>
</section>

{% include "purchase-flow.njk" %}

<section class="home-section home-section-alt">
  <div class="container">
    <div class="section-heading">
      <p class="eyebrow">Огляд іспитів</p>
      <h2>Порівняйте іспити DTZ B1 та ÖIF B1</h2>
      <p>Якщо після перегляду книг ви хочете швидко побачити контекст обох форматів, тут зібрані ключові моменти для DTZ B1 та ÖIF B1.</p>
    </div>
    <div class="exam-overview-stack">
      <div id="dtz-b1" class="exam-overview-block">
<div class="section-heading">
      <p class="eyebrow">DTZ B1</p>
      <h2>Коротко про іспит DTZ B1</h2>
      <p>Deutsch-Test für Zuwanderer (DTZ) — це практичний іспит з німецької мови в Німеччині. Цей розділ пояснює формат і допомагає вибрати правильну книгу DTZ B1 для говоріння або письма.</p>
    </div>
    <div class="feature-grid">
      <article class="feature-card">
        <h3>Формат говоріння</h3>
        <p>Усна частина DTZ містить 3 типи завдань: коротко представитися, говорити про зображення та власний досвід, а також планувати щось разом із партнером.</p>
      </article>
      <article class="feature-card">
        <h3>Формат письма</h3>
        <p>Письмове завдання DTZ зазвичай це коротке практичне повідомлення приблизно на 80-100 слів із чотирма змістовими пунктами.</p>
      </article>
      <article class="feature-card">
        <h3>Чому підтвердження рівня B1 важливе</h3>
        <p>Сертифікат DTZ на рівні B1 може використовуватися як підтвердження знання німецької мови для таких заяв, як постійне проживання в Німеччині або натуралізація. Але остаточне рішення завжди залежить і від інших юридичних вимог у вашій ситуації.</p>
      </article>
      <article class="feature-card">
        <h3>Для кого ці книги</h3>
        <p>Вони підходять для самостійного навчання, занять із викладачем і навчальних груп, яким потрібна практична підготовка саме під формат іспиту.</p>
      </article>
    </div>
      </div>
      <div id="oeif-b1" class="exam-overview-block">
<div class="section-heading">
      <p class="eyebrow">ÖIF B1</p>
      <h2>Коротко про іспит ÖIF B1</h2>
      <p>ÖIF B1 Integrationprüfung — це офіційний інтеграційний іспит в Австрії. Цей розділ пояснює іспит і допомагає вибрати правильну книгу ÖIF B1 для говоріння або письма.</p>
    </div>
    <div class="feature-grid">
      <article class="feature-card">
        <h3>Для чого цей іспит</h3>
        <p>Це частина інтеграційної системи в Австрії й офіційний доказ мовних та інтеграційних знань.</p>
      </article>
      <article class="feature-card">
        <h3>У чому може допомогти складання</h3>
        <p>Успішний результат може бути корисним для Modul 2 у межах інтеграційної угоди та в окремих випадках для постійного проживання або громадянства.</p>
      </article>
      <article class="feature-card">
        <h3>Що підтверджує сертифікат</h3>
        <p>Сертифікат підтверджує, що ви досягли рівня німецької B1 в офіційно визнаному форматі ÖIF.</p>
      </article>
      <article class="feature-card">
        <h3>Важлива примітка</h3>
        <p>Юридичні вимоги залежать від статусу проживання та вашої індивідуальної ситуації, тому завжди перевіряйте актуальні правила ÖIF і державних органів Австрії.</p>
      </article>
    </div>
      </div>
    </div>
  </div>
</section>

<section class="home-section final-cta-section">
  <div class="container">
    <div class="final-cta">
      <div>
        <p class="eyebrow">Оберіть іспит, потім навичку</p>
        <h2>Спочатку оберіть іспит, потім зразок, а далі перейдіть до повної книги, коли будете готові.</h2>
        <p>Якщо вам потрібна підготовка до DTZ B1 у Німеччині, почніть із розділу DTZ. Якщо вам потрібна підготовка до ÖIF B1 в Австрії, скористайтеся розділом ÖIF. В обох випадках можна почати з безкоштовного зразка, а потім перейти до повної книги з говоріння або письма.</p>
      </div>
      <div class="button-row">
        <a href="#dtz-b1-books" class="btn btn-secondary">Книги DTZ B1</a>
        <a href="#oeif-b1-books" class="btn btn-secondary">Книги ÖIF B1</a>
      </div>
    </div>
  </div>
</section>
