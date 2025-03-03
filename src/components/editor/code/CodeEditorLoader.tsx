import { lazy } from 'libs/react'
import { useState } from 'libs/react'
import { React } from 'libs/react'
import { Suspense } from 'libs/react'
import './CodeEditorLoader.scss'

/**
 * @interface CodeEditorLoaderProps
 * @since 1.0.0
 */
export interface CodeEditorLoaderProps extends ComponentProps {
	handle?: string
	source?: string
	syntax?: string
	onEdit?: (value: string) => void
	onSave?: () => void
}

/**
 * @component CodeEditorLoader
 * @since 1.0.0
 */
export function CodeEditorLoader(props: CodeEditorLoaderProps) {

	let [
		ready,
		setReady
	] = useState(false)

	/**
	 * @function onReady
	 * @since 1.0.0
	 * @hidden
	 */
	function onReady() {
		setReady(true)
	}

	return (
		<Suspense>
			<CodeEditor {...props} onReady={onReady} />
		</Suspense>
	)
}

//------------------------------------------------------------------------------
// Dynamic Imports
//------------------------------------------------------------------------------

/**
 * @const CodeEditor
 * @since 1.0.0
 * @hidden
 */
const CodeEditor = lazy(() => import('components/editor/code/CodeEditor').then(
	({ CodeEditor }) => ({ default: CodeEditor })
))
