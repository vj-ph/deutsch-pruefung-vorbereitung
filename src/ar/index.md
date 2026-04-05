---
layout: base
templateEngineOverride: njk
title: "Deutsch Kompass DTZ & ÖIF"
description: "استعد لامتحان DTZ B1 في ألمانيا وامتحان ÖIF B1 Integrationprüfung في النمسا من خلال كتب التحدث والكتابة مع عينات مجانية قبل الشراء."
permalink: /ar/
lang: ar
dir: rtl
currentLang: ar
homeUrl: /ar/
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
  footerIntro: "كتب تحضير للتحدث والكتابة لامتحان DTZ B1 في ألمانيا وامتحان ÖIF B1 Integrationprüfung في النمسا."
  examSectionsLabel: أقسام الامتحان
  booksLabel: الكتب
  sampleLabel: عينة مجانية
  fullBookLabel: الكتاب الكامل
  rightsReserved: جميع الحقوق محفوظة.
---

{% from "cta-helpers.njk" import ctaLink, ctaTrackingAttrs with context %}
{% set heroTrustBullets = [
  "كل الكتب الكاملة بسعر " ~ site.sales.fullBookPriceDisplay,
  "صفحات عينات PDF مجانية على الموقع",
  "اشترِ الكتب الكاملة على Gumroad وحمّل PDF هناك"
] %}
{% set purchaseFlow = {
  eyebrow: "قبل أن تنقر",
  title: "ماذا يحدث بعد أن تنقر؟",
  intro: "كل كتاب كامل بسعر " ~ site.sales.fullBookPriceDisplay ~ "، وكل عينة مجانية، وكل كتاب يُسلَّم بصيغة PDF.",
  steps: [
    {
      title: "افتح صفحة المنتج",
      text: "زر العينة يفتح ملف PDF المجاني مباشرة من هذا الموقع، وزر الكتاب الكامل يفتح Gumroad للنسخة المدفوعة."
    },
    {
      title: "تحقق من العينة المجانية أولًا",
      text: "افتح ملف PDF المجاني مباشرة من هذا الموقع وتحقق مما إذا كان الكتاب مناسبًا لك."
    },
    {
      title: "اشترِ وحمّل",
      text: "عندما تكون جاهزًا، اشترِ الكتاب الكامل على Gumroad وحمّل PDF هناك."
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
  discountSuffix: " للحصول على خصم 20% عند الدفع.",
  clickNote: "زر العينة يفتح ملف PDF مباشرة من هذا الموقع، أما زر الكتاب الكامل فيفتح Gumroad لإتمام الشراء والتنزيل."
} %}
{% set heroButtonLabels = {
  dtz: "اطلع على كتب DTZ B1 والعينات والأسعار",
  oeif: "اطلع على كتب ÖIF B1 والعينات والأسعار",
  dtzShort: "اطلع على كتب DTZ B1",
  oeifShort: "اطلع على كتب ÖIF B1"
} %}
{% set reviewsSection = {
  eyebrow: "آراء حول الكتب",
  title: "ماذا يقول المتعلمون عن هذه الكتب؟",
  intro: "هذه مراجعات قصيرة من متعلمين استخدموا الكتب للتحضير لامتحان DTZ B1 أو ÖIF B1.",
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

<section class="hero hero-dual">
  <div class="container">
    <div class="hero-layout">
      <div class="hero-copy">
        <p class="eyebrow">التحضير لامتحاني DTZ B1 وÖIF B1</p>
        <h1>اجتز DTZ B1 أو ÖIF B1 بمساعدة كتب عملية للتحدث والكتابة.</h1>
        <p class="hero-intro">إذا كنت تستعد لامتحان DTZ B1 في ألمانيا أو لامتحان ÖIF B1 Integrationprüfung في النمسا، فابدأ من هنا. تساعدك هذه الصفحة على اختيار كتاب التحدث أو الكتابة المناسب، ومقارنة مساري الامتحان، وتحميل عينة مجانية قبل الشراء.</p>
        {% set switcherClass = 'language-switcher--hero' %}
        {% include "language-switcher.njk" %}
        <div class="button-row hero-actions">
          <a href="#dtz-b1-books" class="btn btn-primary">{{ heroButtonLabels.dtzShort }}</a>
          <a href="#oeif-b1-books" class="btn btn-outline btn-outline-light">{{ heroButtonLabels.oeifShort }}</a>
        </div>
      </div>
    </div>
  </div>
</section>

{% include "book-reviews.njk" %}

<section id="dtz-b1-books" class="home-section">
  <div class="container">
    <div class="section-heading">
      <h2>كتب DTZ B1 والعينات المجانية</h2>
      <p>ابدأ بالمهارة التي تشعر أنها الأضعف الآن، أو استخدم الكتابين معًا إذا كنت تريد خطة أشمل للتحدث والكتابة.</p>
    </div>
    <div class="hero-book-grid">
      <article class="book-panel book-panel-accent">
        <p class="book-panel__label">كتاب التحدث</p>
        <h2>{{ site.books['dtz-speaking'].localizedTitles[currentLang] or site.books['dtz-speaking'].title }}</h2>
        <p>كتاب DTZ B1 للتحدث يضم 60 تدريبًا على التعريف بالنفس، والتحدث عن الصور والتجارب، والتخطيط مع شريك، مع إجابات نموذجية وعبارات مفيدة وأسئلة متابعة ومفردات ألماني-إنجليزي.</p>
        <ul class="check-list">
          <li>60 تدريبًا تغطي جميع أجزاء الامتحان الشفهي الثلاثة</li>
          <li>إجابات أو حوارات نموذجية مع أسئلة ممتحن محتملة</li>
          <li>عبارات مفيدة ومفردات ألماني-إنجليزي وتمارين كلام قصيرة</li>
        </ul>
        <p><strong>عينة مجانية من 3 مهام:</strong> عينة تساعدك على رؤية شكل المهمة وطريقة الشرح والدعم اللغوي في الكتاب الكامل.</p>
        {% set bookKey = 'dtz-speaking' %}
        {% set bookDisplayTitle = site.books['dtz-speaking'].localizedTitles[currentLang] or site.books['dtz-speaking'].title %}
        {% include "book-facts.njk" %}
        <div class="button-row">
          <a href="{{ ctaLink(site.books['dtz-speaking'] | samplePdfPath(currentLang), { content: 'dtz-speaking-sample-ar' }) }}" class="btn btn-primary" target="_blank" rel="noopener" {{ ctaTrackingAttrs('sample_pdf', 'dtz-speaking', 'books-section') }}>احصل على عينة DTZ للتحدث</a>
          <a href="{{ ctaLink(site.books['dtz-speaking'].gumroad.fullBook, { content: 'dtz-speaking-full-ar' }) }}" class="btn btn-outline" target="_blank" rel="noopener" {{ ctaTrackingAttrs('full_book', 'dtz-speaking', 'books-section') }}>اشترِ كتاب DTZ للتحدث</a>
        </div>
      </article>
      <article class="book-panel">
        <p class="book-panel__label">كتاب الكتابة</p>
        <h2>{{ site.books['dtz-writing'].localizedTitles[currentLang] or site.books['dtz-writing'].title }}</h2>
        <p>كتاب DTZ B1 للكتابة يركز على المهمة الأساسية في الامتحان: كتابة رسائل ونصوص قصيرة مع أربع نقاط محتوى. يتضمن 30 وحدة تدريبية و5 مهام محاكاة كاملة.</p>
        <ul class="check-list">
          <li>30 وحدة عملية تغطي أهم أنواع نصوص DTZ</li>
          <li>نصوص نموذجية وعبارات مفيدة وأخطاء شائعة وقوائم مراجعة</li>
          <li>5 مهام محاكاة كاملة مع حلول نموذجية</li>
        </ul>
        <p><strong>عينة مجانية من 4 مهام:</strong> عينة مجانية تعرض نوع الأسئلة وبنية النص والدعم الموجود في الكتاب الكامل.</p>
        {% set bookKey = 'dtz-writing' %}
        {% set bookDisplayTitle = site.books['dtz-writing'].localizedTitles[currentLang] or site.books['dtz-writing'].title %}
        {% include "book-facts.njk" %}
        <div class="button-row">
          <a href="{{ ctaLink(site.books['dtz-writing'] | samplePdfPath(currentLang), { content: 'dtz-writing-sample-ar' }) }}" class="btn btn-primary" target="_blank" rel="noopener" {{ ctaTrackingAttrs('sample_pdf', 'dtz-writing', 'books-section') }}>احصل على عينة DTZ للكتابة</a>
          <a href="{{ ctaLink(site.books['dtz-writing'].gumroad.fullBook, { content: 'dtz-writing-full-ar' }) }}" class="btn btn-outline" target="_blank" rel="noopener" {{ ctaTrackingAttrs('full_book', 'dtz-writing', 'books-section') }}>اشترِ كتاب DTZ للكتابة</a>
        </div>
      </article>
    </div>
  </div>
</section>

<section id="oeif-b1-books" class="home-section home-section-alt">
  <div class="container">
    <div class="section-heading">
      <h2>كتب ÖIF B1 والعينات المجانية</h2>
      <p>هذه الكتب تساعدك على التدرب على مهام التحدث والكتابة الشائعة في النمسا، مع إمكانية تجربة العينة المجانية قبل شراء الكتاب الكامل.</p>
    </div>
    <div class="hero-book-grid">
      <article class="book-panel book-panel-accent">
        <p class="book-panel__label">كتاب التحدث</p>
        <h2>{{ site.books['oeif-speaking'].localizedTitles[currentLang] or site.books['oeif-speaking'].title }}</h2>
        <p>كتاب ÖIF B1 للتحدث يضم 85 وحدة مركزة: 30 حوار تخطيط، و30 موضوعًا للرأي والمناقشة، و25 مهمة لوصف الصور، مع دعم بالمفردات وأسئلة متابعة.</p>
        <ul class="check-list">
          <li>30 حوار تخطيط و30 موضوع مناقشة و25 مهمة وصف صورة</li>
          <li>إجابات أو ردود نموذجية وأسئلة ممتحن وعبارات قابلة لإعادة الاستخدام</li>
          <li>موضوعات يومية على الطريقة النمساوية مثل المواعيد والسكن والعمل والتسوق</li>
        </ul>
        <p><strong>عينة مجانية من 3 مهام:</strong> تعرض أسلوب الحوار والمفردات وطبيعة أسئلة المتابعة الموجودة في الكتاب.</p>
        {% set bookKey = 'oeif-speaking' %}
        {% set bookDisplayTitle = site.books['oeif-speaking'].localizedTitles[currentLang] or site.books['oeif-speaking'].title %}
        {% include "book-facts.njk" %}
        <div class="button-row">
          <a href="{{ ctaLink(site.books['oeif-speaking'] | samplePdfPath(currentLang), { content: 'oeif-speaking-sample-ar' }) }}" class="btn btn-primary" target="_blank" rel="noopener" {{ ctaTrackingAttrs('sample_pdf', 'oeif-speaking', 'books-section') }}>احصل على عينة ÖIF للتحدث</a>
          <a href="{{ ctaLink(site.books['oeif-speaking'].gumroad.fullBook, { content: 'oeif-speaking-full-ar' }) }}" class="btn btn-outline" target="_blank" rel="noopener" {{ ctaTrackingAttrs('full_book', 'oeif-speaking', 'books-section') }}>اشترِ كتاب ÖIF للتحدث</a>
        </div>
      </article>
      <article class="book-panel">
        <p class="book-panel__label">كتاب الكتابة</p>
        <h2>{{ site.books['oeif-writing'].localizedTitles[currentLang] or site.books['oeif-writing'].title }}</h2>
        <p>كتاب ÖIF B1 للكتابة يحتوي على 30 وحدة موجهة تشمل الرسائل الشخصية والرسمية والشكاوى والآراء القصيرة، مع مواقف من الحياة في النمسا وقوائم مراجعة ومهام محاكاة.</p>
        <ul class="check-list">
          <li>30 وحدة كتابة موجهة موزعة على أربعة فصول عملية</li>
          <li>مواقف نمساوية مع عبارات جاهزة وقوائم مراجعة ونصوص نموذجية</li>
          <li>دعم مدمج للامتحان يشمل مهام محاكاة وبنية مساعدة عند التوتر</li>
        </ul>
        <p><strong>عينة مجانية من 4 مهام:</strong> توضح أسلوب الكتابة المطلوب والبنية والدعم المستخدم في الكتاب الكامل.</p>
        {% set bookKey = 'oeif-writing' %}
        {% set bookDisplayTitle = site.books['oeif-writing'].localizedTitles[currentLang] or site.books['oeif-writing'].title %}
        {% include "book-facts.njk" %}
        <div class="button-row">
          <a href="{{ ctaLink(site.books['oeif-writing'] | samplePdfPath(currentLang), { content: 'oeif-writing-sample-ar' }) }}" class="btn btn-primary" target="_blank" rel="noopener" {{ ctaTrackingAttrs('sample_pdf', 'oeif-writing', 'books-section') }}>احصل على عينة ÖIF للكتابة</a>
          <a href="{{ ctaLink(site.books['oeif-writing'].gumroad.fullBook, { content: 'oeif-writing-full-ar' }) }}" class="btn btn-outline" target="_blank" rel="noopener" {{ ctaTrackingAttrs('full_book', 'oeif-writing', 'books-section') }}>اشترِ كتاب ÖIF للكتابة</a>
        </div>
      </article>
    </div>
  </div>
</section>

{% include "purchase-flow.njk" %}

<section class="home-section home-section-alt">
  <div class="container">
    <div class="section-heading">
      <p class="eyebrow">نظرة عامة على الامتحان</p>
      <h2>قارن بين امتحاني DTZ B1 وÖIF B1</h2>
      <p>إذا أردت بعد الاطلاع على الكتب أن ترى صورة سريعة لكل امتحان، فهنا ستجد النقاط الأساسية لكل من DTZ B1 وÖIF B1.</p>
    </div>
    <div class="exam-overview-stack">
      <div id="dtz-b1" class="exam-overview-block">
<div class="section-heading">
      <p class="eyebrow">DTZ B1</p>
      <h2>نظرة سريعة على امتحان DTZ B1</h2>
      <p>امتحان Deutsch-Test für Zuwanderer (DTZ) هو امتحان عملي للغة الألمانية في ألمانيا. هذا القسم يشرح شكل الامتحان ويساعدك على اختيار كتاب DTZ B1 للتحدث أو كتاب DTZ B1 للكتابة.</p>
    </div>
    <div class="feature-grid">
      <article class="feature-card">
        <h3>صيغة التحدث</h3>
        <p>يشمل امتحان التحدث في DTZ ثلاث مهام: التعريف بالنفس، التحدث عن صورة وربطها بتجربة شخصية، والتخطيط مع شريك.</p>
      </article>
      <article class="feature-card">
        <h3>صيغة الكتابة</h3>
        <p>تركز مهمة الكتابة في DTZ على رسالة أو نص عملي قصير من حوالي 80 إلى 100 كلمة مع أربع نقاط محتوى.</p>
      </article>
      <article class="feature-card">
        <h3>لماذا يهم إثبات مستوى B1</h3>
        <p>شهادة DTZ بمستوى B1 يمكن أن تُستخدم كإثبات معتمد للغة الألمانية في طلبات مثل الإقامة الدائمة في ألمانيا أو التجنيس. لكن القبول النهائي يعتمد أيضًا على بقية الشروط القانونية في حالتك، لذلك يجب دائمًا مراجعة قواعد BAMF والجهات المحلية.</p>
      </article>
      <article class="feature-card">
        <h3>لمن هذه الكتب</h3>
        <p>هذه الكتب مناسبة للتعلم الذاتي، والدروس، والمجموعات الدراسية التي تريد تدريبًا عمليًا دقيقًا بدل المواد العامة.</p>
      </article>
    </div>
      </div>
      <div id="oeif-b1" class="exam-overview-block">
<div class="section-heading">
      <p class="eyebrow">ÖIF B1</p>
      <h2>نظرة سريعة على امتحان ÖIF B1</h2>
      <p>امتحان ÖIF B1 Integrationprüfung هو امتحان اندماج رسمي في النمسا. هذا القسم يشرح الامتحان ويساعدك على اختيار كتاب ÖIF B1 المناسب للتحدث أو الكتابة.</p>
    </div>
    <div class="feature-grid">
      <article class="feature-card">
        <h3>ما الهدف من الامتحان</h3>
        <p>هو جزء من نظام الاندماج في النمسا ويُستخدم كإثبات رسمي للغة والاندماج ضمن إطار الاتفاقية المعمول بها.</p>
      </article>
      <article class="feature-card">
        <h3>في ماذا قد يساعد النجاح</h3>
        <p>اجتياز الامتحان قد يساعد في متطلبات مثل Modul 2 ضمن اتفاق الاندماج، وقد يكون مهمًا في بعض ملفات الإقامة الدائمة أو الجنسية بحسب حالتك.</p>
      </article>
      <article class="feature-card">
        <h3>ماذا تثبت الشهادة</h3>
        <p>تثبت الشهادة أنك وصلت إلى مستوى B1 في الألمانية ضمن صيغة امتحان ÖIF المعترف بها رسميًا.</p>
      </article>
      <article class="feature-card">
        <h3>ملاحظة مهمة</h3>
        <p>تختلف المتطلبات القانونية حسب وضع الإقامة والحالة الفردية، لذلك يجب دائمًا التحقق من أحدث تعليمات ÖIF والجهات الرسمية في النمسا.</p>
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
        <p class="eyebrow">ابدأ باللغة التي تفضلها</p>
        <h2>اختر الامتحان أولًا، ثم ابدأ بالعينة المجانية، ثم انتقل إلى الكتاب الكامل عندما تكون جاهزًا.</h2>
        <p>إذا كنت تحتاج إلى تحضير DTZ B1 في ألمانيا فابدأ بقسم DTZ. وإذا كنت تحتاج إلى تحضير ÖIF B1 في النمسا فابدأ بقسم ÖIF. في كلتا الحالتين يمكنك تنزيل العينة المجانية أولًا ثم متابعة التحضير بالكتاب الكامل.</p>
      </div>
      <div class="button-row">
        <a href="#dtz-b1-books" class="btn btn-secondary">كتب DTZ B1</a>
        <a href="#oeif-b1-books" class="btn btn-secondary">كتب ÖIF B1</a>
      </div>
    </div>
  </div>
</section>
