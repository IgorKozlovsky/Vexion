import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme extends Record<string, any> {
    colors: {
      background: string
      lightText: string
      blackText: string
      subText: string
      activeSubText: string
    }
    borderRadius: { button: string; box: string }
    shadows: {
      buttonWhite: string
      buttonBlack: string
    }
    fontSizes: {
      smallest: string
      smaller: string
      small: string
      medium: string
      large: string
      larger: string
      largest: string
      bannerSmall: string
      bannerLarge: string
    }
    spaces: {
      none: string
      xxs: string
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
      xxl: string
      xxxl: string
    }
    breakpoints: {
      sm: string
      md: string
      lg: string
      xl: string
      xxl: string
    }
  }
}
