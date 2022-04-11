import { AppTheme } from '../constants/Variables'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import React from 'react'
import {
  ActivityIndicator,
  GestureResponderEvent,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  Text,
  ViewStyle,
} from 'react-native'
import { useTheme } from './Themed'

export interface ButtonProps {
  title?: string
  outline?: boolean
  disable?: boolean
  isLoading?: boolean
  style?: ViewStyle
  onPress?(e?: GestureResponderEvent): void
  dark?: boolean
  testID?: string
  opacity?: number
  titleStyle?: TextStyle
}

/**
 *
 */
const Button = ({
  title,
  outline,
  disable,
  isLoading,
  style,
  titleStyle,
  opacity,
  dark,
  onPress,
  testID,
}: ButtonProps) => {
  const theme = useTheme()
  const borderColor = () => {
    if (disable) {
      switch (dark) {
        case true:
          return AppTheme.disableDark
        default:
          return AppTheme.disableLight
      }
    } else {
      return AppTheme.primaryColor
    }
  }

  const backgroundColor = () => {
    if (disable) {
      switch (dark) {
        case true:
          return AppTheme.disableDark
        default:
          return AppTheme.disableLight
      }
    } else if (outline) {
      return '#FFF'
    } else {
      return AppTheme.primaryColor
    }
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disable}
      activeOpacity={opacity ?? 0.7}
      testID={testID}
      style={{
        backgroundColor: backgroundColor(),
        borderRadius: 10,
        borderColor: borderColor(),
        ...styles.button,
        ...style,
        ...styles.buttonContent,
      }}
    >
      <Text
        style={{
          ...styles.title,
          color: disable && !dark ? AppTheme.mediumGray : '#000',
        //   fontFamily: theme.fonts.Mullish,
          textTransform: 'uppercase',
          ...titleStyle,
        }}
      >
        {title}
      </Text>
      {isLoading && <ActivityIndicator style={styles.loader} size={20} />}
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  loader: { marginLeft: 10 },
  container: {
    padding: 0,
    borderRadius: 100,
  },
  title: {
    fontSize: hp('2.2%'),
  },
  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    borderStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('90%'),
    height: 40,
    margin: 10,
  },
})
