const CleanCSS = require("clean-css");
const Terser = require("terser");

module.exports = function(eleventyConfig) {
  // Copy the `assets/` directory
  eleventyConfig.addPassthroughCopy("icons");

  eleventyConfig.addPassthroughCopy("favicon.ico");

  // add css minify filter
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // add js filter
  eleventyConfig.addFilter("jsmin", function(code) {
    let minified = Terser.minify(code);
    if( minified.error ) {
        console.log("Terser error: ", minified.error);
        return code;
    }
    return minified.code;
});

};
