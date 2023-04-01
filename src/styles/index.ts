import { css } from '@emotion/react'

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
