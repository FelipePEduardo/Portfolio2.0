import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background: ${({ theme }) => theme['purple-dark-900']};
    color: ${({ theme }) => theme['gray-100']};   
  }

  body, input, text-area, button {
    font-family: 'Hanken Grotesk', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;

    -webkit-font-smoothing: antialiased;
  }

  body::-webkit-scrollbar { 
    width: 0.6rem;
    height: 0.6rem;
    margin-right: 10px;
  }

  body::-webkit-scrollbar-track {
    border: none;
    background: ${({ theme }) => theme['purple-dark-800']};
  }

  body::-webkit-scrollbar-track-piece  { /* 4 */ }

  body::-webkit-scrollbar-thumb { 
    background: ${({ theme }) => theme['pink-200']} ;
    border-radius: 3px;
    cursor: move;
  }

  body::-webkit-scrollbar-corner { 
    border: none;
    background: none;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  .hide {
    display: none;
  }
`
