---
layout: base
templateEngineOverride: njk
title: "Deutsch Kompass DTZ, ÖIF ve fide"
description: "Almanya'daki DTZ B1, Avusturya'daki ÖIF B1 ve İsviçre'deki fide A2 sınavlarına konuşma ve yazma kitapları ve ücretsiz örnek kitaplarla hazırlanın."
permalink: /tr/
lang: tr
dir: ltr
currentLang: tr
homeUrl: /tr/
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
languageSwitcherLabel: "Dil"
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
  homeLabel: Ana sayfa
  footerIntro: "Almanya'daki DTZ B1, Avusturya'daki ÖIF B1 ve İsviçre'deki fide A2 sınavları için konuşma ve yazma hazırlık kitapları."
  examSectionsLabel: Sınav bölümleri
  booksLabel: Kitaplar
  sampleLabel: Ücretsiz örnek
  fullBookLabel: Tam kitap
  rightsReserved: Tüm hakları saklıdır.
---

{% from "cta-helpers.njk" import ctaLink, ctaTrackingAttrs with context %}
{% set homeExamOrder = pageExamOrder or site.examOrder %}
{% set purchaseFlow = {
  eyebrow: "Tıklamadan önce",
  title: "Tıkladıktan sonra ne olur?",
  intro: "Bu sitedeki her örnek ücretsizdir. DTZ ve ÖIF kitapları Gumroad'da indirimli PDF olarak ve Amazon'da da bulunur. fide A2 kitapları ise şu anda Amazon'da Kindle ve karton kapak olarak sunuluyor.",
  steps: [
    {
      title: "Örneği ya da mağaza sayfasını açın",
      text: "Örnek düğmesi ücretsiz PDF'yi doğrudan bu siteden açar. Satın alma düğmeleri seçilen mağazayı yeni sekmede açar."
    },
    {
      title: "Önce ücretsiz örneğe bakın",
      text: "Ücretsiz PDF'yi doğrudan bu siteden açın ve kitabın size uygun olup olmadığına karar verin."
    },
    {
      title: "İstediğiniz formatı seçin",
      text: "Hazır olduğunuzda başlığa göre mağazayı seçin: indirimli DTZ ve ÖIF PDF'leri için Gumroad, Kindle ve karton kapak sürümleri için ise Amazon; buna fide A2 kitapları da dahildir."
    }
  ]
} %}
{% set productUi = {
  fullBook: "Tam kitap",
  freeSample: "Ücretsiz örnek",
  format: "Format",
  pages: "Sayfa",
  free: "Ücretsiz",
  discountPrefix: "Ödeme sırasında %20 indirim için ",
  discountSuffix: " kodunu Gumroad'da kullanın.",
  clickNote: "Örnek düğmesi PDF'yi doğrudan bu siteden açar; satın alma düğmeleri ise seçilen mağazayı yeni sekmede açar."
} %}
{% set heroButtonLabels = {
  dtzShort: "DTZ B1 kitaplarını gör",
  oeifShort: "ÖIF B1 kitaplarını gör",
  fideShort: "fide A2 kitaplarını gör"
} %}
{% set reviewsSection = {
  eyebrow: "Kitap yorumları",
  title: "Öğrenciler bu kitaplar hakkında ne diyor?",
  intro: "Bu kısa yorumlar, bu kitapları Almanca sınav hazırlığında kullanan öğrencilerden geliyor.",
  items: [
    {
      quote: "Günlük konuşmalar benim için sorun değil ve lojistik sektöründeki iş arkadaşlarımla iyi iletişim kuruyorum. Ancak DTZ sınavı, günlük hayatımda nadiren karşılaştığım konuları kapsıyor. Bu kitaplar, örnek cevaplarla birlikte çok çeşitli konuşma ve yazma görevleri sundu; bunlar B1 hazırlığım için çok önemliydi ve başarılı olmama yardımcı oldu!",
      author: "Ahmed"
    },
    {
      quote: "Resmî DTZ hazırlık kitabı yalnızca birkaç deneme sınavı sunarken, bu DTZ B1 konuşma kitabı 60 farklı alıştırma sunuyor! Gerçekten geçmek isteyen herkes için çok daha kapsamlı bir kaynak.",
      author: "Mehmet"
    },
    {
      quote: "Okuma bölümünü oldukça kolay bulmama rağmen, konuşma ve yazma bölümleri yüzünden ÖIF B1 sınavında iki kez kaldım. Bu kitaplar üçüncü denememde adeta hayat kurtardı; tüm sınav konularını ayrıntılı şekilde kapsıyordu ve sonunda geçmemi sağladı.",
      author: "Oleksandr"
    }
  ]
} %}
{% set localizedExamContent = {
  dtz: {
    booksHeading: "DTZ B1 kitapları ve ücretsiz örnekler",
    booksIntro: "Şu anda en zayıf hissettiğiniz beceriyle başlayın ya da daha kapsamlı bir plan istiyorsanız iki kitabı birlikte kullanın.",
    comparisonEyebrow: "DTZ B1",
    comparisonTitle: "Almanya için pratik B1 yolu",
    comparisonIntro: "DTZ B1, Almanya'daki göç ve entegrasyon bağlamında yaygın olan konuşma ve yazma görevlerine odaklanır.",
    comparisonFacts: [
      { title: "Ülke", text: "Almanya" },
      { title: "Seviye", text: "B1 sonucu birçok başvuruda önemlidir" },
      { title: "Odak", text: "Kendini tanıtma, resim üzerinden konuşma, planlama ve kısa yazılı mesajlar" }
    ],
    comparisonLink: "DTZ B1 kitaplarını gör",
    overviewTitle: "DTZ B1 sınav genel bakışı",
    overviewDescription: "Deutsch-Test für Zuwanderer (DTZ), Almanya'da kullanılan pratik bir Almanca sınavıdır. Bu bölüm sınav formatını açıklar ve doğru DTZ B1 konuşma ya da yazma kitabını seçmenize yardımcı olur.",
    overviewFacts: [
      { title: "Konuşma formatı", text: "DTZ konuşma sınavında 3 görev türü vardır: kendinizi tanıtma, bir resim ve kendi deneyiminiz hakkında konuşma, ayrıca bir partnerle birlikte plan yapma." },
      { title: "Yazma formatı", text: "DTZ yazma görevi genellikle 80-100 kelimelik kısa pratik bir mesajdan oluşur ve dört içerik noktasını kapsar." },
      { title: "B1 kanıtı neden önemlidir", text: "B1 düzeyindeki DTZ sertifikası, Almanya'da kalıcı oturum veya vatandaşlık gibi başvurularda Almanca dil kanıtı olarak kabul edilebilir. Ancak nihai uygunluk her zaman diğer yasal şartlara da bağlıdır." },
      { title: "Bu kitaplar kimler için", text: "Bu kitaplar kendi kendine çalışanlar, ders alanlar ve sınav formatına uygun pratik isteyen çalışma grupları için uygundur." }
    ]
  },
  oeif: {
    booksHeading: "ÖIF B1 kitapları ve ücretsiz örnekler",
    booksIntro: "Bu kitaplar Avusturya'daki yaygın konuşma ve yazma görevleri için pratik sunar; tam kitabı almadan önce ücretsiz örneği deneyebilirsiniz.",
    comparisonEyebrow: "ÖIF B1",
    comparisonTitle: "Avusturya entegrasyon yolu",
    comparisonIntro: "ÖIF B1, Avusturya'daki resmi entegrasyon bağlamında kullanılan konuşma ve yazma görevlerine odaklanır.",
    comparisonFacts: [
      { title: "Ülke", text: "Avusturya" },
      { title: "Seviye", text: "B1" },
      { title: "Odak", text: "Avusturya odaklı konuşma konuları, planlama, resim açıklama ve yönlendirmeli yazma" }
    ],
    comparisonLink: "ÖIF B1 kitaplarını gör",
    overviewTitle: "ÖIF B1 sınav genel bakışı",
    overviewDescription: "ÖIF B1 Integrationprüfung, Avusturya'da resmi bir entegrasyon sınavıdır. Bu bölüm sınavı açıklar ve doğru ÖIF B1 konuşma ya da yazma kitabını seçmenize yardımcı olur.",
    overviewFacts: [
      { title: "Sınavın amacı", text: "Bu sınav, Avusturya'daki entegrasyon sisteminin bir parçasıdır ve resmi dil ile entegrasyon kanıtı olarak kullanılır." },
      { title: "Başarının neye yardımcı olabileceği", text: "Başarılı sonuç, entegrasyon anlaşmasındaki Modul 2 gibi gerekliliklerde ve bazı durumlarda kalıcı oturum veya vatandaşlık süreçlerinde önemli olabilir." },
      { title: "Sertifika neyi gösterir", text: "Sertifika, resmi olarak tanınan ÖIF formatında Almanca B1 düzeyine ulaştığınızı gösterir." },
      { title: "Önemli not", text: "Yasal gereklilikler oturum durumuna ve kişisel koşullara göre değişir; bu yüzden her zaman en güncel ÖIF ve resmi Avusturya kaynaklarını kontrol edin." }
    ]
  },
  fide: {
    booksHeading: "fide A2 kitapları ve ücretsiz örnekler",
    booksIntro: "Bu iki kitap, İsviçre'deki fide A2 sınavı için konuşma ve yazma görevlerine odaklanır. Şu anda örnek PDF İngilizce olsa da tüm dillerde aynıdır.",
    comparisonEyebrow: "fide A2",
    comparisonTitle: "İsviçre için A2 odaklı hazırlık",
    comparisonIntro: "fide A2, İsviçre'deki günlük yaşam durumlarına dayalı konuşma ve yazma görevlerine odaklanır.",
    comparisonFacts: [
      { title: "Ülke", text: "İsviçre" },
      { title: "Seviye", text: "A2" },
      { title: "Odak", text: "Resim açıklama, rol oyunu, konuşma, form doldurma ve kısa e-posta" }
    ],
    comparisonLink: "fide A2 kitaplarını gör",
    overviewTitle: "fide A2 sınav genel bakışı",
    overviewDescription: "fide sınavı, İsviçre'deki günlük hayata yakın durumlar üzerinden iletişim becerisini ölçer. Bu bölüm, fide A2 konuşma ve yazma kitaplarının hangi görev türlerine hazırlandığını özetler.",
    overviewFacts: [
      { title: "Konuşma formatı", text: "Konuşma kısmında resim açıklama, rol oyunu ve kısa konuşma görevleri bulunur. Konular iş, konut, sağlık, okul, ulaşım ve resmi işlemler gibi gündelik İsviçre bağlamlarından gelir." },
      { title: "Yazma formatı", text: "Yazma kısmı özellikle Formular + Bemerkungen ve Kurze E-Mail görevlerine odaklanır." },
      { title: "Seviye ve kullanım", text: "Bu kitaplar fide A2 seviyesinde çalışan ve İsviçre'deki günlük durumlar için daha hedefli hazırlık isteyen öğrenciler için uygundur." },
      { title: "Bu kitaplar ne sağlar", text: "Konuşma kitabı 43 set, yazma kitabı ise 22 set sunar; böylece örnekten sonra tam kitapla düzenli pratik yapabilirsiniz." }
    ]
  }
} %}
{% set localizedBookContent = {
  "dtz-speaking": {
    panelLabel: "Konuşma kitabı",
    title: site.books["dtz-speaking"].localizedTitles[currentLang] or site.books["dtz-speaking"].title,
    summary: "DTZ B1 konuşma kitabı; kendini tanıtma, resim ve deneyim hakkında konuşma ve partnerle plan yapma için 60 alıştırma içerir. Model cevaplar, yararlı kalıplar, takip soruları ve Almanca-İngilizce kelime desteği sunar.",
    features: [
      "Sözlü sınavın 3 bölümünü kapsayan 60 alıştırma",
      "Model cevaplar veya diyaloglar ve olası sınav görevlisi soruları",
      "Yararlı ifadeler, Almanca-İngilizce kelime desteği ve kısa konuşma çalışmaları"
    ],
    sampleTitle: "3 görevlik ücretsiz örnek",
    sampleDescription: "Tam kitapta kullanılan görev biçimini ve destek türünü görmenizi sağlar.",
    ctaLabel: "DTZ konuşma örneğini al"
  },
  "dtz-writing": {
    panelLabel: "Yazma kitabı",
    title: site.books["dtz-writing"].localizedTitles[currentLang] or site.books["dtz-writing"].title,
    summary: "DTZ B1 yazma kitabı, sınavın temel görevine odaklanır: dört içerik noktası içeren kısa mesajlar. Kitapta 30 pratik ünite ve 5 tam deneme yazma görevi vardır.",
    features: [
      "DTZ'deki temel metin türleri için 30 pratik ünite",
      "Model metinler, yararlı kalıplar, sık hatalar ve hızlı kontrol listeleri",
      "Model çözümlü 5 tam deneme yazma görevi"
    ],
    sampleTitle: "4 görevlik ücretsiz örnek",
    sampleDescription: "Soru tiplerini, yapılandırmayı ve tam kitaptaki desteği gösterir.",
    ctaLabel: "DTZ yazma örneğini al"
  },
  "oeif-speaking": {
    panelLabel: "Konuşma kitabı",
    title: site.books["oeif-speaking"].localizedTitles[currentLang] or site.books["oeif-speaking"].title,
    summary: "ÖIF B1 konuşma kitabı 85 odaklı bölüm içerir: 30 planlama diyaloğu, 30 görüş ve tartışma konusu ve 25 resim açıklama görevi; kelime desteği ve takip soruları da vardır.",
    features: [
      "30 planlama diyaloğu, 30 tartışma konusu ve 25 resim görevi",
      "Model cevaplar, sınav görevlisi soruları ve tekrar kullanılabilir ifadeler",
      "Randevu, konut, iş ve alışveriş gibi Avusturya tarzı günlük konular"
    ],
    sampleTitle: "3 görevlik ücretsiz örnek",
    sampleDescription: "Kitaptaki diyalog tarzını, kelime desteğini ve takip sorularını gösterir.",
    ctaLabel: "ÖIF konuşma örneğini al"
  },
  "oeif-writing": {
    panelLabel: "Yazma kitabı",
    title: site.books["oeif-writing"].localizedTitles[currentLang] or site.books["oeif-writing"].title,
    summary: "ÖIF B1 yazma kitabı; kişisel ve resmi mesajlar, şikayetler ve kısa görüş metinleri için 30 yönlendirmeli ünite içerir. Ayrıca Avusturya odaklı senaryolar, kontrol listeleri ve deneme görevleri sunar.",
    features: [
      "Dört pratik bölümde 30 yönlendirmeli yazma ünitesi",
      "Hazır ifadeler, kontrol listeleri ve model metinlerle Avusturya temelli durumlar",
      "Deneme görevleri ve stres anları için güvenli yapı desteği"
    ],
    sampleTitle: "4 görevlik ücretsiz örnek",
    sampleDescription: "Tam kitaptaki yazma tarzını, yapıyı ve desteği gösterir.",
    ctaLabel: "ÖIF yazma örneğini al"
  },
  "fide-speaking": {
    panelLabel: "Konuşma kitabı",
    title: "fide A2 Konuşma",
    summary: "fide A2 konuşma kitabı, resim açıklama, rol oyunu ve konuşma görevleri için İsviçre odaklı 43 alıştırma seti sunar.",
    features: [
      "fide A2 konuşma bölümünün üç temel görev türü için 43 çalışma seti",
      "İş, konut, sağlık, okul, ulaşım ve resmi işlemler gibi İsviçre'deki gündelik konular",
      "Örnekten sonra düzenli pratik için Kindle ve karton kapak seçenekleri"
    ],
    sampleTitle: "1 setlik ücretsiz örnek",
    sampleDescription: "İngilizce örnek PDF, fide A2 konuşma bölümündeki resim açıklama, rol oyunu ve konuşma akışını gösterir.",
    ctaLabel: "fide konuşma örneğini aç"
  },
  "fide-writing": {
    panelLabel: "Yazma kitabı",
    title: "fide A2 Yazma",
    summary: "fide A2 yazma kitabı, Formular + Bemerkungen ve Kurze E-Mail görevleri için İsviçre odaklı 22 çalışma seti sunar.",
    features: [
      "fide A2 yazma bölümünün iki ana formatı için 22 çalışma seti",
      "İş, resmi makamlar, sağlık, konut, okul ve ulaşım gibi gündelik İsviçre durumları",
      "Tam kitaba geçmeden önce yapıyı görmek için ücretsiz örnek"
    ],
    sampleTitle: "1 setlik ücretsiz örnek",
    sampleDescription: "İngilizce örnek PDF, bir form görevi ve kısa e-posta göreviyle fide A2 yazma biçimini gösterir.",
    ctaLabel: "fide yazma örneğini aç"
  }
} %}
{% set comparisonSection = {
  eyebrow: "Hızlı karşılaştırma",
  title: "Kitabı seçmeden önce doğru sınav yolunu seçin.",
  intro: "Üç yolun da konuşma ve yazma hazırlığı var; ancak sınav bağlamı, ülke ve sertifikanın kullanım alanı Almanya, Avusturya ve İsviçre arasında farklıdır."
} %}
{% set finalCta = {
  eyebrow: "Önce sınavı, sonra beceriyi seçin",
  title: "Önce sınavı seçin, ücretsiz örnekle başlayın, hazır olduğunuzda tam kitaba geçin.",
  intro: "Almanya için DTZ B1 hazırlığına ihtiyacınız varsa DTZ bölümüne gidin. Avusturya için ÖIF B1 hazırlığına ihtiyacınız varsa ÖIF bölümünü kullanın. İsviçre için fide A2 hazırlığına ihtiyacınız varsa fide bölümüne gidin. Her durumda ücretsiz örnekle başlayıp sonra tam konuşma veya yazma kitabına geçebilirsiniz."
} %}

<section class="hero hero-dual">
  <div class="container">
    <div class="hero-layout">
      <div class="hero-copy">
        <p class="eyebrow">DTZ B1, ÖIF B1 ve fide A2 sınav hazırlığı</p>
        <h1>Almanya, Avusturya veya İsviçre için pratik konuşma ve yazma kitaplarını seçin.</h1>
        <p class="hero-intro">Almanya'da DTZ B1, Avusturya'da ÖIF B1 veya İsviçre'de fide A2 sınavına hazırlanıyorsanız buradan başlayın. Bu sayfa sınav yollarını karşılaştırmanıza, doğru konuşma ya da yazma kitabını seçmenize ve satın almadan önce ücretsiz örneği açmanıza yardımcı olur.</p>
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
      <p class="eyebrow">Sınav genel bakışı</p>
      <h2>DTZ B1, ÖIF B1 ve fide A2 sınavlarını karşılaştırın</h2>
      <p>Kitaplara baktıktan sonra sınav ayrıntılarını görmek isterseniz, bu bölüm üç sınav yolu için temel formatı, amacı ve kullanım bağlamını bir araya getirir.</p>
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
