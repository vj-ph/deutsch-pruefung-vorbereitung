module.exports = {
  layout: "base",
  templateEngineOverride: "njk",
  pagination: {
    data: "landingPages",
    size: 1,
    alias: "landingPage"
  },
  eleventyComputed: {
    permalink: (data) => data.landingPage.permalink,
    title: (data) => data.landingPage.title,
    description: (data) => data.landingPage.description,
    lang: (data) => data.landingPage.lang,
    dir: (data) => data.landingPage.dir,
    currentLang: (data) => data.landingPage.currentLang,
    homeUrl: (data) => data.landingPage.homeUrl,
    languageSwitcherLabel: (data) => data.landingPage.languageSwitcherLabel,
    languageLinks: (data) => data.landingPage.languageLinks,
    ui: (data) => data.landingPage.ui,
    productUi: (data) => data.landingPage.productUi,
    pageBookOrder: (data) => data.landingPage.pageBookOrder,
    pageExamOrder: (data) => data.landingPage.pageExamOrder,
    pageNavLinks: (data) => data.landingPage.pageNavLinks,
    primaryCta: (data) => data.landingPage.primaryCta
  }
};
