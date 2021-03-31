import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {fetchSearch} from '../actions/searchAction';
import {Movies, MovieHeader, ButtonGroup, Button} from '../styles';
import ScrollTop from '../components/ScrollTop';
import Movie from '../components/Movie';
import Actor from '../components/Actor';
import styled from 'styled-components';
import {motion, AnimatePresence} from 'framer-motion';

const SearchPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    
    const [page, setPage] = useState(1);
    const [toggle, setToggle] = useState(false);
    useEffect(() => {
        dispatch(fetchSearch(history.location.pathname.split("/")[2], page));
    }, [dispatch, history, page])
    const {searchedMovie, searchedPerson} = useSelector(state => state.searched);
    const getSearchNameHandler = () => {
        const searchName = history.location.pathname.split("/")[2];
        return searchName
    }

    const previousPageHandler = () => {
        if (page > 1){setPage(page - 1)}
    }

    const downloadMoreHandler = () => {
        if(page < 5){setPage(page + 1)}
    }

    const toggleSearchHandler = () => {
        setPage(1);
        setToggle(!toggle);
    }
    return(
        <div>
            <SearchMovieHeader>
                <h2>Results for {getSearchNameHandler()}</h2>
                <motion.p onClick={toggleSearchHandler} initial={{backgroundColor: "#353535"}} animate={{backgroundColor: toggle ? "#353535" : "#252525" }} transition={{duration: 0.4}} >in movies</motion.p>
                <motion.p onClick={toggleSearchHandler} initial={{backgroundColor: "#353535"}} animate={{backgroundColor: toggle ? "#252525" : "#353535" }} transition={{duration: 0.4}}>in people</motion.p>
            </SearchMovieHeader>
            <ButtonGroup>
                <Button onClick={previousPageHandler} className={page < 2 ? "disabled" : ""}>Previous</Button>
                <Button onClick={downloadMoreHandler} className={page > 4 ? "disabled" : ""}>More</Button>
            </ButtonGroup>
            {!toggle && (
            <div>
                {searchedMovie.length && (
                    <Movies>
                        {searchedMovie.map((movie) => 
                            <Movie title={movie.title ? movie.title : movie.name} poster_path={movie.poster_path} rating={movie.vote_average} key={movie.id} id={movie.id} />
                        )}
                    </Movies>
                )}
            </div>
            )}
            {toggle && (
                <div>
                    {searchedPerson.length && (
                <Movies>
                    {searchedPerson.map((person) => 
                        <Actor actorName={person.name} poster_path={person.profile_path} key={person.id} id={person.id} />
                    )}
                </Movies>
            )}
                </div>
            )}
            <ButtonGroup>
                <Button onClick={previousPageHandler} className={page < 2 ? "disabled" : ""}>Previous</Button>
                <Button onClick={downloadMoreHandler} className={page > 4 ? "disabled" : ""}>More</Button>
            </ButtonGroup>
            <ScrollTop />
        </div>
    )
}

const SearchMovieHeader = styled(MovieHeader)`
    justify-content: flex-start;
    align-items: flex-start;

    p {
        padding: 0.5rem 2rem;
        margin-left: 1rem;
        border-radius: 0.5rem;
        cursor: pointer;
    }
`

export default SearchPage;