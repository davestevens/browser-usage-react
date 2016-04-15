var webpack = require("webpack");
var path = require("path");
var BrowserSyncPlugin = require("browser-sync-webpack-plugin");

var BASE_DIR = path.resolve(__dirname, "src");
var BUILD_DIR = path.join(BASE_DIR, "public");
var APP_DIR = path.join(BASE_DIR, "app");

var config = {
  entry: APP_DIR + "/index.jsx",
  output: {
    path: BUILD_DIR,
    filename: "bundle.js"
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : "babel"
      },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
      host: "localhost",
      port: 3000,
      server: { baseDir: [BASE_DIR] }
    }),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    })
  ]
};

module.exports = config;
