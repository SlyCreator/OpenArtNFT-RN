import { NavigationContainerRef, StackActionType } from '@react-navigation/core'
import * as React from 'react'
import { BehaviorSubject } from 'rxjs'

export const navigationRef = React.createRef<NavigationContainerRef<any>>()
export const route = new BehaviorSubject<{ name: string } | undefined>(
  undefined
)

export function navigate(name: string, params?: any) {
  if (navigationRef.current?.getRootState()) {
    navigationRef.current?.navigate(name, params)
  } else {
    // eslint-disable-next-line no-console
    console.warn('navigationRef.current is null')
  }
}

export function dispatch(action: StackActionType) {
  if (navigationRef.current?.getRootState()) {
    navigationRef.current?.dispatch(action)
  } else {
    // eslint-disable-next-line no-console
    console.warn('navigationRef.current is null')
  }
}

export const canGoBack = () => {
  return navigationRef.current?.canGoBack()
}

export function goBack() {
  navigationRef.current?.goBack()
}

interface Routes {
  name: string
  key?: string
  params?: object
  state?: any
}

export function reset(index: number, routes: Array<Routes>) {
  navigationRef.current?.reset({
    index,
    routes,
  })
}
