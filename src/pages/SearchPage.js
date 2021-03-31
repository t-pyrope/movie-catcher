import React, { useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {fetchSearch} from '../actions/searchAction';
import {Movies, MovieHeader} from '../styles';
import ScrollTop from '../components/ScrollTop';
import Movie from '../components/Movie';
import Actor from '../components/Actor';


const SearchPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchSearch(history.location.pathname.split("/")[2]));
    }, [dispatch, history])
    const {searchedMovie, searchedPerson} = useSelector(state => state.searched);
    console.log(searchedMovie);
    const getSearchNameHandler = () => {
        const searchName = history.location.pathname.split("/")[2];
        return searchName
    }
    return(
        <div>
            <MovieHeader>
                <h2>Results for {getSearchNameHandler()} in movies</h2>
            </MovieHeader>
            {searchedMovie.length && (
                <Movies>
                    {searchedMovie.slice(0,8).map((movie) => 
                        <Movie title={movie.title ? movie.title : movie.name} poster_path={movie.poster_path} rating={movie.vote_average} key={movie.id} id={movie.id} />
                    )}
                </Movies>
            )}
            <MovieHeader>
                <h2>Results for {getSearchNameHandler()} in people</h2>
            </MovieHeader>
            {searchedPerson.length && (
                <Movies>
                    {searchedPerson.slice(0,8).map((person) => 
                        <Actor actorName={person.name} poster_path={person.profile_path} key={person.id} id={person.id} />
                    )}
                </Movies>
            )}
            <ScrollTop />
        </div>
    )
}

export default SearchPage;