import { useState } from 'libs/react'

/**
 * @class Size
 * @since 1.0.0
 */
export class Size {

	/**
	 * @property Zero
	 * @since 1.0.0
	 */
	public static readonly Zero = new Size()

	/**
	 * @property w
	 * @since 1.0.0
	 */
	public readonly w: number

	/**
	 * @property h
	 * @since 1.0.0
	 */
	public readonly h: number

	/**
	 * @method from
	 * @since 1.0.0
	 */
	public static from(size: Sizeable) {
		return new Size(size.w, size.h)
	}

	/**
	 * @constructor
	 * @since 1.0.0
	 */
	constructor(w: number = 0, h: number = 0) {
		this.w = w
		this.h = h
	}

	//--------------------------------------------------------------------------
	// Aliases
	//-------------------------------------------------------------------------

	/**
	 * @property width
	 * @since 1.0.0
	 */
	public get width(): number {
		return this.w
	}

	/**
	 * @property height
	 * @since 1.0.0
	 */
	public get height(): number {
		return this.h
	}
}

/**
 * @interace Sizeable
 * @since 1.0.0
 */
export interface Sizeable {
	w: number
	h: number
}

//------------------------------------------------------------------------------
// Hooks
//------------------------------------------------------------------------------

/**
 * @function useSize
 * @since 1.0.0
 */
export function useSize(): [Size, SetSize] {

	let [
		size,
		setSize
	] = useState<Size>(
		Size.Zero
	)

	/**
	 * @function setValue
	 * @since 1.0.0
	 * @hiden
	 */
	function setSizeFrom(w: number, h: number) {
		setSize(size => (
			size.w == w &&
			size.h == h
		) ? size : new Size(w, h))
	}

	return [
		size,
		setSizeFrom
	]
}

/**
 * @type SetSize
 * @since 1.0.0
 */
export type SetSize = (w: number, h: number) => void