import { render } from 'preact'
import { App } from './app'
import { ThemeProvider } from '@emotion/react'
import theme from 'src/theme'
import { Global } from '@emotion/react'
import { globalStyles } from 'src/styles'

render(
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles} />
    <App />
  </ThemeProvider>,
  document.getElementById('app') as HTMLElement,
)
