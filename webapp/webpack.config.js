const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  entry: {
    app: "./src/main.js",
  },
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "[name].js",
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
    }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ["public"],
    }),
  ],
  resolve: {
    extensions: [".js", ".scss"],
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.svg$/,
        loader: "file-loader",
      },
    ],
  },

  devServer: {
    port: 8080,
    open: true,
    historyApiFallback: true,
  },
};
