import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Movies, MovieHeader} from '../styles';
import Movie from '../components/Movie';
import {fetchYearMovies} from '../actions/yearAction';
import ScrollTop from '../components/ScrollTop';

const YearPage = () => {
    const history = useHistory();
    const pathName = history.location.pathname.split("/")[2];
    const [sortType, setSortType] = useState("popularity.desc");
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchYearMovies(pathName, "1", sortType))
    }, [dispatch, pathName, sortType]);

    const {yearMovies} = useSelector(state => state.year);
    const titleHandler = () => {
        return `Popular in: ${pathName}`;
    }

    const setSortTypeHandler = (e) => {
        setSortType(e.target.value);
    }

    return(
        <>
        {yearMovies.length && (
            <div>
            <MovieHeader>
                <h2>{titleHandler()}</h2>
                <select onChange={setSortTypeHandler} value={sortType}>
                    <option value="popularity.desc">Most Popular</option>
                    <option value="vote_average.desc">High Rated</option>
                    <option value="release_date.desc">Latest</option>
                </select>
            </MovieHeader>
            <Movies>
                {yearMovies.map((movie) => 
                    <Movie title={movie.title ? movie.title : movie.name} poster_path={movie.poster_path} rating={movie.vote_average} key={movie.id} id={movie.id} />
                )}
            </Movies>
            <ScrollTop />
            </div>
        )}
    </>
    )
}

export default YearPage;