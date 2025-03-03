import { Offset } from 'libs/geom/Offset'
import { Position } from 'libs/geom/Position'
import { Size } from 'libs/geom/Size'

/**
 * @class Bounds
 * @since 1.0.0
 */
export class Bounds {

	/**
	 * @property Zero
	 * @since 1.0.0
	 */
	public static readonly Zero = new Bounds()

	/**
	 * @property t
	 * @since 1.0.0
	 */
	public get t(): number {
		return this.position.t
	}

	/**
	 * @property tl
	 * @since 1.0.0
	 */
	public get l(): number {
		return this.position.l
	}

	/**
	 * @property r
	 * @since 1.0.0
	 */
	public get r(): number {
		return this.position.r
	}

	/**
	 * @property b
	 * @since 1.0.0
	 */
	public get b(): number {
		return this.position.b
	}

	/**
	 * @property w
	 * @since 1.0.0
	 */
	public get w(): number {
		return this.outer.w
	}

	/**
	 * @property h
	 * @since 1.0.0
	 */
	public get h(): number {
		return this.outer.h
	}

	/**
	 * @property position
	 * @since 1.0.0
	 */
	public readonly position: Position

	/**
	 * @property outer
	 * @since 1.0.0
	 */
	public readonly outer: Size

	/**
	 * @property inner
	 * @since 1.0.0
	 */
	public readonly inner: Size

	/**
	 * @constructor
	 * @since 1.0.0
	 */
	constructor(position: Offset = Offset.Zero, outer: Size = Size.Zero, inner: Size = Size.Zero) {
		this.position = position
		this.outer = outer
		this.inner = inner
	}

	//--------------------------------------------------------------------------
	// Aliases
	//-------------------------------------------------------------------------

	/**
	 * @property x
	 * @since 1.0.0
	 */
	public get x(): number {
		return this.l
	}

	/**
	 * @property y
	 * @since 1.0.0
	 */
	public get y(): number {
		return this.t
	}

	/**
	 * @property top
	 * @since 1.0.0
	 */
	public get top(): number {
		return this.t
	}

	/**
	 * @property left
	 * @since 1.0.0
	 */
	public get left(): number {
		return this.l
	}

	/**
	 * @property right
	 * @since 1.0.0
	 */
	public get right(): number {
		return this.r
	}

	/**
	 * @property bottom
	 * @since 1.0.0
	 */
	public get bottom(): number {
		return this.b
	}

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

	/**
	 * @property size
	 * @since 1.0.0
	 */
	public get size(): Size {
		return this.outer
	}
}