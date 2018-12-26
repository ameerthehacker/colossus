const merge = require("webpack-merge");
const common = require("./webpack.common");

const config = merge(common, {
  devtool: "source-map",
  mode: "development"
});

module.exports = config;
