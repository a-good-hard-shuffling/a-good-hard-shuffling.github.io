const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "."),
    filename: "[name].bundle.js"
  },
  devServer: { inline: true },
  plugins: [new HtmlWebpackPlugin({ template: "./source.html" })],
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/env",
              {
                modules: false,
                targets: {
                  browsers: ["chrome 62"]
                }
              }
            ]
          ]
        }
      }
      // {
      //   test: /\.css$/,
      //   use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      // }
    ]
  }
};
