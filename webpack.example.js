var path = require("path");

var config = {
  entry: ["./example/index.js"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ["", ".eco", ".js"]
  },
  devtool: "inline-source-map",
  module: {
    loaders: [
      {
        test   : /.js$/,
        loader : 'babel-loader'
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