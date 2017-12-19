var path = require("path");
var webpack = require("webpack");

var config = {
	entry: {
		"ui-router-marionette": ["./src/index.js"],
		"ui-router-marionette.min": ["./src/index.js"]
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js",
		libraryTarget: "umd",
		library: "UIRouterMarionette",
		umdNamedDefine: true
	},
	resolve: {
		extensions: ["", ".js"]
	},
	devtool: 'source-map',
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			include: /\.min\.js$/,
		})
	],
	module: {
		loaders: [
      {
        test   : /.js$/,
        loader : 'babel-loader'
      }
		]
	},
	externals: {
		"backbone.marionette": { root: 'Marionette', amd: 'backbone.marionette', commonjs2: 'backbone.marionette', commonjs: 'backbone.marionette' },
		"jquery": "jQuery",
		"underscore": { root: '_', amd: 'underscore', commonjs2: 'underscore', commonjs: 'underscore' }
	}
};

module.exports = config;
