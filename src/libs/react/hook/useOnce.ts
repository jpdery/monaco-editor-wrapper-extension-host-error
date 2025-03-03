import { useRef } from 'react'

/**
 * @function useOnce
 * @since 1.0.0
 */
export function useOnce(execute: () => void) {
	let executed = useRef(false)
	if (executed.current == false) {
		executed.current = true
		execute()
	}
}