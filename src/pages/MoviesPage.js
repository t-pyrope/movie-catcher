import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Movies} from '../styles';
import Movie from '../components/Movie';
import {loadMovies} from '../actions/moviesAction';
import styled from 'styled-components';

const MoviesPage = () => {
    const history = useHistory();
    const [trendPeriod, setTrendPeriod] = useState("day");
    const [sortType, setSortType] = useState("popularity.desc");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadMovies("all", trendPeriod, sortType));
        console.log("Hello")
    }, [dispatch, trendPeriod, sortType]);
    const {trending, kids} = useSelector(state => state.movies);

    const titleHandler = () => {
        const pageName = history.location.pathname.split("/")[1];
        if (pageName === "trending"){
            return "Trending"
        };
        if (pageName === "kids"){
            return "Popular Kids Movies"
        }
    }


    const arrHandler = () => {
        const pageName = history.location.pathname.split("/")[1];
        if(pageName === "trending"){
            return trending
        };
        if (pageName === "kids"){
            return kids;
        } 
    }

    const setSortTypeHandler = (e) => {
        setSortType(e.target.value);
        console.log(sortType);
    }

    return(
        <div>
            <MovieHeader>
                <h2>{titleHandler()}</h2>
                {history.location.pathname.split("/")[1] !== "trending" &&
                    <select onChange={setSortTypeHandler} value={sortType}>
                        <option value="popularity.desc">Most Popular</option>
                        <option value="vote_average.desc">High Rated</option>
                        <option value="release_date.desc">Newest</option>
                    </select>
                }
            </MovieHeader>
        {trending.length && (
            <Movies>
                {arrHandler().slice(0,10).map((movie) => 
                    <Movie title={movie.title ? movie.title : movie.name} poster_path={movie.poster_path} rating={movie.vote_average} key={movie.id} id={movie.id} />
                )}
            </Movies>
        )}
    </div>
    )
}

const MovieHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    align-items: flex-start;
`

export default MoviesPage;