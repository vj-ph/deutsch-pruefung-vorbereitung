---
layout: base
templateEngineOverride: njk
title: "Deutsch Kompass DTZ, ÖIF i fide"
description: "Pripremite se za DTZ B1 u Nemačkoj, ÖIF B1 u Austriji i fide A2 u Švajcarskoj uz knjige za govor i pisanje i besplatne uzorke."
permalink: /sr/
lang: sr
dir: ltr
currentLang: sr
homeUrl: /sr/
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
  footerIntro: "Knjige za pripremu govora i pisanja za DTZ B1 u Nemačkoj, ÖIF B1 u Austriji i fide A2 u Švajcarskoj."
  examSectionsLabel: Delovi ispita
  booksLabel: Knjige
  sampleLabel: Besplatan uzorak
  fullBookLabel: Cela knjiga
  rightsReserved: Sva prava zadržana.
---

{% from "cta-helpers.njk" import ctaLink, ctaTrackingAttrs with context %}
{% set homeExamOrder = pageExamOrder or site.examOrder %}
{% set purchaseFlow = {
  eyebrow: "Pre nego što kliknete",
  title: "Šta se dešava posle klika?",
  intro: "Svaki uzorak na ovom sajtu je besplatan. DTZ i ÖIF knjige su dostupne kao sniženi PDF na Gumroad-u i takođe na Amazonu. fide A2 knjige su trenutno dostupne na Amazonu za Kindle i u mekom povezu.",
  steps: [
    {
      title: "Otvorite uzorak ili stranicu prodavnice",
      text: "Dugme za uzorak otvara besplatan PDF direktno sa ovog sajta. Dugmad za kupovinu otvaraju izabranu prodavnicu u novoj kartici."
    },
    {
      title: "Prvo pogledajte besplatan uzorak",
      text: "Otvorite besplatan PDF direktno sa ovog sajta i odlučite da li vam knjiga odgovara."
    },
    {
      title: "Kupite u formatu koji želite",
      text: "Kada budete spremni, izaberite prodavnicu prema naslovu: Gumroad za snižene DTZ i ÖIF PDF knjige, ili Amazon za Kindle i meki povez, uključujući fide A2 knjige."
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
  discountSuffix: " za 20% popusta na Gumroad-u.",
  clickNote: "Dugme za uzorak otvara PDF direktno sa ovog sajta, a dugmad za kupovinu otvaraju izabranu prodavnicu u novoj kartici."
} %}
{% set heroButtonLabels = {
  dtzShort: "Pogledajte DTZ B1 knjige",
  oeifShort: "Pogledajte ÖIF B1 knjige",
  fideShort: "Pogledajte fide A2 knjige"
} %}
{% set reviewsSection = {
  eyebrow: "Utisci o knjigama",
  title: "Šta polaznici kažu o ovim knjigama?",
  intro: "Ovi kratki utisci dolaze od polaznika koji su koristili knjige za praktičnu pripremu za nemački ispit.",
  items: [
    {
      quote: "Svakodnevna komunikacija mi ne predstavlja problem i dobro komuniciram sa kolegama u logistici. Međutim, DTZ ispit obuhvata teme sa kojima se retko susrećem u svakodnevnom životu. Ove knjige su ponudile veliki izbor zadataka za govor i pisanje, zajedno sa primerima odgovora, što je bilo presudno za moju B1 pripremu i pomoglo mi je da uspem!",
      author: "Ahmed"
    },
    {
      quote: "Dok zvanična DTZ knjiga za pripremu nudi samo nekoliko probnih testova, ova DTZ B1 knjiga za govor nudi 60 različitih vežbi! To je mnogo potpuniji resurs za svakoga ko ozbiljno želi da položi.",
      author: "Mehmet"
    },
    {
      quote: "Dva puta nisam uspeo da položim ÖIF B1 zbog govornog i pisanog dela, iako mi je čitanje bilo prilično lako. Ove knjige su mi spasile treći izlazak; detaljno su obradile sve teme sa ispita i konačno mi pomogle da položim.",
      author: "Oleksandr"
    }
  ]
} %}
{% set localizedExamContent = {
  dtz: {
    booksHeading: "DTZ B1 knjige i besplatni uzorci",
    booksIntro: "Počnite od veštine koja vam je sada najslabija ili koristite obe knjige ako želite potpuniji plan za govor i pisanje.",
    comparisonEyebrow: "DTZ B1",
    comparisonTitle: "Praktičan B1 put za Nemačku",
    comparisonIntro: "DTZ B1 se fokusira na govorne i pisane zadatke koji su česti u nemačkom migracionom i integracionom kontekstu.",
    comparisonFacts: [
      { title: "Država", text: "Nemačka" },
      { title: "Nivo", text: "B1" },
      { title: "Fokus", text: "Predstavljanje, govor o slici, planiranje i kratke praktične poruke" }
    ],
    comparisonLink: "Pogledajte DTZ B1 knjige",
    overviewTitle: "Pregled DTZ B1 ispita",
    overviewDescription: "Deutsch-Test für Zuwanderer (DTZ) je praktičan ispit nemačkog jezika u Nemačkoj. Ovaj deo objašnjava format ispita i pomaže vam da izaberete pravu DTZ B1 knjigu za govor ili pisanje.",
    overviewFacts: [
      { title: "Format govora", text: "DTZ usmeni ispit ima 3 vrste zadataka: kratko predstavljanje, govor o slici i sopstvenom iskustvu i zajedničko planiranje sa partnerom." },
      { title: "Format pisanja", text: "DTZ zadatak pisanja je obično kratka praktična poruka od oko 80 do 100 reči sa četiri sadržajne tačke." },
      { title: "Zašto je dokaz B1 važan", text: "DTZ sertifikat na nivou B1 može se koristiti kao prihvaćen dokaz znanja nemačkog za prijave kao što su stalni boravak u Nemačkoj ili naturalizacija. Konačna podobnost ipak zavisi i od ostalih zakonskih uslova u vašem slučaju." },
      { title: "Za koga su ove knjige", text: "Pogodne su za samostalno učenje, nastavu i grupe koje žele praktičnu pripremu tačno prema formatu ispita." }
    ]
  },
  oeif: {
    booksHeading: "ÖIF B1 knjige i besplatni uzorci",
    booksIntro: "Ove knjige pomažu vam da vežbate uobičajene govorne i pisane zadatke za Austriju, a pre kupovine možete isprobati besplatan uzorak.",
    comparisonEyebrow: "ÖIF B1",
    comparisonTitle: "Austrijski integracioni put",
    comparisonIntro: "ÖIF B1 se fokusira na govorne i pisane zadatke koji se koriste u zvaničnom integracionom kontekstu u Austriji.",
    comparisonFacts: [
      { title: "Država", text: "Austrija" },
      { title: "Nivo", text: "B1" },
      { title: "Fokus", text: "Austrijske teme, planiranje, opis slike i vođeno pisanje" }
    ],
    comparisonLink: "Pogledajte ÖIF B1 knjige",
    overviewTitle: "Pregled ÖIF B1 ispita",
    overviewDescription: "ÖIF B1 Integrationprüfung je zvaničan integracioni ispit u Austriji. Ovaj deo objašnjava ispit i pomaže vam da izaberete pravu ÖIF B1 knjigu za govor ili pisanje.",
    overviewFacts: [
      { title: "Svrha ispita", text: "Ovaj ispit je deo integracionog sistema u Austriji i koristi se kao zvaničan dokaz jezika i integracije." },
      { title: "Čemu uspeh može pomoći", text: "Uspešan rezultat može biti važan za uslove kao što je Modul 2 u sporazumu o integraciji i u nekim slučajevima za stalni boravak ili državljanstvo." },
      { title: "Šta sertifikat pokazuje", text: "Sertifikat pokazuje da ste dostigli nivo nemačkog B1 u zvanično priznatom ÖIF formatu." },
      { title: "Važna napomena", text: "Pravni uslovi se razlikuju prema statusu boravka i ličnoj situaciji, zato uvek proverite najnovija uputstva ÖIF-a i zvaničnih austrijskih institucija." }
    ]
  },
  fide: {
    booksHeading: "fide A2 knjige i besplatni uzorci",
    booksIntro: "Ove dve knjige fokusiraju se na govorne i pisane zadatke za fide A2 ispit u Švajcarskoj. PDF uzorak je za sada na engleskom, ali isti važi za sve jezike.",
    comparisonEyebrow: "fide A2",
    comparisonTitle: "A2 priprema za Švajcarsku",
    comparisonIntro: "fide A2 se fokusira na komunikacione zadatke iz svakodnevnog života u Švajcarskoj.",
    comparisonFacts: [
      { title: "Država", text: "Švajcarska" },
      { title: "Nivo", text: "A2" },
      { title: "Fokus", text: "Opis slike, igranje uloga, razgovor, formulari i kratki e-mail" }
    ],
    comparisonLink: "Pogledajte fide A2 knjige",
    overviewTitle: "Pregled fide A2 ispita",
    overviewDescription: "fide ispit proverava komunikaciju u svakodnevnim situacijama u Švajcarskoj. Ovaj deo sažima koje tipove zadataka pokrivaju fide A2 knjige za govor i pisanje.",
    overviewFacts: [
      { title: "Format govora", text: "Govorni deo uključuje opis slike, igranje uloga i kratak razgovor. Teme dolaze iz svakodnevnih švajcarskih situacija kao što su posao, stanovanje, zdravlje, škola, prevoz i službe." },
      { title: "Format pisanja", text: "Pisani deo se posebno fokusira na zadatke Formular + Bemerkungen i Kurze E-Mail." },
      { title: "Nivo i upotreba", text: "Ove knjige odgovaraju polaznicima koji rade na nivou fide A2 i žele ciljanu pripremu za svakodnevne situacije u Švajcarskoj." },
      { title: "Šta knjige nude", text: "Knjiga za govor sadrži 43 seta, a knjiga za pisanje 22 seta, tako da posle uzorka možete da nastavite sa redovnom vežbom u celoj knjizi." }
    ]
  }
} %}
{% set localizedBookContent = {
  "dtz-speaking": {
    panelLabel: "Knjiga za govor",
    title: site.books["dtz-speaking"].localizedTitles[currentLang] or site.books["dtz-speaking"].title,
    summary: "DTZ B1 knjiga za govor sadrži 60 vežbi za predstavljanje, govor o slici i iskustvu i planiranje sa partnerom, uz model odgovore, korisne fraze, follow-up pitanja i nemačko-engleski rečnik.",
    features: [
      "60 vežbi za sva 3 dela usmenog ispita",
      "Model odgovori ili dijalozi i moguća pitanja ispitivača",
      "Korisne fraze, nemačko-engleski rečnik i kratke govorne vežbe"
    ],
    sampleTitle: "Besplatan uzorak sa 3 zadatka",
    sampleDescription: "Pokazuje format zadataka i vrstu podrške koju dobijate u celoj knjizi.",
    ctaLabel: "Uzmi DTZ govor uzorak"
  },
  "dtz-writing": {
    panelLabel: "Knjiga za pisanje",
    title: site.books["dtz-writing"].localizedTitles[currentLang] or site.books["dtz-writing"].title,
    summary: "DTZ B1 knjiga za pisanje fokusira se na glavni pisani zadatak ispita: kratke poruke sa četiri sadržajne tačke. Sadrži 30 praktičnih jedinica i 5 kompletnih probnih zadataka.",
    features: [
      "30 praktičnih jedinica za glavne tipove DTZ tekstova",
      "Model tekstovi, korisne fraze, česte greške i brze checkliste",
      "5 kompletnih probnih zadataka sa model rešenjima"
    ],
    sampleTitle: "Besplatan uzorak sa 4 zadatka",
    sampleDescription: "Pokazuje tipove pitanja, strukturu i podršku iz cele knjige.",
    ctaLabel: "Uzmi DTZ pisanje uzorak"
  },
  "oeif-speaking": {
    panelLabel: "Knjiga za govor",
    title: site.books["oeif-speaking"].localizedTitles[currentLang] or site.books["oeif-speaking"].title,
    summary: "ÖIF B1 knjiga za govor sadrži 85 fokusiranih jedinica: 30 dijaloga za planiranje, 30 tema za mišljenje i diskusiju i 25 zadataka za opis slike, uz rečnik i follow-up pitanja.",
    features: [
      "30 dijaloga za planiranje, 30 diskusionih tema i 25 zadataka sa slikama",
      "Model odgovori, pitanja ispitivača i fraze koje možete ponovo koristiti",
      "Svakodnevne teme u austrijskom stilu kao što su termini, stanovanje, posao i kupovina"
    ],
    sampleTitle: "Besplatan uzorak sa 3 zadatka",
    sampleDescription: "Pokazuje stil dijaloga, rečnik i tip pitanja koja se koriste u knjizi.",
    ctaLabel: "Uzmi ÖIF govor uzorak"
  },
  "oeif-writing": {
    panelLabel: "Knjiga za pisanje",
    title: site.books["oeif-writing"].localizedTitles[currentLang] or site.books["oeif-writing"].title,
    summary: "ÖIF B1 knjiga za pisanje sadrži 30 vođenih jedinica za lične i formalne poruke, žalbe i kratka mišljenja, kao i austrijske životne situacije, checkliste i probne zadatke.",
    features: [
      "30 vođenih jedinica pisanja kroz četiri praktična poglavlja",
      "Austrijske situacije sa gotovim izrazima, checklistama i model tekstovima",
      "Ugrađena podrška za ispit, uključujući probne zadatke i sigurnu strukturu za stresne trenutke"
    ],
    sampleTitle: "Besplatan uzorak sa 4 zadatka",
    sampleDescription: "Pokazuje stil pisanja, strukturu i podršku iz cele knjige.",
    ctaLabel: "Uzmi ÖIF pisanje uzorak"
  },
  "fide-speaking": {
    panelLabel: "Knjiga za govor",
    title: "fide A2 govor",
    summary: "fide A2 knjiga za govor nudi 43 seta vežbi za opis slike, igranje uloga i razgovor, sa temama iz svakodnevnog života u Švajcarskoj.",
    features: [
      "43 seta za tri ključna tipa zadataka u fide A2 govornom delu",
      "Teme iz svakodnevnog života u Švajcarskoj: posao, stanovanje, zdravlje, škola, prevoz i službe",
      "Kindle i meki povez za nastavak rada posle besplatnog uzorka"
    ],
    sampleTitle: "Besplatan uzorak sa 1 setom",
    sampleDescription: "Engleski PDF uzorak pokazuje kako izgleda fide A2 govorni deo sa opisom slike, igranjem uloga i razgovorom.",
    ctaLabel: "Otvori fide govor uzorak"
  },
  "fide-writing": {
    panelLabel: "Knjiga za pisanje",
    title: "fide A2 pisanje",
    summary: "fide A2 knjiga za pisanje nudi 22 seta za zadatke Formular + Bemerkungen i Kurze E-Mail, sa situacijama iz svakodnevnog života u Švajcarskoj.",
    features: [
      "22 seta za dva glavna formata u fide A2 pisanom delu",
      "Teme kao što su posao, službe, zdravlje, stanovanje, škola i prevoz",
      "Besplatan uzorak za brzu proveru strukture pre kupovine cele knjige"
    ],
    sampleTitle: "Besplatan uzorak sa 1 setom",
    sampleDescription: "Engleski PDF uzorak pokazuje jedan zadatak sa formularom i jedan kratki e-mail za fide A2 pisanje.",
    ctaLabel: "Otvori fide pisanje uzorak"
  }
} %}
{% set comparisonSection = {
  eyebrow: "Brzo poređenje",
  title: "Izaberite pravi ispit pre nego što izaberete knjigu.",
  intro: "Sva tri puta nude fokusiranu pripremu za govor i pisanje, ali se ispitni kontekst, država i upotreba sertifikata razlikuju u Nemačkoj, Austriji i Švajcarskoj."
} %}
{% set finalCta = {
  eyebrow: "Prvo izaberite ispit, pa veštinu",
  title: "Izaberite ispit, uzmite besplatan uzorak i pređite na celu knjigu kada budete spremni.",
  intro: "Ako vam treba DTZ B1 priprema za Nemačku, idite pravo na DTZ deo. Ako vam treba ÖIF B1 priprema za Austriju, koristite ÖIF deo. Ako vam treba fide A2 priprema za Švajcarsku, otvorite fide deo. U svakom slučaju možete da počnete besplatnim uzorkom, a zatim nastavite sa celom knjigom za govor ili pisanje."
} %}

<section class="hero hero-dual">
  <div class="container">
    <div class="hero-layout">
      <div class="hero-copy">
        <p class="eyebrow">DTZ B1, ÖIF B1 i fide A2 priprema</p>
        <h1>Izaberite praktične knjige za govor i pisanje za Nemačku, Austriju ili Švajcarsku.</h1>
        <p class="hero-intro">Ako se pripremate za DTZ B1 u Nemačkoj, ÖIF B1 u Austriji ili fide A2 u Švajcarskoj, počnite ovde. Ova stranica vam pomaže da uporedite ispitne puteve, izaberete pravu knjigu za govor ili pisanje i otvorite besplatan uzorak pre kupovine.</p>
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
      <p class="eyebrow">Pregled ispita</p>
      <h2>Uporedite DTZ B1, ÖIF B1 i fide A2 ispite</h2>
      <p>Ako posle pregleda knjiga želite više detalja o ispitima, ovde su skupljeni glavni format, svrha i kontekst sertifikata za sva tri puta.</p>
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
