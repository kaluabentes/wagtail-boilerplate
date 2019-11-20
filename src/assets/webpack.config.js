const path = require("path");
const BundleTracker = require("webpack-bundle-tracker");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./js/index.js",
  output: {
    filename: "[name]-[hash].js",
    path: path.resolve(__dirname, "public/dist")
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new BundleTracker({ filename: "./webpack-stats.json" })
  ]
};
