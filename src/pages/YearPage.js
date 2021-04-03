import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Movies, MovieHeader, Loading} from '../styles';
import Movie from '../components/Movie';
import {fetchYearMovies} from '../actions/yearAction';
import ScrollTop from '../components/ScrollTop';
import SortComponent from '../components/Sort';

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

    return(
        <>
            {yearMovies.length ? (
                <div>
                <MovieHeader>
                    <h2>{titleHandler()}</h2>
                    <SortComponent sortType={sortType} setSortType={setSortType} />
                </MovieHeader>
                <Movies>
                    {yearMovies.map((movie) => 
                        <Movie title={movie.title ? movie.title : movie.name} poster_path={movie.poster_path} rating={movie.vote_average} key={movie.id} id={movie.id} />
                    )}
                </Movies>
                <ScrollTop />
                </div>
            ) : <Loading />}
        </>
    )
}

export default YearPage;