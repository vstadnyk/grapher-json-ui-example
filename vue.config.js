const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
	lintOnSave: false,
	productionSourceMap: false,
	outputDir: 'dist',
	configureWebpack: {
		plugins: [
			new CompressionPlugin({
				test: /\.(js|css)$/,
				cache: 'cache'
			})
		]
	},
	chainWebpack: config => {
		config.plugins.delete('prefetch')
	},
	devServer: {
		compress: false,
		port: 8081,
		disableHostCheck: true,
		overlay: {
			warnings: true,
			errors: true
		}
	}
}
