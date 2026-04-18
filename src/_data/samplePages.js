const site = require("./site.json");

const localizedFormatTerms = {
  en: {
    PDF: "PDF",
    Kindle: "Kindle",
    Paperback: "paperback"
  },
  ar: {
    PDF: "PDF",
    Kindle: "Kindle",
    Paperback: "نسخة ورقية"
  },
  uk: {
    PDF: "PDF",
    Kindle: "Kindle",
    Paperback: "м'яка обкладинка"
  },
  tr: {
    PDF: "PDF",
    Kindle: "Kindle",
    Paperback: "karton kapak"
  },
  sr: {
    PDF: "PDF",
    Kindle: "Kindle",
    Paperback: "meki povez"
  },
  ru: {
    PDF: "PDF",
    Kindle: "Kindle",
    Paperback: "мягкая обложка"
  }
};

function joinLocalizedList(items, localeCode) {
  if (items.length <= 1) {
    return items[0] || "";
  }

  const listJoiners = {
    ar: { pair: " و", separator: "، ", final: "، و" },
    uk: { pair: " і ", separator: ", ", final: ", і " },
    tr: { pair: " ve ", separator: ", ", final: " ve " },
    sr: { pair: " i ", separator: ", ", final: " i " },
    ru: { pair: " и ", separator: ", ", final: ", и " },
    en: { pair: " and ", separator: ", ", final: ", and " }
  };

  const joiner = listJoiners[localeCode] || listJoiners.en;

  return items.length === 2
    ? `${items[0]}${joiner.pair}${items[1]}`
    : `${items.slice(0, -1).join(joiner.separator)}${joiner.final}${items[items.length - 1]}`;
}

function getBookFormatDisplay(localeCode, book) {
  const formatTerms = localizedFormatTerms[localeCode] || localizedFormatTerms.en;
  const formats = book.formats && book.formats.length
    ? book.formats
    : [book.format || site.sales.format];

  return joinLocalizedList(
    formats.map((format) => formatTerms[format] || format),
    localeCode
  );
}

const languages = [
  {
    code: "en",
    label: "English",
    dir: "ltr",
    homeUrl: "/",
    languageSwitcherLabel: "Language",
    ui: {
      homeLabel: "Home",
      footerIntro: "Speaking and writing prep books for the DTZ B1 exam in Germany and the ÖIF B1 Integrationprüfung in Austria.",
      examSectionsLabel: "Exam Sections",
      booksLabel: "Books",
      sampleLabel: "Sample",
      fullBookLabel: "Full Book",
      rightsReserved: "All rights reserved."
    },
    productUi: {
      fullBook: "Full book",
      freeSample: "Free sample",
      format: "Format",
      pages: "Pages",
      free: "Free",
      discountPrefix: "Use discount code ",
      discountSuffix: " for 20% off on Gumroad.",
      clickNote: "The sample button opens the PDF on this site. The purchase buttons open the selected store in a new tab."
    },
    copy: {
      pageTitle: (bookTitle) => `${bookTitle} free sample | ${site.brand.shortName}`,
      pageDescription: (bookTitle, taskCount) =>
        `Open the free sample PDF for ${bookTitle} and preview ${taskCount} exam-style tasks before buying the full book.`,
      eyebrow: "Free sample PDF",
      heroTitle: (bookTitle) => `Open the free sample PDF for ${bookTitle}.`,
      heroIntro:
        "This short page gives you direct access to the sample so you can check the task style, level, and support before moving to the full book.",
      trustBullets: [
        "Direct on-site PDF access",
        "Free sample before you buy"
      ],
      sampleCardLabel: "Sample PDF",
      sampleCardTitle: "What you can check before you buy",
      sampleIntro:
        "Use the sample to see whether the format, tone, and support feel right for you.",
      sampleTaskCount: (count) => `${count} exam-style tasks`,
      sampleBonusStudyPlan: "Includes a 14-day study plan",
      sampleDirectAccess: "Opens directly from this site",
      samplePreview: "Lets you preview the structure and support before paying",
      downloadLabel: "Open sample PDF",
      downloadHint:
        "The PDF opens in a new tab so you can keep this page open.",
      fullCardLabel: "Full book",
      fullCardIntro: (pageCount, format) =>
        `If the sample feels right, the full book gives you a much bigger practice set in the same practical style. You can get it in ${format}.`,
      fullCheckFormat: (pageCount, format) => `${pageCount} pages in ${format}`,
      fullCheckPractice: "Much more practice than the free sample",
      fullCheckDiscount: (discountCode) => `20% off on Gumroad with code ${discountCode}`,
      fullBookLabel: "Buy full book",
      backLabel: (examTitle) => `Back to ${examTitle} books`
    }
  },
  {
    code: "ar",
    label: "العربية",
    dir: "rtl",
    homeUrl: "/ar/",
    languageSwitcherLabel: "اللغة",
    ui: {
      homeLabel: "الرئيسية",
      footerIntro: "كتب تحضير للتحدث والكتابة لامتحان DTZ B1 في ألمانيا وامتحان ÖIF B1 Integrationprüfung في النمسا.",
      examSectionsLabel: "أقسام الامتحان",
      booksLabel: "الكتب",
      sampleLabel: "عينة مجانية",
      fullBookLabel: "الكتاب الكامل",
      rightsReserved: "جميع الحقوق محفوظة."
    },
    productUi: {
      fullBook: "الكتاب الكامل",
      freeSample: "عينة مجانية",
      format: "الصيغة",
      pages: "الصفحات",
      free: "مجاني",
      discountPrefix: "استخدم رمز الخصم ",
      discountSuffix: " للحصول على خصم 20% على Gumroad.",
      clickNote: "زر العينة يفتح ملف PDF من هذا الموقع، وأزرار الشراء تفتح المتجر المحدد في علامة تبويب جديدة."
    },
    copy: {
      pageTitle: (bookTitle) => `العينة المجانية لكتاب ${bookTitle} | ${site.brand.shortName}`,
      pageDescription: (bookTitle, taskCount) =>
        `افتح عينة PDF المجانية لكتاب ${bookTitle} وراجع ${taskCount} مهام بنمط الامتحان قبل شراء الكتاب الكامل.`,
      eyebrow: "عينة PDF مجانية",
      heroTitle: (bookTitle) => `افتح عينة PDF المجانية لكتاب ${bookTitle}.`,
      heroIntro:
        "تمنحك هذه الصفحة وصولًا مباشرًا إلى العينة حتى ترى أسلوب المهام والمستوى ونوع الدعم قبل الانتقال إلى الكتاب الكامل.",
      trustBullets: [
        "وصول مباشر إلى PDF من الموقع",
        "عينة مجانية قبل الشراء"
      ],
      sampleCardLabel: "عينة PDF",
      sampleCardTitle: "ما الذي يمكنك مراجعته قبل الشراء",
      sampleIntro:
        "استخدم العينة لترى إن كان الأسلوب والشرح والدعم مناسبين لك.",
      sampleTaskCount: (count) => `${count} مهام بنمط الامتحان`,
      sampleBonusStudyPlan: "يتضمن أيضًا خطة دراسة لمدة 14 يومًا",
      sampleDirectAccess: "يفتح مباشرة من هذا الموقع",
      samplePreview: "يساعدك على معاينة البنية والدعم قبل الدفع",
      downloadLabel: "افتح عينة PDF",
      downloadHint:
        "يفتح ملف PDF في علامة تبويب جديدة حتى تبقي هذه الصفحة مفتوحة.",
      fullCardLabel: "الكتاب الكامل",
      fullCardIntro: (pageCount, format) =>
        `إذا ناسبتك العينة، فالكتاب الكامل يمنحك تدريبًا أكبر بكثير وبنفس الأسلوب العملي. يمكنك الحصول عليه بصيغة ${format}.`,
      fullCheckFormat: (pageCount, format) => `${pageCount} صفحة بصيغة ${format}`,
      fullCheckPractice: "تدريب أكثر بكثير من العينة المجانية",
      fullCheckDiscount: (discountCode) => `خصم 20% على Gumroad باستخدام الرمز ${discountCode}`,
      fullBookLabel: "اشترِ الكتاب الكامل",
      backLabel: (examTitle) => `العودة إلى كتب ${examTitle}`
    }
  },
  {
    code: "uk",
    label: "Українська",
    dir: "ltr",
    homeUrl: "/uk/",
    languageSwitcherLabel: "Мова",
    ui: {
      homeLabel: "Головна",
      footerIntro: "Книги для підготовки з говоріння та письма до іспиту DTZ B1 у Німеччині та ÖIF B1 Integrationprüfung в Австрії.",
      examSectionsLabel: "Розділи іспиту",
      booksLabel: "Книги",
      sampleLabel: "Безкоштовний зразок",
      fullBookLabel: "Повна книга",
      rightsReserved: "Усі права захищені."
    },
    productUi: {
      fullBook: "Повна книга",
      freeSample: "Безкоштовний зразок",
      format: "Формат",
      pages: "Сторінки",
      free: "Безкоштовно",
      discountPrefix: "Використайте код знижки ",
      discountSuffix: " для знижки 20% на Gumroad.",
      clickNote: "Кнопка зразка відкриває PDF на цьому сайті, а кнопки покупки відкривають вибраний магазин у новій вкладці."
    },
    copy: {
      pageTitle: (bookTitle) => `Безкоштовний зразок ${bookTitle} | ${site.brand.shortName}`,
      pageDescription: (bookTitle, taskCount) =>
        `Відкрийте безкоштовний PDF-зразок ${bookTitle} і перегляньте ${taskCount} завдань у форматі іспиту перед покупкою повної книги.`,
      eyebrow: "Безкоштовний зразок PDF",
      heroTitle: (bookTitle) => `Відкрийте безкоштовний PDF-зразок ${bookTitle}.`,
      heroIntro:
        "Ця коротка сторінка дає прямий доступ до зразка, щоб ви могли перевірити стиль завдань, рівень і підтримку перед переходом до повної книги.",
      trustBullets: [
        "Прямий доступ до PDF на сайті",
        "Безкоштовний зразок до покупки"
      ],
      sampleCardLabel: "Зразок PDF",
      sampleCardTitle: "Що ви можете перевірити перед покупкою",
      sampleIntro:
        "Скористайтеся зразком, щоб зрозуміти, чи підходять вам формат, тон і підтримка.",
      sampleTaskCount: (count) => `${count} завдань у форматі іспиту`,
      sampleBonusStudyPlan: "Також містить 14-денний план навчання",
      sampleDirectAccess: "Відкривається прямо з цього сайту",
      samplePreview: "Дає змогу побачити структуру й підтримку до оплати",
      downloadLabel: "Відкрити PDF-зразок",
      downloadHint:
        "PDF відкривається в новій вкладці, щоб ця сторінка залишалася відкритою.",
      fullCardLabel: "Повна книга",
      fullCardIntro: (pageCount, format) =>
        `Якщо зразок вам підходить, повна книга дає значно більше практики в тому самому практичному стилі. Ви можете отримати її у форматі ${format}.`,
      fullCheckFormat: (pageCount, format) => `${pageCount} сторінок у форматі ${format}`,
      fullCheckPractice: "Значно більше практики, ніж у безкоштовному зразку",
      fullCheckDiscount: (discountCode) => `Знижка 20% на Gumroad з кодом ${discountCode}`,
      fullBookLabel: "Купити повну книгу",
      backLabel: (examTitle) => `Назад до книг ${examTitle}`
    }
  },
  {
    code: "tr",
    label: "Türkçe",
    dir: "ltr",
    homeUrl: "/tr/",
    languageSwitcherLabel: "Dil",
    ui: {
      homeLabel: "Ana sayfa",
      footerIntro: "Almanya'daki DTZ B1 sınavı ve Avusturya'daki ÖIF B1 Integrationprüfung için konuşma ve yazma hazırlık kitapları.",
      examSectionsLabel: "Sınav bölümleri",
      booksLabel: "Kitaplar",
      sampleLabel: "Ücretsiz örnek",
      fullBookLabel: "Tam kitap",
      rightsReserved: "Tüm hakları saklıdır."
    },
    productUi: {
      fullBook: "Tam kitap",
      freeSample: "Ücretsiz örnek",
      format: "Format",
      pages: "Sayfa",
      free: "Ücretsiz",
      discountPrefix: "Ödeme sırasında %20 indirim için ",
      discountSuffix: " kodunu Gumroad'da kullanın.",
      clickNote: "Örnek düğmesi PDF'yi bu sitede açar; satın alma düğmeleri ise seçilen mağazayı yeni sekmede açar."
    },
    copy: {
      pageTitle: (bookTitle) => `${bookTitle} ücretsiz örnek | ${site.brand.shortName}`,
      pageDescription: (bookTitle, taskCount) =>
        `${bookTitle} için ücretsiz örnek PDF'yi açın ve tam kitabı satın almadan önce sınav tarzındaki ${taskCount} görevi inceleyin.`,
      eyebrow: "Ücretsiz örnek PDF",
      heroTitle: (bookTitle) => `${bookTitle} için ücretsiz örnek PDF'yi açın.`,
      heroIntro:
        "Bu kısa sayfa, tam kitaba geçmeden önce görev tarzını, seviyeyi ve desteği görmeniz için örneğe doğrudan erişim sağlar.",
      trustBullets: [
        "Siteden doğrudan PDF erişimi",
        "Satın almadan önce ücretsiz örnek"
      ],
      sampleCardLabel: "Örnek PDF",
      sampleCardTitle: "Satın almadan önce neleri kontrol edebilirsiniz",
      sampleIntro:
        "Biçimin, anlatımın ve desteğin size uygun olup olmadığını görmek için örneği kullanın.",
      sampleTaskCount: (count) => `Sınav tarzında ${count} görev`,
      sampleBonusStudyPlan: "Ayrıca 14 günlük çalışma planı içerir",
      sampleDirectAccess: "Doğrudan bu siteden açılır",
      samplePreview: "Ödeme yapmadan önce yapıyı ve desteği görmenizi sağlar",
      downloadLabel: "Örnek PDF'yi aç",
      downloadHint:
        "PDF yeni sekmede açılır; böylece bu sayfayı açık tutabilirsiniz.",
      fullCardLabel: "Tam kitap",
      fullCardIntro: (pageCount, format) =>
        `Örnek size uygunsa, tam kitap aynı pratik tarzda çok daha geniş bir çalışma seti sunar. ${format} olarak alabilirsiniz.`,
      fullCheckFormat: (pageCount, format) => `${format} olarak ${pageCount} sayfa`,
      fullCheckPractice: "Ücretsiz örnekten çok daha fazla alıştırma",
      fullCheckDiscount: (discountCode) => `Gumroad'da ${discountCode} koduyla %20 indirim`,
      fullBookLabel: "Tam kitabı satın al",
      backLabel: (examTitle) => `${examTitle} kitaplarına dön`
    }
  },
  {
    code: "sr",
    label: "BCS / Srpski",
    dir: "ltr",
    homeUrl: "/sr/",
    languageSwitcherLabel: "Jezik",
    ui: {
      homeLabel: "Početna",
      footerIntro: "Knjige za pripremu govora i pisanja za DTZ B1 ispit u Nemačkoj i ÖIF B1 Integrationprüfung u Austriji.",
      examSectionsLabel: "Delovi ispita",
      booksLabel: "Knjige",
      sampleLabel: "Besplatan uzorak",
      fullBookLabel: "Cela knjiga",
      rightsReserved: "Sva prava zadržana."
    },
    productUi: {
      fullBook: "Kompletna knjiga",
      freeSample: "Besplatan uzorak",
      format: "Format",
      pages: "Stranice",
      free: "Besplatno",
      discountPrefix: "Koristite kod za popust ",
      discountSuffix: " za 20% popusta na Gumroad-u.",
      clickNote: "Dugme za uzorak otvara PDF na ovom sajtu, a dugmad za kupovinu otvaraju izabranu prodavnicu u novoj kartici."
    },
    copy: {
      pageTitle: (bookTitle) => `Besplatan uzorak za ${bookTitle} | ${site.brand.shortName}`,
      pageDescription: (bookTitle, taskCount) =>
        `Otvorite besplatan PDF uzorak za ${bookTitle} i pogledajte ${taskCount} zadataka u stilu ispita pre kupovine cele knjige.`,
      eyebrow: "Besplatan PDF uzorak",
      heroTitle: (bookTitle) => `Otvorite besplatan PDF uzorak za ${bookTitle}.`,
      heroIntro:
        "Ova kratka stranica vam daje direktan pristup uzorku kako biste proverili stil zadataka, nivo i podršku pre prelaska na kompletnu knjigu.",
      trustBullets: [
        "Direktan pristup PDF-u sa sajta",
        "Besplatan uzorak pre kupovine"
      ],
      sampleCardLabel: "PDF uzorak",
      sampleCardTitle: "Šta možete proveriti pre kupovine",
      sampleIntro:
        "Iskoristite uzorak da vidite da li vam odgovaraju format, ton i podrška.",
      sampleTaskCount: (count) => `${count} zadataka u stilu ispita`,
      sampleBonusStudyPlan: "Uključuje i plan učenja za 14 dana",
      sampleDirectAccess: "Otvara se direktno sa ovog sajta",
      samplePreview: "Omogućava da proverite strukturu i podršku pre plaćanja",
      downloadLabel: "Otvori PDF uzorak",
      downloadHint:
        "PDF se otvara u novoj kartici kako biste ovu stranicu ostavili otvorenom.",
      fullCardLabel: "Kompletna knjiga",
      fullCardIntro: (pageCount, format) =>
        `Ako vam uzorak odgovara, kompletna knjiga donosi mnogo više vežbe u istom praktičnom stilu. Možete je dobiti u formatu ${format}.`,
      fullCheckFormat: (pageCount, format) => `${pageCount} strana u formatu ${format}`,
      fullCheckPractice: "Mnogo više vežbe nego u besplatnom uzorku",
      fullCheckDiscount: (discountCode) => `20% popusta na Gumroad-u uz kod ${discountCode}`,
      fullBookLabel: "Kupi kompletnu knjigu",
      backLabel: (examTitle) => `Nazad na knjige za ${examTitle}`
    }
  },
  {
    code: "ru",
    label: "Русский",
    dir: "ltr",
    homeUrl: "/ru/",
    languageSwitcherLabel: "Язык",
    ui: {
      homeLabel: "Главная",
      footerIntro: "Книги для подготовки к говорению и письму для экзамена DTZ B1 в Германии и ÖIF B1 Integrationprüfung в Австрии.",
      examSectionsLabel: "Разделы экзамена",
      booksLabel: "Книги",
      sampleLabel: "Бесплатный образец",
      fullBookLabel: "Полная книга",
      rightsReserved: "Все права защищены."
    },
    productUi: {
      fullBook: "Полная книга",
      freeSample: "Бесплатный образец",
      format: "Формат",
      pages: "Страницы",
      free: "Бесплатно",
      discountPrefix: "Используйте код скидки ",
      discountSuffix: " для скидки 20% на Gumroad.",
      clickNote: "Кнопка образца открывает PDF на этом сайте, а кнопки покупки открывают выбранный магазин в новой вкладке."
    },
    copy: {
      pageTitle: (bookTitle) => `Бесплатный образец ${bookTitle} | ${site.brand.shortName}`,
      pageDescription: (bookTitle, taskCount) =>
        `Откройте бесплатный PDF-образец ${bookTitle} и посмотрите ${taskCount} заданий в формате экзамена перед покупкой полной книги.`,
      eyebrow: "Бесплатный PDF-образец",
      heroTitle: (bookTitle) => `Откройте бесплатный PDF-образец ${bookTitle}.`,
      heroIntro:
        "Эта короткая страница дает прямой доступ к образцу, чтобы вы могли проверить стиль заданий, уровень и поддержку перед переходом к полной книге.",
      trustBullets: [
        "Прямой доступ к PDF на сайте",
        "Бесплатный образец до покупки"
      ],
      sampleCardLabel: "PDF-образец",
      sampleCardTitle: "Что можно проверить перед покупкой",
      sampleIntro:
        "Используйте образец, чтобы понять, подходят ли вам формат, тон и поддержка.",
      sampleTaskCount: (count) => `${count} заданий в формате экзамена`,
      sampleBonusStudyPlan: "Также включает 14-дневный учебный план",
      sampleDirectAccess: "Открывается прямо с этого сайта",
      samplePreview: "Позволяет посмотреть структуру и поддержку до оплаты",
      downloadLabel: "Открыть PDF-образец",
      downloadHint:
        "PDF открывается в новой вкладке, чтобы вы могли оставить эту страницу открытой.",
      fullCardLabel: "Полная книга",
      fullCardIntro: (pageCount, format) =>
        `Если образец вам подходит, полная книга дает намного больше практики в том же практическом стиле. Вы можете получить ее в формате ${format}.`,
      fullCheckFormat: (pageCount, format) => `${pageCount} страниц в формате ${format}`,
      fullCheckPractice: "Намного больше практики, чем в бесплатном образце",
      fullCheckDiscount: (discountCode) => `Скидка 20% на Gumroad с кодом ${discountCode}`,
      fullBookLabel: "Купить полную книгу",
      backLabel: (examTitle) => `Назад к книгам ${examTitle}`
    }
  }
];

function samplePermalink(localeCode, pageSlug) {
  return `${localeCode === "en" ? "" : `/${localeCode}`}/samples/${pageSlug}/`;
}

function buildLanguageLinks(pageSlug) {
  return languages.map((language) => ({
    code: language.code,
    label: language.label,
    url: samplePermalink(language.code, pageSlug)
  }));
}

function getLocalizedBookTitle(book, localeCode) {
  return (book.localizedTitles && book.localizedTitles[localeCode]) || book.title;
}

function buildPage(language, book) {
  const pageSlug = book.sample.pageSlug || book.key;
  const hasStudyPlan = book.sample.bonusKey === "study-plan";
  const localizedBookTitle = getLocalizedBookTitle(book, language.code);
  const formatDisplay = getBookFormatDisplay(language.code, book);
  const sampleChecks = [
    language.copy.sampleTaskCount(book.sample.taskCount),
    hasStudyPlan ? language.copy.sampleBonusStudyPlan : language.copy.sampleDirectAccess,
    language.copy.samplePreview
  ];

  return {
    bookKey: book.key,
    permalink: samplePermalink(language.code, pageSlug),
    title: language.copy.pageTitle(localizedBookTitle),
    description: language.copy.pageDescription(localizedBookTitle, book.sample.taskCount),
    lang: language.code,
    dir: language.dir,
    currentLang: language.code,
    homeUrl: language.homeUrl,
    languageSwitcherLabel: language.languageSwitcherLabel,
    languageLinks: buildLanguageLinks(pageSlug),
    ui: language.ui,
    productUi: language.productUi,
    bookTitle: localizedBookTitle,
    eyebrow: language.copy.eyebrow,
    heroTitle: language.copy.heroTitle(localizedBookTitle),
    heroIntro: language.copy.heroIntro,
    trustBullets: language.copy.trustBullets,
    sampleCardLabel: language.copy.sampleCardLabel,
    sampleCardTitle: language.copy.sampleCardTitle,
    sampleIntro: language.copy.sampleIntro,
    sampleChecks,
    downloadLabel: language.copy.downloadLabel,
    downloadHint: language.copy.downloadHint,
    fullCardLabel: language.copy.fullCardLabel,
    fullCardIntro: language.copy.fullCardIntro(book.pageCount, formatDisplay),
    fullBookChecks: [
      language.copy.fullCheckFormat(book.pageCount, formatDisplay),
      language.copy.fullCheckPractice,
      language.copy.fullCheckDiscount(book.discountCode)
    ],
    fullBookLabel: language.copy.fullBookLabel,
    backLabel: language.copy.backLabel(site.exams[book.examKey].title),
    backAnchor: site.exams[book.examKey].anchor
  };
}

module.exports = languages.flatMap((language) =>
  site.bookOrder.map((bookKey) => buildPage(language, site.books[bookKey]))
);
