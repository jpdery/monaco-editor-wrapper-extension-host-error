import { useEffect } from 'libs/react'
import { useValue } from 'libs/react'
import { getMeasure } from 'libs/react/hook/useMeasure'
import { append } from 'libs/util/array'
import { remove } from 'libs/util/array'
import { Bounds } from 'libs/geom/Bounds'
import { Offset } from 'libs/geom/Offset'
import { Size } from 'libs/geom/Size'
import { Ref } from 'libs/react'
import { ChangeObserver } from 'libs/react/hook/observer/ChangeObserver'

/**
 * @function useChangeListener
 * @since 1.0.0
 */
export function useChangeListener(node: Ref<HTMLDivElement | null>) {

	let {
		current: element
	} = node

	let self = useValue<Self>(() => ({
		observer: null,
		listeners: []
	}))

	/**
	 * @function onChange
	 * @since 1.0.0
	 * @hidden
	 */
	function onChange() {

		let element = node.current
		if (element == null) {
			return
		}

		let bounds = getMeasure(element)

		self.listeners.forEach(
			listener => listener(bounds)
		)
	}

	/**
	 * @function appendChangeListener
	 * @since 1.0.0
	 * @hidden
	 */
	function appendChangeListener(listener: ChangeListener) {
		append(self.listeners, listener)
	}

	/**
	 * @function removeChangeListener
	 * @since 1.0.0
	 * @hidden
	 */
	function removeChangeListener(listener: ChangeListener) {
		remove(self.listeners, listener)
	}

	/**
	 * @function removeChangeListener
	 * @since 1.0.0
	 * @hidden
	 */
	function invokeChangeListeners() {
		onChange()
	}

	/**
	 * Manages the observer.
	 * @since 1.0.0
	 */
	useEffect(() => {

		if (element) {
			self.observer = new ChangeObserver(onChange)
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
		appendChangeListener,
		removeChangeListener,
		invokeChangeListeners
	}
}

/**
 * @interface ChangeListener
 * @since 1.0.0
 */
export type ChangeListener = (bounds: Bounds) => void

//------------------------------------------------------------------------------
// Private API
//------------------------------------------------------------------------------

/**
 * @interface Self
 * @since 1.0.0
 * @hidden
 */
interface Self {
	observer: ChangeObserver | null
	listeners: Array<ChangeListener>
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
