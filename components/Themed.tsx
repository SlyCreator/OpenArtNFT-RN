/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import * as React from 'react'
import { Text as DefaultText, View as DefaultView } from 'react-native'

import Colors, { ThemeColors } from '../constants/Colors'
import fonts, { Fonts } from '../constants/Fonts'
import layout, { Layout } from '../constants/Layout'
import useColorScheme from '../hooks/useColorScheme'

export type Theme = ThemeColors & Layout & { fonts: Fonts }

export function useTheme(): Theme {
  const theme = useColorScheme()

  return {
    ...Colors[theme],
    ...layout,
    fonts,
  }
}

type ThemeProps = {
  color?: string
  type?: 'title' | 'body' | 'display'
  fontSize?: number
}

export type TextProps = ThemeProps & DefaultText['props']
export type ViewProps = ThemeProps & DefaultView['props']

export function Text({ ...props }: TextProps) {
  const theme = useTheme()
  const { style, type, ...otherProps } = props
  const color = props.color || theme.text
  let fontFamily: string = theme.fonts.Body
  if (type === 'title') {
    fontFamily = theme.fonts.Title
  } else if (type === 'display') {
    fontFamily = theme.fonts.Display
  }
  const fontSize = props.fontSize

  return (
    <DefaultText
      style={[{ color, fontFamily, fontSize }, style]}
      {...otherProps}
    />
  )
}

export function View({ ...props }: ViewProps) {
  const { style, ...otherProps } = props
  const backgroundColor = useTheme().neutral[100]

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />
}
