const path = require("path");

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: ["node_modules", "node_modules/@material/*"]
            .map(d => path.join(__dirname, d))
            .reduce((a, c) => a.concat(c), [])
        }
      }
    }
  }
};
