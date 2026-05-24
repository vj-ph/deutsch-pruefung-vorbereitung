---
layout: base
templateEngineOverride: njk
title: "Deutsch Kompass DTZ, ÖIF & fide"
description: "Prepare for DTZ B1 in Germany, ÖIF B1 in Austria, and fide A2 in Switzerland with speaking books, writing books, and free sample books."
permalink: /
lang: en
dir: ltr
currentLang: en
homeUrl: /
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
languageSwitcherLabel: "Language"
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
  homeLabel: Home
  footerIntro: "Speaking and writing prep books for DTZ B1 in Germany, ÖIF B1 in Austria, and fide A2 in Switzerland."
  examSectionsLabel: Exam Sections
  booksLabel: Books
  sampleLabel: Sample
  fullBookLabel: Full Book
  rightsReserved: All rights reserved.
---

{% from "cta-helpers.njk" import ctaLink, ctaTrackingAttrs with context %}
{% set homeExamOrder = pageExamOrder or site.examOrder %}
{% set purchaseFlow = {
  eyebrow: 'Before you click',
  title: 'What happens after you click?',
  intro: 'Every sample is free on this site. DTZ and ÖIF books are available as discounted Gumroad PDFs and also on Amazon. The fide A2 books are currently available on Amazon in Kindle and paperback formats.',
  steps: [
    {
      title: 'Open the sample or store page',
      text: 'The sample button opens the free PDF directly from this site. The purchase buttons open the selected store in a new tab.'
    },
    {
      title: 'Check the free sample first',
      text: 'Open the free ' ~ site.sales.format ~ ' sample directly from this site and decide if the book fits you.'
    },
    {
      title: 'Buy in the format you want',
      text: 'When you are ready, choose the store that matches the title: Gumroad for discounted DTZ and ÖIF PDFs, or Amazon for Kindle and paperback editions, including the fide A2 books.'
    }
  ]
} %}
{% set productUi = {
  fullBook: 'Full book',
  freeSample: 'Free sample',
  format: 'Format',
  pages: 'Pages',
  free: 'Free',
  discountPrefix: 'Use discount code ',
  discountSuffix: ' for 20% off on Gumroad.',
  clickNote: 'The sample button opens the PDF directly from this site. The purchase buttons open the selected store in a new tab.'
} %}
{% set heroButtonLabels = {
  dtz: 'See DTZ B1 books, samples, and prices',
  oeif: 'See ÖIF B1 books, samples, and prices',
  fide: 'See fide A2 books, samples, and prices',
  dtzShort: 'See DTZ B1 books',
  oeifShort: 'See ÖIF B1 books',
  fideShort: 'See fide A2 books'
} %}
{% set reviewsSection = {
  eyebrow: 'Book reviews',
  title: 'What learners say about these books',
  intro: 'These short reviews come from learners who used these books for practical German exam preparation.',
  items: [
    {
      quote: "Daily conversation isn't a problem for me, and I communicate well with my colleagues in the logistics industry. However, the DTZ exam covers topics I rarely encounter in my everyday life. These books provided a wide variety of speaking and writing prompts along with example answers, which were essential for my B1 preparation and helped me succeed!",
      author: 'Ahmed'
    },
    {
      quote: "While the official DTZ preparation book only provides a few practice tests, this DTZ B1 speaking book offers 60 different exercises! It's a much more comprehensive resource for anyone serious about passing.",
      author: 'Mehmet'
    },
    {
      quote: 'I failed the ÖIF B1 exam twice because of the speaking and writing sections, even though I found reading quite easy. These books were a lifesaver for my third attempt; they covered all the exam topics thoroughly and finally helped me pass.',
      author: 'Oleksandr'
    }
  ]
} %}

<section class="hero hero-dual">
  <div class="container">
    <div class="hero-layout">
      <div class="hero-copy">
        <p class="eyebrow">DTZ B1, ÖIF B1, and fide A2 exam preparation</p>
        <h1>Choose practical speaking and writing books for Germany, Austria, or Switzerland.</h1>
        <p class="hero-intro">If you are preparing for DTZ B1 in Germany, the ÖIF B1 Integrationprüfung in Austria, or fide A2 in Switzerland, start here. This page helps you compare the exam tracks, choose the right speaking or writing book, and open a free sample before you buy.</p>
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
  <section id="{{ exam.anchor }}-books" class="home-section{% if loop.index % 2 == 0 %} home-section-alt{% endif %}">
    <div class="container">
      <div class="section-heading">
        <h2>{{ exam.title }} books and free sample books</h2>
        <p>{{ exam.booksIntro }}</p>
      </div>
      <div class="hero-book-grid">
        {% for bookKey in exam.books %}
          {% set book = site.books[bookKey] %}
          {% set bookDisplayTitle = (book.localizedTitles and book.localizedTitles[currentLang]) or book.title %}
          <article class="book-panel{% if loop.first %} book-panel-accent{% endif %}">
            <p class="book-panel__label">{{ book.examSection }} workbook</p>
        <h2>{{ bookDisplayTitle }}</h2>
            <p>{{ book.summary }}</p>
            <ul class="check-list">
              {% for feature in book.features %}
                <li>{{ feature }}</li>
              {% endfor %}
            </ul>
            <p><strong>{{ book.sample.title }}:</strong> {{ book.sample.description }}</p>
            {% include "book-facts.njk" %}
            <div class="button-row">
              <a href="{{ ctaLink(book | samplePdfPath(currentLang), { content: book.key ~ '-sample-section' }) }}" class="btn btn-primary" target="_blank" rel="noopener" {{ ctaTrackingAttrs('sample_pdf', book.key, 'books-section') }}>{{ book.cta.freeSample.label }}</a>
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
      <p class="eyebrow">Quick comparison</p>
      <h2>Choose the right exam track before you choose the book.</h2>
      <p>All three paths offer focused speaking and writing prep, but the exam context, country, and certificate use are different in Germany, Austria, and Switzerland.</p>
    </div>
    <div class="comparison-grid">
      {% for examKey in homeExamOrder %}
        {% set exam = site.exams[examKey] %}
        <article class="comparison-card">
          <p class="comparison-card__eyebrow">{{ exam.navLabel }}</p>
          <h3>{{ exam.heroLabel }}</h3>
          <p class="comparison-card__intro">{{ exam.description }}</p>
          <ul class="comparison-list">
            {% for fact in exam.facts %}
              {% if loop.index <= 3 %}
                <li>
                  <strong>{{ fact.title }}:</strong>
                  {{ fact.text }}
                </li>
              {% endif %}
            {% endfor %}
          </ul>
          <a href="#{{ exam.anchor }}-books" class="text-link">See {{ exam.title }} books</a>
        </article>
      {% endfor %}
    </div>
  </div>
</section>

{% include "purchase-flow.njk" %}

<section class="home-section home-section-alt">
  <div class="container">
    <div class="section-heading">
      <p class="eyebrow">Exam overview</p>
      <h2>Compare the DTZ B1, ÖIF B1, and fide A2 exams</h2>
      <p>If you want the exam details after reviewing the books, this section brings together the key format, purpose, and certificate context for all three exam tracks.</p>
    </div>
    <div class="exam-overview-stack">
      {% for examKey in homeExamOrder %}
        {% set exam = site.exams[examKey] %}
        <div id="{{ exam.anchor }}" class="exam-overview-block">
          <div class="section-heading">
            <p class="eyebrow">{{ exam.navLabel }}</p>
            <h2>{{ exam.title }} exam overview</h2>
            <p>{{ exam.description }}</p>
          </div>
          <div class="feature-grid">
            {% for fact in exam.facts %}
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
        <p class="eyebrow">Choose by exam, then by skill</p>
        <h2>Pick your exam, get the sample, and move to the full book when you are ready.</h2>
        <p>If you need DTZ B1 preparation for Germany, go straight to the DTZ section. If you need ÖIF B1 preparation for Austria, use the ÖIF section. If you need fide A2 preparation for Switzerland, use the fide section. In each case, you can start with a free sample book and then continue with the full speaking or writing book.</p>
      </div>
      <div class="button-row">
        <a href="#dtz-b1-books" class="btn btn-secondary">{{ heroButtonLabels.dtzShort }}</a>
        <a href="#oeif-b1-books" class="btn btn-secondary">{{ heroButtonLabels.oeifShort }}</a>
        <a href="#fide-a2-books" class="btn btn-secondary">{{ heroButtonLabels.fideShort }}</a>
      </div>
    </div>
  </div>
</section>
