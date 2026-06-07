const site = require("./site.js");

function levelPermalink(localeCode, levelKey) {
  const localePrefix = localeCode === "en" ? "" : `/${localeCode}`;
  return `${localePrefix}/${levelKey}/`;
}

function homePermalink(localeCode) {
  return localeCode === "en" ? "/" : `/${localeCode}/`;
}

function levelLinks(language) {
  return site.levelOrder.map((levelKey) => ({
    key: levelKey,
    label: language.copy.levelButtonLabel(levelKey.toUpperCase()),
    url: levelPermalink(language.code, levelKey)
  }));
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
      footerIntro: "A2 and B1 speaking, writing, and combined books for DTZ, ÖIF, and fide, plus free sample PDFs for the separate speaking and writing books.",
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
      notAvailable: "Not available",
      clickNote: "Sample buttons open PDFs on this site. Purchase buttons open Amazon in a new tab."
    },
    copy: {
      homeTitle: "Pass DTZ, ÖIF, and fide with practical speaking and writing books for A2 and B1.",
      homeDescription: "Exam preparation books for DTZ, ÖIF, and fide across A2 and B1, with free sample PDFs for selected speaking and writing titles.",
      homeEyebrow: "A2 and B1 exam prep books",
      homeIntro: "Practice with focused books for speaking, writing, or both - made for learners preparing for exams in Germany, Austria, and Switzerland.",
      homeCardTitle: (level) => `${level} books`,
      homeCardIntro: (level) => `Open the ${level} page to compare DTZ, ÖIF, and fide ${level} speaking, writing, and combined books in one place.`,
      homeCardBullets: (level) => [
        `${level} books for DTZ, ÖIF, and fide`,
        "Speaking and writing books with free sample PDFs",
        "Combined books collected with the same level"
      ],
      levelEyebrow: (level) => `${level} books`,
      levelTitle: (level) => `Choose practical ${level} speaking and writing books for DTZ, ÖIF, and fide.`,
      levelDescription: (level) => `${level} speaking, writing, and combined books for DTZ, ÖIF, and fide, with free sample PDFs for selected speaking and writing titles.`,
      levelIntro: (level) => `Find the right ${level} book for Germany, Austria, or Switzerland - with focused speaking books, writing books, combined editions, and free samples for selected titles.`,
      levelButtonLabel: (level) => `${level} books`,
      sampleCtaLabel: "Open free sample",
      sampleLabel: "Sample",
      noSampleText: "Combined books do not have a free sample PDF.",
      switchLevelLabel: (level) => `See ${level} books`
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
      footerIntro: "كتب A2 وB1 للتحدث والكتابة والنسخة المجمعة لامتحانات DTZ وÖIF وfide، مع عينات PDF مجانية لكتب التحدث والكتابة المنفصلة.",
      booksLabel: "الكتب",
      sampleLabel: "عينة",
      fullBookLabel: "الكتاب الكامل",
      rightsReserved: "جميع الحقوق محفوظة."
    },
    productUi: {
      fullBook: "الكتاب الكامل",
      freeSample: "عينة مجانية",
      format: "الصيغة",
      pages: "الصفحات",
      free: "مجاني",
      notAvailable: "غير متاح",
      clickNote: "أزرار العينة تفتح ملفات PDF على هذا الموقع، وأزرار الشراء تفتح Amazon في علامة تبويب جديدة."
    },
    copy: {
      homeTitle: "اجتز امتحانات DTZ وÖIF وfide بكتب عملية للتحدث والكتابة لمستويي A2 وB1.",
      homeDescription: "كتب تحضير لامتحانات DTZ وÖIF وfide عبر مستويي A2 وB1، مع عينات PDF مجانية لبعض كتب التحدث والكتابة.",
      homeEyebrow: "كتب تحضير A2 وB1",
      homeIntro: "تدرّب بكتب مركزة للتحدث أو الكتابة أو للمهارتين معًا، ومصممة للمتعلمين الذين يستعدون للامتحانات في ألمانيا والنمسا وسويسرا.",
      homeCardTitle: (level) => `كتب ${level}`,
      homeCardIntro: (level) => `افتح صفحة ${level} لمقارنة كتب DTZ وÖIF وfide الخاصة بالتحدث والكتابة والنسخة المجمعة في مكان واحد.`,
      homeCardBullets: () => [
        "كتب DTZ وÖIF وfide في صفحة واحدة",
        "كتب التحدث والكتابة مع عينات PDF مجانية",
        "الكتب المجمعة موجودة مع نفس المستوى"
      ],
      levelEyebrow: (level) => `كتب ${level}`,
      levelTitle: (level) => `اختر كتب ${level} العملية للتحدث والكتابة لامتحانات DTZ وÖIF وfide.`,
      levelDescription: (level) => `كتب ${level} للتحدث والكتابة والنسخ المجمعة لامتحانات DTZ وÖIF وfide، مع عينات PDF مجانية لبعض كتب التحدث والكتابة.`,
      levelIntro: (level) => `اعثر على كتاب ${level} المناسب لألمانيا أو النمسا أو سويسرا، مع كتب مركزة للتحدث والكتابة ونسخ مجمعة وعينات مجانية لبعض العناوين.`,
      levelButtonLabel: (level) => `كتب ${level}`,
      sampleCtaLabel: "افتح العينة المجانية",
      sampleLabel: "العينة",
      noSampleText: "الكتب المجمعة لا تحتوي على عينة PDF مجانية.",
      switchLevelLabel: (level) => `شاهد كتب ${level}`
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
      footerIntro: "Книги A2 і B1 з говоріння, письма та комбіновані книги для DTZ, ÖIF і fide, а також безкоштовні PDF-зразки для окремих книг з говоріння й письма.",
      booksLabel: "Книги",
      sampleLabel: "Зразок",
      fullBookLabel: "Повна книга",
      rightsReserved: "Усі права захищені."
    },
    productUi: {
      fullBook: "Повна книга",
      freeSample: "Безкоштовний зразок",
      format: "Формат",
      pages: "Сторінки",
      free: "Безкоштовно",
      notAvailable: "Недоступно",
      clickNote: "Кнопки зразка відкривають PDF на цьому сайті. Кнопки покупки відкривають Amazon у новій вкладці."
    },
    copy: {
      homeTitle: "Складіть DTZ, ÖIF і fide з практичними книгами з говоріння та письма для A2 і B1.",
      homeDescription: "Книги для підготовки до DTZ, ÖIF і fide для рівнів A2 і B1 з безкоштовними PDF-зразками для окремих книг з говоріння та письма.",
      homeEyebrow: "Книги для підготовки A2 і B1",
      homeIntro: "Практикуйтеся з цільовими книгами з говоріння, письма або обох навичок - створеними для тих, хто готується до іспитів у Німеччині, Австрії та Швейцарії.",
      homeCardTitle: (level) => `Книги ${level}`,
      homeCardIntro: (level) => `Відкрийте сторінку ${level}, щоб порівняти книги DTZ, ÖIF і fide з говоріння, письма та комбіновані видання в одному місці.`,
      homeCardBullets: () => [
        "Книги DTZ, ÖIF і fide на одному рівні",
        "Книги з говоріння й письма з безкоштовними PDF-зразками",
        "Комбіновані книги зібрані разом із тим самим рівнем"
      ],
      levelEyebrow: (level) => `Книги ${level}`,
      levelTitle: (level) => `Оберіть практичні книги ${level} з говоріння та письма для DTZ, ÖIF і fide.`,
      levelDescription: (level) => `Книги ${level} з говоріння, письма та комбіновані книги для DTZ, ÖIF і fide з безкоштовними PDF-зразками для окремих видань.`,
      levelIntro: (level) => `Знайдіть правильну книгу ${level} для Німеччини, Австрії чи Швейцарії - з окремими книгами з говоріння, письма, комбінованими виданнями та безкоштовними зразками для окремих назв.`,
      levelButtonLabel: (level) => `Книги ${level}`,
      sampleCtaLabel: "Відкрити безкоштовний зразок",
      sampleLabel: "Зразок",
      noSampleText: "Для комбінованих книг безкоштовного PDF-зразка немає.",
      switchLevelLabel: (level) => `Переглянути книги ${level}`
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
      footerIntro: "DTZ, ÖIF ve fide için A2 ve B1 konuşma, yazma ve birleşik kitaplar ile ayrı konuşma ve yazma kitapları için ücretsiz PDF örnekleri.",
      booksLabel: "Kitaplar",
      sampleLabel: "Örnek",
      fullBookLabel: "Tam kitap",
      rightsReserved: "Tüm hakları saklıdır."
    },
    productUi: {
      fullBook: "Tam kitap",
      freeSample: "Ücretsiz örnek",
      format: "Format",
      pages: "Sayfa",
      free: "Ücretsiz",
      notAvailable: "Yok",
      clickNote: "Örnek düğmeleri PDF'leri bu sitede açar. Satın alma düğmeleri Amazon'u yeni sekmede açar."
    },
    copy: {
      homeTitle: "DTZ, ÖIF ve fide sınavlarını A2 ve B1 için pratik konuşma ve yazma kitaplarıyla geçin.",
      homeDescription: "DTZ, ÖIF ve fide için A2 ve B1 hazırlık kitapları; seçili konuşma ve yazma kitaplarında ücretsiz PDF örnekleriyle.",
      homeEyebrow: "A2 ve B1 hazırlık kitapları",
      homeIntro: "Almanya, Avusturya ve İsviçre'deki sınavlara hazırlananlar için hazırlanmış konuşma, yazma veya her iki beceriye yönelik odaklı kitaplarla çalışın.",
      homeCardTitle: (level) => `${level} kitapları`,
      homeCardIntro: (level) => `${level} sayfasını açarak DTZ, ÖIF ve fide konuşma, yazma ve birleşik kitaplarını tek yerde karşılaştırın.`,
      homeCardBullets: () => [
        "DTZ, ÖIF ve fide için aynı seviyedeki kitaplar",
        "Konuşma ve yazma kitapları için ücretsiz PDF örnekleri",
        "Birleşik kitaplar aynı seviyede birlikte listelenir"
      ],
      levelEyebrow: (level) => `${level} kitapları`,
      levelTitle: (level) => `DTZ, ÖIF ve fide için pratik ${level} konuşma ve yazma kitaplarını seçin.`,
      levelDescription: (level) => `${level} seviyesinde DTZ, ÖIF ve fide konuşma, yazma ve birleşik kitapları; seçili konuşma ve yazma kitapları için ücretsiz PDF örnekleriyle.`,
      levelIntro: (level) => `Almanya, Avusturya veya İsviçre için doğru ${level} kitabını bulun - odaklı konuşma kitapları, yazma kitapları, birleşik baskılar ve seçili başlıklar için ücretsiz örneklerle.`,
      levelButtonLabel: (level) => `${level} kitapları`,
      sampleCtaLabel: "Ücretsiz örneği aç",
      sampleLabel: "Örnek",
      noSampleText: "Birleşik kitaplar için ücretsiz PDF örneği yoktur.",
      switchLevelLabel: (level) => `${level} kitaplarını gör`
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
      footerIntro: "A2 i B1 knjige za govor, pisanje i kombinovanu pripremu za DTZ, ÖIF i fide, plus besplatni PDF uzorci za odvojene knjige govora i pisanja.",
      booksLabel: "Knjige",
      sampleLabel: "Uzorak",
      fullBookLabel: "Cela knjiga",
      rightsReserved: "Sva prava zadržana."
    },
    productUi: {
      fullBook: "Cela knjiga",
      freeSample: "Besplatan uzorak",
      format: "Format",
      pages: "Stranice",
      free: "Besplatno",
      notAvailable: "Nije dostupno",
      clickNote: "Dugmad za uzorak otvaraju PDF na ovom sajtu. Dugmad za kupovinu otvaraju Amazon u novoj kartici."
    },
    copy: {
      homeTitle: "Položite DTZ, ÖIF i fide uz praktične knjige za govor i pisanje za A2 i B1.",
      homeDescription: "Knjige za pripremu DTZ, ÖIF i fide ispita za nivoe A2 i B1, uz besplatne PDF uzorke za odabrane knjige govora i pisanja.",
      homeEyebrow: "Knjige za pripremu A2 i B1",
      homeIntro: "Vežbajte uz fokusirane knjige za govor, pisanje ili obe veštine - napravljene za polaznike koji se pripremaju za ispite u Nemačkoj, Austriji i Švajcarskoj.",
      homeCardTitle: (level) => `${level} knjige`,
      homeCardIntro: (level) => `Otvorite stranicu ${level} da uporedite DTZ, ÖIF i fide knjige za govor, pisanje i kombinovanu pripremu na jednom mestu.`,
      homeCardBullets: () => [
        "DTZ, ÖIF i fide knjige za isti nivo",
        "Knjige za govor i pisanje sa besplatnim PDF uzorcima",
        "Kombinovane knjige skupljene uz isti nivo"
      ],
      levelEyebrow: (level) => `${level} knjige`,
      levelTitle: (level) => `Izaberite praktične ${level} knjige za govor i pisanje za DTZ, ÖIF i fide.`,
      levelDescription: (level) => `${level} knjige za govor, pisanje i kombinovanu pripremu za DTZ, ÖIF i fide, uz besplatne PDF uzorke za odabrane knjige govora i pisanja.`,
      levelIntro: (level) => `Pronađite pravu ${level} knjigu za Nemačku, Austriju ili Švajcarsku - uz fokusirane knjige za govor, pisanje, kombinovana izdanja i besplatne uzorke za odabrane naslove.`,
      levelButtonLabel: (level) => `${level} knjige`,
      sampleCtaLabel: "Otvori besplatan uzorak",
      sampleLabel: "Uzorak",
      noSampleText: "Kombinovane knjige nemaju besplatan PDF uzorak.",
      switchLevelLabel: (level) => `Pogledaj ${level} knjige`
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
      footerIntro: "Книги A2 и B1 по говорению, письму и комбинированные книги для DTZ, ÖIF и fide, а также бесплатные PDF-образцы для отдельных книг по говорению и письму.",
      booksLabel: "Книги",
      sampleLabel: "Образец",
      fullBookLabel: "Полная книга",
      rightsReserved: "Все права защищены."
    },
    productUi: {
      fullBook: "Полная книга",
      freeSample: "Бесплатный образец",
      format: "Формат",
      pages: "Страницы",
      free: "Бесплатно",
      notAvailable: "Недоступно",
      clickNote: "Кнопки образца открывают PDF на этом сайте. Кнопки покупки открывают Amazon в новой вкладке."
    },
    copy: {
      homeTitle: "Сдайте DTZ, ÖIF и fide с практическими книгами по говорению и письму для A2 и B1.",
      homeDescription: "Книги для подготовки к DTZ, ÖIF и fide для уровней A2 и B1, с бесплатными PDF-образцами для отдельных книг по говорению и письму.",
      homeEyebrow: "Книги для подготовки A2 и B1",
      homeIntro: "Готовьтесь с книгами по говорению, письму или сразу по обоим навыкам - созданными для тех, кто сдает экзамены в Германии, Австрии и Швейцарии.",
      homeCardTitle: (level) => `Книги ${level}`,
      homeCardIntro: (level) => `Откройте страницу ${level}, чтобы сравнить книги DTZ, ÖIF и fide по говорению, письму и комбинированные издания в одном месте.`,
      homeCardBullets: () => [
        "Книги DTZ, ÖIF и fide для одного уровня",
        "Книги по говорению и письму с бесплатными PDF-образцами",
        "Комбинированные книги собраны вместе на том же уровне"
      ],
      levelEyebrow: (level) => `Книги ${level}`,
      levelTitle: (level) => `Выберите практические книги ${level} по говорению и письму для DTZ, ÖIF и fide.`,
      levelDescription: (level) => `Книги ${level} по говорению, письму и комбинированные книги для DTZ, ÖIF и fide, с бесплатными PDF-образцами для отдельных изданий.`,
      levelIntro: (level) => `Найдите подходящую книгу ${level} для Германии, Австрии или Швейцарии - с отдельными книгами по говорению, письму, комбинированными изданиями и бесплатными образцами для некоторых названий.`,
      levelButtonLabel: (level) => `Книги ${level}`,
      sampleCtaLabel: "Открыть бесплатный образец",
      sampleLabel: "Образец",
      noSampleText: "У комбинированных книг нет бесплатного PDF-образца.",
      switchLevelLabel: (level) => `Смотреть книги ${level}`
    }
  }
];

const marketingCopy = {
  en: {
    heroSampleButtonLabel: "Open free samples",
    featuredSectionTitle: "Featured books and free samples",
    featuredSectionIntro: "Start with these representative books, then compare the rest by level, exam, or skill.",
    reviewsSection: {
      eyebrow: "Book reviews",
      title: "What learners say about these books",
      intro: "These short reviews come from learners who used these books for practical German exam preparation.",
      items: [
        {
          quote: "Daily conversation isn't a problem for me, and I communicate well with my colleagues in the logistics industry. However, the DTZ exam covers topics I rarely encounter in my everyday life. These books provided a wide variety of speaking and writing prompts along with example answers, which were essential for my B1 preparation and helped me succeed!",
          author: "Ahmed"
        },
        {
          quote: "While the official DTZ preparation book only provides a few practice tests, this DTZ B1 speaking book offers 60 different exercises! It's a much more comprehensive resource for anyone serious about passing.",
          author: "Mehmet"
        },
        {
          quote: "I failed the ÖIF B1 exam twice because of the speaking and writing sections, even though I found reading quite easy. These books were a lifesaver for my third attempt; they covered all the exam topics thoroughly and finally helped me pass.",
          author: "Oleksandr"
        }
      ]
    },
    startSectionTitle: "Start with the right level",
    startSectionIntro: "Pick your level first. Then compare books by exam, skill, format, and sample availability without mixing A2 and B1 together.",
    examSectionTitle: "Choose by country and exam",
    examSectionIntro: "If you already know where you will take the exam, jump to the right country path first.",
    examCards: {
      dtz: {
        title: "Germany · DTZ",
        intro: "Choose DTZ if you want Germany-focused preparation books for speaking, writing, or both skills together."
      },
      oeif: {
        title: "Austria · ÖIF",
        intro: "Choose ÖIF if you need Austria-focused preparation for the Integrationprüfung speaking and writing tasks."
      },
      fide: {
        title: "Switzerland · fide",
        intro: "Choose fide if you want Switzerland-focused books with practical tasks for everyday communication."
      }
    },
    decisionSectionTitle: (level) => `How to choose the right ${level} book`,
    decisionSectionIntro: "Use these quick rules before you compare individual titles.",
    decisionCards: {
      speaking: {
        title: "Choose Speaking",
        text: "Best if you feel blocked in the oral exam, need faster answers, or want a cheaper focused book first."
      },
      writing: {
        title: "Choose Writing",
        text: "Best if written tasks feel slower, less clear, or more stressful than the speaking part."
      },
      combined: {
        title: "Choose Speaking + Writing",
        text: "Best if you want one purchase for both skills and do not want to choose separate books."
      }
    },
    bestForLabel: "Best for",
    trackLabel: "Track",
    jumpLabel: "Go to",
    buyIntroLabel: "Buy options"
  },
  ar: {
    heroSampleButtonLabel: "افتح العينات المجانية",
    featuredSectionTitle: "كتب مميزة وعينات مجانية",
    featuredSectionIntro: "ابدأ بهذه الكتب الممثلة ثم قارن بقية العناوين حسب المستوى أو الامتحان أو المهارة.",
    reviewsSection: {
      eyebrow: "آراء حول الكتب",
      title: "ماذا يقول المتعلمون عن هذه الكتب؟",
      intro: "هذه مراجعات قصيرة من متعلمين استخدموا هذه الكتب للتحضير العملي لامتحان الألمانية.",
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
    },
    startSectionTitle: "ابدأ بالمستوى الصحيح",
    startSectionIntro: "اختر مستواك أولًا، ثم قارن الكتب حسب الامتحان والمهارة والصيغة وتوفر العينة بدون خلط A2 مع B1.",
    examSectionTitle: "اختر حسب البلد والامتحان",
    examSectionIntro: "إذا كنت تعرف البلد الذي ستقدّم فيه الامتحان، اذهب مباشرة إلى المسار الصحيح.",
    examCards: {
      dtz: { title: "ألمانيا · DTZ", intro: "اختر DTZ إذا كنت تريد كتبًا تركّز على ألمانيا للتحدث أو الكتابة أو المهارتين معًا." },
      oeif: { title: "النمسا · ÖIF", intro: "اختر ÖIF إذا كنت تحتاج إلى تحضير يركّز على النمسا لمهام التحدث والكتابة في Integrationprüfung." },
      fide: { title: "سويسرا · fide", intro: "اختر fide إذا كنت تريد كتبًا تركّز على سويسرا بمهام عملية للتواصل اليومي." }
    },
    decisionSectionTitle: (level) => `كيف تختار كتاب ${level} المناسب`,
    decisionSectionIntro: "استخدم هذه القواعد السريعة قبل مقارنة العناوين الفردية.",
    decisionCards: {
      speaking: { title: "اختر التحدث", text: "الأفضل إذا كنت تتعطل في الامتحان الشفهي أو تحتاج ردودًا أسرع أو تريد كتابًا مركزًا أرخص أولًا." },
      writing: { title: "اختر الكتابة", text: "الأفضل إذا كانت مهام الكتابة أبطأ أو أقل وضوحًا أو أكثر توترًا من جزء التحدث." },
      combined: { title: "اختر التحدث + الكتابة", text: "الأفضل إذا كنت تريد عملية شراء واحدة للمهارتين ولا تريد اختيار كتابين منفصلين." }
    },
    bestForLabel: "الأفضل لـ",
    trackLabel: "المسار",
    jumpLabel: "انتقل إلى",
    buyIntroLabel: "خيارات الشراء"
  },
  uk: {
    heroSampleButtonLabel: "Відкрити безкоштовні зразки",
    featuredSectionTitle: "Рекомендовані книги та безкоштовні зразки",
    featuredSectionIntro: "Почніть із цих показових книг, а потім порівнюйте решту за рівнем, іспитом або навичкою.",
    reviewsSection: {
      eyebrow: "Відгуки про книжки",
      title: "Що учні кажуть про ці книжки?",
      intro: "Це короткі відгуки від учнів, які використовували ці книжки для практичної підготовки до іспиту з німецької.",
      items: [
        {
          quote: "Щоденне спілкування для мене не проблема, і я добре спілкуюся з колегами у сфері логістики. Однак іспит DTZ охоплює теми, з якими я рідко стикаюся у повсякденному житті. Ці книжки дали мені велику різноманітність завдань із говоріння та письма разом із прикладами відповідей, і це було надзвичайно важливо для моєї підготовки до B1 та допомогло мені успішно скласти іспит!",
          author: "Ahmed"
        },
        {
          quote: "Тоді як офіційна книжка для підготовки до DTZ містить лише кілька пробних тестів, ця книжка з говоріння DTZ B1 пропонує 60 різних вправ! Це набагато повніший ресурс для кожного, хто серйозно налаштований скласти іспит.",
          author: "Mehmet"
        },
        {
          quote: "Я двічі не склав іспит ÖIF B1 через частини з говоріння та письма, хоча читання давалося мені доволі легко. Ці книжки стали справжнім порятунком для моєї третьої спроби: вони ґрунтовно охопили всі теми іспиту й нарешті допомогли мені скласти його.",
          author: "Oleksandr"
        }
      ]
    },
    startSectionTitle: "Почніть із правильного рівня",
    startSectionIntro: "Спочатку виберіть свій рівень, а потім порівнюйте книги за іспитом, навичкою, форматом і наявністю зразка без змішування A2 і B1.",
    examSectionTitle: "Виберіть за країною та іспитом",
    examSectionIntro: "Якщо ви вже знаєте, у якій країні складатимете іспит, перейдіть одразу до правильного напряму.",
    examCards: {
      dtz: { title: "Німеччина · DTZ", intro: "Обирайте DTZ, якщо вам потрібні книги з фокусом на Німеччину для говоріння, письма або обох навичок разом." },
      oeif: { title: "Австрія · ÖIF", intro: "Обирайте ÖIF, якщо вам потрібна підготовка з фокусом на Австрію для завдань Integrationprüfung з говоріння та письма." },
      fide: { title: "Швейцарія · fide", intro: "Обирайте fide, якщо хочете книги з фокусом на Швейцарію та практичними завданнями для щоденного спілкування." }
    },
    decisionSectionTitle: (level) => `Як вибрати правильну книгу ${level}`,
    decisionSectionIntro: "Скористайтеся цими короткими правилами перед порівнянням окремих назв.",
    decisionCards: {
      speaking: { title: "Обрати говоріння", text: "Найкраще, якщо вам складно в усній частині, потрібні швидші відповіді або ви хочете спочатку дешевшу вузьку книгу." },
      writing: { title: "Обрати письмо", text: "Найкраще, якщо письмові завдання здаються повільнішими, менш зрозумілими або стресовішими, ніж говоріння." },
      combined: { title: "Обрати говоріння + письмо", text: "Найкраще, якщо ви хочете одну покупку для двох навичок і не хочете обирати окремі книги." }
    },
    bestForLabel: "Найкраще для",
    trackLabel: "Напрям",
    jumpLabel: "Перейти до",
    buyIntroLabel: "Варіанти покупки"
  },
  tr: {
    heroSampleButtonLabel: "Ücretsiz örnekleri aç",
    featuredSectionTitle: "Öne çıkan kitaplar ve ücretsiz örnekler",
    featuredSectionIntro: "Önce bu öne çıkan kitaplardan başlayın, sonra kalanlarını seviye, sınav veya beceriye göre karşılaştırın.",
    reviewsSection: {
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
    },
    startSectionTitle: "Doğru seviyeden başlayın",
    startSectionIntro: "Önce seviyenizi seçin, sonra A2 ve B1'i karıştırmadan kitapları sınav, beceri, format ve örnek durumuna göre karşılaştırın.",
    examSectionTitle: "Ülke ve sınava göre seçin",
    examSectionIntro: "Sınava hangi ülkede gireceğinizi biliyorsanız önce doğru ülke yoluna gidin.",
    examCards: {
      dtz: { title: "Almanya · DTZ", intro: "Konuşma, yazma veya iki beceri birlikte için Almanya odaklı kitaplar istiyorsanız DTZ'yi seçin." },
      oeif: { title: "Avusturya · ÖIF", intro: "Integrationprüfung konuşma ve yazma görevleri için Avusturya odaklı hazırlık istiyorsanız ÖIF'yi seçin." },
      fide: { title: "İsviçre · fide", intro: "Günlük iletişim için pratik görevler içeren İsviçre odaklı kitaplar istiyorsanız fide'yi seçin." }
    },
    decisionSectionTitle: (level) => `Doğru ${level} kitabı nasıl seçilir`,
    decisionSectionIntro: "Tek tek başlıkları karşılaştırmadan önce bu hızlı kuralları kullanın.",
    decisionCards: {
      speaking: { title: "Konuşma seçin", text: "Sözlü sınavda zorlanıyorsanız, daha hızlı cevaplara ihtiyacınız varsa veya önce daha ucuz odaklı bir kitap istiyorsanız en iyi seçimdir." },
      writing: { title: "Yazma seçin", text: "Yazılı görevler konuşmaya göre daha yavaş, daha belirsiz veya daha stresli geliyorsa en iyi seçimdir." },
      combined: { title: "Konuşma + Yazma seçin", text: "İki beceri için tek satın alma yapmak ve ayrı kitap seçmek istemiyorsanız en iyi seçimdir." }
    },
    bestForLabel: "En uygun olduğu durum",
    trackLabel: "Yol",
    jumpLabel: "Git",
    buyIntroLabel: "Satın alma seçenekleri"
  },
  sr: {
    heroSampleButtonLabel: "Otvori besplatne uzorke",
    featuredSectionTitle: "Izdvojene knjige i besplatni uzorci",
    featuredSectionIntro: "Počnite od ovih reprezentativnih knjiga, pa zatim uporedite ostale po nivou, ispitu ili veštini.",
    reviewsSection: {
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
    },
    startSectionTitle: "Počnite od pravog nivoa",
    startSectionIntro: "Prvo izaberite nivo, pa onda upoređujte knjige po ispitu, veštini, formatu i dostupnosti uzorka bez mešanja A2 i B1.",
    examSectionTitle: "Birajte po državi i ispitu",
    examSectionIntro: "Ako već znate u kojoj državi polažete ispit, prvo otvorite pravi put.",
    examCards: {
      dtz: { title: "Nemačka · DTZ", intro: "Izaberite DTZ ako želite knjige sa fokusom na Nemačku za govor, pisanje ili obe veštine zajedno." },
      oeif: { title: "Austrija · ÖIF", intro: "Izaberite ÖIF ako vam treba priprema sa fokusom na Austriju za govorne i pisane zadatke Integrationprüfung." },
      fide: { title: "Švajcarska · fide", intro: "Izaberite fide ako želite knjige sa fokusom na Švajcarsku i praktičnim zadacima za svakodnevnu komunikaciju." }
    },
    decisionSectionTitle: (level) => `Kako izabrati pravu ${level} knjigu`,
    decisionSectionIntro: "Iskoristite ova kratka pravila pre nego što uporedite pojedinačne naslove.",
    decisionCards: {
      speaking: { title: "Izaberite govor", text: "Najbolji izbor ako zapinjete na usmenom delu, trebaju vam brži odgovori ili prvo želite jeftiniju fokusiranu knjigu." },
      writing: { title: "Izaberite pisanje", text: "Najbolji izbor ako su vam pisani zadaci sporiji, nejasniji ili stresniji od govornog dela." },
      combined: { title: "Izaberite govor + pisanje", text: "Najbolji izbor ako želite jednu kupovinu za obe veštine i ne želite da birate dve posebne knjige." }
    },
    bestForLabel: "Najbolje za",
    trackLabel: "Put",
    jumpLabel: "Idi na",
    buyIntroLabel: "Opcije kupovine"
  },
  ru: {
    heroSampleButtonLabel: "Открыть бесплатные образцы",
    featuredSectionTitle: "Рекомендуемые книги и бесплатные образцы",
    featuredSectionIntro: "Начните с этих показательных книг, а затем сравнивайте остальные по уровню, экзамену или навыку.",
    reviewsSection: {
      eyebrow: "Отзывы о книгах",
      title: "Что учащиеся говорят об этих книгах?",
      intro: "Это короткие отзывы от учащихся, которые использовали эти книги для практической подготовки к экзамену по немецкому.",
      items: [
        {
          quote: "Повседневное общение для меня не проблема, и я хорошо общаюсь с коллегами в сфере логистики. Однако экзамен DTZ охватывает темы, с которыми я редко сталкиваюсь в обычной жизни. Эти книги дали мне большое разнообразие заданий по говорению и письму вместе с примерами ответов, и это было очень важно для моей подготовки к B1 и помогло мне успешно сдать экзамен!",
          author: "Ahmed"
        },
        {
          quote: "В то время как официальный учебник для подготовки к DTZ содержит лишь несколько пробных тестов, эта книга по говорению DTZ B1 предлагает 60 разных упражнений! Это гораздо более полный ресурс для тех, кто действительно настроен сдать экзамен.",
          author: "Mehmet"
        },
        {
          quote: "Я дважды не сдал экзамен ÖIF B1 из-за разделов говорения и письма, хотя чтение давалось мне довольно легко. Эти книги стали спасением для моей третьей попытки: они подробно охватили все темы экзамена и наконец помогли мне сдать его.",
          author: "Oleksandr"
        }
      ]
    },
    startSectionTitle: "Начните с правильного уровня",
    startSectionIntro: "Сначала выберите свой уровень, а затем сравнивайте книги по экзамену, навыку, формату и наличию образца, не смешивая A2 и B1.",
    examSectionTitle: "Выберите по стране и экзамену",
    examSectionIntro: "Если вы уже знаете, в какой стране будете сдавать экзамен, сначала откройте правильный путь.",
    examCards: {
      dtz: { title: "Германия · DTZ", intro: "Выбирайте DTZ, если вам нужны книги с фокусом на Германию для говорения, письма или обеих навыков вместе." },
      oeif: { title: "Австрия · ÖIF", intro: "Выбирайте ÖIF, если вам нужна подготовка с фокусом на Австрию для устных и письменных заданий Integrationprüfung." },
      fide: { title: "Швейцария · fide", intro: "Выбирайте fide, если хотите книги с фокусом на Швейцарию и практическими заданиями для повседневного общения." }
    },
    decisionSectionTitle: (level) => `Как выбрать правильную книгу ${level}`,
    decisionSectionIntro: "Используйте эти быстрые правила перед сравнением отдельных названий.",
    decisionCards: {
      speaking: { title: "Выбрать говорение", text: "Лучший выбор, если вы застреваете в устной части, хотите отвечать быстрее или сначала хотите более дешевую узкую книгу." },
      writing: { title: "Выбрать письмо", text: "Лучший выбор, если письменные задания кажутся медленнее, менее понятными или более стрессовыми, чем устная часть." },
      combined: { title: "Выбрать говорение + письмо", text: "Лучший выбор, если вы хотите одну покупку для двух навыков и не хотите выбирать отдельные книги." }
    },
    bestForLabel: "Лучше всего для",
    trackLabel: "Направление",
    jumpLabel: "Перейти к",
    buyIntroLabel: "Варианты покупки"
  }
};

function buildLanguageLinks(kind, levelKey) {
  return languages.map((language) => ({
    code: language.code,
    label: language.label,
    url: kind === "home" ? homePermalink(language.code) : levelPermalink(language.code, levelKey)
  }));
}

function buildExamCards(language) {
  const localeCopy = marketingCopy[language.code];
  const examKeys = [
    { key: "dtz", anchor: "dtz", levels: ["a2", "b1"] },
    { key: "oeif", anchor: "oeif", levels: ["a2", "b1"] },
    { key: "fide", anchor: "fide", levels: ["a2", "b1"] }
  ];

  return examKeys.map((item) => ({
    title: localeCopy.examCards[item.key].title,
    intro: localeCopy.examCards[item.key].intro,
    links: item.levels.map((levelKey) => ({
      label: `${site.levels[levelKey].title}`,
      url: `${levelPermalink(language.code, levelKey)}#${item.anchor}-${levelKey}-books`
    }))
  }));
}

function buildDecisionCards(language) {
  const localeCopy = marketingCopy[language.code];

  return ["speaking", "writing", "combined"].map((sectionKey) => ({
    title: localeCopy.decisionCards[sectionKey].title,
    intro: localeCopy.decisionCards[sectionKey].text
  }));
}

function buildHomePage(language) {
  const navLinks = levelLinks(language);
  const localeCopy = marketingCopy[language.code];
  const heroButtons = [
    {
      key: "samples",
      label: localeCopy.heroSampleButtonLabel,
      url: "#featured-books"
    },
    {
      key: "a2",
      label: language.copy.levelButtonLabel("A2"),
      url: levelPermalink(language.code, "a2")
    },
    {
      key: "b1",
      label: language.copy.levelButtonLabel("B1"),
      url: levelPermalink(language.code, "b1")
    }
  ];

  return {
    pageType: "home",
    permalink: homePermalink(language.code),
    title: language.copy.homeTitle,
    description: language.copy.homeDescription,
    lang: language.code,
    dir: language.dir,
    currentLang: language.code,
    homeUrl: language.homeUrl,
    languageSwitcherLabel: language.languageSwitcherLabel,
    languageLinks: buildLanguageLinks("home"),
    ui: language.ui,
    productUi: language.productUi,
    pageBookOrder: site.bookOrder,
    pageNavLinks: navLinks,
    heroEyebrow: language.copy.homeEyebrow,
    heroTitle: language.copy.homeTitle,
    heroIntro: language.copy.homeIntro,
    levelButtons: navLinks,
    heroButtons,
    featuredSectionTitle: localeCopy.featuredSectionTitle,
    featuredSectionIntro: localeCopy.featuredSectionIntro,
    featuredBookKeys: site.homeFeaturedBookOrder,
    reviewsSection: localeCopy.reviewsSection,
    sampleCtaLabel: language.copy.sampleCtaLabel,
    sampleLabel: language.copy.sampleLabel,
    noSampleText: language.copy.noSampleText,
    buyIntroLabel: localeCopy.buyIntroLabel,
    startSectionTitle: localeCopy.startSectionTitle,
    startSectionIntro: localeCopy.startSectionIntro,
    levelCards: site.levelOrder.map((levelKey) => ({
      key: levelKey,
      title: language.copy.homeCardTitle(levelKey.toUpperCase()),
      intro: language.copy.homeCardIntro(levelKey.toUpperCase()),
      bullets: language.copy.homeCardBullets(levelKey.toUpperCase()),
      buttonLabel: language.copy.levelButtonLabel(levelKey.toUpperCase()),
      url: levelPermalink(language.code, levelKey)
    })),
    examSectionTitle: localeCopy.examSectionTitle,
    examSectionIntro: localeCopy.examSectionIntro,
    examCards: buildExamCards(language),
    bestForLabel: localeCopy.bestForLabel
  };
}

function buildLevelPage(language, levelKey) {
  const otherLevelKey = levelKey === "a2" ? "b1" : "a2";
  const localeCopy = marketingCopy[language.code];
  const navLinks = site.levels[levelKey].exams.map((examKey) => ({
    label: site.exams[examKey].navLabel,
    url: `#${site.exams[examKey].anchor}-books`
  }));

  return {
    pageType: "level",
    levelKey,
    permalink: levelPermalink(language.code, levelKey),
    title: language.copy.levelTitle(site.levels[levelKey].title),
    description: language.copy.levelDescription(site.levels[levelKey].title),
    lang: language.code,
    dir: language.dir,
    currentLang: language.code,
    homeUrl: language.homeUrl,
    languageSwitcherLabel: language.languageSwitcherLabel,
    languageLinks: buildLanguageLinks("level", levelKey),
    ui: language.ui,
    productUi: language.productUi,
    pageExamOrder: site.levels[levelKey].exams,
    pageBookOrder: site.levels[levelKey].books,
    pageNavLinks: navLinks,
    primaryCta: {
      label: language.copy.switchLevelLabel(site.levels[otherLevelKey].title),
      url: levelPermalink(language.code, otherLevelKey)
    },
    heroEyebrow: language.copy.levelEyebrow(site.levels[levelKey].title),
    heroTitle: language.copy.levelTitle(site.levels[levelKey].title),
    heroIntro: language.copy.levelIntro(site.levels[levelKey].title),
    levelButtons: levelLinks(language),
    sampleCtaLabel: language.copy.sampleCtaLabel,
    sampleLabel: language.copy.sampleLabel,
    noSampleText: language.copy.noSampleText,
    decisionSectionTitle: localeCopy.decisionSectionTitle(site.levels[levelKey].title),
    decisionSectionIntro: localeCopy.decisionSectionIntro,
    decisionCards: buildDecisionCards(language),
    bestForLabel: localeCopy.bestForLabel,
    buyIntroLabel: localeCopy.buyIntroLabel
  };
}

module.exports = languages.flatMap((language) => [
  buildHomePage(language),
  ...site.levelOrder.map((levelKey) => buildLevelPage(language, levelKey))
]);
