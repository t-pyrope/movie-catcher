import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Movies, MovieHeader} from '../styles';
import Movie from '../components/Movie';
import {loadGenreMovies} from '../actions/moviesAction';
import ScrollTop from '../components/ScrollTop';
import loadGenres from '../actions/genresAction';

const GenresPage = () => {
    const history = useHistory();
    const pathName = history.location.pathname.split("/")[2];
    const [sortType, setSortType] = useState("popularity.desc");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGenreMovies(pathName))
        dispatch(loadGenres);
    }, [dispatch, pathName]);
    const {genreMovies} = useSelector(state => state.movies);
    const {genres} = useSelector(state => state.genres);
    const titleHandler = () => {
        const title = genres.filter(genre => genre.id === parseInt(pathName))[0].name;
        return `Genre: ${title}`;
    }


    const setSortTypeHandler = (e) => {
        setSortType(e.target.value);
    }

    return(
        <>
        {genreMovies.length && (
            <div>
            <MovieHeader>
                <h2>{titleHandler()}</h2>
                <select onChange={setSortTypeHandler} value={sortType}>
                    <option value="popularity.desc">Most Popular</option>
                    <option value="vote_average.desc">High Rated</option>
                    <option value="release_date.desc">Newest</option>
                </select>
            </MovieHeader>
            <Movies>
                {genreMovies.slice(0,10).map((movie) => 
                    <Movie title={movie.title ? movie.title : movie.name} poster_path={movie.poster_path} rating={movie.vote_average} key={movie.id} id={movie.id} />
                )}
            </Movies>
            <ScrollTop />
            </div>
        )}
    </>
    )
};

export default GenresPage;