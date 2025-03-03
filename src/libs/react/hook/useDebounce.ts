import { useRef } from 'react'

/**
 * @function useDebounce
 * @since 1.0.0
 */
export function useDebounce(debounced: Callback, delay: number = 16) {

	let callback = useRef<Callback>(debounced)
	let throttle = useRef<Throttle>(null)

	callback.current = debounced

	/**
	 * @function cancel
	 * @since 1.0.0
	 * @hidden
	 */
	function cancel() {
		if (throttle.current) {
			throttle.current = delay <= 16 ? cancelAnimationFrame(throttle.current) : clearTimeout(throttle.current)
		}
	}

	/**
	 * @function attach
	 * @since 1.0.0
	 * @hidden
	 */
	function attach(args: Array<any>) {

		if (delay <= 16) {

			throttle.current = requestAnimationFrame(() => {

				if (callback.current) {
					callback.current.apply(null, args)
				}

			})
		} else {

			throttle.current = setTimeout(() => {

				if (callback.current) {
					callback.current.apply(null, args)
				}

			}, delay)

		}

	}

	return function (...args: Array<any>) {
		cancel()
		attach(args)
	}
}

/**
 * @type Callback
 * @since 1.0.0
 */
export type Callback = any

/**
 * @type Callback
 * @since 1.0.0
 */
export type Throttle = any