import { useEffect } from 'libs/react'
import { useState } from 'libs/react'
import { Scroll } from 'libs/geom/Scroll'
import { Ref } from 'libs/react'

/**
 * @function useScrollObserver
 * @since 1.0.0
 */
export function useScrollObserver(node: Ref<HTMLElement | null>): [number, number] {

	let [
		container,
		setContainer
	] = useState<HTMLElement | null>(null)

	let [
		scrollX,
		setScrollX
	] = useState(0)

	let [
		scrollY,
		setScrollY
	] = useState(0)

	/**
	 * @function onScroll
	 * @since 1.0.0
	 * @hidden
	 */
	function onScroll() {

		if (container == null) {
			return
		}

		setScrollY(container.scrollTop)
		setScrollX(container.scrollLeft)
	}

	/**
	 * Finds the scrollable container.
	 * @since 1.0.0
	 */
	useEffect(() => {

		let element = node.current
		if (element == null) {
			return
		}

		let container = element.parentElement

		while (container) {

			let styles = getComputedStyle(container)
			let overflowX = styles.overflowX
			let overflowY = styles.overflowY

			if (overflowX == 'auto' ||
				overflowY == 'auto' ||
				overflowX == 'scroll' ||
				overflowY == 'scroll') {
				setContainer(container)
				break
			}

			container = container.parentElement
		}

	}, [node.current])

	/**
	 * Manages the scroll events.
	 * @since 1.0.0
	 */
	useEffect(() => {

		if (container) {
			container.addEventListener('scroll', onScroll)
		}

		return () => {

			if (container) {
				container.removeEventListener('scroll', onScroll)
			}

		}

	}, [container])

	return [
		scrollX,
		scrollY
	]
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
