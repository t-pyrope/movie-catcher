import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: sans-serif;
    color: #1C1C1C;
}

a {
    text-decoration: none;
    color: #1C1C1C
}

`

export default GlobalStyles