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
  .noselect {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  }
`

export default GlobalStyle
