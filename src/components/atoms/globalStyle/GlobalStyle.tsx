import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  } 
  
   @font-face {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 300;
	    src: 
        url('fonts/Roboto-Light.woff') format('woff'), 
        url('fonts/Roboto-Light.ttf') format('truetype');	
      font-display: fallback
   } 
`

export default GlobalStyles