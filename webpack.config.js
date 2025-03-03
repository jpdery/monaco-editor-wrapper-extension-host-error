const path = require('path')
const webpack = require('webpack');

/**
 * The config
 * @since 1.0.0
 */
const Config = (env, arg) => ({

	name: 'index',

	entry: {
		'index': './src/index.tsx',
	},

	output: {
		path: resolve('dist'),
		filename: '[name].[contenthash].js',
		sourceMapFilename: '[name].map',
		chunkFilename: '[name].[contenthash].js',
		publicPath: '/'
	},

	resolve: {

		extensions: [
			'.js',
			'.jsx',
			'.ts',
			'.tsx',
			'.mjs',
		],

		modules: [
			resolve('src'),
			resolve('doc'),
			'node_modules'
		],

		alias: {
			'doc': resolve('doc')
		},

		fallback: {
			util: require.resolve('util/')
		}
	},

	module: {

		rules: [
			require('./build/loader/ts'),
			require('./build/loader/svg'),
			require('./build/loader/css'),
			require('./build/loader/scss'),
			require('./build/loader/gql'),
			require('./build/loader/mjs'),
			require('./build/loader/html'),
			require('./build/loader/asset')
		]

	},

	plugins: [

		new webpack.DefinePlugin({

			APP_ENV: arg.mode == 'production'
				? JSON.stringify('production')
				: JSON.stringify('development'),

			APP_URL: arg.mode == 'production'
				? JSON.stringify('https://console.breezy.stream')
				: JSON.stringify('http://localhost:8080'),

			API_URL: arg.mode == 'production'
				? JSON.stringify('https://api.breezy.stream/console')
				: JSON.stringify('http://localhost:3000/console'),

		}),

		new webpack.IgnorePlugin({
			resourceRegExp: /components\/widget\/loader\/.*\.tsx/
		}),

		require('./build/plugin/css'),
		require('./build/plugin/html'),
		require('./build/plugin/copy'),
		//require('./build/plugin/analyzer')
	],

	devServer: {

		allowedHosts: 'all',

		historyApiFallback: true,

		client: {
			overlay: {
				errors: true,
				warnings: true,
				runtimeErrors: (error) => {

					// VS Code Annoyance
					if (error.constructor.name == 'CancellationError') {
						return false
					}

					return true
				}
			}
		},

		proxy: [

			{
				context: ['/static/**'],
				target: 'http://localhost/',
				secure: false
			},

			{
				context: ['/storage/**'],
				target: 'http://localhost/',
				secure: false
			},

			{
				context: ['/library/**'],
				target: 'http://localhost/',
				secure: false
			}

		]

	}
})

/**
 * @function resolve
 * @since 1.0.0
 * @hidden
 */
function resolve(src) {
	return path.resolve(__dirname, src)
}

module.exports = Config