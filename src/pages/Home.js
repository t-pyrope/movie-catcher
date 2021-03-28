import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { loadMovies } from '../actions/moviesAction';
import styled from 'styled-components';
import Movie from '../components/Movie';

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadMovies("all", "day"))
    }, [dispatch])
    const {trending} = useSelector(state => state.movies);
    return(
        <div>
            <MovieList>
            <h2>Trending</h2>
                <Movies>
                {trending.slice(0,8).map(movie => 
                    <Movie title={movie.title ? movie.title : movie.name} poster_path={movie.poster_path} rating={movie.vote_average} key={movie.id} id={movie.id} />
                )}
                </Movies>
            </MovieList>
        </div>
    )
}

const MovieList = styled.div`
    padding: 0rem 3rem;
    h2 {
        padding: 3rem 0rem;
    }
`

const Movies = styled.div`
    min-height: 60vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 3rem;
`

export default Home