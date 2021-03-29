import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import {searchMovie} from '../actions/moviesAction';

const Nav = () => {
    const [textInput, setTextInput] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    const inputHandler = (e) => {
        setTextInput(e.target.value);
    }

    const searchMovieHandler = (e) => {
        e.preventDefault();
        dispatch(searchMovie(textInput));
        history.push(`/search/${textInput}`);
        setTextInput("");
    }

    return(
        <NavStyled>
            <h1><Link to="/">Movie catcher</Link></h1>
                <ul>
                    <li>Genres</li>
                    <li>People</li>
                    <li className="form">
                    <form onSubmit={searchMovieHandler}>
                    <input type="text" value={textInput} onChange={inputHandler}/>
                    <button type="submit"><FontAwesomeIcon icon={faSearch}/></button>
                </form>
                    </li>
                </ul>
        </NavStyled>
    )
}

const NavStyled = styled.nav`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    min-height: 25vh;
    /* border-bottom: 1px solid #1b1b1b; */
    
    h1 {
        /* margin-bottom: 1.5rem; */
    }
    input[type="text"]{
        line-height: 1.3;
        padding: 0.2rem 1rem 0.2rem 0.4rem;
        border: 1px solid #c2c2c2;
        border-radius: 0.2rem;
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
    }
    
    button {
        line-height: 1.3;
        padding: 0.3rem 0.5rem;
        border: none;
        color: grey;
        position: absolute;
        top: 0;
        right: 0;
        background: transparent;

    }

    ul {
        display: flex;
        list-style: none;
        justify-content: flex-start;
        width: 100%;
        padding: 0rem 10%;
    }

    li {
        margin-right: 1rem;
    }
    .form {
        margin-left: auto;
        position: relative;
        overflow: hidden;
    }
`

export default Nav;