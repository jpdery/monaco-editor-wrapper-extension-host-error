import React, { useState } from 'react'
import { CodeEditorLoader } from 'components/editor/code/CodeEditorLoader'
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

	let [
		file,
		setFile
	] = useState({
		handle: 'xxxx',
		source: 'console.log("test")',
		syntax: 'javascript',

	})

	function onEdit(source: string) {
		setFile({ ...file, source })
	}

	function onSave() {

	}


	return (
		<div className="editor-screen">

			<CodeEditorLoader
				handle={file.handle}
				source={file.source}
				syntax={file.syntax}
				onEdit={onEdit}
				onSave={onSave}
			/>

		</div>
	)
}
