const merge = require("webpack-merge");
const common = require("./webpack.common");
const Uglify = require("uglifyjs-webpack-plugin");

const config = merge(common, {
  mode: "production",
  optimization: {
    minimizer: [
      new Uglify({
        exclude: /node_modules/,
        sourceMap: false
      })
    ]
  }
});

module.exports = config;
