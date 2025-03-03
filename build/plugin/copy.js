const path = require('path')

/**
 * @const Plugin
 * @since 1.0.0
 */
const Plugin = require('copy-webpack-plugin')

/**
 * Copy plugin.
 * @since 1.0.0
 */
module.exports = new Plugin({

	patterns: [{

		from: path.resolve(__dirname, '../../pub'),
		to: path.resolve(__dirname, '../../dist'),

		globOptions: {
			ignore: [
				"**/*index.html"
			]
		}

	}]

})