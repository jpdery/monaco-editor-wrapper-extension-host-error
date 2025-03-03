import TsxLexer from './lexer/TsxLexer.mjs'

export default {

	/**
	 * Key separator used in your translation keys.
	 */
	contextSeparator: '_',

	/**
	 * Save the _old files
	 */
	createOldCatalogs: true,

	/**
	 * Default namespace used in your i18next config.
	 */
	defaultNamespace: 'translation',

	/**
	 * Default value to give to keys with no value.
	 */
	defaultValue: '',

	/**
	 * Indentation of the catalog files.
	 */
	indentation: 2,

	/**
	 * Keep keys from the catalog that are no longer in code.
	 */
	keepRemoved: false,

	/**
	 * Key separator used in your translation keys.
	 */
	keySeparator: false,

	/**
	 * Namespace separator used in your translation keys
	 */
	namespaceSeparator: false,

	/**
	 * Plural separator used in your translation keys
	 */
	pluralSeparator: false,

	/**
	 * Lexers
	 */
	lexers: {
		hbs: ['HandlebarsLexer'],
		handlebars: ['HandlebarsLexer'],
		htm: ['HTMLLexer'],
		html: ['HTMLLexer'],
		mjs: ['JavascriptLexer'],
		js: ['JavascriptLexer'],
		ts: ['JavascriptLexer'],
		jsx: ['JsxLexer'],
		tsx: [{
			lexer: TsxLexer,
			attr: 'value',
			componentFunctions: ['Label']
		}],
		default: ['JavascriptLexer'],
	},

	/**
	 * Control the line ending. See options at https://github.com/ryanve/eol.
	 */
	lineEnding: 'auto',

	/**
	 * An array of the locales in your applications.
	 */
	locales: ['fr'],

	/**
	 * Where to write the locale files relative to process.
	 */
	output: './src/locales/$LOCALE/$NAMESPACE.json',

	/**
	 * An array of globs that describe where to look for source files relative
	 * to the location of the configuration file.
	 */
	input: undefined,

	/**
	 * Whether or not to sort the catalog.
	 */
	sort: false,


	/**
	 * Display info about the parsing including some stats,
	 */
	verbose: false,

	/**
	 * Exit with an exit code of 1 on warnings.
	 */
	failOnWarnings: false,

	/**
	 * Exit with an exit code of 1 when translations are updated.
	 */
	failOnUpdate: false,

	/**
	 * If you wish to customize the value output the value as an object, you
	 * can set your own format.
	 */
	customValueTemplate: null,


	/**
	 * The locale to compare with default values to determine whether a default
	 * value has been changed. If this is set and a default value differs from
	 * a translation in the specified locale, all entries for that key across
	 * locales are reset to the default value, and existing translations are
	 * moved to  the `_old` file.
	 */
	resetDefaultValueLocale: null,

	/**
	 * f you wish to customize options in internally used i18next instance, you
	 * can define an object with any configuration property supported by
	 * i18next.
	 */
	i18nextOptions: { compatibilityJSON: 'v3' },

}
