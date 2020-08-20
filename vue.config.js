// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");

const path = require("path");

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: ["node_modules/@material", "node_modules/nomalize.css"]
            .map(d => path.join(__dirname, d))
            .reduce((a, c) => a.concat(c), [])
        }
      }
    }
  },
  configureWebpack: {
    plugins: [
      // new BundleAnalyzerPlugin(),
      new CompressionPlugin({ test: /\.(js|css)(\?.*)?$/i })
    ],
    optimization: {
      splitChunks: {
        // docs here: https://webpack.js.org/plugins/split-chunks-plugin/
        cacheGroups: {
          vueMaterialAdapter: {
            test: /[\\/]node_modules[\\/]vue-material-adapter[\\/]/,
            name: "vue-material-adapter",
            chunks: "all"
          }
        }
      }
    }
  }
};
