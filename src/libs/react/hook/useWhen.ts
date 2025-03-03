import { useEffect } from 'react'
import { useRef } from 'react'

/**
 * @function useWhen
 * @since 1.0.0
 */
export function useWhen(condition: any, whenTrue?: Function, whenFalse?: Function) {

	useEffect(() => {

		if (condition) {

			if (whenTrue) {
				whenTrue()
			}

		} else {

			if (whenFalse) {
				whenFalse()
			}

		}

	}, [condition])
}