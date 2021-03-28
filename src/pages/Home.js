import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { loadMovies } from '../actions/moviesAction';
import Movie from '../components/Movie';

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadMovies("all", "day"))
    }, [dispatch])
    const {trending} = useSelector(state => state.movies);
    return(
        <div>
            <h2>Hello</h2>
            {trending.map(movie => 
                <Movie title={movie.title} poster_path={movie.poster_path} rating={movie.vote_average} key={movie.id} />
            )}
        </div>
    )
}

export default Home