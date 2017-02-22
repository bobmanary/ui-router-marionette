var path = require("path");
var webpack = require("webpack");

var config = {
	entry: {
		"ui-router-marionette": ["./src/index.coffee"],
		"ui-router-marionette.min": ["./src/index.coffee"]
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js",
		libraryTarget: "umd",
		library: "UIRouterMarionette",
		umdNamedDefine: true
	},
	resolve: {
		extensions: ["", ".coffee", ".js"]
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
      { test: /\.coffee$/, loader: "coffee-loader" }
		]
	},
	externals: {
		"backbone.marionette": { root: 'Marionette', amd: 'backbone.marionette', commonjs2: 'backbone.marionette', commonjs: 'backbone.marionette' },
		"underscore": { root: '_', amd: 'underscore', commonjs2: 'underscore', commonjs: 'underscore' }
	}
};

module.exports = config;
