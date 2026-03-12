---
layout: base
title: "DTZ B1 & ÖIF B1 Exam Prep Books - Speaking, Writing & Free Samples"
description: "Prepare for the DTZ B1 exam in Germany and the ÖIF B1 Integrationprüfung in Austria with speaking books, writing books, and free sample books for both exams."
permalink: /
---

{% from "cta-helpers.njk" import ctaLink with context %}

<section class="hero hero-dual">
  <div class="container">
    <p class="eyebrow">DTZ B1 and ÖIF B1 exam preparation</p>
    <h1>Find the right speaking and writing prep books for DTZ B1 or ÖIF B1.</h1>
    <p class="hero-intro">Prepare for the DTZ B1 exam in Germany or the ÖIF B1 Integrationprüfung in Austria with targeted speaking books, writing books, and free sample books. Each section below explains the exam and shows the books that match that exact format.</p>
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
            <a href="#{{ exam.anchor }}" class="btn btn-primary">Explore {{ exam.navLabel }}</a>
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
        <h2>{{ exam.title }} exam explanation and book overview</h2>
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
        <h2>{{ exam.title }} books, sample books, and next steps</h2>
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
        <h2>Start with the exam you are actually taking, then choose the speaking or writing book that closes your biggest gap.</h2>
        <p>If you need DTZ B1 preparation for Germany, start with the DTZ section. If you need ÖIF B1 preparation for Austria, start with the ÖIF section. Then preview the sample book or go straight to the full book.</p>
      </div>
      <div class="button-row">
        <a href="#dtz-b1" class="btn btn-secondary">See DTZ B1 books</a>
        <a href="#oeif-b1" class="btn btn-secondary">See ÖIF B1 books</a>
      </div>
    </div>
  </div>
</section>
