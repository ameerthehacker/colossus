const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const rootDir = process.cwd();

const config = {
  entry: path.resolve(rootDir, "src", "index.tsx"),
  output: {
    filename: "index.js",
    path: path.resolve(rootDir, "dist"),
    library: "colossus-styled-components",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  resolve: {
    extensions: [".tsx", ".js", ".json", ".ts"]
  },
  externals: {
    // Don't bundle react or react-dom
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    }
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: "./package.json",
        to: path.resolve(rootDir, "dist")
      },
      {
        from: "./README.md",
        to: path.resolve(rootDir, "dist")
      }
    ])
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules|setupEnzyme.ts/
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/"
            }
          }
        ]
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8000,
              name: "[name]-[hash].[ext]"
            }
          }
        ]
      }
    ]
  }
};

module.exports = config;
