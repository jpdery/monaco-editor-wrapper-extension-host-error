/**
 * @const Plugin
 * @since 1.0.0
 */
const Plugin = require('mini-css-extract-plugin')

/**
 * CSS plugin.
 * @since 1.0.0
 */
module.exports = new Plugin({
	ignoreOrder: true
})