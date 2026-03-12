---
layout: base
title: "DTZ B1 & ÖIF B1 Exam Prep Books - Speaking, Writing & Free Samples"
description: "Prepare for the DTZ B1 exam in Germany and the ÖIF B1 Integrationprüfung in Austria with speaking books, writing books, and free sample books for both exams."
permalink: /
lang: en
dir: ltr
currentLang: en
homeUrl: /
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
  footerIntro: "Speaking and writing prep books for the DTZ B1 exam in Germany and the ÖIF B1 Integrationprüfung in Austria."
  examSectionsLabel: Exam Sections
  booksLabel: Books
  sampleLabel: Sample
  fullBookLabel: Full Book
  rightsReserved: All rights reserved.
---

{% from "cta-helpers.njk" import ctaLink with context %}

<section class="hero hero-dual">
  <div class="container">
    <p class="eyebrow">DTZ B1 and ÖIF B1 exam preparation</p>
    <h1>Choose the right DTZ or ÖIF book and start preparing with real exam-style practice.</h1>
    <p class="hero-intro">If you are preparing for DTZ B1 in Germany or the ÖIF B1 Integrationprüfung in Austria, start here. This page helps you choose the right speaking book or writing book, compare both exam tracks, and download a free sample before you buy.</p>
    {% set switcherClass = 'language-switcher--hero' %}
    {% include "language-switcher.njk" %}
    <div class="hero-book-grid">
      {% for examKey in site.examOrder %}
        {% set exam = site.exams[examKey] %}
        <article class="book-panel{% if loop.first %} book-panel-accent{% endif %}">
          <p class="book-panel__label">{{ exam.heroLabel }}</p>
          <h2>{{ exam.heroTitle }}</h2>
          <p>{{ exam.heroText }}</p>
          <ul class="check-list">
            {% for point in exam.heroPoints %}
              <li>{{ point }}</li>
            {% endfor %}
          </ul>
          <div class="button-row">
            <a href="#{{ exam.anchor }}" class="btn btn-primary">See {{ exam.navLabel }} Books</a>
          </div>
        </article>
      {% endfor %}
    </div>
  </div>
</section>

{% for examKey in site.examOrder %}
  {% set exam = site.exams[examKey] %}
  <section id="{{ exam.anchor }}" class="home-section{% if loop.index % 2 == 0 %} home-section-alt{% endif %}">
    <div class="container">
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
  </section>

  <section class="home-section{% if loop.index % 2 == 0 %}{% else %} home-section-alt{% endif %}">
    <div class="container">
      <div class="section-heading">
        <h2>{{ exam.title }} books and free sample books</h2>
        <p>{{ exam.booksIntro }}</p>
      </div>
      <div class="hero-book-grid">
        {% for bookKey in exam.books %}
          {% set book = site.books[bookKey] %}
          <article class="book-panel{% if loop.first %} book-panel-accent{% endif %}">
            <p class="book-panel__label">{{ book.examSection }} workbook</p>
            <h2>{{ book.title }}</h2>
            <p>{{ book.summary }}</p>
            <ul class="check-list">
              {% for feature in book.features %}
                <li>{{ feature }}</li>
              {% endfor %}
            </ul>
            <p><strong>{{ book.sample.title }}:</strong> {{ book.sample.description }}</p>
            <div class="button-row">
              <a href="{{ ctaLink(book.gumroad.freeSample, { content: book.key ~ '-sample-section' }) }}" class="btn btn-primary" target="_blank" rel="noopener">{{ book.cta.freeSample.label }}</a>
              <a href="{{ ctaLink(book.gumroad.fullBook, { content: book.key ~ '-full-section' }) }}" class="btn btn-outline" target="_blank" rel="noopener">{{ book.cta.fullBook.label }}</a>
            </div>
          </article>
        {% endfor %}
      </div>
    </div>
  </section>
{% endfor %}

<section class="home-section final-cta-section">
  <div class="container">
    <div class="final-cta">
      <div>
        <p class="eyebrow">Choose by exam, then by skill</p>
        <h2>Pick your exam, get the sample, and move to the full book when you are ready.</h2>
        <p>If you need DTZ B1 preparation for Germany, go straight to the DTZ section. If you need ÖIF B1 preparation for Austria, use the ÖIF section. In both cases, you can start with a free sample book and then continue with the full speaking or writing book.</p>
      </div>
      <div class="button-row">
        <a href="#dtz-b1" class="btn btn-secondary">See DTZ B1 books</a>
        <a href="#oeif-b1" class="btn btn-secondary">See ÖIF B1 books</a>
      </div>
    </div>
  </div>
</section>
