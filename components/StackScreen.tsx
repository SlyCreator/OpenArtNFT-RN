import { StackActions, useNavigation } from '@react-navigation/core'
import { Icon, Layout, LayoutProps, Text } from '@ui-kitten/components'
import React from 'react'
import { Platform, View, ViewStyle } from 'react-native'
import IconButton from './IconButton'
import FloatingToolBar from './FloatingToolBar'
import { AppTheme } from '../constants/Variables'

export interface Props extends Omit<LayoutProps, 'style'> {
  showBackButton?: boolean
  showCloseButton?: boolean
  style?: ViewStyle
  toolBarStyle?: ViewStyle
  title?: string
  titleComponent?: React.ReactNode
  accessoryRight?: React.ReactNode
  isNativeScreen?: boolean
  onCloseButton?(): void
  onBackButton?(): void
  closeButtonColor?: string
  backButtonColor?: string
}

/**
 * General Screen layout.
 */
const StackScreen = ({
  showBackButton,
  showCloseButton,
  style,
  toolBarStyle,
  title,
  titleComponent,
  children,
  accessoryRight,
  isNativeScreen,
  closeButtonColor,
  backButtonColor,
  onCloseButton,
  onBackButton,
  ...props
}: React.PropsWithChildren<Props>) => {
  const { dispatch } = useNavigation()

  return (
    <Layout
      {...props}
      style={{
        flex: 1,
        padding: AppTheme.screenPadding,
        paddingTop: Platform.OS === 'android' ? 50 : 85,
        ...style,
      }}
    >
      {children}

      <FloatingToolBar isNativeScreen={isNativeScreen} style={toolBarStyle}>
        <View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
          }}
        >
          {title && (
            <Text
              style={{
                textAlign: 'center',
                fontSize: 17,
              }}
            >
              {title}
            </Text>
          )}
          {titleComponent}
        </View>

        {showBackButton && (
          <View style={{ position: 'absolute', left: 20 }}>
            <IconButton
              onPress={
                onBackButton ||
                (() => {
                  dispatch(StackActions.pop())
                })
              }
              icon={(iconProps) => (
                <Icon name="chevron-left-outline" {...iconProps} />
              )}
            />
          </View>
        )}
        {showCloseButton && (
          <View style={{ position: 'absolute', right: 20 }}>
            <IconButton
              onPress={
                onCloseButton ||
                (() => {
                  dispatch(StackActions.replace('Root'))
                })
              }
              icon={(iconProps) => <Icon name="close-outline" {...iconProps} />}
            />
          </View>
        )}
        {accessoryRight}
      </FloatingToolBar>
    </Layout>
  )
}

export default StackScreen
