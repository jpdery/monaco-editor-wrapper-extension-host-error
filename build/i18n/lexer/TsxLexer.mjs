import { JsxLexer } from 'i18next-parser'
import ts from 'typescript'


export default class TsxLexer extends JsxLexer {

	constructor(options = {}) {

		super(options)

		this.attributes = [
			'title',
			'infos',
			'value',
			'label',
			'placeholder'
		]

		this.ignoreComponents = ['Picto']

	}

	extract(content, filename = '__default.jsx') {

		let keys = []

		let parseCommentNode = this.createCommentNodeParser()

		let parseTree = (node) => {

			let entry = null

			parseCommentNode(keys, node, content)

			switch (node.kind) {

				case ts.SyntaxKind.CallExpression:

					let entries = this.expressionExtractor.call(this, node)
					if (entries) {
						keys.push(...entries)
					}

					break

				case ts.SyntaxKind.TaggedTemplateExpression:
					entry = this.taggedTemplateExpressionExtractor.call(this, node)
					break

				case ts.SyntaxKind.JsxElement:
					keys.push(...this.jsxExtractor.call(this, node, content))
					break

				case ts.SyntaxKind.JsxSelfClosingElement:
					keys.push(...this.jsxExtractor.call(this, node, content))
					break
			}

			if (entry) {
				keys.push(entry)
			}

			node.forEachChild(parseTree)
		}

		const sourceFile = ts.createSourceFile(
			filename,
			content,
			ts.ScriptTarget.Latest
		)

		parseTree(sourceFile)

		const keysWithNamespace = this.setNamespaces(keys)
		const keysWithPrefixes = this.setKeyPrefixes(keysWithNamespace)

		return keysWithPrefixes
	}

	jsxExtractor(node, sourceText) {

		const tagNode = node.openingElement || node

		let expressionName = this.expressionToName(tagNode.tagName)
		if (expressionName == '' ||
			expressionName[0] == expressionName[0].toLowerCase()) {
			return []
		}

		let process = this.ignoreComponents.includes(expressionName) == false
		if (process) {

			let entries = []

			for (let attribute of this.attributes) {

				let key = getPropValue(tagNode, attribute)
				if (key) {
					entries.push({ key })
				}

			}

			return entries
		}

		return []
	}
}

/**
 * @function getPropValue
 * @since 1.0.0
 * @hidden
 */
function getPropValue(node, name) {

	const attribute = node.attributes.properties.find(
		(attr) => attr.name !== undefined && attr.name.text === name
	)

	if (attribute == null) {
		return undefined
	}

	if (attribute.initializer.expression?.kind === ts.SyntaxKind.Identifier) {
		return undefined
	}

	return (
		attribute.initializer.expression
			? attribute.initializer.expression.text
			: attribute.initializer.text
	)
}