const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: [
    // "@babel/polyfill", // enables async-await
    "./client/index.js"
  ],
  output: {
    path: __dirname,
    filename: "./public/bundle.js",
    publicPath: "/client/images/"
  },
  resolve: {
    extensions: [".js", ".jsx", "*"]
  },
  devtool: "inline-source-map",
  watchOptions: {
    ignored: /node_modules/
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        // use: "file-loader?name=[name].[ext]&outputPath=./images/",
        // options: {
        //   esModule: false
        // }
        use: [
          {
            loader: "file-loader?name=/img/[name].[ext]",
            options: {
              esModule: false
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: false
            }
          }
        ]
      }
    ]
  }
};
