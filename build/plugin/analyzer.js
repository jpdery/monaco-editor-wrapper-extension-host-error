/**
 * @const Plugin
 * @since 1.0.0
 */
const Plugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

/**
 * Copy plugin.
 * @since 1.0.0
 */
module.exports = new Plugin({
	analyzerMode: 'static'
})