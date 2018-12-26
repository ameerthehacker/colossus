const isDevEnv = process.env.NODE_ENV === "development";

if (isDevEnv) {
  module.exports = require("./webpack.dev");
} else {
  module.exports = require("./webpack.prod");
}
