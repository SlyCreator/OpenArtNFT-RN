import { Platform } from 'react-native'

export const AppTheme = {
  screenPadding: 12,
  borderRadius: { small: 6, medium: 12, large: 18 },
  dropShadowStyle: {
    small: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    large: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,

      elevation: 10,
    },
  },
    disableDark: '#DADADA',
  disableLight: '#F7F7F7',
  mediumGray: 'rgba(138, 135, 142, 1)',
  lightGray: 'rgba(218, 218, 218, 1)',

  darkGrayColor: '#262626',
  lightGrayColor: '737373',
  lightColor:'#EDEDED',
  accentColor:'#457c87',
  primaryColor: '#2B4780',
} as const

export const isAndroid = Platform.OS === 'android'
export const isIOS = Platform.OS === 'ios'

