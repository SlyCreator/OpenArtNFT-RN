import React from 'react'
import { Platform, StyleSheet, View, ViewStyle } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AppTheme } from '../constants/Variables'

export interface Props {
  isNativeScreen?: boolean
  style?: ViewStyle
}

/**
 * Simple wrapper for a floating toolbar.
 */
const FloatingToolBar = ({
  children,
  isNativeScreen,
  style,
}: React.PropsWithChildren<Props>) => {
  const { top } = useSafeAreaInsets()
  return (
    <View
      style={{
        ...styles.toolbar,
        top: isNativeScreen ? 10 : top,
        ...style,
      }}
    >
      {children}
    </View>
  )
}

export default FloatingToolBar

const styles = StyleSheet.create({
  toolbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: AppTheme.screenPadding,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 50,
  },
})
