declare module 'mime-match'
declare module 'mime-types'

/**
 * @const APP_ENV
 * @since 1.0.0
 */
declare const APP_ENV: string

/**
 * @const APP_URL
 * @since 1.0.0
 */
declare const APP_URL: string

/**
 * @const API_URL
 * @since 1.0.0
 */
declare const API_URL: string

/**
 * @module *.html
 * @since 1.0.0
 */
declare module "*.html" {
	const content: string;
	export default content;
}

/**
 * @module *.html
 * @since 1.0.0
 */
declare module "*.svg" {
	const content: React.FunctionComponent<React.SVGProps<SVGElement>>
	export default content;
}

/**
 * @type ID
 * @since 1.0.0
 */
type ID = string

/**
 * @type Seed
 * @since 1.0.0
 */
type Seed = string

/**
 * @type Tuple
 * @since 1.0.0
 */
type Tuple<K, V> = [K, V]

/**
 * @type Dictionary
 * @since 1.0.0
 */
interface Dictionary<T> {
	[index: string]: T;
}

/**
 * @type Mandatory
 * @since 1.0.0
 */
type Mandatory<T> = {
	[K in keyof T]: Mandatory<T[K]>
} & Required<T>

/**
 * @type DeepPartial
 * @since 1.0.0
 */
type DeepPartial<T> = T extends object ? {
	[P in keyof T]?: DeepPartial<T[P]>;
} : T;

/**
 * @type WithoutNullFields
 * @since 1.0.0
 */
type WithoutNullFields<T> = {
	[P in keyof T]: NonNullable<T[P]>
}

/**
 * @type WithoutUndefinedFields
 * @since 1.0.0
 */
type WithoutUndefinedFields<T> = {
	[P in keyof T]: Required<T[P]>
}

/**
 * @interface Identifiable
 * @since 1.0.0
 */
interface Identifiable {
	id: ID
}

/**
 * @interface Orderable
 * @since 1.0.0
 */
interface Orderable {
	order?: number
}

/**
 * @interface ReactState
 * @since 1.0.0
 */
interface ReactState {

}

/**
 * @interface ReactProps
 * @since 1.0.0
 */
interface ReactProps {
	key?: any
	children?: any
	class?: string
	className?: string
}

/**
 * @interface ComponentProps
 * @since 1.0.0
 */
interface ComponentProps extends ReactProps {
	style?: string
}

/**
 * @interface Window
 * @since 1.0.0
 */
interface Window {
	t: (string: string, values?: any) => string
}

/**
 * @function t
 * @since 1.0.0
 */
declare function t(string: string, values?: any): string