import { useValue } from 'libs/react'
import { ChangeObserver } from 'libs/react/hook/observer/ChangeObserver'

/**
 * @function useChangeObserver
 * @since 1.0.0
 */
export function useChangeObserver(callback: (element: Element) => void) {
	return useValue(() => new ChangeObserver(callback))
}
