import { Point } from 'libs/geom/Point'
import { Size } from 'libs/geom/Size'

const $size = Symbol('size')
const $origin = Symbol('origin')
const $anchor = Symbol('anchor')

/**
 * @class Frame
 * @since 1.0.0
 */
export class Frame {

	/**
	 * @property Zero
	 * @since 1.0.0
	 */
	public static readonly Zero = new Frame()

	//--------------------------------------------------------------------------
	// Properties
	//--------------------------------------------------------------------------

	/**
	 * @property x
	 * @since 1.0.0
	 */
	public get x(): number {
		return this.origin.x
	}

	/**
	 * @property y
	 * @since 1.0.0
	 */
	public get y(): number {
		return this.origin.y
	}

	/**
	 * @property w
	 * @since 1.0.0
	 */
	public get w(): number {
		return this.size.w
	}

	/**
	 * @property h
	 * @since 1.0.0
	 */
	public get h(): number {
		return this.size.h
	}

	/**
	 * @property size
	 * @since 1.0.0
	 */
	public readonly size: Size

	/**
	 * @property origin
	 * @since 1.0.0
	 */
	public readonly origin: Point

	/**
	 * @property anchor
	 * @since 1.0.0
	 */
	public readonly anchor: Point

	//--------------------------------------------------------------------------
	// Methods
	//--------------------------------------------------------------------------

	/**
	 * @constructor
	 * @since 1.0.0
	 */
	constructor(x: number = 0, y: number = 0, w: number = 0, h: number = 0) {
		this.size = new Size(w, h)
		this.origin = new Point(x, y)
		this.anchor = new Point(0, 0)
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
