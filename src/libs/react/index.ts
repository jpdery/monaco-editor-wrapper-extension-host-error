import React from 'react'
import ReactDOM from 'react-dom/client'

/**
 * Core React
 */

export { React }
export { ReactDOM }

/**
 * Core React Hooks
 */

export { useRef } from 'react'
export { useMemo } from 'react'
export { useState } from 'react'
export { useEffect } from 'react'
export { useLayoutEffect } from 'react'
export { useContext } from 'react'
export { useCallback } from 'react'

/**
 * Core React Types
 */

export { RefObject as Ref } from 'react'
export { Dispatch } from 'react'
export { SetStateAction } from 'react'
export { ReactElement } from 'react'
export { ComponentType } from 'react'
export { ComponentClass } from 'react'
export { SyntheticEvent } from 'react'
export { KeyboardEvent } from 'react'
export { MouseEvent } from 'react'
export { ChangeEvent } from 'react'
export { ClipboardEvent } from 'react'
export { FocusEvent } from 'react'
export { FormEvent } from 'react'
export { DragEvent } from 'react'
export { PointerEvent } from 'react'
export { UIEvent } from 'react'
export { WheelEvent } from 'react'

/**
 * Core React Functions
 */

export { lazy } from 'react'
export { cloneElement } from 'react'
export { createContext } from 'react'
export { createElement } from 'react'
export { createRef } from 'react'
export { isValidElement } from 'react'

/**
 * Core React Components
 */

export { Fragment } from 'react'
export { Suspense } from 'react'

/**
 * Custom React Hooks
 */

export { useSelf } from 'libs/react/hook/useSelf'
export { useWhen } from 'libs/react/hook/useWhen'
export { useOnce } from 'libs/react/hook/useOnce'
export { useWatch } from 'libs/react/hook/useWatch'
export { useValue } from 'libs/react/hook/useValue'
export { useImage } from 'libs/react/hook/useImage'
export { useMeasure } from 'libs/react/hook/useMeasure'
export { useRender } from 'libs/react/hook/useRender'
export { useDebounce } from 'libs/react/hook/useDebounce'
export { useThrottle } from 'libs/react/hook/useThrottle'
export { useClassName } from 'libs/react/hook/useClassName'
export { useEffectOnce } from 'libs/react/hook/useEffectOnce'
export { useChangeObserver } from 'libs/react/hook/useChangeObserver'
export { useResizeObserver } from 'libs/react/hook/useResizeObserver'
export { useResizeListener } from 'libs/react/hook/useResizeListener'
export { useScrollListener } from 'libs/react/hook/useScrollListener'
export { useScrollObserver } from 'libs/react/hook/useScrollObserver'
export { useChangeListener } from 'libs/react/hook/useChangeListener'
export { useMessageListener } from 'libs/react/hook/useMessageListener'