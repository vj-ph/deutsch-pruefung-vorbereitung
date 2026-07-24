const sectionTranslations = {
  speaking: {
    en: "Speaking",
    ar: "التحدث",
    ru: "Говорение",
    uk: "Говоріння",
    tr: "Konuşma",
    sr: "Govor"
  },
  writing: {
    en: "Writing",
    ar: "الكتابة",
    ru: "Письмо",
    uk: "Письмо",
    tr: "Yazma",
    sr: "Pisanje"
  },
  listening: {
    en: "Listening",
    ar: "الاستماع",
    ru: "Аудирование",
    uk: "Аудіювання",
    tr: "Dinleme",
    sr: "Slušanje"
  },
  combined: {
    en: "Speaking + Writing",
    ar: "التحدث + الكتابة",
    ru: "Говорение + Письмо",
    uk: "Говоріння + Письмо",
    tr: "Konuşma + Yazma",
    sr: "Govor + Pisanje"
  }
};

const examCatalog = {
  dtz: {
    label: "DTZ",
    country: "Germany",
    language: "de"
  },
  oeif: {
    label: "ÖIF",
    country: "Austria",
    language: "de-AT"
  },
  fide: {
    label: "fide",
    country: "Switzerland",
    language: "de-CH"
  }
};

const locales = ["en", "ar", "uk", "tr", "sr", "ru"];

const countryTranslations = {
  en: { Germany: "Germany", Austria: "Austria", Switzerland: "Switzerland" },
  ar: { Germany: "ألمانيا", Austria: "النمسا", Switzerland: "سويسرا" },
  uk: { Germany: "Німеччина", Austria: "Австрія", Switzerland: "Швейцарія" },
  tr: { Germany: "Almanya", Austria: "Avusturya", Switzerland: "İsviçre" },
  sr: { Germany: "Nemačka", Austria: "Austrija", Switzerland: "Švajcarska" },
  ru: { Germany: "Германия", Austria: "Австрия", Switzerland: "Швейцария" }
};

const storeTranslations = {
  en: {
    paperbackLabel: "Amazon Paperback",
    kindleLabel: "Amazon Kindle",
    paperbackButton: "Buy paperback",
    kindleButton: "Buy Kindle"
  },
  ar: {
    paperbackLabel: "Amazon نسخة ورقية",
    kindleLabel: "Amazon Kindle",
    paperbackButton: "اشترِ النسخة الورقية",
    kindleButton: "اشترِ Kindle"
  },
  uk: {
    paperbackLabel: "Amazon м'яка обкладинка",
    kindleLabel: "Amazon Kindle",
    paperbackButton: "Купити м'яку обкладинку",
    kindleButton: "Купити Kindle"
  },
  tr: {
    paperbackLabel: "Amazon karton kapak",
    kindleLabel: "Amazon Kindle",
    paperbackButton: "Karton kapağı satın al",
    kindleButton: "Kindle satın al"
  },
  sr: {
    paperbackLabel: "Amazon meki povez",
    kindleLabel: "Amazon Kindle",
    paperbackButton: "Kupi meki povez",
    kindleButton: "Kupi Kindle"
  },
  ru: {
    paperbackLabel: "Amazon мягкая обложка",
    kindleLabel: "Amazon Kindle",
    paperbackButton: "Купить мягкую обложку",
    kindleButton: "Купить Kindle"
  }
};

const localizedBookCopy = {
  en: {
    bookLabel: (sectionLabel) => `${sectionLabel} book`,
    description: {
      speaking: (examTitle) => `${examTitle} speaking practice book with exam-style prompts, practical phrases, and model support.`,
      writing: (examTitle) => `${examTitle} writing practice book with guided tasks, useful phrases, and model support.`,
      listening: (examTitle) => `${examTitle} listening practice book with exam-style audio tasks and targeted preparation.`,
      combined: (examTitle) => `${examTitle} combined speaking and writing book with both skill areas in one edition.`
    },
    summary: {
      speaking: (examTitle, country) => `A ${country}-focused ${examTitle} speaking book with realistic prompts, practical speaking support, and targeted preparation for learners who want to improve oral performance fast.`,
      writing: (examTitle, country) => `A ${country}-focused ${examTitle} writing book with exam-style tasks, practical phrase support, and guided preparation for learners who want clearer written answers.`,
      listening: (examTitle, country) => `A ${country}-focused ${examTitle} listening book with realistic audio tasks and targeted preparation for learners who want to improve comprehension.`,
      combined: (examTitle, country) => `A combined ${examTitle} workbook that brings speaking and writing together in one ${country}-focused edition for learners who want one book instead of two.`
    },
    features: {
      speaking: (examTitle, country) => [
        `Focused ${examTitle} speaking practice instead of general German drills`,
        "Practical phrases, model support, and speaking-oriented preparation",
        `${country}-based topics that feel closer to the real exam context`
      ],
      writing: (examTitle, country) => [
        `Focused ${examTitle} writing practice instead of general grammar review`,
        "Useful phrases, structure support, and guided writing preparation",
        `${country}-based situations that match the exam context more closely`
      ],
      listening: (examTitle, country) => [
        `Focused ${examTitle} listening practice instead of general German drills`,
        "Exam-style audio tasks and comprehension-oriented preparation",
        `${country}-based topics that feel closer to the real exam context`
      ],
      combined: (examTitle, country) => [
        `${examTitle} speaking and writing preparation in one book`,
        "A simpler choice if you want both skills together",
        `${country}-focused practice across both exam skill areas`
      ]
    },
    fit: {
      speaking: "Best if speaking feels weaker than writing right now.",
      writing: "Best if writing feels weaker than speaking right now.",
      listening: "Best if understanding spoken German feels weaker than the other exam skills.",
      combined: "Best if you want one book that covers both speaking and writing."
    },
    recommendation: {
      speaking: "Start here if you want a focused speaking book before moving to the combined edition.",
      writing: "Start here if you want a focused writing book before moving to the combined edition.",
      listening: "Choose this if listening is the skill you want to improve first.",
      combined: "Choose this if you want the shortest path to both skills in one purchase."
    },
    sampleDescription: {
      speaking: "Open the free sample PDF to see how the speaking prompts and support are presented before you buy.",
      writing: "Open the free sample PDF to see how the writing tasks and support are presented before you buy."
    },
    booksIntro: (examTitle) => `Compare the ${examTitle} speaking, writing, and combined books, then use the free sample PDFs to decide which book to buy first.`
  },
  ar: {
    bookLabel: (sectionLabel) => `كتاب ${sectionLabel}`,
    description: {
      speaking: (examTitle) => `كتاب تدريب على التحدث لامتحان ${examTitle} مع مهام شبيهة بالامتحان وعبارات عملية ودعم بنماذج جاهزة.`,
      writing: (examTitle) => `كتاب تدريب على الكتابة لامتحان ${examTitle} مع مهام موجهة وعبارات مفيدة ودعم بنماذج جاهزة.`,
      combined: (examTitle) => `كتاب ${examTitle} الموحّد الذي يجمع التحدث والكتابة في إصدار واحد.`
    },
    summary: {
      speaking: (examTitle, country) => `كتاب ${examTitle} للتحدث يركّز على ${country} ويقدّم مهام واقعية ودعمًا عمليًا للتحدث وتحضيرًا موجّهًا لمن يريد تحسين الأداء الشفهي بسرعة.`,
      writing: (examTitle, country) => `كتاب ${examTitle} للكتابة يركّز على ${country} ويقدّم مهامًا بنمط الامتحان ودعمًا بالعبارات العملية وتحضيرًا موجّهًا لمن يريد كتابة إجابات أوضح.`,
      combined: (examTitle, country) => `كتاب ${examTitle} الموحّد يجمع التحدث والكتابة في إصدار واحد يركّز على ${country} للمتعلمين الذين يريدون كتابًا واحدًا بدل كتابين.`
    },
    features: {
      speaking: (examTitle, country) => [
        `تدريب مركز على التحدث في ${examTitle} بدل تمارين ألمانية عامة`,
        "عبارات عملية ودعم بنماذج وتركيز واضح على التحدث",
        `موضوعات مرتبطة بـ ${country} وتشبه سياق الامتحان أكثر`
      ],
      writing: (examTitle, country) => [
        `تدريب مركز على الكتابة في ${examTitle} بدل مراجعة عامة للقواعد`,
        "دعم بالعبارات وبناء النص وتحضير موجّه للكتابة",
        `مواقف مرتبطة بـ ${country} وتناسب سياق الامتحان`
      ],
      combined: (examTitle, country) => [
        `تحضير ${examTitle} للتحدث والكتابة في كتاب واحد`,
        "خيار أبسط إذا كنت تريد المهارتين معًا",
        `تدريب يركّز على ${country} في المهارتين`
      ]
    },
    fit: {
      speaking: "الأفضل إذا كان التحدث أضعف من الكتابة لديك الآن.",
      writing: "الأفضل إذا كانت الكتابة أضعف من التحدث لديك الآن.",
      combined: "الأفضل إذا كنت تريد كتابًا واحدًا يغطي التحدث والكتابة."
    },
    recommendation: {
      speaking: "ابدأ بهذا إذا كنت تريد كتابًا مركزًا على التحدث قبل الانتقال إلى النسخة المجمعة.",
      writing: "ابدأ بهذا إذا كنت تريد كتابًا مركزًا على الكتابة قبل الانتقال إلى النسخة المجمعة.",
      combined: "اختر هذا إذا كنت تريد أقصر طريق لتدريب المهارتين في عملية شراء واحدة."
    },
    sampleDescription: {
      speaking: "افتح عينة PDF المجانية لترى طريقة عرض مهام التحدث ونوع الدعم قبل الشراء.",
      writing: "افتح عينة PDF المجانية لترى طريقة عرض مهام الكتابة ونوع الدعم قبل الشراء."
    },
    booksIntro: (examTitle) => `قارن بين كتب ${examTitle} للتحدث والكتابة والنسخة المجمعة، ثم استخدم عينات PDF المجانية لتقرر أي كتاب تشتري أولًا.`
  },
  uk: {
    bookLabel: (sectionLabel) => `Книга ${sectionLabel}`,
    description: {
      speaking: (examTitle) => `Книга для підготовки з говоріння до ${examTitle} з завданнями у форматі іспиту, практичними фразами та зразковою підтримкою.`,
      writing: (examTitle) => `Книга для підготовки з письма до ${examTitle} з керованими завданнями, корисними фразами та зразковою підтримкою.`,
      combined: (examTitle) => `Комбінована книга ${examTitle}, яка поєднує говоріння та письмо в одному виданні.`
    },
    summary: {
      speaking: (examTitle, country) => `Книга ${examTitle} з говоріння з фокусом на ${country} містить реалістичні завдання, практичну мовну підтримку та цілеспрямовану підготовку для тих, хто хоче швидше покращити усне мовлення.`,
      writing: (examTitle, country) => `Книга ${examTitle} з письма з фокусом на ${country} містить завдання у форматі іспиту, практичні мовні підказки та керовану підготовку для тих, хто хоче писати чіткіші відповіді.`,
      combined: (examTitle, country) => `Комбінована книга ${examTitle} поєднує говоріння та письмо в одному виданні з фокусом на ${country} для тих, хто хоче одну книгу замість двох.`
    },
    features: {
      speaking: (examTitle, country) => [
        `Цілеспрямована підготовка з говоріння до ${examTitle} замість загальних вправ з німецької`,
        "Практичні фрази, зразки відповідей і підтримка саме для усного мовлення",
        `Теми з фокусом на ${country}, ближчі до реального контексту іспиту`
      ],
      writing: (examTitle, country) => [
        `Цілеспрямована підготовка з письма до ${examTitle} замість загального повторення граматики`,
        "Корисні фрази, підтримка структури та керована підготовка до письма",
        `Ситуації з фокусом на ${country}, ближчі до реального контексту іспиту`
      ],
      combined: (examTitle, country) => [
        `Підготовка з говоріння й письма до ${examTitle} в одній книзі`,
        "Простіший вибір, якщо вам потрібні обидві навички разом",
        `Практика з фокусом на ${country} для обох навичок`
      ]
    },
    fit: {
      speaking: "Найкраще, якщо говоріння зараз слабше за письмо.",
      writing: "Найкраще, якщо письмо зараз слабше за говоріння.",
      combined: "Найкраще, якщо ви хочете одну книгу для говоріння й письма."
    },
    recommendation: {
      speaking: "Почніть із цієї книги, якщо хочете окрему підготовку з говоріння перед комбінованим виданням.",
      writing: "Почніть із цієї книги, якщо хочете окрему підготовку з письма перед комбінованим виданням.",
      combined: "Оберіть цю книгу, якщо хочете найкоротший шлях до обох навичок в одній покупці."
    },
    sampleDescription: {
      speaking: "Відкрийте безкоштовний PDF-зразок, щоб подивитися, як подано усні завдання та підтримку перед покупкою.",
      writing: "Відкрийте безкоштовний PDF-зразок, щоб подивитися, як подано письмові завдання та підтримку перед покупкою."
    },
    booksIntro: (examTitle) => `Порівняйте книги ${examTitle} з говоріння, письма та комбіноване видання, а потім скористайтеся безкоштовними PDF-зразками, щоб вирішити, яку книгу купити першою.`
  },
  tr: {
    bookLabel: (sectionLabel) => `${sectionLabel} kitabı`,
    description: {
      speaking: (examTitle) => `${examTitle} için sınav tarzı görevler, pratik kalıplar ve model destek içeren konuşma hazırlık kitabı.`,
      writing: (examTitle) => `${examTitle} için yönlendirmeli görevler, yararlı ifadeler ve model destek içeren yazma hazırlık kitabı.`,
      combined: (examTitle) => `${examTitle} için konuşma ve yazmayı tek baskıda birleştiren birleşik kitap.`
    },
    summary: {
      speaking: (examTitle, country) => `${country} odağındaki bu ${examTitle} konuşma kitabı, gerçekçi görevler, pratik konuşma desteği ve sözlü performansını hızlı geliştirmek isteyenler için hedefli hazırlık sunar.`,
      writing: (examTitle, country) => `${country} odağındaki bu ${examTitle} yazma kitabı, sınav tarzı görevler, pratik ifade desteği ve daha net yazılı cevaplar vermek isteyenler için yönlendirmeli hazırlık sunar.`,
      combined: (examTitle, country) => `Bu birleşik ${examTitle} kitabı, konuşma ve yazmayı ${country} odağındaki tek baskıda birleştirir ve iki kitap yerine tek kitap isteyenler için hazırlanmıştır.`
    },
    features: {
      speaking: (examTitle, country) => [
        `${examTitle} için genel Almanca alıştırmaları yerine odaklı konuşma çalışması`,
        "Pratik ifadeler, model destek ve konuşmaya dönük hazırlık",
        `${country} odaklı ve gerçek sınav bağlamına daha yakın konular`
      ],
      writing: (examTitle, country) => [
        `${examTitle} için genel gramer tekrarı yerine odaklı yazma çalışması`,
        "Yararlı ifadeler, yapı desteği ve yönlendirmeli yazma hazırlığı",
        `${country} odaklı ve gerçek sınav bağlamına daha yakın durumlar`
      ],
      combined: (examTitle, country) => [
        `${examTitle} için konuşma ve yazma hazırlığı tek kitapta`,
        "İki beceriyi birlikte isteyenler için daha basit seçim",
        `${country} odaklı iki becerili hazırlık`
      ]
    },
    fit: {
      speaking: "Konuşma şu anda yazmadan daha zayıfsa en uygun seçim budur.",
      writing: "Yazma şu anda konuşmadan daha zayıfsa en uygun seçim budur.",
      combined: "Konuşma ve yazmayı tek kitapta istiyorsanız en uygun seçim budur."
    },
    recommendation: {
      speaking: "Birleşik kitaba geçmeden önce odaklı bir konuşma kitabı istiyorsanız buradan başlayın.",
      writing: "Birleşik kitaba geçmeden önce odaklı bir yazma kitabı istiyorsanız buradan başlayın.",
      combined: "İki beceriye tek satın alma ile ulaşmanın en kısa yolunu istiyorsanız bunu seçin."
    },
    sampleDescription: {
      speaking: "Satın almadan önce konuşma görevlerinin ve desteğin nasıl sunulduğunu görmek için ücretsiz PDF örneğini açın.",
      writing: "Satın almadan önce yazma görevlerinin ve desteğin nasıl sunulduğunu görmek için ücretsiz PDF örneğini açın."
    },
    booksIntro: (examTitle) => `${examTitle} konuşma, yazma ve birleşik kitaplarını karşılaştırın; sonra hangi kitabı önce satın alacağınıza karar vermek için ücretsiz PDF örneklerini kullanın.`
  },
  sr: {
    bookLabel: (sectionLabel) => `Knjiga za ${sectionLabel.toLowerCase()}`,
    description: {
      speaking: (examTitle) => `Knjiga za pripremu govora za ${examTitle} sa zadacima u stilu ispita, praktičnim frazama i modelskom podrškom.`,
      writing: (examTitle) => `Knjiga za pripremu pisanja za ${examTitle} sa vođenim zadacima, korisnim frazama i modelskom podrškom.`,
      combined: (examTitle) => `Kombinovana knjiga za ${examTitle} koja spaja govor i pisanje u jednom izdanju.`
    },
    summary: {
      speaking: (examTitle, country) => `Ova knjiga za govor za ${examTitle}, sa fokusom na ${country}, donosi realistične zadatke, praktičnu jezičku podršku i ciljanu pripremu za one koji žele brže da poprave usmeni deo.`,
      writing: (examTitle, country) => `Ova knjiga za pisanje za ${examTitle}, sa fokusom na ${country}, donosi zadatke u stilu ispita, praktične fraze i vođenu pripremu za one koji žele jasnije pisane odgovore.`,
      combined: (examTitle, country) => `Ova kombinovana knjiga za ${examTitle} spaja govor i pisanje u jednom izdanju sa fokusom na ${country} za one koji žele jednu knjigu umesto dve.`
    },
    features: {
      speaking: (examTitle, country) => [
        `Ciljana priprema govora za ${examTitle} umesto opštih nemačkih vežbi`,
        "Praktične fraze, modeli odgovora i podrška za usmeni deo",
        `Teme povezane sa ${country} koje su bliže stvarnom ispitu`
      ],
      writing: (examTitle, country) => [
        `Ciljana priprema pisanja za ${examTitle} umesto opšteg ponavljanja gramatike`,
        "Korisne fraze, podrška za strukturu i vođena priprema pisanja",
        `Situacije povezane sa ${country} koje su bliže stvarnom ispitu`
      ],
      combined: (examTitle, country) => [
        `Priprema govora i pisanja za ${examTitle} u jednoj knjizi`,
        "Jednostavniji izbor ako želite obe veštine zajedno",
        `Priprema za obe veštine sa fokusom na ${country}`
      ]
    },
    fit: {
      speaking: "Najbolji izbor ako vam je govor trenutno slabiji od pisanja.",
      writing: "Najbolji izbor ako vam je pisanje trenutno slabije od govora.",
      combined: "Najbolji izbor ako želite jednu knjigu za govor i pisanje."
    },
    recommendation: {
      speaking: "Počnite ovde ako želite fokusiranu knjigu za govor pre kombinovanog izdanja.",
      writing: "Počnite ovde ako želite fokusiranu knjigu za pisanje pre kombinovanog izdanja.",
      combined: "Izaberite ovo ako želite najkraći put do obe veštine u jednoj kupovini."
    },
    sampleDescription: {
      speaking: "Otvorite besplatan PDF uzorak da vidite kako su predstavljeni zadaci za govor i podrška pre kupovine.",
      writing: "Otvorite besplatan PDF uzorak da vidite kako su predstavljeni zadaci za pisanje i podrška pre kupovine."
    },
    booksIntro: (examTitle) => `Uporedite knjige za govor, pisanje i kombinovanu pripremu za ${examTitle}, pa iskoristite besplatne PDF uzorke da odlučite koju knjigu prvo da kupite.`
  },
  ru: {
    bookLabel: (sectionLabel) => `Книга ${sectionLabel.toLowerCase()}`,
    description: {
      speaking: (examTitle) => `Книга для подготовки к говорению по ${examTitle} с заданиями в формате экзамена, практическими фразами и модельной поддержкой.`,
      writing: (examTitle) => `Книга для подготовки к письму по ${examTitle} с направляющими заданиями, полезными фразами и модельной поддержкой.`,
      combined: (examTitle) => `Комбинированная книга по ${examTitle}, которая объединяет говорение и письмо в одном издании.`
    },
    summary: {
      speaking: (examTitle, country) => `Эта книга по говорению для ${examTitle} с фокусом на ${country} дает реалистичные задания, практическую языковую поддержку и целенаправленную подготовку для тех, кто хочет быстрее улучшить устную часть.`,
      writing: (examTitle, country) => `Эта книга по письму для ${examTitle} с фокусом на ${country} дает задания в формате экзамена, практические фразы и направленную подготовку для тех, кто хочет писать более четкие ответы.`,
      combined: (examTitle, country) => `Эта комбинированная книга по ${examTitle} объединяет говорение и письмо в одном издании с фокусом на ${country} для тех, кто хочет одну книгу вместо двух.`
    },
    features: {
      speaking: (examTitle, country) => [
        `Целенаправленная подготовка к говорению по ${examTitle} вместо общих упражнений по немецкому`,
        "Практические фразы, образцы ответов и поддержка именно для устной части",
        `Темы с фокусом на ${country}, ближе к реальному контексту экзамена`
      ],
      writing: (examTitle, country) => [
        `Целенаправленная подготовка к письму по ${examTitle} вместо общего повторения грамматики`,
        "Полезные фразы, поддержка структуры и направленная подготовка к письму",
        `Ситуации с фокусом на ${country}, ближе к реальному контексту экзамена`
      ],
      combined: (examTitle, country) => [
        `Подготовка к говорению и письму по ${examTitle} в одной книге`,
        "Более простой выбор, если вам нужны обе навыка вместе",
        `Подготовка по обеим навыкам с фокусом на ${country}`
      ]
    },
    fit: {
      speaking: "Лучший выбор, если говорение сейчас слабее письма.",
      writing: "Лучший выбор, если письмо сейчас слабее говорения.",
      combined: "Лучший выбор, если вы хотите одну книгу для говорения и письма."
    },
    recommendation: {
      speaking: "Начните с этой книги, если хотите отдельную подготовку к говорению перед комбинированным изданием.",
      writing: "Начните с этой книги, если хотите отдельную подготовку к письму перед комбинированным изданием.",
      combined: "Выберите эту книгу, если хотите самый короткий путь к двум навыкам в одной покупке."
    },
    sampleDescription: {
      speaking: "Откройте бесплатный PDF-образец, чтобы посмотреть, как поданы устные задания и поддержка перед покупкой.",
      writing: "Откройте бесплатный PDF-образец, чтобы посмотреть, как поданы письменные задания и поддержка перед покупкой."
    },
    booksIntro: (examTitle) => `Сравните книги по говорению, письму и комбинированное издание для ${examTitle}, а затем используйте бесплатные PDF-образцы, чтобы решить, какую книгу купить первой.`
  }
};

const subtitleTemplates = {
  speaking: (examTitle) => `Speaking practice for ${examTitle}`,
  writing: (examTitle) => `Writing practice for ${examTitle}`,
  listening: (examTitle) => `Listening practice for ${examTitle}`,
  combined: (examTitle) => `Combined speaking and writing practice for ${examTitle}`
};

function euro(amount) {
  return `€${amount}`;
}

function purchaseOptions(spec) {
  return [
    {
      key: "amazon-paperback",
      label: "Amazon Paperback",
      buttonLabel: "Buy paperback",
      localizedLabels: Object.fromEntries(locales.map((locale) => [locale, storeTranslations[locale].paperbackLabel])),
      localizedButtonLabels: Object.fromEntries(locales.map((locale) => [locale, storeTranslations[locale].paperbackButton])),
      priceDisplay: euro(spec.paperbackPrice),
      url: spec.paperbackUrl,
      trackingType: "amazon_paperback"
    },
    {
      key: "amazon-kindle",
      label: "Amazon Kindle",
      buttonLabel: "Buy Kindle",
      localizedLabels: Object.fromEntries(locales.map((locale) => [locale, storeTranslations[locale].kindleLabel])),
      localizedButtonLabels: Object.fromEntries(locales.map((locale) => [locale, storeTranslations[locale].kindleButton])),
      priceDisplay: euro(spec.kindlePrice),
      url: spec.kindleUrl,
      trackingType: "amazon_kindle"
    }
  ];
}

function localizedTitles(examLabel, levelLabel, sectionKey) {
  return Object.fromEntries(
    Object.entries(sectionTranslations[sectionKey]).map(([locale, sectionLabel]) => [
      locale,
      `${examLabel} ${levelLabel} ${sectionLabel}`
    ])
  );
}

function sampleData(key, title, pdfPath, sectionKey) {
  const localizedDescriptions = Object.fromEntries(
    locales.map((locale) => [
      locale,
      localizedBookCopy[locale].sampleDescription[sectionKey]
    ])
  );

  return {
    title: `Free sample PDF for ${title}`,
    description: localizedDescriptions.en,
    localizedDescriptions,
    pageSlug: key,
    pdfPath
  };
}

function buildLocalizedBookContent(examTitle, exam, sectionKey) {
  return Object.fromEntries(
    locales.map((locale) => {
      const localeCopy = localizedBookCopy[locale];
      const fallbackCopy = localizedBookCopy.en;
      const countryLabel = countryTranslations[locale][exam.country];
      const sectionLabel = sectionTranslations[sectionKey][locale];

      return [locale, {
        examSection: sectionLabel,
        bookLabel: localeCopy.bookLabel(sectionLabel),
        description: (localeCopy.description[sectionKey] || fallbackCopy.description[sectionKey])(examTitle),
        summary: (localeCopy.summary[sectionKey] || fallbackCopy.summary[sectionKey])(examTitle, countryLabel),
        features: (localeCopy.features[sectionKey] || fallbackCopy.features[sectionKey])(examTitle, countryLabel),
        fit: localeCopy.fit[sectionKey] || fallbackCopy.fit[sectionKey],
        recommendation: localeCopy.recommendation[sectionKey] || fallbackCopy.recommendation[sectionKey]
      }];
    })
  );
}

function buildLocalizedBooksIntro(examTitle) {
  return Object.fromEntries(
    locales.map((locale) => [locale, localizedBookCopy[locale].booksIntro(examTitle)])
  );
}

const bookSpecs = [
  {
    key: "dtz-a2-listening",
    exam: "dtz",
    level: "A2",
    section: "listening",
    thumbnailPath: "/assets/book_thumbnails/dtz_a2_hoeren.jpg",
    paperbackUrl: "https://www.amazon.de/dp/B0H7MWJKQM",
    kindleUrl: "https://www.amazon.de/dp/B0H7MW1T4Y",
    paperbackPrice: "5.88",
    kindlePrice: "3.99"
  },
  {
    key: "dtz-a2-speaking",
    exam: "dtz",
    level: "A2",
    section: "speaking",
    thumbnailPath: "/assets/book_thumbnails/thumbnail_dtz_a2_speaking.jpeg",
    samplePath: "/assets/sample-books/dtz_a2/dtz_a2_speaking_sample.pdf",
    paperbackUrl: "https://www.amazon.de/dp/B0H3H72WH8",
    kindleUrl: "https://www.amazon.de/dp/B0H3G91CXB",
    paperbackPrice: "6.00",
    kindlePrice: "3.99"
  },
  {
    key: "dtz-a2-writing",
    exam: "dtz",
    level: "A2",
    section: "writing",
    thumbnailPath: "/assets/book_thumbnails/thumbnail_dtz_a2_writing.jpeg",
    samplePath: "/assets/sample-books/dtz_a2/dtz_a2_writing_sample.pdf",
    paperbackUrl: "https://www.amazon.de/dp/B0H3F6G8H1",
    kindleUrl: "https://www.amazon.de/dp/B0H3CHH3WH",
    paperbackPrice: "5.49",
    kindlePrice: "3.99"
  },
  {
    key: "dtz-a2-combined",
    exam: "dtz",
    level: "A2",
    section: "combined",
    thumbnailPath: "/assets/book_thumbnails/thumbnail_dtz_a2_speaking_writing.jpg",
    paperbackUrl: "https://www.amazon.de/dp/B0H3TPRG2L",
    kindleUrl: "https://www.amazon.de/dp/B0H3R5M4VS",
    paperbackPrice: "7.69",
    kindlePrice: "4.99"
  },
  {
    key: "oeif-a2-listening",
    exam: "oeif",
    level: "A2",
    section: "listening",
    thumbnailPath: "/assets/book_thumbnails/oeif_a2_hoeren.jpg",
    paperbackUrl: "https://www.amazon.de/dp/B0H6TPD33B",
    kindleUrl: "https://www.amazon.de/dp/B0H5B3SHRP",
    paperbackPrice: "11.21",
    kindlePrice: "5.99"
  },
  {
    key: "oeif-a2-speaking",
    exam: "oeif",
    level: "A2",
    section: "speaking",
    thumbnailPath: "/assets/book_thumbnails/thumbnail_oeif_a2_speaking.jpeg",
    samplePath: "/assets/sample-books/oeif_a2/oeif_a2_speaking_sample.pdf",
    paperbackUrl: "https://www.amazon.de/dp/B0H2Y816X7",
    kindleUrl: "https://www.amazon.de/dp/B0H2WDV97C",
    paperbackPrice: "9.89",
    kindlePrice: "5.99"
  },
  {
    key: "oeif-a2-writing",
    exam: "oeif",
    level: "A2",
    section: "writing",
    thumbnailPath: "/assets/book_thumbnails/thumbnail_oeif_a2_writing.jpeg",
    samplePath: "/assets/sample-books/oeif_a2/oeif_a2_writing_sample.pdf",
    paperbackUrl: "https://www.amazon.de/dp/B0H2YGGY27",
    kindleUrl: "https://www.amazon.de/dp/B0H2WMW6RC",
    paperbackPrice: "8.89",
    kindlePrice: "4.99"
  },
  {
    key: "oeif-a2-combined",
    exam: "oeif",
    level: "A2",
    section: "combined",
    thumbnailPath: "/assets/book_thumbnails/thumbnail_oeif_a2_speaking_writing.jpg",
    paperbackUrl: "https://www.amazon.de/dp/B0H3TJYBRG",
    kindleUrl: "https://www.amazon.de/dp/B0H3RGBX6K",
    paperbackPrice: "17.59",
    kindlePrice: "9.99"
  },
  {
    key: "fide-a2-listening",
    exam: "fide",
    level: "A2",
    section: "listening",
    thumbnailPath: "/assets/book_thumbnails/fide_a2_hoeren.jpg",
    paperbackUrl: "https://www.amazon.de/dp/B0H6KG3WC7",
    kindleUrl: "https://www.amazon.de/dp/B0H6KNFQDB",
    paperbackPrice: "10.07",
    kindlePrice: "5.99"
  },
  {
    key: "fide-a2-speaking",
    exam: "fide",
    level: "A2",
    section: "speaking",
    thumbnailPath: "/assets/book_thumbnails/thumbnail_fide_a2_speaking.jpeg",
    samplePath: "/assets/sample-books/fide_a2/fide_a2_speaking_sample.pdf",
    paperbackUrl: "https://www.amazon.de/dp/B0H2PZBH9C",
    kindleUrl: "https://www.amazon.de/dp/B0H2NCY1Z9",
    paperbackPrice: "6.99",
    kindlePrice: "3.99",
    pageCount: 181
  },
  {
    key: "fide-a2-writing",
    exam: "fide",
    level: "A2",
    section: "writing",
    thumbnailPath: "/assets/book_thumbnails/thumbnail_fide_a2_writing.jpeg",
    samplePath: "/assets/sample-books/fide_a2/fide_a2_writing_sample.pdf",
    paperbackUrl: "https://www.amazon.de/dp/B0H2RR2W51",
    kindleUrl: "https://www.amazon.de/dp/B0GX31SKDY",
    paperbackPrice: "9.89",
    kindlePrice: "5.99",
    pageCount: 89
  },
  {
    key: "fide-a2-combined",
    exam: "fide",
    level: "A2",
    section: "combined",
    thumbnailPath: "/assets/book_thumbnails/thumbnail_fide_a2_speaking_writing.jpg",
    paperbackUrl: "https://www.amazon.de/dp/B0H4CTM2LH",
    kindleUrl: "https://www.amazon.de/dp/B0H4B73N2S",
    paperbackPrice: "18.69",
    kindlePrice: "12.98"
  },
  {
    key: "dtz-b1-listening",
    exam: "dtz",
    level: "B1",
    section: "listening",
    thumbnailPath: "/assets/book_thumbnails/dtz_b1_hoeren.jpg",
    paperbackUrl: "https://www.amazon.de/dp/B0H7KD9TV1",
    kindleUrl: "https://www.amazon.de/dp/B0H7KBLB7P",
    paperbackPrice: "7.19",
    kindlePrice: "3.99"
  },
  {
    key: "dtz-b1-speaking",
    exam: "dtz",
    level: "B1",
    section: "speaking",
    thumbnailPath: "/assets/book_thumbnails/thumbnail_dtz_b1_speaking.jpeg",
    samplePath: "/assets/sample-books/dtz_b1/dtz-speaking-sample-english.pdf",
    paperbackUrl: "https://amzn.eu/d/0dqMZYuX",
    kindleUrl: "https://amzn.eu/d/0jcGj4Dg",
    paperbackPrice: "6.99",
    kindlePrice: "3.99",
    pageCount: 208
  },
  {
    key: "dtz-b1-writing",
    exam: "dtz",
    level: "B1",
    section: "writing",
    thumbnailPath: "/assets/book_thumbnails/thumbnail_dtz_b1_writing.jpeg",
    samplePath: "/assets/sample-books/dtz_b1/dtz-writing-sample-english.pdf",
    paperbackUrl: "https://amzn.eu/d/0iNA4EWl",
    kindleUrl: "https://amzn.eu/d/0hk4FrxZ",
    paperbackPrice: "5.49",
    kindlePrice: "3.99",
    pageCount: 145
  },
  {
    key: "dtz-b1-combined",
    exam: "dtz",
    level: "B1",
    section: "combined",
    thumbnailPath: "/assets/book_thumbnails/thumbnail_dtz_b1_speaking_writing.jpg",
    paperbackUrl: "https://www.amazon.de/dp/B0H3TMKZWV",
    kindleUrl: "https://www.amazon.de/dp/B0H3PPK8VM",
    paperbackPrice: "10.18",
    kindlePrice: "4.99"
  },
  {
    key: "oeif-b1-listening",
    exam: "oeif",
    level: "B1",
    section: "listening",
    thumbnailPath: "/assets/book_thumbnails/oeif_b1_hoeren.jpg",
    paperbackUrl: "https://www.amazon.de/dp/B0H6BMMGJ6",
    kindleUrl: "https://www.amazon.de/dp/B0H6BKR9LP",
    paperbackPrice: "11.99",
    kindlePrice: "6.99"
  },
  {
    key: "oeif-b1-speaking",
    exam: "oeif",
    level: "B1",
    section: "speaking",
    thumbnailPath: "/assets/book_thumbnails/thumbnail_oeif_b1_speaking.jpeg",
    samplePath: "/assets/sample-books/oeif_b1/oeif-b1-speaking-sample-english.pdf",
    paperbackUrl: "https://www.amazon.de/dp/B0GYRW7ZYW",
    kindleUrl: "https://www.amazon.de/dp/B0GX311DY8",
    paperbackPrice: "10.99",
    kindlePrice: "6.99",
    pageCount: 219
  },
  {
    key: "oeif-b1-writing",
    exam: "oeif",
    level: "B1",
    section: "writing",
    thumbnailPath: "/assets/book_thumbnails/thumbnail_oeif_b1_writing.jpeg",
    samplePath: "/assets/sample-books/oeif_b1/oeif-b1-writing-sample-english.pdf",
    paperbackUrl: "https://www.amazon.de/dp/B0GYRWVVCQ",
    kindleUrl: "https://www.amazon.de/dp/B0GX2YKRVY",
    paperbackPrice: "10.99",
    kindlePrice: "6.99",
    pageCount: 127
  },
  {
    key: "oeif-b1-combined",
    exam: "oeif",
    level: "B1",
    section: "combined",
    thumbnailPath: "/assets/book_thumbnails/thumbnail_oeif_b1_speaking_writing.jpg",
    paperbackUrl: "https://www.amazon.de/dp/B0H3NWBWKW",
    kindleUrl: "https://www.amazon.de/dp/B0GX2ZZ2W6",
    paperbackPrice: "19.79",
    kindlePrice: "13.98"
  },
  {
    key: "fide-b1-listening",
    exam: "fide",
    level: "B1",
    section: "listening",
    thumbnailPath: "/assets/book_thumbnails/fide_b1_hoeren.jpg",
    paperbackUrl: "https://www.amazon.de/dp/B0H6VH213C",
    kindleUrl: "https://www.amazon.de/dp/B0H6VJ3B58",
    paperbackPrice: "11.21",
    kindlePrice: "5.99"
  },
  {
    key: "fide-b1-speaking",
    exam: "fide",
    level: "B1",
    section: "speaking",
    thumbnailPath: "/assets/book_thumbnails/thumbnail_fide_b1_speaking.jpg",
    samplePath: "/assets/sample-books/fide_b1/fide_b1_speaking_sample.pdf",
    paperbackUrl: "https://www.amazon.de/dp/B0H3KG5FZZ",
    kindleUrl: "https://www.amazon.de/dp/B0H3JDZ3PS",
    paperbackPrice: "8.79",
    kindlePrice: "4.99"
  },
  {
    key: "fide-b1-writing",
    exam: "fide",
    level: "B1",
    section: "writing",
    thumbnailPath: "/assets/book_thumbnails/thumbnail_fide_b1_writing.jpg",
    samplePath: "/assets/sample-books/fide_b1/fide_b1_writing_sample.pdf",
    paperbackUrl: "https://www.amazon.de/dp/B0H3KYQ37F",
    kindleUrl: "https://www.amazon.de/dp/B0H3J6STSL",
    paperbackPrice: "8.79",
    kindlePrice: "4.99"
  },
  {
    key: "fide-b1-combined",
    exam: "fide",
    level: "B1",
    section: "combined",
    thumbnailPath: "/assets/book_thumbnails/thumbnail_fide_b1_speaking_writing.jpg",
    paperbackUrl: "https://www.amazon.de/dp/B0H4CQJ2CL",
    kindleUrl: "https://www.amazon.de/dp/B0H4BBD6CH",
    paperbackPrice: "15.39",
    kindlePrice: "9.49"
  },
  {
    key: "oeif-b2-listening",
    exam: "oeif",
    level: "B2",
    section: "listening",
    thumbnailPath: "/assets/book_thumbnails/oeif_b2_hoeren.jpg",
    paperbackUrl: "https://www.amazon.de/dp/B0H9HLTL7V",
    kindleUrl: "https://www.amazon.de/dp/B0H9HFL4CT",
    paperbackPrice: "9.70",
    kindlePrice: "4.99"
  },
  {
    key: "oeif-b2-speaking",
    exam: "oeif",
    level: "B2",
    section: "speaking",
    thumbnailPath: "/assets/book_thumbnails/oeif_b2_speaking.jpg",
    paperbackUrl: "https://www.amazon.de/dp/B0H4QJ8ZVR",
    kindleUrl: "https://www.amazon.de/dp/B0H4NBCQSV",
    paperbackPrice: "10.79",
    kindlePrice: "4.99"
  },
  {
    key: "oeif-b2-writing",
    exam: "oeif",
    level: "B2",
    section: "writing",
    thumbnailPath: "/assets/book_thumbnails/oeif_b2_writing.jpg",
    paperbackUrl: "https://www.amazon.de/dp/B0H4Q8VJK1",
    kindleUrl: "https://www.amazon.de/dp/B0GX2YS3FC",
    paperbackPrice: "9.89",
    kindlePrice: "4.99"
  },
  {
    key: "oeif-b2-combined",
    exam: "oeif",
    level: "B2",
    section: "combined",
    thumbnailPath: "/assets/book_thumbnails/oeif_b2_speaking_writing.jpg",
    paperbackUrl: "https://www.amazon.de/dp/B0H4QF7SC3",
    kindleUrl: "https://www.amazon.de/dp/B0GX37V8F5",
    paperbackPrice: "17.59",
    kindlePrice: "8.99"
  }
];

const levelOrder = ["a2", "b1", "b2"];
const bookOrder = [
  "dtz-a2-speaking",
  "dtz-a2-writing",
  "dtz-a2-combined",
  "dtz-a2-listening",
  "oeif-a2-speaking",
  "oeif-a2-writing",
  "oeif-a2-combined",
  "oeif-a2-listening",
  "fide-a2-speaking",
  "fide-a2-writing",
  "fide-a2-combined",
  "fide-a2-listening",
  "dtz-b1-speaking",
  "dtz-b1-writing",
  "dtz-b1-combined",
  "dtz-b1-listening",
  "oeif-b1-speaking",
  "oeif-b1-writing",
  "oeif-b1-combined",
  "oeif-b1-listening",
  "fide-b1-speaking",
  "fide-b1-writing",
  "fide-b1-combined",
  "fide-b1-listening",
  "oeif-b2-speaking",
  "oeif-b2-writing",
  "oeif-b2-combined",
  "oeif-b2-listening"
];

const levelBooks = {
  a2: bookOrder.filter((key) => key.includes("-a2-")),
  b1: bookOrder.filter((key) => key.includes("-b1-")),
  b2: bookOrder.filter((key) => key.includes("-b2-"))
};

const exams = {
  "dtz-a2": {
    key: "dtz-a2",
    examCode: "dtz",
    levelKey: "a2",
    title: "DTZ A2",
    navLabel: "DTZ A2",
    anchor: "dtz-a2",
    description: "DTZ A2 books for Germany with separate speaking, writing, and listening practice plus one combined edition.",
    booksIntro: "Compare the DTZ A2 speaking, writing, listening, and combined books and open the free sample PDFs where available.",
    localizedBooksIntro: buildLocalizedBooksIntro("DTZ A2"),
    books: ["dtz-a2-speaking", "dtz-a2-writing", "dtz-a2-combined", "dtz-a2-listening"]
  },
  "oeif-a2": {
    key: "oeif-a2",
    examCode: "oeif",
    levelKey: "a2",
    title: "ÖIF A2",
    navLabel: "ÖIF A2",
    anchor: "oeif-a2",
    description: "ÖIF A2 books for Austria with separate speaking, writing, and listening practice plus one combined edition.",
    booksIntro: "Compare the ÖIF A2 speaking, writing, listening, and combined books and open the free sample PDFs where available.",
    localizedBooksIntro: buildLocalizedBooksIntro("ÖIF A2"),
    books: ["oeif-a2-speaking", "oeif-a2-writing", "oeif-a2-combined", "oeif-a2-listening"]
  },
  "fide-a2": {
    key: "fide-a2",
    examCode: "fide",
    levelKey: "a2",
    title: "fide A2",
    navLabel: "fide A2",
    anchor: "fide-a2",
    description: "fide A2 books for Switzerland with separate speaking, writing, and listening practice plus one combined edition.",
    booksIntro: "Compare the fide A2 speaking, writing, listening, and combined books and open the free sample PDFs where available.",
    localizedBooksIntro: buildLocalizedBooksIntro("fide A2"),
    books: ["fide-a2-speaking", "fide-a2-writing", "fide-a2-combined", "fide-a2-listening"]
  },
  "dtz-b1": {
    key: "dtz-b1",
    examCode: "dtz",
    levelKey: "b1",
    title: "DTZ B1",
    navLabel: "DTZ B1",
    anchor: "dtz-b1",
    description: "DTZ B1 books for Germany with separate speaking, writing, and listening practice plus one combined edition.",
    booksIntro: "Compare the DTZ B1 speaking, writing, listening, and combined books and open the free sample PDFs where available.",
    localizedBooksIntro: buildLocalizedBooksIntro("DTZ B1"),
    books: ["dtz-b1-speaking", "dtz-b1-writing", "dtz-b1-combined", "dtz-b1-listening"]
  },
  "oeif-b1": {
    key: "oeif-b1",
    examCode: "oeif",
    levelKey: "b1",
    title: "ÖIF B1",
    navLabel: "ÖIF B1",
    anchor: "oeif-b1",
    description: "ÖIF B1 books for Austria with separate speaking, writing, and listening practice plus one combined edition.",
    booksIntro: "Compare the ÖIF B1 speaking, writing, listening, and combined books and open the free sample PDFs where available.",
    localizedBooksIntro: buildLocalizedBooksIntro("ÖIF B1"),
    books: ["oeif-b1-speaking", "oeif-b1-writing", "oeif-b1-combined", "oeif-b1-listening"]
  },
  "fide-b1": {
    key: "fide-b1",
    examCode: "fide",
    levelKey: "b1",
    title: "fide B1",
    navLabel: "fide B1",
    anchor: "fide-b1",
    description: "fide B1 books for Switzerland with separate speaking, writing, and listening practice plus one combined edition.",
    booksIntro: "Compare the fide B1 speaking, writing, listening, and combined books and open the free sample PDFs where available.",
    localizedBooksIntro: buildLocalizedBooksIntro("fide B1"),
    books: ["fide-b1-speaking", "fide-b1-writing", "fide-b1-combined", "fide-b1-listening"]
  },
  "oeif-b2": {
    key: "oeif-b2",
    examCode: "oeif",
    levelKey: "b2",
    title: "ÖIF B2",
    navLabel: "ÖIF B2",
    anchor: "oeif-b2",
    description: "ÖIF B2 books for Austria with separate speaking, writing, and listening practice plus one combined edition.",
    booksIntro: "Compare the ÖIF B2 speaking, writing, listening, and combined books.",
    localizedBooksIntro: buildLocalizedBooksIntro("ÖIF B2"),
    books: ["oeif-b2-speaking", "oeif-b2-writing", "oeif-b2-combined", "oeif-b2-listening"]
  }
};

const books = Object.fromEntries(
  bookSpecs.map((spec) => {
    const exam = examCatalog[spec.exam];
    const examTitle = `${exam.label} ${spec.level}`;
    const localizedContent = buildLocalizedBookContent(examTitle, exam, spec.section);
    const title = `${examTitle} ${sectionTranslations[spec.section].en}`;
    const book = {
      key: spec.key,
      examKey: `${spec.exam}-${spec.level.toLowerCase()}`,
      levelKey: spec.level.toLowerCase(),
      title,
      shortTitle: title,
      localizedTitles: localizedTitles(exam.label, spec.level, spec.section),
      localizedShortTitles: localizedTitles(exam.label, spec.level, spec.section),
      subtitle: subtitleTemplates[spec.section](examTitle),
      language: exam.language,
      examSection: sectionTranslations[spec.section].en,
      localizedExamSections: Object.fromEntries(locales.map((locale) => [locale, localizedContent[locale].examSection])),
      localizedBookLabels: Object.fromEntries(locales.map((locale) => [locale, localizedContent[locale].bookLabel])),
      formats: ["Paperback", "Kindle"],
      pageCount: spec.pageCount,
      thumbnailPath: spec.thumbnailPath,
      description: localizedContent.en.description,
      localizedDescriptions: Object.fromEntries(locales.map((locale) => [locale, localizedContent[locale].description])),
      summary: localizedContent.en.summary,
      localizedSummaries: Object.fromEntries(locales.map((locale) => [locale, localizedContent[locale].summary])),
      features: localizedContent.en.features,
      localizedFeatures: Object.fromEntries(locales.map((locale) => [locale, localizedContent[locale].features])),
      localizedFit: Object.fromEntries(locales.map((locale) => [locale, localizedContent[locale].fit])),
      localizedRecommendation: Object.fromEntries(locales.map((locale) => [locale, localizedContent[locale].recommendation])),
      purchaseOptions: purchaseOptions(
        spec
      )
    };

    if (spec.samplePath) {
      book.sample = sampleData(spec.key, title, spec.samplePath, spec.section);
    }

    return [spec.key, book];
  })
);

module.exports = {
  title: "Deutsch Kompass A2, B1 & B2 Books",
  description: "Separate A2, B1, and B2 book pages for DTZ, ÖIF, and fide speaking, writing, listening, and combined books, with free sample PDFs for selected titles.",
  url: "https://deutschkompass.com",
  language: "en",
  author: {
    name: "Deutsch Kompass",
    url: "https://www.amazon.de/s?i=digital-text&rh=p_27%3ADeutsch+Kompass"
  },
  brand: {
    name: "Deutsch Kompass",
    shortName: "Deutsch Kompass"
  },
  social: {
    youtube: "https://www.youtube.com/channel/UC6WmmVATkopP_HJTBiTA7nw",
    instagram: "https://www.instagram.com/deutschkompass_deutschlernen/",
    tiktok: "https://www.tiktok.com/@deutschkompass_tiktok"
  },
  defaultBookKey: "dtz-a2-speaking",
  homeFeaturedBookOrder: [
    "dtz-a2-speaking",
    "oeif-a2-combined",
    "fide-a2-speaking",
    "dtz-b1-combined",
    "oeif-b1-speaking",
    "fide-b1-combined"
  ],
  bookOrder,
  examOrder: ["dtz-a2", "oeif-a2", "fide-a2", "dtz-b1", "oeif-b1", "fide-b1", "oeif-b2"],
  levelOrder,
  levels: {
    a2: {
      key: "a2",
      title: "A2",
      navLabel: "A2",
      books: levelBooks.a2,
      exams: ["dtz-a2", "oeif-a2", "fide-a2"]
    },
    b1: {
      key: "b1",
      title: "B1",
      navLabel: "B1",
      books: levelBooks.b1,
      exams: ["dtz-b1", "oeif-b1", "fide-b1"]
    },
    b2: {
      key: "b2",
      title: "B2",
      navLabel: "B2",
      books: levelBooks.b2,
      exams: ["oeif-b2"]
    }
  },
  sales: {
    format: "Paperback and Kindle"
  },
  exams,
  books,
  utm: {
    source: "website",
    medium: "organic",
    campaign: "a2-b1-b2-books"
  },
  analytics: {
    ga4: {
      measurementId: "G-ZX5DZYK4J4",
      enabled: true,
      _setup_instructions: "Create GA4 property at analytics.google.com, get real Measurement ID (G-XXXXXXXXXX format), replace empty string above, then set enabled: true"
    }
  }
};
