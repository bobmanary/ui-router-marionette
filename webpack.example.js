var path = require("path");

var config = {
  entry: ["./example/index.coffee"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ["", ".coffee", ".eco", ".js"]
  },
  devtool: "inline-source-map",
  module: {
    loaders: [
      {
        test: /\.coffee$/,
        loader: "coffee-loader",
        exclude: /(node_modules|__tests__)/
      },
      {
        test: /\.eco$/,
        loader: "eco-loader",
        exclude: /(node_modules|__tests__)/
      }
    ]
  }
};

module.exports = config;