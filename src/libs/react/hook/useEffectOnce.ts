import { DependencyList } from 'react'
import { EffectCallback } from 'react'
import { useEffect } from 'libs/react'
import { useRef } from 'libs/react'

/**
 * @function useEffectOnce
 * @since 1.0.0
 */
export function useEffectOnce(effect: EffectCallback, deps: DependencyList) {

	let executed = useRef(false)

	useEffect(() => {

		if (executed.current) {
			return
		}

		let valid = deps.filter(value => value).length == deps.length
		if (valid) {
			effect()
			executed.current = true
		}

	}, deps)
}