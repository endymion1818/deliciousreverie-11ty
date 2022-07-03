// .eleventy.js or eleventy.config.js
const slinkity = require('slinkity')
const svelte = require('@slinkity/renderer-svelte')

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(slinkity.plugin, slinkity.defineConfig({
    renderers: [svelte],
  }))
}
