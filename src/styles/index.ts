import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { pathToBlur } from 'src/constants'
import Text from 'src/ui/Text'

export const globalStyles = css`
  @font-face {
    font-family: 'Archivo Black';
    src: url('/public/fonts/ArchivoBlack-Regular.ttf') format('ttf');
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Archivo Black', sans-serif;
    overflow-x: hidden;
  }
`

export const StyledImageText = styled(Text)`
  background-image: url(${pathToBlur});
  background-size: 200%;
  background-position: 50% 50%;
  background-clip: text;
  color: transparent;
  text-align: center;
`
