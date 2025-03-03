/**
 * @class Scroll
 * @since 1.0.0
 */
export class Scroll {

	/**
	 * @property Zero
	 * @since 1.0.0
	 */
	public static readonly Zero = new Scroll()

	/**
	 * @property r
	 * @since 1.0.0
	 */
	public readonly t: number

	/**
	 * @property l
	 * @since 1.0.0
	 */
	public readonly l: number

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
	 * @constructor
	 * @since 1.0.0
	 */
	constructor(t: number = 0, l: number = 0, w: number = 0, h: number = 0) {
		this.t = t
		this.l = l
		this.w = w
		this.h = h
	}

	//--------------------------------------------------------------------------
	// Aliases
	//-------------------------------------------------------------------------

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