// disable-sort-imports
import Monaco, { monaco } from '@codingame/monaco-editor-react'
import { initialize } from '@codingame/monaco-editor-wrapper'

// Extensions
import '@codingame/monaco-editor-wrapper/features/extensionHostWorker'
import '@codingame/monaco-vscode-css-language-features-default-extension'
import '@codingame/monaco-vscode-html-language-features-default-extension'
import '@codingame/monaco-vscode-typescript-language-features-default-extension'

/**
 * @export Monaco
 * @since 1.0l0
 */
export { Monaco }

/**
 * @export Monaco
 * @since 1.0l0
 */
export { monaco }

/**
 * @export launch
 * @since 1.0l0
 */
export const launch = initialize()

/**
 * @function useMonacoEditorProps
 * @sinec 1.0.0
 * @hidden
 */
export function useMonacoEditorProps(handle?: string, source?: string, syntax?: string) {
	return { fileUri: handle, value: source, programmingLanguage: syntax }
}
