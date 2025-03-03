/**
 * @class Offset
 * @since 1.0.0
 */
export class Offset {

	/**
	 * @property Zero
	 * @since 1.0.0
	 */
	public static readonly Zero = new Offset()

	/**
	 * @property t
	 * @since 1.0.0
	 */
	public readonly t: number

	/**
	 * @property l
	 * @since 1.0.0
	 */
	public readonly l: number

	/**
	 * @property r
	 * @since 1.0.0
	 */
	public readonly r: number

	/**
	 * @property r
	 * @since 1.0.0
	 */
	public readonly b: number

	/**
	 * @constructor
	 * @since 1.0.0
	 */
	constructor(t: number = 0, l: number = 0, r: number = 0, b: number = 0) {
		this.t = t
		this.l = l
		this.r = r
		this.b = b
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
}