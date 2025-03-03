import { useEffect } from 'libs/react'
import { useRef } from 'libs/react'
import { useState } from 'libs/react'
import { useWatch } from 'libs/react'
import { Dispatch } from 'libs/react'
import { SetStateAction } from 'libs/react'

/**
 * @function useImage
 * @param image
 */
export function useImage(source?: string | null): [boolean, string, Dispatch<SetStateAction<string>>] {

	if (source == null) {
		source = ''
	}

	let img = useRef(document.createElement('img'))

	let [
		ready,
		setReady
	] = useState(false)

	let [
		image,
		setImage
	] = useState(source)

	/**
	 * Loads the image.
	 * @since 1.0.0
	 */
	useEffect(() => {

		/**
		 * @function onLoad
		 * @since 1.0.0
		 * @hidden
		 */
		async function onLoad() {
			setReady(true)
		}

		/**
		 * @function onAbort
		 * @since 1.0.0
		 * @hidden
		 */
		function onAbort() {
			setReady(false)
		}

		/**
		 * @function onError
		 * @since 1.0.0
		 * @hidden
		 */
		function onError() {
			setReady(false)
		}

		setReady(false)

		img.current.src = image || ''

		if (img.current.complete) {

			onLoad()

		} else {

			img.current.addEventListener('load', onLoad)
			img.current.addEventListener('abort', onAbort)
			img.current.addEventListener('error', onError)

		}

		return () => {
			img.current.removeEventListener('load', onLoad)
			img.current.removeEventListener('abort', onAbort)
			img.current.removeEventListener('error', onError)
		}

	}, [image])

	/**
	 * Updates the image.
	 * @since 1.0.0
	 */
	useWatch(() => {

		if (source == null) {
			source = ''
		}

		setImage(source)

	}, [source])

	return [
		ready,
		image,
		setImage
	]
}