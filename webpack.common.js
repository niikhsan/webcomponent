const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	},

	mode: "production",
	module: {
		rules: [
		{
			test: /\.css$/,
			use:[
			{
				loader:"style-loader"
			},
			{
				loader:"css-loader"
			}
			]
		},
		]
	},
		//plugin
		plugins: [
		//html webpack plugin
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "index.html"
		})
		]
	}