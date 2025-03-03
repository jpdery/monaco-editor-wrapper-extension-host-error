import { useRef } from 'react'

/**
 * @function useValue
 * @since 1.0.0
 */
export function useValue<T>(initial: () => T) {

	let reference = useRef<T | undefined>(undefined)
	if (reference.current === undefined) {
		reference.current = initial()
	}

	return reference.current!
}