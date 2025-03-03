/**
 * Loader: Typescript
 * @since
 */
module.exports = {
	test: /\.tsx?$/,
	loader: 'esbuild-loader',
	options: {
		target: 'esnext'
	}
}