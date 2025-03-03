import { useCallback } from 'libs/react'
import { useEffect } from 'libs/react'
import { useRef } from 'libs/react'
import { useState } from 'libs/react'
import { useValue } from 'libs/react'

/**
 * @function useThrottle
 * @since 1.0.0
 */
export function useThrottle(throttled: any) {

	/**
	 * @function process
	 * @since 1.0.0
	 * @hidden
	 */
	function process() {

		let func = self.throttled
		let args = self.arguments

		if (func) {
			func(...args)
		}

		self.timer = null
	}

	/**
	 * @function throttler
	 * @since 1.0.0
	 * @hidden
	 */
	function throttler(...args: any) {

		self.arguments = args

		if (self.timer == null) {
			self.timer = requestAnimationFrame(process)
		}
	}

	let self = useValue<Throttle>(() => ({
		timer: null,
		arguments: null,
		throttled,
		throttler
	}))

	self.throttled = throttled

	return self.throttler
}

//------------------------------------------------------------------------------
// Private API
//------------------------------------------------------------------------------

/**
 * @interface Throttle
 * @since 1.0.0
 */
export interface Throttle {
	timer: any
	arguments: any
	throttled: any
	throttler: any
}
