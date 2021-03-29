import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Montserrat', sans-serif;
    background-color: #353535;
    color: white;
}

a {
    text-decoration: none;
    color: white;
}

h1 {
    font-family: 'Comfortaa', cursive;
}

h2 {
    margin-bottom: 1rem;
    font-size: 1.3rem;
}

`

export default GlobalStyles