const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		
	},
	devServer: {
    	//将dist目录下的文件，作为可访问文件
    	contentBase: './dist'
  	},
    devtool: 'inline-source-map',
	resolve: {

		//在导入语句没带文件后缀时，Webpack 会自动带上后缀后去尝试访问文件是否存在
		extensions: ['.js','.vue','.json'],

		//配置项通过别名来把原导入路径映射成一个新的导入路径
		alias: {								
			"vue$": "vue/dist/vue.esm.js",
			"@": "./src"
		}
	},
	module:{
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(gif|png|jpg|svg)$/,
				use: [
					"file-loader"
				]
			},
			{
				test: /\.js$/,
				use: [
					"babel-loader"
				],
				exclude: /node_modules/
			},
			{
				test: /\.html$/,
				loader: 'html-withimg-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "webpackTest",
			filename: "index.html",
			template: "./src/index.html",
			inject: true
		}),
		new CleanWebpackPlugin(),
		new UglifyJsPlugin()
	]
}



