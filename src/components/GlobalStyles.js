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
    cursor: pointer;
}

h1 {
    font-family: 'Comfortaa', cursive;
}

h2 {
    margin-bottom: 1rem;
    font-size: 1.3rem;
}

select {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    color: #3f3f3f;
}

button {
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
}

select {
    padding: 0rem 1.5rem 0rem 0.4rem;
    border: 1px solid #c2c2c2;
    border-radius: 0.2rem;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
    background-repeat: no-repeat;
    background-position: right 10% top 50%, 0 0;
    background-size: 0.6rem auto, 100%;
    height: 2rem;

    &:focus {
        outline: none;
    }
}

ul {
    list-style: none;
}

`

export default GlobalStyles