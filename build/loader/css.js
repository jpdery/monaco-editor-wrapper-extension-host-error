/**
 * @const Loader
 * @since 1.0.0
 */
const Loader = require('mini-css-extract-plugin').loader

/**
 * Loader: CSS
 * @since 1.0.0
 */
module.exports = {

	test: /\.css$/,

	use: [

		{
			loader: Loader,
		},

		{
			loader: 'css-loader',
			options: {
				url: false
			}
		}

	]
}