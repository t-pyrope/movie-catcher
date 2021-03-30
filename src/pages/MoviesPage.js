import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Movies} from '../styles';
import Movie from '../components/Movie';
import {loadMovies} from '../actions/moviesAction';

const MoviesPage = () => {
    const history = useHistory();
    const [trendPeriod, setTrendPeriod] = useState("day");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadMovies("all", trendPeriod))
    }, [dispatch, trendPeriod]);
    const {trending, kids} = useSelector(state => state.movies);
    // switch(history.location.pathname.split("/")[1]){
    //     case "trending":
            // setArr(trending);
            // setTitle("Trending");
    //         break;
    //     default:
    //         return null;
    // }
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

    return(
        <div>
        <h2>{titleHandler()}</h2>
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

export default MoviesPage;