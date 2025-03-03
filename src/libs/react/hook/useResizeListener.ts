import { useEffect } from 'libs/react'
import { useValue } from 'libs/react'
import { append } from 'libs/util/array'
import { remove } from 'libs/util/array'
import { Bounds } from 'libs/geom/Bounds'
import { Offset } from 'libs/geom/Offset'
import { Size } from 'libs/geom/Size'
import { Ref } from 'libs/react'

/**
 * @function useResizeListener
 * @since 1.0.0
 */
export function useResizeListener(node: Ref<HTMLDivElement | null> | Ref<HTMLDivElement>) {

	let {
		current: element
	} = node

	let self = useValue<Self>(() => ({
		observer: null,
		listeners: []
	}))

	/**
	 * @function onResize
	 * @since 1.0.0
	 * @hidden
	 */
	function onResize() {

		let element = node.current
		if (element == null) {
			return
		}

		let rect = element.getBoundingClientRect()

		let position = getOffset(element, rect)
		let outer = getOuter(element, rect)
		let inner = getInner(element, rect)

		let bounds = new Bounds(
			position,
			outer,
			inner
		)

		self.listeners.forEach(
			listener => listener(bounds)
		)
	}

	/**
	 * @function appendResizeListener
	 * @since 1.0.0
	 * @hidden
	 */
	function appendResizeListener(listener: ResizeListener) {
		append(self.listeners, listener)
	}

	/**
	 * @function removeResizeListener
	 * @since 1.0.0
	 * @hidden
	 */
	function removeResizeListener(listener: ResizeListener) {
		remove(self.listeners, listener)
	}

	/**
	 * @function removeResizeListener
	 * @since 1.0.0
	 * @hidden
	 */
	function invokeResizeListeners() {
		onResize()
	}

	/**
	 * Manages the observer.
	 * @since 1.0.0
	 */
	useEffect(() => {

		if (element) {
			self.observer = new ResizeObserver(onResize)
			self.observer.observe(element)
		}

		return () => {
			if (self.observer) {
				self.observer.disconnect()
				self.observer = null
			}
		}

	}, [element])

	return {
		appendResizeListener,
		removeResizeListener,
		invokeResizeListeners
	}
}

/**
 * @interface ResizeListener
 * @since 1.0.0
 */
export type ResizeListener = (bounds: Bounds) => void

//------------------------------------------------------------------------------
// Private API
//------------------------------------------------------------------------------

/**
 * @interface Self
 * @since 1.0.0
 * @hidden
 */
interface Self {
	observer: ResizeObserver | null
	listeners: Array<ResizeListener>
}

/**
 * @function getOffset
 * @since 1.0.0
 * @hidden
 */
function getOffset(element: Element, rect: DOMRect) {
	return new Offset(
		rect.top,
		rect.left,
		rect.right,
		rect.bottom
	)
}

/**
 * @function getOuter
 * @since 1.0.0
 * @hidden
 */
function getOuter(element: Element, rect: DOMRect) {
	return new Size(
		rect.width,
		rect.height
	)
}

/**
 * @function getInner
 * @since 1.0.0
 * @hidden
 */
function getInner(element: Element, rect: DOMRect) {
	return new Size(
		element.scrollWidth,
		element.scrollHeight
	)
}