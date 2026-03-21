module.exports = {
  layout: "base",
  templateEngineOverride: "njk",
  pagination: {
    data: "samplePages",
    size: 1,
    alias: "samplePage"
  },
  eleventyComputed: {
    permalink: (data) => data.samplePage.permalink,
    title: (data) => data.samplePage.title,
    description: (data) => data.samplePage.description,
    lang: (data) => data.samplePage.lang,
    dir: (data) => data.samplePage.dir,
    currentLang: (data) => data.samplePage.currentLang,
    homeUrl: (data) => data.samplePage.homeUrl,
    languageSwitcherLabel: (data) => data.samplePage.languageSwitcherLabel,
    languageLinks: (data) => data.samplePage.languageLinks,
    ui: (data) => data.samplePage.ui,
    productUi: (data) => data.samplePage.productUi
  }
};
