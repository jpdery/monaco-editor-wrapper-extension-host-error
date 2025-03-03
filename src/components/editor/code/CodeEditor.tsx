import { launch } from 'components/editor/code/monaco'
import { monaco } from 'components/editor/code/monaco'
import { useMonacoEditorProps } from 'components/editor/code/monaco'
import { useClassName } from 'libs/react'
import { useEffect } from 'libs/react'
import { useRef } from 'libs/react'
import { useState } from 'libs/react'
import { Monaco } from 'components/editor/code/monaco'
import { React } from 'libs/react'
import './CodeEditor.scss'

/**
 * @interface CodeEditorProps
 * @since 1.0.0
 */
export interface CodeEditorProps extends ComponentProps {
	handle?: string
	source?: string
	syntax?: string
	onReady?: () => void
	onThemed?: () => void
	onLoaded?: () => void
	onEdit?: (value: string) => void
	onSave?: () => void
}

/**
 * @component CodeEditor
 * @since 1.0.0
 */
export function CodeEditor(props: CodeEditorProps) {

	let {
		theme,
		style,
		handle,
		source,
		syntax
	} = {
		style: 'normal',
		theme: 'dark',
		...props
	}

	let node = useRef<monaco.editor.IStandaloneCodeEditor>(null)

	let [
		loaded,
		setLoaded
	] = useState(false)

	let [
		themed,
		setThemed
	] = useState(false)

	let [
		ready,
		setReady
	] = useState(false)

	/**
	 * @function setTheme
	 * @since 1.0.0
	 * @hidden
	 */
	function setTheme(theme?: string | null) {

		if (theme == null) {
			theme = 'auto'
		}

		switch (theme) {

			case 'auto':
				setAutoTheme()
				return

			case 'dark':
				setDarkTheme()
				return

			case 'light':
				setLightTheme()
				return
		}

		setAutoTheme()
	}

	/**
	 * @function setAutoTheme
	 * @since 1.0.0
	 * @hidden
	 */
	function setAutoTheme() {
		monaco.editor.setTheme(getColorSchemeTheme())
	}

	/**
	 * @function setDarkTheme
	 * @since 1.0.0
	 * @hidden
	 */
	function setDarkTheme() {
		monaco.editor.setTheme(ThemeDark)
	}

	/**
	 * @function setLightTheme
	 * @since 1.0.0
	 * @hidden
	 */
	function setLightTheme() {
		monaco.editor.setTheme(ThemeLight)
	}

	/**
	 * @function onChange
	 * @since 1.0.0
	 * @hidden
	 */
	function onChange(value: string | undefined) {

		if (value == null) {
			value = ''
		}

		if (props.onEdit) {
			props.onEdit(value)
		}
	}

	/**
	 * @function onSave
	 * @since 1.0.0
	 * @hidden
	 */
	function onSave() {
		if (props.onSave) {
			props.onSave()
		}
	}

	/**
	 * Loads the editor.
	 * @since 1.0.0
	 */
	useEffect(() => {

		launch.then(() => setLoaded(true)).catch(console.error)

	}, [])

	/**
	 * Add actions to save.
	 * @since 1.0.0
	 */
	useEffect(() => {
		/*
		let editor = node.current
		if (editor == null) {
			return
		}

		let action = {

			id: SaveActionId,
			label: SaveActionLabel,
			keybindings: SaveActionBinding,

			run() {
				if (props.onSave) {
					props.onSave()
				}
			}
		}

		let disposable = editor.addAction(action)

		return () => {

			if (disposable) {
				disposable.dispose()
			}

		}
		*/

	}, [
		node.current,
		props.onEdit,
		props.onSave
	])

	/**
	 * Updates the theme.
	 * @since 1.0.0
	 */
	useEffect(() => {

		if (loaded == false) {
			return
		}

		setTheme(theme)
		setThemed(true)

	}, [
		loaded,
		theme
	])

	/**
	 * Updates the state.
	 * @since 1.0.0
	 */
	useEffect(() => {

		if (loaded &&
			themed) {
			setReady(true)
		}

	}, [
		loaded,
		themed
	])

	/**
	 * Invoke the handler.
	 * @since 1.0.0
	 */
	useEffect(() => {

		if (loaded) {
			if (props.onLoaded) {
				props.onLoaded()
			}
		}

	}, [loaded])

	/**
	 * Invoke the handler.
	 * @since 1.0.0
	 */
	useEffect(() => {

		if (themed) {
			if (props.onThemed) {
				props.onThemed()
			}
		}

	}, [themed])

	/**
	 * Invoke the handler.
	 * @since 1.0.0
	 */
	useEffect(() => {

		if (ready) {
			if (props.onReady) {
				props.onReady()
			}
		}

	}, [ready])

	let attrs = useMonacoEditorProps(
		handle,
		source,
		syntax
	)

	let className = useClassName(
		'code-editor',
		'code-editor--' + style,
		props.className
	)

	return (
		<div className={className}>
			{loaded && <Monaco ref={node} onChange={onChange} onDidSave={onSave} {...attrs} />}
		</div>
	)
}

//------------------------------------------------------------------------------
// Private API
//------------------------------------------------------------------------------

/**
 * @const ThemeDark
 * @sinec 1.0.0
 * @hidden
 */
const ThemeDark = 'breezy-dark'

/**
 * @const ThemeLight
 * @sinec 1.0.0
 * @hidden
 */
const ThemeLight = 'breezy-light'

/**
 * @const SaveActionId
 * @sinec 1.0.0
 * @hidden
 */
const SaveActionId = 'save.all'

/**
 * @const SaveActionLabel
 * @sinec 1.0.0
 * @hidden
 */
const SaveActionLabel = 'Save All'

/**
 * @const SaveActionBinding
 * @sinec 1.0.0
 * @hidden
 */
const SaveActionBinding = [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS]

/**
 * @function getColorSchemeTheme
 * @sinec 1.0.0
 * @hidden
 */
function getColorSchemeTheme() {
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? ThemeDark : ThemeLight
}

/**
 * Handles some VSCode error.
 * @since 1.0.0
 */
window.addEventListener('unhandledrejection', event => {

	if (event.reason &&
		event.reason.constructor &&
		event.reason.constructor.name == 'CancellationError') {
		event.preventDefault()
		return
	}

	console.error(event.reason)
})