import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Movies, MovieHeader} from '../styles';
import Movie from '../components/Movie';
import {loadMovies} from '../actions/moviesAction';
import ScrollTop from '../components/ScrollTop';
import {motion} from 'framer-motion';
import {titleAnim} from '../animation';
import PrevNextBtnGroup from '../components/PrevNextBtnGroup';
import SortComponent from '../components/Sort';


const MoviesPage = () => {
    const history = useHistory();
    const pathName = history.location.pathname.split("/")[1];
    const [trendPeriod, setTrendPeriod] = useState("day");
    const [sortType, setSortType] = useState("popularity.desc");
    const dispatch = useDispatch();
    const [page, setPage] = useState(1)

    useEffect(() => {
        dispatch(loadMovies("movie", trendPeriod, sortType, page));
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

    const setTrendPeriodHandler = (e) => {
        setTrendPeriod(e.target.value);
    }

    return(
        <div>
            <MovieHeader>
                <motion.h2 variants={titleAnim} initial="hidden" animate="show">{titleHandler()}</motion.h2>
                {pathName === "trending" && (
                <select value={trendPeriod} onChange={setTrendPeriodHandler}>
                    <option value="day">Trending this day</option>
                    <option value="week">Trending this week</option>
                </select>
                )}
                {pathName !== "trending" &&
                    <SortComponent sortType={sortType} setSortType={setSortType} />
                }
            </MovieHeader>
            <PrevNextBtnGroup maxPages={5} setPage={setPage} page={page} />
                {trending.length && (
                    <Movies>
                        {arrHandler().map((movie) => 
                            <Movie title={movie.title ? movie.title : movie.name} poster_path={movie.poster_path} rating={movie.vote_average} key={movie.id} id={movie.id} />
                        )}
                    </Movies>
                )}
            <PrevNextBtnGroup maxPages={5} setPage={setPage} page={page} />
            <ScrollTop />
        </div>
    )
}


export default MoviesPage;