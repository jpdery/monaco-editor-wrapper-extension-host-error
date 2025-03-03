/**
 * @class ChangeObserver
 * @since 1.0.0
 * @hidden
 */
export class ChangeObserver {

	//--------------------------------------------------------------------------
	// Methods
	//--------------------------------------------------------------------------

	/**
	 * @constructor
	 * @since 1.0.0
	 */
	constructor(callback: ChangeCallback) {
		this.callback = callback
	}

	/**
	 * @method observe
	 * @since 1.0.0
	 */
	public observe(element: Element) {
		this.createResizeObserver(element)
		this.createMutationObserver(element)
		return this
	}

	/**
	 * @method unobserve
	 * @since 1.0.0
	 */
	public unobserve(element: Element) {
		this.disconnectResizeObserver(element)
		this.disconnectMutationObserver(element)
		return this
	}

	/**
	 * @method disconnect
	 * @since 1.0.0
	 */
	public disconnect() {
		this.disconnectResizeObservers()
		this.disconnectMutationObservers()
		return this
	}

	//--------------------------------------------------------------------------
	// Private API
	//--------------------------------------------------------------------------

	/**
	 * @property callback
	 * @since 1.0.0
	 * @hidden
	 */
	private callback: ChangeCallback

	/**
	 * @property ros
	 * @since 1.0.0
	 * @hidden
	 */
	private ros: Map<Element, ResizeObserver> = new Map()

	/**
	 * @property mos
	 * @since 1.0.0
	 * @hidden
	 */
	private mos: Map<Element, MutationObserver> = new Map()

	/**
	 * @method createResizeObserver
	 * @sice 1.0.0
	 * @hidden
	 */
	private createResizeObserver(element: Element) {

		this.disconnectResizeObserver(element)

		let callback = this.callback

		/**
		 * @function onResize
		 * @since 1.0.0
		 * @hidden
		 */
		function onResize(entries: ResizeObserverEntry[], observer: ResizeObserver) {
			callback(element)
		}

		let observer = new ResizeObserver(onResize)

		observer.observe(element)

		this.ros.set(element, observer)

		return observer
	}

	/**
	 * @method createMutationObserver
	 * @sice 1.0.0
	 * @hidden
	 */
	private createMutationObserver(element: Element) {

		this.disconnectMutationObserver(element)

		let callback = this.callback

		/**
		 * @function onResize
		 * @since 1.0.0
		 * @hidden
		 */
		function onMutate(mutations: MutationRecord[], observer: MutationObserver) {
			callback(element)
		}

		let observer = new MutationObserver(onMutate)

		observer.observe(element, {
			attributes: false,
			childList: true,
			subtree: true
		})

		this.mos.set(element, observer)

		return observer
	}

	/**
	 * @method disconnectResizeObserver
	 * @sice 1.0.0
	 * @hidden
	 */
	private disconnectResizeObserver(element: Element) {
		let observer = this.ros.get(element)
		if (observer) {
			observer.disconnect()
		}
	}

	/**
	 * @method disconnectMutationObserver
	 * @sice 1.0.0
	 * @hidden
	 */
	private disconnectMutationObserver(element: Element) {
		let observer = this.mos.get(element)
		if (observer) {
			observer.disconnect()
		}
	}

	/**
	 * @method disconnectResizeObserver
	 * @sice 1.0.0
	 * @hidden
	 */
	private disconnectResizeObservers() {
		this.ros.forEach(observer => observer.disconnect())
	}

	/**
	 * @method disconnectMutationObserver
	 * @sice 1.0.0
	 * @hidden
	 */
	private disconnectMutationObservers() {
		this.mos.forEach(observer => observer.disconnect())
	}
}

/**
 * @type ChangeCallback
 * @since 1.0.0
 */
type ChangeCallback = (target: Element) => void