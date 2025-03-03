import React from 'react'
import ReactDOM from 'react-dom/client'
import { EditorScreen } from 'modules/Editor/EditorScreen'
import 'styles/main.scss'

/**
 * Renders the application.
 * @since 1.0.0
 */
ReactDOM.createRoot(document.getElementById('app')!).render(
	<EditorScreen />
)
