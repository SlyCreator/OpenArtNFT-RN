const theme = {
  primary: {
    100: '#ECD444',
    200: '#4685C8',
    300: '#80A7CF',
    400: '#001F5B',
  },
  text: '#000',
  textInverted: '#fff',
  neutral: {
    100: '#FFF',
    200: '#F0F6FD',
    300: '#E7F2FF',
    400: '#CCD4DE',
    500: '#525860',
    600: '#000000',
  },
  success: {
    100: '#529E66',
    200: '#367B48',
    300: '#276738',
  },
  error: {
    100: '#D0454C',
    200: '#B54248',
    300: '#95353A',
  },
  warning: {
    100: '#CAB23F',
    200: '#E1C542',
    300: '#B49E35',
  },
}

export type ThemeColors = typeof theme

export default {
  light: theme,
  dark: theme,
}
