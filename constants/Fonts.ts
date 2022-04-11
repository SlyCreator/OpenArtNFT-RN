const fonts = {
  Mullish: 'mullish',
  MullisBold: 'mullishBold',
  mullishRegular: 'mullishRegular',
  mullishItallic: 'mullishItallic',
  mullishSemiBold: 'mullishSemiBold',
  mullishSemiBoldItallic: 'mullishSemiBoldItallic',
  Body: 'mullish',
  Title: 'mullish',
  Display: 'mullish',
} as const

export type Fonts = typeof fonts

export default fonts
