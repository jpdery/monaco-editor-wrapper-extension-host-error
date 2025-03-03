import { useState } from 'libs/react'

/**
 * @class Point
 * @since 1.0.0
 */
export class Point {

	/**
	 * @property Zero
	 * @since 1.0.0
	 */
	public static readonly Zero = new Point()

	/**
	 * @property x
	 * @since 1.0.0
	 */
	public readonly x: number

	/**
	 * @property y
	 * @since 1.0.0
	 */
	public readonly y: number

	/**
	 * @constructor
	 * @since 1.0.0
	 */
	constructor(x: number = 0, y: number = 0) {
		this.x = x
		this.y = y
	}
}

//------------------------------------------------------------------------------
// Hooks
//------------------------------------------------------------------------------

/**
 * @function usePoint
 * @since 1.0.0
 */
export function usePoint(): [Point, SetPoint] {

	let [
		size,
		setPoint
	] = useState<Point>(
		Point.Zero
	)

	/**
	 * @function setValue
	 * @since 1.0.0
	 * @hiden
	 */
	function setPointFrom(x: number, y: number) {
		setPoint(size => (
			size.x == y &&
			size.x == x
		) ? size : new Point(x, y))
	}

	return [
		size,
		setPointFrom
	]
}

/**
 * @type SetSize
 * @since 1.0.0
 */
export type SetPoint = (x: number, y: number) => void