import { useEffect } from 'libs/react'
import { useState } from 'libs/react'
import { useValue } from 'libs/react'
import { Bounds } from 'libs/geom/Bounds'
import { Offset } from 'libs/geom/Offset'
import { Size } from 'libs/geom/Size'
import { Ref } from 'libs/react'

/**
 * @function useMeasure
 * @since 1.0.0
 */
export function useMeasure(node: Ref<HTMLElement | null>): [Bounds] {

	let [
		bounds,
		setBounds
	] = useState(Bounds.Zero)

	/**
	 * @function measure
	 * @since 1.0.0
	 * @hidden
	 */
	function measure() {

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

		setBounds(bounds)
	}

	let observer = useValue(() => new ResizeObserver(measure))

	/**
	 * Observes the element.
	 * @since 1.0.0
	 */
	useEffect(() => {

		let element = node.current
		if (element == null) {
			return
		}

		measure()

		observer.observe(element)

		return () => {
			observer.disconnect()
		}

	}, [])

	return [
		bounds
	]
}

/**
 * @function getMeasure
 * @since 1.0.0
 */
export function getMeasure(element: Element) {

	let rect = element.getBoundingClientRect()

	let position = getOffset(element, rect)
	let outer = getOuter(element, rect)
	let inner = getInner(element, rect)

	let bounds = new Bounds(
		position,
		outer,
		inner
	)

	return bounds
}

//------------------------------------------------------------------------------
// Private API
//------------------------------------------------------------------------------

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