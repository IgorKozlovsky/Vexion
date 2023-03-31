import { render } from 'preact'
import App from 'src/pages/App'
import theme from 'src/theme'
import { Global, ThemeProvider } from '@emotion/react'
import { globalStyles } from 'src/styles'

render(
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles} />
    <App />
  </ThemeProvider>,
  document.getElementById('app') as HTMLElement,
)
