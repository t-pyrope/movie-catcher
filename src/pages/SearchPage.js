import React from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {searchMovie} from '../actions/moviesAction';
import {Movies} from '../styles';
import ScrollTop from '../components/ScrollTop';
import Movie from '../components/Movie';


const SearchPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const {searched} = useSelector(state => state.movies);
    if(searched.length === 0){
        dispatch(searchMovie(history.location.pathname.split("/")[2]));
    }
    
    const getSearchNameHandler = () => {
        const searchName = history.location.pathname.split("/")[2];
        return searchName
    }
    return(
        <div>
            <h2>Results for {getSearchNameHandler()}</h2>
            {searched.length && (
                <Movies>
                    {searched.slice(0,10).map((movie) => 
                        <Movie title={movie.title ? movie.title : movie.name} poster_path={movie.poster_path} rating={movie.vote_average} key={movie.id} id={movie.id} />
                    )}
                </Movies>
            )}
            <ScrollTop />
        </div>
    )
}

export default SearchPage;