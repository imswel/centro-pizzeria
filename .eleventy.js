module.exports = function(eleventyConfig) {
    // Pizza Collection
    eleventyConfig.addCollection("pizza", function(collection) {
      return collection.getFilteredByGlob("./src/menu/*.md");
    });

    // copy assets
    eleventyConfig.addPassthroughCopy("./src/assets/");

    // override default config
    return {
      dir: {
        input: "src",
        output: "dist"
      }
    };
  };