/**
 * @const Plugin
 * @since 1.0.0
 */
const Plugin = require('html-webpack-plugin')

/**
 * HTML plugin.
 * @since 1.0.0
 */
module.exports = new Plugin({
	hash: true,
	base: '/',
	inject: 'body',
	filename: '[name].html',
	template: 'src/index.ejs',
	templateParameters: {
		'build': new Date().toISOString()
	}
})