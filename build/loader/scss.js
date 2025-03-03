const path = require('path')

/**
 * @const Loader
 * @since 1.0.0
 */
const Loader = require('mini-css-extract-plugin').loader

/**
 * Loader: SCSS
 * @since 1.0.0
 */
module.exports = {

	test: /\.scss$/,

	use: [

		{
			loader: Loader,
		},

		{
			loader: 'css-loader',
			options: {
				url: false
			}
		},

		{
			loader: 'sass-loader',
			options: {
				sassOptions: {
					silenceDeprecations: ['mixed-decls', 'import', 'global-builtin'],
					loadPaths: [
						path.resolve(__dirname, '../../src/styles')
					]
				}
			}
		}

	]
}
