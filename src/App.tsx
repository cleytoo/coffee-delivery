import { ThemeProvider } from 'styled-components'
import { CartContextProvider } from './contexts/Cart'
import { MainRoutes } from './routes'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <MainRoutes />
      </CartContextProvider>
      <GlobalStyles />
    </ThemeProvider>
  )
}
