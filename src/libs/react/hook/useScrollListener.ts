import { useEffect } from 'libs/react'
import { useValue } from 'libs/react'
import { append } from 'libs/util/array'
import { remove } from 'libs/util/array'
import { Scroll } from 'libs/geom/Scroll'
import { Ref } from 'libs/react'

/**
 * @function useScrollListener
 * @since 1.0.0
 */
export function useScrollListener(node: Ref<HTMLDivElement | null> | Ref<HTMLDivElement>) {

	let self = useValue<Self>(() => ({
		listeners: []
	}))

	/**
	 * @function onScroll
	 * @since 1.0.0
	 * @hidden
	 */
	function onScroll() {

		let element = node.current
		if (element == null) {
			return
		}

		let scroll = new Scroll(
			element.scrollTop,
			element.scrollLeft,
			element.scrollWidth,
			element.scrollHeight
		)

		self.listeners.forEach(
			listener => listener(scroll)
		)
	}

	/**
	 * @function appendScrollListener
	 * @since 1.0.0
	 * @hidden
	 */
	function appendScrollListener(listener: ScrollListener) {
		append(self.listeners, listener)
	}

	/**
	 * @function removeScrollListener
	 * @since 1.0.0
	 * @hidden
	 */
	function removeScrollListener(listener: ScrollListener) {
		remove(self.listeners, listener)
	}

	/**
	 * @function invokeScrollListeners
	 * @since 1.0.0
	 * @hidden
	 */
	function invokeScrollListeners() {
		onScroll()
	}

	/**
	 * @function attachEvents
	 * @since 1.0.0
	 * @hidden
	 */
	function attachEvents() {

		let element = node.current
		if (element == null) {
			return
		}

		element.addEventListener('scroll', onScroll)
	}

	/**
	 * @function detachEvents
	 * @since 1.0.0
	 * @hidden
	 */
	function detachEvents() {

		let element = node.current
		if (element == null) {
			return
		}

		element.removeEventListener('scroll', onScroll)
	}

	/**
	 * Manages the native scroll event
	 * @since 1.0.0
	 *
	 */
	useEffect(() => {

		attachEvents()

		return () => {
			detachEvents()
		}

	}, [node])

	return {
		appendScrollListener,
		removeScrollListener,
		invokeScrollListeners
	}
}

/**
 * @interface ScrollListener
 * @since 1.0.0
 */
export type ScrollListener = (scroll: Scroll) => void

//------------------------------------------------------------------------------
// Private API
//------------------------------------------------------------------------------

/**
 * @interface Self
 * @since 1.0.0
 * @hidden
 */
interface Self {
	listeners: Array<ScrollListener>
}
