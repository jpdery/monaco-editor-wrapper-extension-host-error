/**
 * @loader HTML
 * @since 1.0.0
 */
module.exports = {
	test: /\.html$/i,
	loader: 'html-loader',
	exclude: /node_modules/,
	options: {
		sources: false,
	}
}