module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Copy favicon if present
  eleventyConfig.addPassthroughCopy({"src/favicon.ico": "favicon.ico"});
  
  // Watch CSS files for changes
  eleventyConfig.addWatchTarget("src/css/");
  
  // Date filter for readable dates
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  });

  // ISO date filter for structured data
  eleventyConfig.addFilter("isoDate", (dateObj) => {
    return new Date(dateObj).toISOString();
  });
  
  // Max filter for finding the most recent date
  eleventyConfig.addFilter("max", (collection, key) => {
    return collection.reduce((max, item) => {
      const value = key ? item[key] : item;
      return value > max ? value : max;
    }, new Date(0));
  });
  
  // Limit filter for arrays
  eleventyConfig.addFilter("limit", (array, limit) => {
    return array.slice(0, limit);
  });
  
  // HTML to absolute URLs filter
  eleventyConfig.addFilter("htmlToAbsoluteUrls", (htmlContent, base) => {
    return htmlContent;
  });

  // Current year for footer
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  
  // Allow missing extensions (for clean URLs on GitHub Pages)
  eleventyConfig.configureErrorReporting({ allowMissingExtensions: true });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
