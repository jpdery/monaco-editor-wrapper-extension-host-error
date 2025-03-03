import { useValue } from 'libs/react'

/**
 * @function useSelf
 * @since 1.0.0
 */
export function useSelf<T>(value: T) {
	return useValue<T>(() => value)
}