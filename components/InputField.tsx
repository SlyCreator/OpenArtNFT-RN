import React, { useState } from 'react'
import { ImageProps, StyleSheet, Text, View, ViewStyle } from 'react-native'
import { InputProps, Input as UiInput } from '@ui-kitten/components'
import { AppTheme } from '../constants/Variables'
import { useTranslation } from 'react-i18next'
import { useTheme } from './Themed'
import { RenderProp } from '@ui-kitten/components/devsupport'

export interface NewInputInterface
  extends Omit<InputProps, 'accessoryLeft' | 'accessoryRight'> {
  accessoryLeft?: (a: string) => RenderProp<Partial<ImageProps>>
  accessoryRight?: (a: string) => RenderProp<Partial<ImageProps>>
}

export interface Error {
  isError: boolean
  message: string
}
export interface Props {
  style?: ViewStyle
  errors?: Error
  inputProps?: NewInputInterface
  code?: boolean
}
/* eslint-disable  no-nested-ternary */

const InputField = React.forwardRef<UiInput, Props>(
  ({ style, errors, inputProps, ...props }, ref) => {
    const theme = useTheme()
    const { t } = useTranslation()
    const [active, setActive] = useState(false)
    const leftIcon = inputProps?.accessoryLeft?.(
      active ||
        (inputProps?.value !== undefined && inputProps.value?.length > 0)
        ? '#000'
        : AppTheme.disableDark
    )
    const rightIcon = inputProps?.accessoryRight?.(
      active ||
        (inputProps?.value !== undefined && inputProps.value?.length > 0)
        ? '#000'
        : AppTheme.disableDark
    )
    const borderColor =
      active || inputProps?.value
        ? props?.code
          ? '#000'
          : AppTheme.primaryColor
        : AppTheme.disableDark

    return (
      <View
        style={{ marginBottom: 20, backgroundColor: 'transparent', ...style }}
      >
        <UiInput
          ref={ref}
          onFocus={() => {
            setActive(true)
          }}
          onBlur={() => setActive(false)}
          {...inputProps}
          style={[
            {
              ...styles.input,
              borderColor,
              fontFamily: theme.fonts.Mullish,
              ...(inputProps?.style as {}),
            },
          ]}
          accessoryLeft={() => {
            return <>{leftIcon}</>
          }}
          accessoryRight={() => {
            return <>{rightIcon}</>
          }}
          placeholder={t(inputProps?.placeholder || '')}
          placeholderTextColor={AppTheme.disableDark}
        />

        {errors && errors.isError && (
          <Text
            style={{
              fontFamily: theme.fonts.Mullish,
              marginLeft: 10,
              fontSize: 10,
              color: AppTheme.primaryColor,
            }}
          >
            {errors.message}
          </Text>
        )}
      </View>
    )
  }
)

export default InputField

const styles = StyleSheet.create({
  input: {
    marginBottom: 3,
    borderWidth: 0,
    borderBottomWidth: 1,
    width: '100%',
    height: 50,
    backgroundColor: '#FFF',
    fontSize: 16,
    fontWeight: '600',
    padding: 10,
  },
})
