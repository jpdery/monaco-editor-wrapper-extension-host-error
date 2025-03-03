/**
 * Loader: GraphQL
 * @since 1.0.0
 */
module.exports = {
	test: /\.(graphql|gql)$/,
	exclude: /node_modules/,
	loader: 'graphql-tag/loader'
}