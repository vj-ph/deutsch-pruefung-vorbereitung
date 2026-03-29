---
layout: base
templateEngineOverride: njk
title: "Deutsch Kompass DTZ & ÖIF"
description: "Almanya'daki DTZ B1 sınavı ve Avusturya'daki ÖIF B1 Integrationprüfung için konuşma ve yazma kitaplarıyla hazırlanın, satın almadan önce ücretsiz örnekleri inceleyin."
permalink: /tr/
lang: tr
dir: ltr
currentLang: tr
homeUrl: /tr/
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
  footerIntro: "Almanya'daki DTZ B1 sınavı ve Avusturya'daki ÖIF B1 Integrationprüfung için konuşma ve yazma hazırlık kitapları."
  examSectionsLabel: Sınav bölümleri
  booksLabel: Kitaplar
  sampleLabel: Ücretsiz örnek
  fullBookLabel: Tam kitap
  rightsReserved: Tüm hakları saklıdır.
---

{% from "cta-helpers.njk" import ctaLink, samplePagePath with context %}
{% set heroTrustBullets = [
  "Tüm tam kitaplar " ~ site.sales.fullBookPriceDisplay,
  "Sitede ücretsiz örnek PDF sayfaları",
  "Tam kitapları Gumroad'dan satın alın ve PDF'yi oradan indirin"
] %}
{% set purchaseFlow = {
  eyebrow: "Tıklamadan önce",
  title: "Tıkladıktan sonra ne olur?",
  intro: "Her tam kitap " ~ site.sales.fullBookPriceDisplay ~ ", her örnek ücretsiz ve her kitap PDF olarak sunulur.",
  steps: [
    {
      title: "Ürün sayfasını açın",
      text: "Örnek düğmesi sitede kısa bir sayfa açar; tam kitap düğmesi ise ücretli sürüm için Gumroad'u açar."
    },
    {
      title: "Önce ücretsiz örneğe bakın",
      text: "Örnek sayfasında ücretsiz PDF'yi doğrudan bu siteden açabilir ve kitabın size uygun olup olmadığını görebilirsiniz."
    },
    {
      title: "Satın alın ve indirin",
      text: "Hazır olduğunuzda, tam kitabı Gumroad'dan satın alın ve PDF'yi oradan indirin."
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
  discountSuffix: " indirim kodunu kullanın.",
  clickNote: "Örnek düğmesi doğrudan PDF bağlantısı olan site içi örnek sayfasını açar; tam kitap düğmesi ise satın alma ve indirme için Gumroad'u açar."
} %}
{% set heroButtonLabels = {
  dtz: "DTZ B1 kitaplarını, örneklerini ve fiyatlarını gör",
  oeif: "ÖIF B1 kitaplarını, örneklerini ve fiyatlarını gör"
} %}

<section class="hero hero-dual">
  <div class="container">
    <p class="eyebrow">DTZ B1 ve ÖIF B1 sınav hazırlığı</p>
    <h1>DTZ B1 veya ÖIF B1'i, size tam olarak nasıl hazırlanacağınızı gösteren pratik konuşma ve yazma kitaplarıyla geçin.</h1>
    <p class="hero-intro">Almanya'daki DTZ B1 sınavına ya da Avusturya'daki ÖIF B1 Integrationprüfung sınavına hazırlanıyorsanız, bu sayfa size doğru konuşma veya yazma kitabını seçmede, iki sınav yolunu karşılaştırmada ve satın almadan önce ücretsiz örnek indirmede yardımcı olur.</p>
    {% set switcherClass = 'language-switcher--hero' %}
    {% include "language-switcher.njk" %}
    {% include "hero-trust-strip.njk" %}
    <div class="hero-book-grid">
      <article class="book-panel book-panel-accent">
        <p class="book-panel__label">Almanya için DTZ B1 hazırlığı</p>
        <h2>DTZ B1 başarısı, net bir konuşma kitabı ve net bir yazma kitabıyla başlar.</h2>
        <ul class="check-list">
          <li>Konuşma kitabı, sözlü sınavın 3 bölümünü kapsayan 60 alıştırma içerir</li>
          <li>Yazma kitabı, 30 pratik ünite ve 5 tam deneme görevi içerir</li>
          <li>Önce ücretsiz örneği indirip sonra uygun kitabı satın alabilirsiniz</li>
        </ul>
        <div class="button-row">
          <a href="#dtz-b1-books" class="btn btn-primary">{{ heroButtonLabels.dtz }}</a>
        </div>
      </article>
      <article class="book-panel">
        <p class="book-panel__label">Avusturya için ÖIF B1 hazırlığı</p>
        <h2>ÖIF B1 başarısı, konuşma ve yazma için ayrı kitaplarla daha kolay olur.</h2>
        <ul class="check-list">
          <li>Konuşma kitabında diyaloglar, tartışma konuları ve resim görevleri vardır</li>
          <li>Yazma kitabı Avusturya temelli durumlara, model metinlere ve deneme görevlerine odaklanır</li>
          <li>Her iki kitap için de ücretsiz örnek mevcuttur</li>
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
      <h2>DTZ B1 kitapları ve ücretsiz örnekler</h2>
      <p>Önce en zayıf hissettiğiniz beceriyle başlayın ya da daha kapsamlı bir plan istiyorsanız iki kitabı birlikte kullanın.</p>
    </div>
    <div class="hero-book-grid">
      <article class="book-panel book-panel-accent">
        <p class="book-panel__label">Konuşma kitabı</p>
        <h2>DTZ B1 Speaking - Practice and Pass</h2>
        <p>DTZ B1 konuşma kitabı; kendini tanıtma, resim ve deneyim hakkında konuşma ve partnerle plan yapma için 60 alıştırma içerir. Model cevaplar, yararlı kalıplar, takip soruları ve Almanca-İngilizce kelime desteği sunar.</p>
        <ul class="check-list">
          <li>Sözlü sınavın 3 bölümünü kapsayan 60 alıştırma</li>
          <li>Model cevaplar veya diyaloglar ve olası sınav görevlisi soruları</li>
          <li>Yararlı ifadeler, Almanca-İngilizce kelime desteği ve kısa konuşma çalışmaları</li>
        </ul>
        <p><strong>3 görevlik ücretsiz örnek:</strong> tam kitapta kullanılan görev biçimini ve destek türünü görmenizi sağlar.</p>
        {% set bookKey = 'dtz-speaking' %}
        {% include "book-facts.njk" %}
        <div class="button-row">
          <a href="{{ ctaLink(samplePagePath('dtz-speaking', currentLang or 'en'), { content: 'dtz-speaking-sample-tr' }) }}" class="btn btn-primary">DTZ konuşma örneğini al</a>
          <a href="{{ ctaLink(site.books['dtz-speaking'].gumroad.fullBook, { content: 'dtz-speaking-full-tr' }) }}" class="btn btn-outline" target="_blank" rel="noopener">DTZ konuşma kitabını satın al</a>
        </div>
      </article>
      <article class="book-panel">
        <p class="book-panel__label">Yazma kitabı</p>
        <h2>DTZ Schreiben B1 - Practice Book</h2>
        <p>DTZ B1 yazma kitabı, sınavın temel görevine odaklanır: dört içerik noktası içeren kısa mesajlar. Kitapta 30 pratik ünite ve 5 tam deneme yazma görevi vardır.</p>
        <ul class="check-list">
          <li>DTZ'deki temel metin türleri için 30 pratik ünite</li>
          <li>Model metinler, yararlı kalıplar, sık hatalar ve hızlı kontrol listeleri</li>
          <li>Model çözümlü 5 tam deneme yazma görevi</li>
        </ul>
        <p><strong>4 görevlik ücretsiz örnek:</strong> soru tiplerini, yapılandırmayı ve tam kitaptaki desteği gösterir.</p>
        {% set bookKey = 'dtz-writing' %}
        {% include "book-facts.njk" %}
        <div class="button-row">
          <a href="{{ ctaLink(samplePagePath('dtz-writing', currentLang or 'en'), { content: 'dtz-writing-sample-tr' }) }}" class="btn btn-primary">DTZ yazma örneğini al</a>
          <a href="{{ ctaLink(site.books['dtz-writing'].gumroad.fullBook, { content: 'dtz-writing-full-tr' }) }}" class="btn btn-outline" target="_blank" rel="noopener">DTZ yazma kitabını satın al</a>
        </div>
      </article>
    </div>
  </div>
</section>

<section id="oeif-b1-books" class="home-section home-section-alt">
  <div class="container">
    <div class="section-heading">
      <h2>ÖIF B1 kitapları ve ücretsiz örnekler</h2>
      <p>Bu kitaplar Avusturya'daki yaygın konuşma ve yazma görevleri için pratik sunar; tam kitabı almadan önce ücretsiz örneği deneyebilirsiniz.</p>
    </div>
    <div class="hero-book-grid">
      <article class="book-panel book-panel-accent">
        <p class="book-panel__label">Konuşma kitabı</p>
        <h2>ÖIF B1 Speaking Exam Prep</h2>
        <p>ÖIF B1 konuşma kitabı 85 odaklı bölüm içerir: 30 planlama diyaloğu, 30 görüş ve tartışma konusu ve 25 resim açıklama görevi; kelime desteği ve takip soruları da vardır.</p>
        <ul class="check-list">
          <li>30 planlama diyaloğu, 30 tartışma konusu ve 25 resim görevi</li>
          <li>Model cevaplar, sınav görevlisi soruları ve tekrar kullanılabilir ifadeler</li>
          <li>Randevu, konut, iş ve alışveriş gibi Avusturya tarzı günlük konular</li>
        </ul>
        <p><strong>3 görevlik ücretsiz örnek:</strong> kitaptaki diyalog tarzını, kelime desteğini ve takip sorularını gösterir.</p>
        {% set bookKey = 'oeif-speaking' %}
        {% include "book-facts.njk" %}
        <div class="button-row">
          <a href="{{ ctaLink(samplePagePath('oeif-speaking', currentLang or 'en'), { content: 'oeif-speaking-sample-tr' }) }}" class="btn btn-primary">ÖIF konuşma örneğini al</a>
          <a href="{{ ctaLink(site.books['oeif-speaking'].gumroad.fullBook, { content: 'oeif-speaking-full-tr' }) }}" class="btn btn-outline" target="_blank" rel="noopener">ÖIF konuşma kitabını satın al</a>
        </div>
      </article>
      <article class="book-panel">
        <p class="book-panel__label">Yazma kitabı</p>
        <h2>ÖIF B1 Schreiben - Übungsbuch</h2>
        <p>ÖIF B1 yazma kitabı; kişisel ve resmi mesajlar, şikayetler ve kısa görüş metinleri için 30 yönlendirmeli ünite içerir. Ayrıca Avusturya odaklı senaryolar, kontrol listeleri ve deneme görevleri sunar.</p>
        <ul class="check-list">
          <li>Dört pratik bölümde 30 yönlendirmeli yazma ünitesi</li>
          <li>Hazır ifadeler, kontrol listeleri ve model metinlerle Avusturya temelli durumlar</li>
          <li>Deneme görevleri ve stres anları için güvenli yapı desteği</li>
        </ul>
        <p><strong>4 görevlik ücretsiz örnek:</strong> tam kitaptaki yazma tarzını, yapıyı ve desteği gösterir.</p>
        {% set bookKey = 'oeif-writing' %}
        {% include "book-facts.njk" %}
        <div class="button-row">
          <a href="{{ ctaLink(samplePagePath('oeif-writing', currentLang or 'en'), { content: 'oeif-writing-sample-tr' }) }}" class="btn btn-primary">ÖIF yazma örneğini al</a>
          <a href="{{ ctaLink(site.books['oeif-writing'].gumroad.fullBook, { content: 'oeif-writing-full-tr' }) }}" class="btn btn-outline" target="_blank" rel="noopener">ÖIF yazma kitabını satın al</a>
        </div>
      </article>
    </div>
  </div>
</section>

{% include "purchase-flow.njk" %}

<section class="home-section home-section-alt">
  <div class="container">
    <div class="section-heading">
      <p class="eyebrow">Sınav genel bakışı</p>
      <h2>DTZ B1 ve ÖIF B1 sınavlarını karşılaştırın</h2>
      <p>Kitaplara baktıktan sonra iki sınav formatını da hızlıca görmek isterseniz, bu bölüm her iki yol için temel noktaları bir araya getirir.</p>
    </div>
    <div class="exam-overview-stack">
      <div id="dtz-b1" class="exam-overview-block">
<div class="section-heading">
      <p class="eyebrow">DTZ B1</p>
      <h2>DTZ B1 sınavına kısa bakış</h2>
      <p>Deutsch-Test für Zuwanderer (DTZ), Almanya'da kullanılan pratik bir Almanca sınavıdır. Bu bölüm sınav formatını açıklar ve doğru DTZ B1 konuşma ya da yazma kitabını seçmenize yardımcı olur.</p>
    </div>
    <div class="feature-grid">
      <article class="feature-card">
        <h3>Konuşma formatı</h3>
        <p>DTZ konuşma sınavında 3 görev türü vardır: kendinizi tanıtma, bir resim ve kendi deneyiminiz hakkında konuşma, ayrıca bir partnerle birlikte plan yapma.</p>
      </article>
      <article class="feature-card">
        <h3>Yazma formatı</h3>
        <p>DTZ yazma görevi genellikle 80-100 kelimelik kısa pratik bir mesajdan oluşur ve dört içerik noktasını kapsar.</p>
      </article>
      <article class="feature-card">
        <h3>B1 kanıtı neden önemlidir</h3>
        <p>B1 düzeyindeki DTZ sertifikası, Almanya'da kalıcı oturum veya vatandaşlık gibi başvurularda Almanca dil kanıtı olarak kabul edilebilir. Ancak nihai uygunluk her zaman diğer yasal şartlara da bağlıdır.</p>
      </article>
      <article class="feature-card">
        <h3>Bu kitaplar kimler için</h3>
        <p>Bu kitaplar kendi kendine çalışanlar, ders alanlar ve sınav formatına uygun pratik isteyen çalışma grupları için uygundur.</p>
      </article>
    </div>
      </div>
      <div id="oeif-b1" class="exam-overview-block">
<div class="section-heading">
      <p class="eyebrow">ÖIF B1</p>
      <h2>ÖIF B1 sınavına kısa bakış</h2>
      <p>ÖIF B1 Integrationprüfung, Avusturya'da resmi bir entegrasyon sınavıdır. Bu bölüm sınavı açıklar ve doğru ÖIF B1 konuşma ya da yazma kitabını seçmenize yardımcı olur.</p>
    </div>
    <div class="feature-grid">
      <article class="feature-card">
        <h3>Sınavın amacı</h3>
        <p>Bu sınav, Avusturya'daki entegrasyon sisteminin bir parçasıdır ve resmi dil ile entegrasyon kanıtı olarak kullanılır.</p>
      </article>
      <article class="feature-card">
        <h3>Başarının neye yardımcı olabileceği</h3>
        <p>Başarılı sonuç, entegrasyon anlaşmasındaki Modul 2 gibi gerekliliklerde ve bazı durumlarda kalıcı oturum veya vatandaşlık süreçlerinde önemli olabilir.</p>
      </article>
      <article class="feature-card">
        <h3>Sertifika neyi gösterir</h3>
        <p>Sertifika, resmi olarak tanınan ÖIF formatında Almanca B1 düzeyine ulaştığınızı gösterir.</p>
      </article>
      <article class="feature-card">
        <h3>Önemli not</h3>
        <p>Yasal gereklilikler oturum durumuna ve kişisel koşullara göre değişir; bu yüzden her zaman en güncel ÖIF ve resmi Avusturya kaynaklarını kontrol edin.</p>
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
        <p class="eyebrow">Önce sınavı, sonra beceriyi seçin</p>
        <h2>Önce sınavı seçin, ücretsiz örnekle başlayın, hazır olduğunuzda tam kitaba geçin.</h2>
        <p>Almanya için DTZ B1 hazırlığına ihtiyacınız varsa DTZ bölümüne gidin. Avusturya için ÖIF B1 hazırlığına ihtiyacınız varsa ÖIF bölümünü kullanın. Her iki durumda da ücretsiz örnekle başlayıp sonra tam konuşma veya yazma kitabına geçebilirsiniz.</p>
      </div>
      <div class="button-row">
        <a href="#dtz-b1-books" class="btn btn-secondary">DTZ B1 kitapları</a>
        <a href="#oeif-b1-books" class="btn btn-secondary">ÖIF B1 kitapları</a>
      </div>
    </div>
  </div>
</section>
