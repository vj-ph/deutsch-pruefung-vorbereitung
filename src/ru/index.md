---
layout: base
templateEngineOverride: njk
title: "Deutsch Kompass DTZ, ÖIF и fide"
description: "Подготовьтесь к экзаменам DTZ B1 в Германии, ÖIF B1 в Австрии и fide A2 в Швейцарии с помощью книг по говорению и письму и бесплатных образцов."
permalink: /ru/
lang: ru
dir: ltr
currentLang: ru
homeUrl: /ru/
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
languageSwitcherLabel: "Язык"
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
  homeLabel: Главная
  footerIntro: "Книги для подготовки к говорению и письму для экзаменов DTZ B1 в Германии, ÖIF B1 в Австрии и fide A2 в Швейцарии."
  examSectionsLabel: Разделы экзамена
  booksLabel: Книги
  sampleLabel: Бесплатный образец
  fullBookLabel: Полная книга
  rightsReserved: Все права защищены.
---

{% from "cta-helpers.njk" import ctaLink, ctaTrackingAttrs with context %}
{% set homeExamOrder = pageExamOrder or site.examOrder %}
{% set purchaseFlow = {
  eyebrow: "Перед тем как нажать",
  title: "Что происходит после нажатия?",
  intro: "Каждый образец на этом сайте бесплатный. Книги DTZ и ÖIF доступны как PDF со скидкой на Gumroad, а также на Amazon. Книги fide A2 сейчас доступны на Amazon в форматах Kindle и в мягкой обложке.",
  steps: [
    {
      title: "Откройте образец или страницу магазина",
      text: "Кнопка образца открывает бесплатный PDF прямо с этого сайта. Кнопки покупки открывают выбранный магазин в новой вкладке."
    },
    {
      title: "Сначала посмотрите бесплатный образец",
      text: "Откройте бесплатный PDF прямо с этого сайта и решите, подходит ли вам книга."
    },
    {
      title: "Купите в нужном формате",
      text: "Когда будете готовы, выберите магазин по названию: Gumroad для PDF со скидкой у книг DTZ и ÖIF, или Amazon для Kindle и мягкой обложки, включая книги fide A2."
    }
  ]
} %}
{% set productUi = {
  fullBook: "Полная книга",
  freeSample: "Бесплатный образец",
  format: "Формат",
  pages: "Страницы",
  free: "Бесплатно",
  discountPrefix: "Используйте код скидки ",
  discountSuffix: " для скидки 20% на Gumroad.",
  clickNote: "Кнопка образца открывает PDF прямо с этого сайта, а кнопки покупки открывают выбранный магазин в новой вкладке."
} %}
{% set heroButtonLabels = {
  dtzShort: "Смотреть книги DTZ B1",
  oeifShort: "Смотреть книги ÖIF B1",
  fideShort: "Смотреть книги fide A2"
} %}
{% set reviewsSection = {
  eyebrow: "Отзывы о книгах",
  title: "Что учащиеся говорят об этих книгах?",
  intro: "Это короткие отзывы от учащихся, которые использовали эти книги для практической подготовки к экзамену по немецкому.",
  items: [
    {
      quote: "Повседневное общение для меня не проблема, и я хорошо общаюсь с коллегами в сфере логистики. Однако экзамен DTZ охватывает темы, с которыми я редко сталкиваюсь в обычной жизни. Эти книги дали мне большое разнообразие заданий по говорению и письму вместе с примерами ответов, и это было очень важно для моей подготовки к B1 и помогло мне успешно сдать экзамен!",
      author: "Ahmed"
    },
    {
      quote: "В то время как официальный учебник для подготовки к DTZ содержит лишь несколько пробных тестов, эта книга по говорению DTZ B1 предлагает 60 разных упражнений! Это гораздо более полный ресурс для тех, кто действительно настроен сдать экзамен.",
      author: "Mehmet"
    },
    {
      quote: "Я дважды не сдал экзамен ÖIF B1 из-за разделов говорения и письма, хотя чтение давалось мне довольно легко. Эти книги стали спасением для моей третьей попытки: они подробно охватили все темы экзамена и наконец помогли мне сдать его.",
      author: "Oleksandr"
    }
  ]
} %}
{% set localizedExamContent = {
  dtz: {
    booksHeading: "Книги DTZ B1 и бесплатные образцы",
    booksIntro: "Начните с того навыка, который сейчас слабее всего, или используйте обе книги, если хотите более полный план подготовки к говорению и письму.",
    comparisonEyebrow: "DTZ B1",
    comparisonTitle: "Практический путь B1 для Германии",
    comparisonIntro: "DTZ B1 сосредоточен на заданиях по говорению и письму, которые часто встречаются в немецком миграционном и интеграционном контексте.",
    comparisonFacts: [
      { title: "Страна", text: "Германия" },
      { title: "Уровень", text: "B1" },
      { title: "Фокус", text: "Самопрезентация, говорение по картинке, планирование и короткие практические тексты" }
    ],
    comparisonLink: "Смотреть книги DTZ B1",
    overviewTitle: "Обзор экзамена DTZ B1",
    overviewDescription: "Deutsch-Test für Zuwanderer (DTZ) — это практический экзамен по немецкому языку в Германии. Этот раздел объясняет формат экзамена и помогает выбрать правильную книгу DTZ B1 по говорению или письму.",
    overviewFacts: [
      { title: "Формат говорения", text: "Устная часть DTZ включает 3 типа заданий: кратко представиться, говорить о картинке и своем опыте и планировать что-то вместе с партнером." },
      { title: "Формат письма", text: "Письменное задание DTZ обычно представляет собой короткое практическое сообщение примерно на 80-100 слов с четырьмя смысловыми пунктами." },
      { title: "Почему подтверждение уровня B1 важно", text: "Сертификат DTZ уровня B1 может использоваться как признанное подтверждение немецкого языка для таких заявлений, как постоянное проживание в Германии или натурализация. Но окончательное решение всегда зависит и от других юридических требований в вашей ситуации." },
      { title: "Для кого эти книги", text: "Они подходят для самостоятельного обучения, занятий с преподавателем и учебных групп, которым нужна практическая подготовка именно под формат экзамена." }
    ]
  },
  oeif: {
    booksHeading: "Книги ÖIF B1 и бесплатные образцы",
    booksIntro: "Эти книги помогают тренировать типичные задания по говорению и письму в австрийском формате, а перед покупкой можно попробовать бесплатный образец.",
    comparisonEyebrow: "ÖIF B1",
    comparisonTitle: "Интеграционный путь для Австрии",
    comparisonIntro: "ÖIF B1 сосредоточен на заданиях по говорению и письму, которые используются в официальном интеграционном контексте Австрии.",
    comparisonFacts: [
      { title: "Страна", text: "Австрия" },
      { title: "Уровень", text: "B1" },
      { title: "Фокус", text: "Австрийские темы, планирование, описание картинки и направляемое письмо" }
    ],
    comparisonLink: "Смотреть книги ÖIF B1",
    overviewTitle: "Обзор экзамена ÖIF B1",
    overviewDescription: "ÖIF B1 Integrationprüfung — официальный интеграционный экзамен в Австрии. Этот раздел объясняет экзамен и помогает выбрать правильную книгу ÖIF B1 по говорению или письму.",
    overviewFacts: [
      { title: "Цель экзамена", text: "Этот экзамен является частью интеграционной системы в Австрии и используется как официальный языковой и интеграционный документ." },
      { title: "Чему может помочь успешная сдача", text: "Успешный результат может быть важен для таких требований, как Modul 2 в рамках интеграционного соглашения, а в некоторых случаях и для ПМЖ или гражданства." },
      { title: "Что подтверждает сертификат", text: "Сертификат показывает, что вы достигли уровня немецкого B1 в официально признанном формате ÖIF." },
      { title: "Важное замечание", text: "Юридические требования зависят от вашего статуса проживания и личной ситуации, поэтому всегда проверяйте актуальные правила ÖIF и официальных органов Австрии." }
    ]
  },
  fide: {
    booksHeading: "Книги fide A2 и бесплатные образцы",
    booksIntro: "Эти две книги сосредоточены на заданиях по говорению и письму для экзамена fide A2 в Швейцарии. PDF-образец пока доступен только на английском, но он используется для всех языков.",
    comparisonEyebrow: "fide A2",
    comparisonTitle: "Подготовка A2 для Швейцарии",
    comparisonIntro: "fide A2 сосредоточен на коммуникативных заданиях из повседневной жизни в Швейцарии.",
    comparisonFacts: [
      { title: "Страна", text: "Швейцария" },
      { title: "Уровень", text: "A2" },
      { title: "Фокус", text: "Описание картинки, ролевая игра, разговор, формуляр и короткий e-mail" }
    ],
    comparisonLink: "Смотреть книги fide A2",
    overviewTitle: "Обзор экзамена fide A2",
    overviewDescription: "Экзамен fide проверяет умение общаться в повседневных ситуациях в Швейцарии. Этот раздел кратко показывает, к каким типам заданий готовят книги fide A2 по говорению и письму.",
    overviewFacts: [
      { title: "Формат говорения", text: "Устная часть включает описание картинки, ролевую игру и короткий разговор. Темы связаны с повседневной жизнью в Швейцарии: работа, жилье, здоровье, школа, транспорт и учреждения." },
      { title: "Формат письма", text: "Письменная часть особенно сосредоточена на заданиях Formular + Bemerkungen и Kurze E-Mail." },
      { title: "Уровень и применение", text: "Эти книги подходят учащимся, которые готовятся на уровне fide A2 и хотят более целенаправленную подготовку для повседневных ситуаций в Швейцарии." },
      { title: "Что дают книги", text: "Книга по говорению содержит 43 набора, а книга по письму — 22 набора, так что после образца можно перейти к регулярной практике по полной книге." }
    ]
  }
} %}
{% set localizedBookContent = {
  "dtz-speaking": {
    panelLabel: "Книга по говорению",
    title: site.books["dtz-speaking"].localizedTitles[currentLang] or site.books["dtz-speaking"].title,
    summary: "Книга DTZ B1 по говорению содержит 60 упражнений на самопрезентацию, описание картинки и опыта, а также совместное планирование с партнером, с модельными ответами, полезными фразами, follow-up questions и словарем немецкий-английский.",
    features: [
      "60 упражнений для всех 3 частей устного экзамена",
      "Модельные ответы или диалоги и возможные вопросы экзаменатора",
      "Полезные фразы, словарь немецкий-английский и короткие speaking drills"
    ],
    sampleTitle: "Бесплатный образец с 3 заданиями",
    sampleDescription: "Показывает формат заданий и тип поддержки, который есть в полной книге.",
    ctaLabel: "Получить образец DTZ Speaking"
  },
  "dtz-writing": {
    panelLabel: "Книга по письму",
    title: site.books["dtz-writing"].localizedTitles[currentLang] or site.books["dtz-writing"].title,
    summary: "Книга DTZ B1 по письму сосредоточена на главном письменном задании экзамена: коротких сообщениях с четырьмя смысловыми пунктами. В книге 30 практических модулей и 5 полных пробных заданий.",
    features: [
      "30 практических модулей по основным типам текстов DTZ",
      "Модельные тексты, полезные фразы, частые ошибки и быстрые checklists",
      "5 полных пробных письменных заданий с модельными решениями"
    ],
    sampleTitle: "Бесплатный образец с 4 заданиями",
    sampleDescription: "Показывает типы вопросов, структуру и поддержку из полной книги.",
    ctaLabel: "Получить образец DTZ Writing"
  },
  "oeif-speaking": {
    panelLabel: "Книга по говорению",
    title: site.books["oeif-speaking"].localizedTitles[currentLang] or site.books["oeif-speaking"].title,
    summary: "Книга ÖIF B1 по говорению содержит 85 сфокусированных модулей: 30 диалогов планирования, 30 тем для мнения и обсуждения и 25 заданий на описание картинки, с поддержкой словаря и follow-up questions.",
    features: [
      "30 диалогов планирования, 30 тем для обсуждения и 25 заданий с картинками",
      "Модельные ответы, вопросы экзаменатора и фразы, которые можно повторно использовать",
      "Повседневные темы в австрийском стиле: записи, жилье, работа и покупки"
    ],
    sampleTitle: "Бесплатный образец с 3 заданиями",
    sampleDescription: "Показывает стиль диалогов, словарь и тип follow-up questions в книге.",
    ctaLabel: "Получить образец ÖIF Speaking"
  },
  "oeif-writing": {
    panelLabel: "Книга по письму",
    title: site.books["oeif-writing"].localizedTitles[currentLang] or site.books["oeif-writing"].title,
    summary: "Книга ÖIF B1 по письму содержит 30 направляемых модулей для личных и официальных сообщений, жалоб и коротких мнений, а также австрийские жизненные ситуации, checklists и пробные задания.",
    features: [
      "30 направляемых модулей письма в четырех практических разделах",
      "Австрийские ситуации с готовыми фразами, checklists и модельными текстами",
      "Встроенная поддержка для экзамена, включая пробные задания и надежную структуру на случай стресса"
    ],
    sampleTitle: "Бесплатный образец с 4 заданиями",
    sampleDescription: "Показывает стиль письма, структуру и поддержку из полной книги.",
    ctaLabel: "Получить образец ÖIF Writing"
  },
  "fide-speaking": {
    panelLabel: "Книга по говорению",
    title: "fide A2 Speaking",
    summary: "Книга fide A2 по говорению предлагает 43 набора упражнений для описания картинки, ролевой игры и разговора на темы из повседневной жизни в Швейцарии.",
    features: [
      "43 набора для трех ключевых типов заданий устной части fide A2",
      "Темы из швейцарской повседневной жизни: работа, жилье, здоровье, школа, транспорт и учреждения",
      "Форматы Kindle и мягкая обложка для продолжения подготовки после бесплатного образца"
    ],
    sampleTitle: "Бесплатный образец с 1 набором",
    sampleDescription: "Английский PDF-образец показывает, как выглядит устная часть fide A2: описание картинки, ролевая игра и разговор.",
    ctaLabel: "Открыть образец fide Speaking"
  },
  "fide-writing": {
    panelLabel: "Книга по письму",
    title: "fide A2 Writing",
    summary: "Книга fide A2 по письму предлагает 22 набора для форматов Formular + Bemerkungen и Kurze E-Mail на основе повседневных ситуаций в Швейцарии.",
    features: [
      "22 набора для двух основных форматов письменной части fide A2",
      "Темы: работа, учреждения, здоровье, жилье, школа и транспорт",
      "Бесплатный образец, чтобы быстро увидеть структуру до покупки полной книги"
    ],
    sampleTitle: "Бесплатный образец с 1 набором",
    sampleDescription: "Английский PDF-образец показывает одно задание с формуляром и один короткий e-mail для fide A2 writing.",
    ctaLabel: "Открыть образец fide Writing"
  }
} %}
{% set comparisonSection = {
  eyebrow: "Быстрое сравнение",
  title: "Выберите правильный экзаменационный путь до того, как выбирать книгу.",
  intro: "Все три пути предлагают сфокусированную подготовку к говорению и письму, но экзаменационный контекст, страна и применение сертификата различаются в Германии, Австрии и Швейцарии."
} %}
{% set finalCta = {
  eyebrow: "Сначала выберите экзамен, потом навык",
  title: "Выберите экзамен, откройте образец и переходите к полной книге, когда будете готовы.",
  intro: "Если вам нужна подготовка к DTZ B1 для Германии, переходите сразу к разделу DTZ. Если вам нужна подготовка к ÖIF B1 для Австрии, используйте раздел ÖIF. Если вам нужна подготовка к fide A2 для Швейцарии, откройте раздел fide. В каждом случае можно начать с бесплатного образца, а затем перейти к полной книге по говорению или письму."
} %}

<section class="hero hero-dual">
  <div class="container">
    <div class="hero-layout">
      <div class="hero-copy">
        <p class="eyebrow">Подготовка к DTZ B1, ÖIF B1 и fide A2</p>
        <h1>Выберите практические книги по говорению и письму для Германии, Австрии или Швейцарии.</h1>
        <p class="hero-intro">Если вы готовитесь к DTZ B1 в Германии, ÖIF B1 в Австрии или fide A2 в Швейцарии, начните здесь. Эта страница поможет сравнить экзаменационные пути, выбрать подходящую книгу по говорению или письму и открыть бесплатный образец перед покупкой.</p>
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
      <p class="eyebrow">Обзор экзаменов</p>
      <h2>Сравните экзамены DTZ B1, ÖIF B1 и fide A2</h2>
      <p>Если после просмотра книг вы хотите увидеть детали экзаменов, этот раздел собирает основной формат, цель и контекст сертификата для всех трех путей.</p>
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
