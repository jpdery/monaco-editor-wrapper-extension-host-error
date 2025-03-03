import { useLayoutEffect } from 'react'
import { DependencyList } from 'react'
import { EffectCallback } from 'react'
import { useEffect } from 'libs/react'
import { useRef } from 'libs/react'

/**
 * @function useWatch
 * @since 1.0.0
 */
export function useWatch(effect: EffectCallback, deps?: DependencyList) {

	let mounted = useRef(false)

	useEffect(() => {

		if (mounted.current == false) {
			mounted.current = true
			return
		}

		effect()

	}, deps)
}