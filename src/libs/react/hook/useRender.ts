import { useState } from 'react'

/**
 * @function useRender
 * @since 1.0.0
 */
export function useRender(): [() => void, number] {

	let [
		last,
		setTime
	] = useState(0)

	/**
	 * @function render
	 * @since 1.0.0
	 * @hidden
	 */
	function render() {
		setTime(Date.now())
	}

	return [render, last]
}