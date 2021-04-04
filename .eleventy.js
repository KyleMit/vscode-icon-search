const CleanCSS = require("clean-css")
const { minify } = require("terser")

module.exports = function (eleventyConfig) {
  // Copy the `assets/` directory
  eleventyConfig.addPassthroughCopy("icons")

  eleventyConfig.addPassthroughCopy("favicon.ico")

  // add css minify filter
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles
  })

  // add js filter
  eleventyConfig.addNunjucksAsyncFilter("jsmin", async function (code, callback) {
      try {
        const minified = await minify(code)
        callback(null, minified.code)
      } catch (err) {
        console.error("Terser error: ", err)
        // Fail gracefully.
        callback(null, code)
      }
    }
  )
}
