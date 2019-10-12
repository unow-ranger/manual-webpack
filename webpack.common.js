const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	entry:{
		app: './src/index.js'
	},
	output:{
	    filename: '[name].bundle.js',
	    path: path.resolve(__dirname, 'dist')
	},
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
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Production'
		})
	]

}

