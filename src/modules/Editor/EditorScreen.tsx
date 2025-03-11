// disable-sort-imports
import { useClassName } from 'libs/react'
import { useEffect } from 'libs/react'
import { useState } from 'libs/react'
import { React } from 'libs/react'

import { initialize } from '@codingame/monaco-editor-wrapper'
import Editor from '@codingame/monaco-editor-react'
import { URI } from "@codingame/monaco-vscode-api/vscode/vs/base/common/uri";

import {
	RegisteredFileSystemProvider,
	RegisteredMemoryFile,
	RegisteredReadOnlyFile,
	createIndexedDBProviders,
	registerHTMLFileSystemProvider,
	registerFileSystemOverlay,
	initFile
} from '@codingame/monaco-vscode-files-service-override'

import '@codingame/monaco-editor-wrapper/features/extensionHostWorker'
import '@codingame/monaco-vscode-css-language-features-default-extension'
import '@codingame/monaco-vscode-html-language-features-default-extension'
import '@codingame/monaco-vscode-typescript-language-features-default-extension'

import './EditorScreen.scss'

/**
 * @interface EditorScreenProps
 * @since 1.0.0
 */
export interface EditorScreenProps extends ComponentProps {

}

/**
 * @component EditorScreen
 * @since 1.0.0
 */
export function EditorScreen(props: EditorScreenProps) {

	let {
		style
	} = {
		style: 'normal',
		...props
	}

	let [
		loaded,
		setLoaded
	] = useState(false)

	/**
	 * Loads the editor.
	 * @since 1.0.0
	 */
	useEffect(() => {

		const fileSystemProvider = new RegisteredFileSystemProvider(false)

		fileSystemProvider.registerFile(
			new RegisteredMemoryFile(
				URI.file('main.ts'),
				`// import anotherfile
					import {test} from 'test'
					let variable = 1
					function inc () {
					variable++
					}

					while (variable < 5000) {
					inc()
					console.log('Hello world', variable);
					}`
			)
		)
		fileSystemProvider.registerFile(
			new RegisteredMemoryFile(
				URI.file('test.ts'),
				`
					export function test() {
						console.log('Test')
					}
					}
				`
			)
		)

		registerFileSystemOverlay(1, fileSystemProvider)

		initialize({

		}).then(() => {
			setLoaded(true)
		})

	}, [])

	function onChange() {

	}

	function onSave() {

	}

	let className = useClassName(
		'editor-screen',
		'editor-screen--' + style,
		props.className
	)

	return (
		<div className={className}>
			{loaded &&
				<Editor
					onChange={onChange}
					onDidSave={onSave}
					fileUri={'main.ts'}
					value={`import {test} from 'test'`}
					programmingLanguage='typescript'
				/>}
		</div>
	)
}

//------------------------------------------------------------------------------
// Private API
//------------------------------------------------------------------------------
