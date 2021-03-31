import React, {useEffect, useState} from 'react';
import {Link, useHistory, useLocation} from 'react-router-dom';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import loadGenres from '../actions/genresAction';

const Nav = () => {
    const [textInput, setTextInput] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]

    useEffect(() => {
        dispatch(loadGenres())        
    }, [dispatch, location]);
    const {genres} = useSelector((state) => state.genres)
    const inputHandler = (e) => {
        setTextInput(e.target.value);
    };

    const searchMovieHandler = (e) => {
        e.preventDefault();
        history.push(`/search/${textInput}`);
        setTextInput("");
    }

    const openGenreListHandler = (e) => {
        if(e.target.children[0] === undefined){
            return null;
        }
        e.target.children[0].style.opacity = 1;
        e.target.children[0].style.pointerEvents = "all";
    }

    const closeGenreListHandler = (e) => {
        if(e.target === undefined || e.target.children[0] === undefined){
            return null;
        }
        if(e.target.classList.contains("genre-list")){
            e.target.style.opacity = 0;
            e.target.style.pointerEvents = "none";
        }
        if(e.target.classList.contains("genres")){
            e.target.children[0].style.opacity = 0;
            e.target.children[0].pointerEvents = "none";
        }
    }

    const genreSelectHandler = (e) => {
        e.stopPropagation();
        const genreId = e.target.id;
        history.push(`/genres/${genreId}`);
    }
    const openPopularInHandler = (e) => {
        e.target.children[0].style.opacity = 1;
        e.target.children[0].style.pointerEvents = "all";
    };
    
    const closePopularInHandler = (e) => {
        if(e.target.classList.contains("popular-list")){
            e.target.style.opacity = 0;
            e.target.style.pointerEvents = "none";
        }
        if(e.target.classList.contains("popular")){
            e.target.children[0].style.opacity = 0;
            e.target.children[0].pointerEvents = "none";
        }
    };

    const yearSelectHandler = (e) => {
        e.stopPropagation();
        const genreId = e.target.id;
        history.push(`/year/${genreId}`);
    }

    return(
        <>
        <NavStyled>
            <h1><Link to="/">Movie catcher</Link></h1>
                <ul>
                    <li className="genres" onClick={openGenreListHandler} onMouseLeave={closeGenreListHandler}>Genres
                    {genres.length && (
                        <GenreList className="genre-list">
                            {genres.map((genre) => (
                                <p key={genre.id} id={genre.id} onClick={genreSelectHandler}>{genre.name}</p>
                            ))}
                        </GenreList>
                        )}
                    </li>
                    <li>
                        <Link to="/people">People</Link>
                    </li>
                    <li className="popular" onClick={openPopularInHandler} onMouseLeave={closePopularInHandler}>
                        Popular in...
                        <GenreList className="popular-list">
                            {years.map((year) => (
                                <p onClick={yearSelectHandler} key={year} id={year}>{year}</p>
                            ))}
                        </GenreList>
                    </li>
                    <li className="form">
                    <form onSubmit={searchMovieHandler}>
                    <input type="text" value={textInput} onChange={inputHandler}/>
                    <button type="submit"><FontAwesomeIcon icon={faSearch}/></button>
                </form>
                    </li>
                </ul>
        </NavStyled>
        </>
    )
}

const NavStyled = styled.nav`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    min-height: 25vh;

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
        top: 20%;
        right: 7%;
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
        padding: 0.5rem 1rem 0rem 1rem;
        cursor: pointer;
        &:hover {
            background-color: #252525;
        }

        &:last-child:hover {
            background-color: #353535;
        }
    }
    .form {
        margin-left: auto;
        position: relative;
        overflow: hidden;
    }

    .genres, .popular {
        position: relative;
    }
`

const GenreList = styled.div`
    position: absolute;
    opacity: 0;
    pointer-events: none;
    z-index: 2;
    background-color: #353535;
    display: grid;
    grid-template-columns: 50% 50%;
    padding: 2rem 2rem 1rem 0rem;
    width: 30rem;
    transition: all 0.4s ease-in-out;
    left: -10%;

    p {
        padding: 0.5rem;
        transition: all 0.4s ease;
        cursor: pointer;
        &:hover {
            background-color: #252525;
        }
    }
`

export default Nav;