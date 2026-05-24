---
layout: base
templateEngineOverride: njk
title: "Deutsch Kompass DTZ وÖIF وfide"
description: "استعد لامتحانات DTZ B1 في ألمانيا وÖIF B1 في النمسا وfide A2 في سويسرا من خلال كتب التحدث والكتابة مع عينات مجانية."
permalink: /ar/
lang: ar
dir: rtl
currentLang: ar
homeUrl: /ar/
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
languageSwitcherLabel: "اللغة"
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
  homeLabel: الرئيسية
  footerIntro: "كتب تحضير للتحدث والكتابة لامتحانات DTZ B1 في ألمانيا وÖIF B1 في النمسا وfide A2 في سويسرا."
  examSectionsLabel: أقسام الامتحان
  booksLabel: الكتب
  sampleLabel: عينة مجانية
  fullBookLabel: الكتاب الكامل
  rightsReserved: جميع الحقوق محفوظة.
---

{% from "cta-helpers.njk" import ctaLink, ctaTrackingAttrs with context %}
{% set homeExamOrder = pageExamOrder or site.examOrder %}
{% set purchaseFlow = {
  eyebrow: "قبل أن تنقر",
  title: "ماذا يحدث بعد أن تنقر؟",
  intro: "كل عينة على هذا الموقع مجانية. كتب DTZ وÖIF متاحة كملفات PDF مخفضة على Gumroad وموجودة أيضًا على Amazon. أما كتب fide A2 فهي متاحة حاليًا على Amazon بصيغتي Kindle والنسخة الورقية.",
  steps: [
    {
      title: "افتح العينة أو صفحة المتجر",
      text: "زر العينة يفتح ملف PDF المجاني مباشرة من هذا الموقع، وأزرار الشراء تفتح المتجر المحدد في علامة تبويب جديدة."
    },
    {
      title: "تحقق من العينة المجانية أولًا",
      text: "افتح ملف PDF المجاني مباشرة من هذا الموقع وقرر ما إذا كان الكتاب مناسبًا لك."
    },
    {
      title: "اشترِ بالصيغة التي تريدها",
      text: "عندما تكون جاهزًا، اختر المتجر حسب نوع الكتاب: Gumroad لكتب DTZ وÖIF بصيغة PDF المخفضة، أو Amazon لنسخ Kindle والنسخ الورقية، بما في ذلك كتب fide A2."
    }
  ]
} %}
{% set productUi = {
  fullBook: "الكتاب الكامل",
  freeSample: "عينة مجانية",
  format: "الصيغة",
  pages: "الصفحات",
  free: "مجاني",
  discountPrefix: "استخدم رمز الخصم ",
  discountSuffix: " للحصول على خصم 20% على Gumroad.",
  clickNote: "زر العينة يفتح ملف PDF مباشرة من هذا الموقع، وأزرار الشراء تفتح المتجر المحدد في علامة تبويب جديدة."
} %}
{% set heroButtonLabels = {
  dtzShort: "اطلع على كتب DTZ B1",
  oeifShort: "اطلع على كتب ÖIF B1",
  fideShort: "اطلع على كتب fide A2"
} %}
{% set reviewsSection = {
  eyebrow: "آراء حول الكتب",
  title: "ماذا يقول المتعلمون عن هذه الكتب؟",
  intro: "هذه مراجعات قصيرة من متعلمين استخدموا هذه الكتب للتحضير العملي لامتحان الألمانية.",
  items: [
    {
      quote: "المحادثات اليومية ليست مشكلة بالنسبة لي، وأنا أتواصل جيدًا مع زملائي في قطاع الخدمات اللوجستية. لكن امتحان DTZ يغطي موضوعات نادرًا ما أواجهها في حياتي اليومية. وقد وفرت هذه الكتب مجموعة واسعة من مهام التحدث والكتابة مع إجابات نموذجية، وكان ذلك أساسيًا في تحضيري لمستوى B1 وساعدني على النجاح!",
      author: "Ahmed"
    },
    {
      quote: "بينما يقدّم كتاب التحضير الرسمي لـ DTZ فقط بضع اختبارات تدريبية، فإن كتاب التحدث هذا لـ DTZ B1 يقدّم 60 تمرينًا مختلفًا! إنه مصدر أشمل بكثير لأي شخص جاد في النجاح.",
      author: "Mehmet"
    },
    {
      quote: "رسبت في امتحان ÖIF B1 مرتين بسبب جزأي التحدث والكتابة، رغم أنني وجدت القراءة سهلة إلى حد كبير. كانت هذه الكتب منقذة لي في المحاولة الثالثة؛ فقد غطّت جميع موضوعات الامتحان بشكل شامل، وساعدتني أخيرًا على النجاح.",
      author: "Oleksandr"
    }
  ]
} %}
{% set localizedExamContent = {
  dtz: {
    booksHeading: "كتب DTZ B1 والعينات المجانية",
    booksIntro: "ابدأ بالمهارة التي تشعر أنها الأضعف الآن، أو استخدم الكتابين معًا إذا كنت تريد خطة أشمل للتحدث والكتابة.",
    comparisonEyebrow: "DTZ B1",
    comparisonTitle: "مسار B1 عملي لألمانيا",
    comparisonIntro: "يركز DTZ B1 على مهام التحدث والكتابة الشائعة في سياق الهجرة والاندماج في ألمانيا.",
    comparisonFacts: [
      { title: "البلد", text: "ألمانيا" },
      { title: "المستوى", text: "B1" },
      { title: "التركيز", text: "التعريف بالنفس، والتحدث عن صورة، والتخطيط، وكتابة رسائل عملية قصيرة" }
    ],
    comparisonLink: "اطلع على كتب DTZ B1",
    overviewTitle: "نظرة عامة على امتحان DTZ B1",
    overviewDescription: "امتحان Deutsch-Test für Zuwanderer (DTZ) هو امتحان عملي للغة الألمانية في ألمانيا. هذا القسم يشرح شكل الامتحان ويساعدك على اختيار كتاب DTZ B1 المناسب للتحدث أو الكتابة.",
    overviewFacts: [
      { title: "صيغة التحدث", text: "يشمل امتحان التحدث في DTZ ثلاث مهام: التعريف بالنفس، التحدث عن صورة وربطها بتجربة شخصية، والتخطيط مع شريك." },
      { title: "صيغة الكتابة", text: "تركز مهمة الكتابة في DTZ على رسالة أو نص عملي قصير من حوالي 80 إلى 100 كلمة مع أربع نقاط محتوى." },
      { title: "لماذا يهم إثبات مستوى B1", text: "شهادة DTZ بمستوى B1 يمكن أن تُستخدم كإثبات معتمد للغة الألمانية في طلبات مثل الإقامة الدائمة في ألمانيا أو التجنيس. لكن القبول النهائي يعتمد أيضًا على بقية الشروط القانونية في حالتك." },
      { title: "لمن هذه الكتب", text: "هذه الكتب مناسبة للتعلم الذاتي، والدروس، والمجموعات الدراسية التي تريد تدريبًا عمليًا دقيقًا بدل المواد العامة." }
    ]
  },
  oeif: {
    booksHeading: "كتب ÖIF B1 والعينات المجانية",
    booksIntro: "هذه الكتب تساعدك على التدرب على مهام التحدث والكتابة الشائعة في النمسا، مع إمكانية تجربة العينة المجانية قبل شراء الكتاب الكامل.",
    comparisonEyebrow: "ÖIF B1",
    comparisonTitle: "مسار الاندماج في النمسا",
    comparisonIntro: "يركز ÖIF B1 على مهام التحدث والكتابة المستخدمة في سياق الاندماج الرسمي في النمسا.",
    comparisonFacts: [
      { title: "البلد", text: "النمسا" },
      { title: "المستوى", text: "B1" },
      { title: "التركيز", text: "موضوعات نمساوية، والتخطيط، ووصف الصور، والكتابة الموجهة" }
    ],
    comparisonLink: "اطلع على كتب ÖIF B1",
    overviewTitle: "نظرة عامة على امتحان ÖIF B1",
    overviewDescription: "امتحان ÖIF B1 Integrationprüfung هو امتحان اندماج رسمي في النمسا. هذا القسم يشرح الامتحان ويساعدك على اختيار كتاب ÖIF B1 المناسب للتحدث أو الكتابة.",
    overviewFacts: [
      { title: "ما الهدف من الامتحان", text: "هو جزء من نظام الاندماج في النمسا ويُستخدم كإثبات رسمي للغة والاندماج ضمن الإطار المعمول به." },
      { title: "في ماذا قد يساعد النجاح", text: "اجتياز الامتحان قد يساعد في متطلبات مثل Modul 2 ضمن اتفاق الاندماج، وقد يكون مهمًا في بعض ملفات الإقامة الدائمة أو الجنسية بحسب حالتك." },
      { title: "ماذا تثبت الشهادة", text: "تثبت الشهادة أنك وصلت إلى مستوى B1 في الألمانية ضمن صيغة امتحان ÖIF المعترف بها رسميًا." },
      { title: "ملاحظة مهمة", text: "تختلف المتطلبات القانونية حسب وضع الإقامة والحالة الفردية، لذلك يجب دائمًا التحقق من أحدث تعليمات ÖIF والجهات الرسمية في النمسا." }
    ]
  },
  fide: {
    booksHeading: "كتب fide A2 والعينات المجانية",
    booksIntro: "يركز هذان الكتابان على مهام التحدث والكتابة الخاصة بامتحان fide A2 في سويسرا. ملف العينة PDF متاح حاليًا بالإنجليزية فقط، لكنه يُستخدم لجميع اللغات.",
    comparisonEyebrow: "fide A2",
    comparisonTitle: "تحضير A2 مخصص لسويسرا",
    comparisonIntro: "يركز fide A2 على مهام التواصل المرتبطة بالحياة اليومية في سويسرا.",
    comparisonFacts: [
      { title: "البلد", text: "سويسرا" },
      { title: "المستوى", text: "A2" },
      { title: "التركيز", text: "وصف الصور، ولعب الأدوار، والمحادثة، والاستمارات، والبريد الإلكتروني القصير" }
    ],
    comparisonLink: "اطلع على كتب fide A2",
    overviewTitle: "نظرة عامة على امتحان fide A2",
    overviewDescription: "يقيس امتحان fide القدرة على التواصل في مواقف الحياة اليومية في سويسرا. هذا القسم يوضح باختصار أنواع المهام التي تغطيها كتب fide A2 للتحدث والكتابة.",
    overviewFacts: [
      { title: "صيغة التحدث", text: "يشمل الجزء الشفهي وصف صورة، ولعب أدوار، ومحادثة قصيرة. وتأتي الموضوعات من الحياة اليومية في سويسرا مثل العمل والسكن والصحة والمدرسة والمواصلات والجهات الرسمية." },
      { title: "صيغة الكتابة", text: "يركز الجزء الكتابي بشكل خاص على مهمتي Formular + Bemerkungen وKurze E-Mail." },
      { title: "المستوى والاستخدام", text: "هذه الكتب مناسبة للمتعلمين الذين يعملون على مستوى fide A2 ويريدون تحضيرًا أكثر دقة لمواقف الحياة اليومية في سويسرا." },
      { title: "ماذا توفر الكتب", text: "يضم كتاب التحدث 43 مجموعة تدريبية، بينما يضم كتاب الكتابة 22 مجموعة، بحيث يمكنك الانتقال من العينة إلى تدريب منتظم في الكتاب الكامل." }
    ]
  }
} %}
{% set localizedBookContent = {
  "dtz-speaking": {
    panelLabel: "كتاب التحدث",
    title: site.books["dtz-speaking"].localizedTitles[currentLang] or site.books["dtz-speaking"].title,
    summary: "كتاب DTZ B1 للتحدث يضم 60 تدريبًا على التعريف بالنفس، والتحدث عن الصور والتجارب، والتخطيط مع شريك، مع إجابات نموذجية وعبارات مفيدة وأسئلة متابعة ومفردات ألماني-إنجليزي.",
    features: [
      "60 تدريبًا تغطي جميع أجزاء الامتحان الشفهي الثلاثة",
      "إجابات أو حوارات نموذجية مع أسئلة ممتحن محتملة",
      "عبارات مفيدة ومفردات ألماني-إنجليزي وتمارين كلام قصيرة"
    ],
    sampleTitle: "عينة مجانية من 3 مهام",
    sampleDescription: "تساعدك على رؤية شكل المهمة وطريقة الشرح والدعم اللغوي في الكتاب الكامل.",
    ctaLabel: "احصل على عينة DTZ للتحدث"
  },
  "dtz-writing": {
    panelLabel: "كتاب الكتابة",
    title: site.books["dtz-writing"].localizedTitles[currentLang] or site.books["dtz-writing"].title,
    summary: "كتاب DTZ B1 للكتابة يركز على المهمة الأساسية في الامتحان: كتابة رسائل ونصوص قصيرة مع أربع نقاط محتوى. يتضمن 30 وحدة تدريبية و5 مهام محاكاة كاملة.",
    features: [
      "30 وحدة عملية تغطي أهم أنواع نصوص DTZ",
      "نصوص نموذجية وعبارات مفيدة وأخطاء شائعة وقوائم مراجعة",
      "5 مهام محاكاة كاملة مع حلول نموذجية"
    ],
    sampleTitle: "عينة مجانية من 4 مهام",
    sampleDescription: "تعرض نوع الأسئلة وبنية النص والدعم الموجود في الكتاب الكامل.",
    ctaLabel: "احصل على عينة DTZ للكتابة"
  },
  "oeif-speaking": {
    panelLabel: "كتاب التحدث",
    title: site.books["oeif-speaking"].localizedTitles[currentLang] or site.books["oeif-speaking"].title,
    summary: "كتاب ÖIF B1 للتحدث يضم 85 وحدة مركزة: 30 حوار تخطيط، و30 موضوعًا للرأي والمناقشة، و25 مهمة لوصف الصور، مع دعم بالمفردات وأسئلة متابعة.",
    features: [
      "30 حوار تخطيط و30 موضوع مناقشة و25 مهمة وصف صورة",
      "إجابات أو ردود نموذجية وأسئلة ممتحن وعبارات قابلة لإعادة الاستخدام",
      "موضوعات يومية على الطريقة النمساوية مثل المواعيد والسكن والعمل والتسوق"
    ],
    sampleTitle: "عينة مجانية من 3 مهام",
    sampleDescription: "تعرض أسلوب الحوار والمفردات وطبيعة أسئلة المتابعة الموجودة في الكتاب.",
    ctaLabel: "احصل على عينة ÖIF للتحدث"
  },
  "oeif-writing": {
    panelLabel: "كتاب الكتابة",
    title: site.books["oeif-writing"].localizedTitles[currentLang] or site.books["oeif-writing"].title,
    summary: "كتاب ÖIF B1 للكتابة يحتوي على 30 وحدة موجهة تشمل الرسائل الشخصية والرسمية والشكاوى والآراء القصيرة، مع مواقف من الحياة في النمسا وقوائم مراجعة ومهام محاكاة.",
    features: [
      "30 وحدة كتابة موجهة موزعة على أربعة فصول عملية",
      "مواقف نمساوية مع عبارات جاهزة وقوائم مراجعة ونصوص نموذجية",
      "دعم مدمج للامتحان يشمل مهام محاكاة وبنية مساعدة عند التوتر"
    ],
    sampleTitle: "عينة مجانية من 4 مهام",
    sampleDescription: "توضح أسلوب الكتابة المطلوب والبنية والدعم المستخدم في الكتاب الكامل.",
    ctaLabel: "احصل على عينة ÖIF للكتابة"
  },
  "fide-speaking": {
    panelLabel: "كتاب التحدث",
    title: "fide A2 Speaking",
    summary: "يوفر كتاب fide A2 للتحدث 43 مجموعة تدريبية لوصف الصور ولعب الأدوار والمحادثة، مع موضوعات من الحياة اليومية في سويسرا.",
    features: [
      "43 مجموعة تدريبية لأنواع المهام الثلاثة الأساسية في قسم التحدث",
      "موضوعات من الحياة اليومية في سويسرا مثل العمل والسكن والصحة والمدرسة والمواصلات والجهات الرسمية",
      "خيارا Kindle والنسخة الورقية لمواصلة التدريب بعد العينة المجانية"
    ],
    sampleTitle: "عينة مجانية من مجموعة واحدة",
    sampleDescription: "ملف PDF الإنجليزي يوضح شكل قسم التحدث في fide A2 من خلال وصف صورة ولعب أدوار ومحادثة قصيرة.",
    ctaLabel: "افتح عينة fide للتحدث"
  },
  "fide-writing": {
    panelLabel: "كتاب الكتابة",
    title: "fide A2 Writing",
    summary: "يوفر كتاب fide A2 للكتابة 22 مجموعة تدريبية لصيغتي Formular + Bemerkungen وKurze E-Mail ضمن مواقف من الحياة اليومية في سويسرا.",
    features: [
      "22 مجموعة تدريبية لأهم صيغتين في قسم الكتابة في fide A2",
      "موضوعات مثل العمل والجهات الرسمية والصحة والسكن والمدرسة والمواصلات",
      "عينة مجانية تساعدك على رؤية البنية قبل شراء الكتاب الكامل"
    ],
    sampleTitle: "عينة مجانية من مجموعة واحدة",
    sampleDescription: "ملف PDF الإنجليزي يوضح مهمة استمارة ومهمة بريد إلكتروني قصير في fide A2 للكتابة.",
    ctaLabel: "افتح عينة fide للكتابة"
  }
} %}
{% set comparisonSection = {
  eyebrow: "مقارنة سريعة",
  title: "اختر مسار الامتحان المناسب قبل أن تختار الكتاب.",
  intro: "تقدّم المسارات الثلاثة تحضيرًا مركزًا للتحدث والكتابة، لكن سياق الامتحان والبلد واستخدام الشهادة يختلف بين ألمانيا والنمسا وسويسرا."
} %}
{% set finalCta = {
  eyebrow: "اختر الامتحان أولًا ثم المهارة",
  title: "اختر الامتحان، وافتح العينة المجانية، ثم انتقل إلى الكتاب الكامل عندما تكون جاهزًا.",
  intro: "إذا كنت تحتاج إلى تحضير DTZ B1 في ألمانيا فابدأ بقسم DTZ. وإذا كنت تحتاج إلى تحضير ÖIF B1 في النمسا فابدأ بقسم ÖIF. وإذا كنت تحتاج إلى تحضير fide A2 في سويسرا فابدأ بقسم fide. في كل حالة يمكنك البدء بالعينة المجانية ثم متابعة التحضير بكتاب التحدث أو الكتابة الكامل."
} %}

<section class="hero hero-dual">
  <div class="container">
    <div class="hero-layout">
      <div class="hero-copy">
        <p class="eyebrow">التحضير لامتحانات DTZ B1 وÖIF B1 وfide A2</p>
        <h1>اختر كتبًا عملية للتحدث والكتابة لألمانيا أو النمسا أو سويسرا.</h1>
        <p class="hero-intro">إذا كنت تستعد لامتحان DTZ B1 في ألمانيا أو ÖIF B1 في النمسا أو fide A2 في سويسرا، فابدأ من هنا. تساعدك هذه الصفحة على مقارنة مسارات الامتحان، واختيار كتاب التحدث أو الكتابة المناسب، وفتح العينة المجانية قبل الشراء.</p>
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
      <p class="eyebrow">نظرة عامة على الامتحانات</p>
      <h2>قارن بين امتحانات DTZ B1 وÖIF B1 وfide A2</h2>
      <p>إذا أردت بعد الاطلاع على الكتب معرفة تفاصيل الامتحانات، فهذا القسم يجمع لك الشكل العام والهدف وسياق استخدام الشهادة في المسارات الثلاثة.</p>
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
