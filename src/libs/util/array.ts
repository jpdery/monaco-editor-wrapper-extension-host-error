/**
 * @function insert
 * @since 1.0.0
 */
export function append<T>(array: Array<T>, value: T) {

	let index = array.indexOf(value)
	if (index == -1) {
		array.push(value)
	}

	return array
}

/**
 * @function insert
 * @since 1.0.0
 */
export function insert<T>(array: Array<T>, value: T, at: number) {

	let index = array.indexOf(value)
	if (index == -1) {
		array.splice(at, 0, value)
	}

	return array
}

/**
 * @function remove
 * @since 1.0.0
 */
export function remove<T>(array: Array<T>, value: T) {

	let index = array.indexOf(value)
	if (index > -1) {
		array.splice(index, 1)
	}

	return array
}

/**
 * @function update
 * @since 1.0.0
 */
export function update<T>(array: Array<T>, value: T, index: number) {
	array[index] = value
	return array
}

/**
 * @function splice
 * @since 1.0.0
 */
export function splice<T>(array: Array<T>, index: number) {
	array.splice(index, 1)
	return array
}

/**
 * @function concat
 * @since 1.0.0
 */
export function concat<T>(array: Array<T>, value: Array<T>) {
	array.concat(value)
	return array
}

/**
 * @function move
 * @since 1.0.0
 */
export function move<T>(array: Array<T>, oldIndex: number, newIndex: number) {

	if (oldIndex == newIndex) {
		return array
	}

	let value = array[oldIndex]
	array.splice(oldIndex, 1)
	array.splice(newIndex, 0, value)

	return array
}

/**
 * @function copy
 * @since 1.0.0
 */
export function copy<T>(array: Array<T>) {
	return array.slice()
}

/**
 * @function head
 * @since 1.0.0
 */
export function head<T>(array: Array<T>, offset: number = 0) {
	return array[0 + offset] || null
}

/**
 * @function last
 * @since 1.0.0
 */
export function tail<T>(array: Array<T>, offset: number = 0) {
	return array[array.length - 1 - offset] || null
}
