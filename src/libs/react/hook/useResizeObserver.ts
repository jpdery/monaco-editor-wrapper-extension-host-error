import { useValue } from 'libs/react'

/**
 * @function useResizeObserver
 * @since 1.0.0
 */
export function useResizeObserver(callback: (rect: DOMRectReadOnly, target: Element) => void) {
	return useValue(() => new ResizeObserver(([entry]) => callback(entry.contentRect, entry.target)))
}
