import { useRef } from 'libs/react'
import { useValue } from 'libs/react'
import { Ref } from 'libs/react'

export type SharedProp<T> = { value: T }

/**
 *
 */
export function useSharedProp<T>(prop: T): SharedProp<T> {

	let value = useRef<any>(null)

	value.current = prop

	return {
		get value() {
			return value.current
		}
	}
}

export function getSharedProps() {

}