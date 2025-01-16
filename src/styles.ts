import { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#EEEEEE',
  preto: '#111',
  verde: '#10AC84',
  cinza: '#333',
  cinzaClaro: '#A3A3A3'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", serif;
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: ${cores.preto};
    color: ${cores.branco};
    padding-top: 40px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }


`
