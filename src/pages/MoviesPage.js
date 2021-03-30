import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Movies, MovieHeader} from '../styles';
import Movie from '../components/Movie';
import {loadMovies} from '../actions/moviesAction';
import ScrollTop from '../components/ScrollTop';

const MoviesPage = () => {
    const history = useHistory();
    const pathName = history.location.pathname.split("/")[1];
    const [trendPeriod, setTrendPeriod] = useState("day");
    const [sortType, setSortType] = useState("popularity.desc");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadMovies("all", trendPeriod, sortType));
    }, [dispatch, trendPeriod, sortType]);
    const {trending, kids, adults} = useSelector(state => state.movies);
    const titleHandler = () => {
        if (pathName === "trending"){
            return "Trending"
        };
        if (pathName === "kids"){
            return "Popular Kids Movies"
        };
        if (pathName === "adults"){
            return "R-rated Popular Movies"
        }
    }


    const arrHandler = () => {
        if(pathName === "trending"){
            return trending
        };
        if (pathName === "kids"){
            return kids;
        }
        if(pathName === "adults"){
            return adults;
        }
    }

    const setSortTypeHandler = (e) => {
        setSortType(e.target.value);
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
        <ScrollTop />
    </div>
    )
}


export default MoviesPage;