const site = require("./src/_data/site.json");

const pathPrefix = site.pathPrefix || "/";
const absoluteUrlPattern = /^(?:[a-zA-Z][a-zA-Z\d+\-.]*:)?\/\//;
const fileExtensionPattern = /\/[^/]+\.[^/]+$/;

function withPathPrefix(pathname) {
  const normalizedPrefix = pathPrefix === "/" ? "" : pathPrefix.replace(/\/$/, "");
  return `${normalizedPrefix}${pathname}`.replace(/\/{2,}/g, "/");
}

function pageUrl(pathname) {
  if (!pathname || absoluteUrlPattern.test(pathname) || pathname.startsWith("#")) {
    return pathname;
  }

  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  if (normalizedPath === "/") {
    return withPathPrefix("/");
  }

  if (fileExtensionPattern.test(normalizedPath)) {
    return withPathPrefix(normalizedPath);
  }

  return withPathPrefix(`${normalizedPath.replace(/\/+$/, "")}/`);
}

module.exports = function(eleventyConfig) {
  // Add environment variable to global data
  eleventyConfig.addGlobalData("env", process.env.ELEVENTY_ENV || process.env.NODE_ENV || "development");
  
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Copy favicon if present
  eleventyConfig.addPassthroughCopy({"src/favicon.ico": "favicon.ico"});
  eleventyConfig.addPassthroughCopy({"src/CNAME": "CNAME"});
  
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
    if (!htmlContent || !base) {
      return htmlContent;
    }

    return htmlContent.replace(/(href|src)=(["'])(\/(?!\/)[^"']*)\2/g, (match, attribute, quote, url) => {
      try {
        return `${attribute}=${quote}${new URL(url, base).href}${quote}`;
      } catch {
        return match;
      }
    });
  });

  eleventyConfig.addFilter("absoluteUrl", (url, base) => {
    try {
      return new URL(url, base).href;
    } catch {
      return url;
    }
  });

  eleventyConfig.addFilter("pageUrl", pageUrl);

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
    dataTemplateEngine: "njk",
    pathPrefix
  };
};
