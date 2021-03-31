import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Movies, MovieHeader, ButtonGroup, Button} from '../styles';
import Movie from '../components/Movie';
import {loadMovies} from '../actions/moviesAction';
import ScrollTop from '../components/ScrollTop';

const MoviesPage = () => {
    const history = useHistory();
    const pathName = history.location.pathname.split("/")[1];
    const [trendPeriod, setTrendPeriod] = useState("day");
    const [sortType, setSortType] = useState("popularity.desc");
    const dispatch = useDispatch();
    const [page, setPage] = useState(1)
    useEffect(() => {
        dispatch(loadMovies("all", trendPeriod, sortType, page));
    }, [dispatch, trendPeriod, sortType, page]);
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

    const previousPageHandler = () => {
        if (page > 1){setPage(page - 1)}
    }

    const downloadMoreHandler = () => {
        if(page < 5){setPage(page + 1)}
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
            <ButtonGroup>
                <Button onClick={previousPageHandler} className={page < 2 ? "disabled" : ""}>Previous</Button>
                <Button onClick={downloadMoreHandler} className={page > 4 ? "disabled" : ""}>More</Button>
            </ButtonGroup>
        {trending.length && (
            <Movies>
                {arrHandler().map((movie) => 
                    <Movie title={movie.title ? movie.title : movie.name} poster_path={movie.poster_path} rating={movie.vote_average} key={movie.id} id={movie.id} />
                )}
            </Movies>
        )}
            <ButtonGroup>
                <Button onClick={previousPageHandler} className={page < 2 ? "disabled" : ""}>Previous</Button>
                <Button onClick={downloadMoreHandler} className={page > 4 ? "disabled" : ""}>More</Button>
            </ButtonGroup>
        <ScrollTop />
    </div>
    )
}


export default MoviesPage;