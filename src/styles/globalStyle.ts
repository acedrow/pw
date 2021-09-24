import { createGlobalStyle } from 'styled-components'
import theme from './theme'

const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${theme.backgroundColor} ;
    font-family: ${theme.fontFamily};
    color: ${theme.textColor};

  }
  a {
    text-decoration: none;
    color: ${theme.textColor};
    font-family: ${theme.fontFamily};
  }
`

export default GlobalStyle
