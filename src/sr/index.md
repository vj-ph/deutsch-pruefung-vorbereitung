---
layout: base
templateEngineOverride: njk
title: "Deutsch Kompass DTZ & ÖIF"
description: "Pripremite se za DTZ B1 u Nemačkoj i ÖIF B1 Integrationprüfung u Austriji uz knjige za govor i pisanje i besplatne uzorke pre kupovine."
permalink: /sr/
lang: sr
dir: ltr
currentLang: sr
homeUrl: /sr/
languageSwitcherLabel: "Jezik"
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
  homeLabel: Početna
  footerIntro: "Knjige za pripremu govora i pisanja za DTZ B1 ispit u Nemačkoj i ÖIF B1 Integrationprüfung u Austriji."
  examSectionsLabel: Delovi ispita
  booksLabel: Knjige
  sampleLabel: Besplatan uzorak
  fullBookLabel: Cela knjiga
  rightsReserved: Sva prava zadržana.
---

{% from "cta-helpers.njk" import ctaLink, samplePagePath with context %}
{% set heroTrustBullets = [
  "Sve kompletne knjige koštaju " ~ site.sales.fullBookPriceDisplay,
  "Besplatne PDF stranice sa uzorcima na sajtu",
  "Kupite kompletne knjige na Gumroad-u i preuzmite PDF tamo"
] %}
{% set purchaseFlow = {
  eyebrow: "Pre nego što kliknete",
  title: "Šta se dešava posle klika?",
  intro: "Svaka kompletna knjiga košta " ~ site.sales.fullBookPriceDisplay ~ ", svaki uzorak je besplatan, a svaka knjiga se isporučuje kao PDF.",
  steps: [
    {
      title: "Otvorite stranicu proizvoda",
      text: "Dugme za uzorak otvara kratku stranicu na sajtu, a dugme za kompletnu knjigu otvara Gumroad za plaćenu verziju."
    },
    {
      title: "Prvo pogledajte besplatan uzorak",
      text: "Na stranici uzorka možete da otvorite besplatan PDF direktno sa ovog sajta i proverite da li vam knjiga odgovara."
    },
    {
      title: "Kupite i preuzmite",
      text: "Kada budete spremni, kupite kompletnu knjigu na Gumroad-u i preuzmite PDF tamo."
    }
  ]
} %}
{% set productUi = {
  fullBook: "Kompletna knjiga",
  freeSample: "Besplatan uzorak",
  format: "Format",
  pages: "Stranice",
  free: "Besplatno",
  discountPrefix: "Koristite kod za popust ",
  discountSuffix: " za 20% popusta pri plaćanju.",
  clickNote: "Dugme za uzorak otvara stranicu uzorka na sajtu sa direktnim PDF linkom, a dugme za kompletnu knjigu otvara Gumroad za kupovinu i preuzimanje."
} %}
{% set heroButtonLabels = {
  dtz: "Pogledajte DTZ B1 knjige, uzorke i cene",
  oeif: "Pogledajte ÖIF B1 knjige, uzorke i cene"
} %}

<section class="hero hero-dual">
  <div class="container">
    <p class="eyebrow">Priprema za DTZ B1 i ÖIF B1</p>
    <h1>Položite DTZ B1 ili ÖIF B1 uz praktične knjige za govor i pisanje koje vam jasno pokazuju kako da se pripremite.</h1>
    <p class="hero-intro">Ako se pripremate za DTZ B1 u Nemačkoj ili za ÖIF B1 Integrationprüfung u Austriji, ova stranica vam pomaže da izaberete pravu knjigu za govor ili pisanje, uporedite oba ispita i preuzmete besplatan uzorak pre kupovine.</p>
    {% set switcherClass = 'language-switcher--hero' %}
    {% include "language-switcher.njk" %}
    {% include "hero-trust-strip.njk" %}
    <div class="hero-book-grid">
      <article class="book-panel book-panel-accent">
        <p class="book-panel__label">DTZ B1 priprema za Nemačku</p>
        <h2>Uspeh na DTZ B1 počinje jasnom knjigom za govor i jasnom knjigom za pisanje.</h2>
        <ul class="check-list">
          <li>Knjiga za govor sadrži 60 vežbi za sva 3 dela usmenog ispita</li>
          <li>Knjiga za pisanje sadrži 30 praktičnih jedinica i 5 kompletnih probnih zadataka</li>
          <li>Možete prvo preuzeti besplatan uzorak pa zatim kupiti odgovarajuću knjigu</li>
        </ul>
        <div class="button-row">
          <a href="#dtz-b1-books" class="btn btn-primary">{{ heroButtonLabels.dtz }}</a>
        </div>
      </article>
      <article class="book-panel">
        <p class="book-panel__label">ÖIF B1 priprema za Austriju</p>
        <h2>Uspeh na ÖIF B1 je lakši uz posebne knjige za govor i pisanje.</h2>
        <ul class="check-list">
          <li>Knjiga za govor sadrži dijaloge, teme za diskusiju i zadatke sa slikama</li>
          <li>Knjiga za pisanje je fokusirana na austrijske situacije, model tekstove i probne zadatke</li>
          <li>Za obe knjige postoje besplatni uzorci</li>
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
      <h2>DTZ B1 knjige i besplatni uzorci</h2>
      <p>Počnite od veštine koja vam je sada najslabija ili koristite obe knjige ako želite potpuniji plan za govor i pisanje.</p>
    </div>
    <div class="hero-book-grid">
      <article class="book-panel book-panel-accent">
        <p class="book-panel__label">Knjiga za govor</p>
        <h2>DTZ B1 Speaking - Practice and Pass</h2>
        <p>DTZ B1 knjiga za govor sadrži 60 vežbi za predstavljanje, govor o slici i iskustvu i planiranje sa partnerom, uz model odgovore, korisne fraze, follow-up pitanja i nemačko-engleski rečnik.</p>
        <ul class="check-list">
          <li>60 vežbi za sva 3 dela usmenog ispita</li>
          <li>Model odgovori ili dijalozi i moguća pitanja ispitivača</li>
          <li>Korisne fraze, nemačko-engleski rečnik i kratke govorne vežbe</li>
        </ul>
        <p><strong>Besplatan uzorak sa 3 zadatka:</strong> pokazuje format zadataka i vrstu podrške koju dobijate u celoj knjizi.</p>
        {% set bookKey = 'dtz-speaking' %}
        {% include "book-facts.njk" %}
        <div class="button-row">
          <a href="{{ ctaLink(samplePagePath('dtz-speaking', currentLang or 'en'), { content: 'dtz-speaking-sample-sr' }) }}" class="btn btn-primary">Uzmi DTZ govor uzorak</a>
          <a href="{{ ctaLink(site.books['dtz-speaking'].gumroad.fullBook, { content: 'dtz-speaking-full-sr' }) }}" class="btn btn-outline" target="_blank" rel="noopener">Kupi DTZ govor knjigu</a>
        </div>
      </article>
      <article class="book-panel">
        <p class="book-panel__label">Knjiga za pisanje</p>
        <h2>DTZ Schreiben B1 - Practice Book</h2>
        <p>DTZ B1 knjiga za pisanje fokusira se na glavni pisani zadatak ispita: kratke poruke sa četiri sadržajne tačke. Sadrži 30 praktičnih jedinica i 5 kompletnih probnih zadataka.</p>
        <ul class="check-list">
          <li>30 praktičnih jedinica za glavne tipove DTZ tekstova</li>
          <li>Model tekstovi, korisne fraze, česte greške i brze checkliste</li>
          <li>5 kompletnih probnih zadataka sa model rešenjima</li>
        </ul>
        <p><strong>Besplatan uzorak sa 4 zadatka:</strong> pokazuje tipove pitanja, strukturu i podršku iz cele knjige.</p>
        {% set bookKey = 'dtz-writing' %}
        {% include "book-facts.njk" %}
        <div class="button-row">
          <a href="{{ ctaLink(samplePagePath('dtz-writing', currentLang or 'en'), { content: 'dtz-writing-sample-sr' }) }}" class="btn btn-primary">Uzmi DTZ pisanje uzorak</a>
          <a href="{{ ctaLink(site.books['dtz-writing'].gumroad.fullBook, { content: 'dtz-writing-full-sr' }) }}" class="btn btn-outline" target="_blank" rel="noopener">Kupi DTZ pisanje knjigu</a>
        </div>
      </article>
    </div>
  </div>
</section>

<section id="oeif-b1-books" class="home-section home-section-alt">
  <div class="container">
    <div class="section-heading">
      <h2>ÖIF B1 knjige i besplatni uzorci</h2>
      <p>Ove knjige pomažu vam da vežbate uobičajene govorne i pisane zadatke za Austriju, a pre kupovine možete isprobati besplatan uzorak.</p>
    </div>
    <div class="hero-book-grid">
      <article class="book-panel book-panel-accent">
        <p class="book-panel__label">Knjiga za govor</p>
        <h2>ÖIF B1 Speaking Exam Prep</h2>
        <p>ÖIF B1 knjiga za govor sadrži 85 fokusiranih jedinica: 30 dijaloga za planiranje, 30 tema za mišljenje i diskusiju i 25 zadataka za opis slike, uz rečnik i follow-up pitanja.</p>
        <ul class="check-list">
          <li>30 dijaloga za planiranje, 30 diskusionih tema i 25 zadataka sa slikama</li>
          <li>Model odgovori, pitanja ispitivača i fraze koje možete ponovo koristiti</li>
          <li>Svakodnevne teme u austrijskom stilu kao što su termini, stanovanje, posao i kupovina</li>
        </ul>
        <p><strong>Besplatan uzorak sa 3 zadatka:</strong> pokazuje stil dijaloga, rečnik i tip pitanja koja se koriste u knjizi.</p>
        {% set bookKey = 'oeif-speaking' %}
        {% include "book-facts.njk" %}
        <div class="button-row">
          <a href="{{ ctaLink(samplePagePath('oeif-speaking', currentLang or 'en'), { content: 'oeif-speaking-sample-sr' }) }}" class="btn btn-primary">Uzmi ÖIF govor uzorak</a>
          <a href="{{ ctaLink(site.books['oeif-speaking'].gumroad.fullBook, { content: 'oeif-speaking-full-sr' }) }}" class="btn btn-outline" target="_blank" rel="noopener">Kupi ÖIF govor knjigu</a>
        </div>
      </article>
      <article class="book-panel">
        <p class="book-panel__label">Knjiga za pisanje</p>
        <h2>ÖIF B1 Schreiben - Übungsbuch</h2>
        <p>ÖIF B1 knjiga za pisanje sadrži 30 vođenih jedinica za lične i formalne poruke, žalbe i kratka mišljenja, kao i austrijske životne situacije, checkliste i probne zadatke.</p>
        <ul class="check-list">
          <li>30 vođenih jedinica pisanja kroz četiri praktična poglavlja</li>
          <li>Austrijske situacije sa gotovim izrazima, checklistama i model tekstovima</li>
          <li>Ugrađena podrška za ispit, uključujući probne zadatke i sigurnu strukturu za stresne trenutke</li>
        </ul>
        <p><strong>Besplatan uzorak sa 4 zadatka:</strong> pokazuje stil pisanja, strukturu i podršku iz cele knjige.</p>
        {% set bookKey = 'oeif-writing' %}
        {% include "book-facts.njk" %}
        <div class="button-row">
          <a href="{{ ctaLink(samplePagePath('oeif-writing', currentLang or 'en'), { content: 'oeif-writing-sample-sr' }) }}" class="btn btn-primary">Uzmi ÖIF pisanje uzorak</a>
          <a href="{{ ctaLink(site.books['oeif-writing'].gumroad.fullBook, { content: 'oeif-writing-full-sr' }) }}" class="btn btn-outline" target="_blank" rel="noopener">Kupi ÖIF pisanje knjigu</a>
        </div>
      </article>
    </div>
  </div>
</section>

{% include "purchase-flow.njk" %}

<section class="home-section home-section-alt">
  <div class="container">
    <div class="section-heading">
      <p class="eyebrow">Pregled ispita</p>
      <h2>Uporedite DTZ B1 i ÖIF B1 ispite</h2>
      <p>Ako posle pregleda knjiga želite i kratak pregled oba formata ispita, ovde su okupljene ključne informacije za DTZ B1 i ÖIF B1.</p>
    </div>
    <div class="exam-overview-stack">
      <div id="dtz-b1" class="exam-overview-block">
<div class="section-heading">
      <p class="eyebrow">DTZ B1</p>
      <h2>Kratak pregled DTZ B1 ispita</h2>
      <p>Deutsch-Test für Zuwanderer (DTZ) je praktičan ispit nemačkog jezika u Nemačkoj. Ovaj deo objašnjava format ispita i pomaže vam da izaberete pravu DTZ B1 knjigu za govor ili pisanje.</p>
    </div>
    <div class="feature-grid">
      <article class="feature-card">
        <h3>Format govora</h3>
        <p>DTZ usmeni ispit ima 3 vrste zadataka: kratko predstavljanje, govor o slici i sopstvenom iskustvu i zajedničko planiranje sa partnerom.</p>
      </article>
      <article class="feature-card">
        <h3>Format pisanja</h3>
        <p>DTZ zadatak pisanja je obično kratka praktična poruka od oko 80 do 100 reči sa četiri sadržajne tačke.</p>
      </article>
      <article class="feature-card">
        <h3>Zašto je dokaz B1 važan</h3>
        <p>DTZ sertifikat na nivou B1 može se koristiti kao prihvaćen dokaz znanja nemačkog za prijave kao što su stalni boravak u Nemačkoj ili naturalizacija. Konačna podobnost ipak zavisi i od ostalih zakonskih uslova u vašem slučaju.</p>
      </article>
      <article class="feature-card">
        <h3>Za koga su ove knjige</h3>
        <p>Pogodne su za samostalno učenje, nastavu i grupe koje žele praktičnu pripremu tačno prema formatu ispita.</p>
      </article>
    </div>
      </div>
      <div id="oeif-b1" class="exam-overview-block">
<div class="section-heading">
      <p class="eyebrow">ÖIF B1</p>
      <h2>Kratak pregled ÖIF B1 ispita</h2>
      <p>ÖIF B1 Integrationprüfung je zvanični integracioni ispit u Austriji. Ovaj deo objašnjava ispit i pomaže vam da izaberete pravu ÖIF B1 knjigu za govor ili pisanje.</p>
    </div>
    <div class="feature-grid">
      <article class="feature-card">
        <h3>Čemu služi ispit</h3>
        <p>To je deo sistema integracije u Austriji i koristi se kao zvaničan dokaz jezika i integracije.</p>
      </article>
      <article class="feature-card">
        <h3>U čemu polaganje može pomoći</h3>
        <p>Uspešan rezultat može pomoći kod zahteva kao što je Modul 2 u okviru sporazuma o integraciji i u nekim slučajevima za stalni boravak ili državljanstvo.</p>
      </article>
      <article class="feature-card">
        <h3>Šta potvrđuje sertifikat</h3>
        <p>Sertifikat potvrđuje da ste dostigli nemački nivo B1 u zvanično priznatom ÖIF formatu ispita.</p>
      </article>
      <article class="feature-card">
        <h3>Važna napomena</h3>
        <p>Zakonski uslovi zavise od statusa boravka i lične situacije, zato uvek proverite najnovija pravila ÖIF-a i zvaničnih austrijskih institucija.</p>
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
        <p class="eyebrow">Izaberite ispit, pa veštinu</p>
        <h2>Prvo izaberite ispit, zatim besplatan uzorak, a kada budete spremni pređite na celu knjigu.</h2>
        <p>Ako vam treba priprema za DTZ B1 u Nemačkoj, krenite na DTZ deo. Ako vam treba priprema za ÖIF B1 u Austriji, koristite ÖIF deo. U oba slučaja možete početi sa besplatnim uzorkom pa zatim nastaviti sa celom knjigom za govor ili pisanje.</p>
      </div>
      <div class="button-row">
        <a href="#dtz-b1-books" class="btn btn-secondary">DTZ B1 knjige</a>
        <a href="#oeif-b1-books" class="btn btn-secondary">ÖIF B1 knjige</a>
      </div>
    </div>
  </div>
</section>
