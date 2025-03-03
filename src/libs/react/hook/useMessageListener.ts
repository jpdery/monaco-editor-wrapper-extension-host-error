import { useEffect } from 'libs/react'

/**
 * @type MessageListenerCallback
 * @since 1.0.0
 */
export type MessageListenerCallback<T = any> = (data: T) => void

/**
 * @function useMessageListener
 * @since 1.0.0
 */
export function useMessageListener(callback: MessageListenerCallback) {

	/**
	 * @function onMessageListener
	 * @since 1.0.0
	 * @hidden
	 */
	function onMessageListener(event: MessageEvent) {
		callback(event.data)
	}

	/**
	 * Listeners for messages.
	 * @since 1.0.0
	 */
	useEffect(() => {

		window.addEventListener('message', onMessageListener)

		return () => {
			window.removeEventListener('message', onMessageListener)
		}

	})

}