import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Movies, MovieHeader, Loading} from '../styles';
import Movie from '../components/Movie';
import {loadGenreMovies} from '../actions/moviesAction';
import ScrollTop from '../components/ScrollTop';
import loadGenres from '../actions/genresAction';
import PrevNextBtnGroup from '../components/PrevNextBtnGroup';
import SortComponent from '../components/Sort';

const GenresPage = () => {
    const history = useHistory();
    const pathName = history.location.pathname.split("/")[2];
    const [sortType, setSortType] = useState("popularity.desc");
    const dispatch = useDispatch();
    const [page, setPage] = useState(1)
    useEffect(() => {
        dispatch(loadGenreMovies(pathName, page, sortType))
        dispatch(loadGenres);
    }, [dispatch, pathName, page, sortType]);
    const {genreMovies, genrePages} = useSelector(state => state.movies);
    const {genres} = useSelector(state => state.genres);
    const titleHandler = () => {
        const title = genres.filter(genre => genre.id === parseInt(pathName))[0].name;
        return `Genre: ${title}`;
    }

    return(
        <>
        {genreMovies.length ? (
            <div>
            <MovieHeader>
                <h2>{titleHandler()}</h2>
                <SortComponent sortType={sortType} setSortType={setSortType} />
            </MovieHeader>
            <PrevNextBtnGroup maxPages={genrePages} setPage={setPage} page={page} />
            <Movies>
                {genreMovies.map((movie) => 
                    <Movie title={movie.title ? movie.title : movie.name} poster_path={movie.poster_path} rating={movie.vote_average} key={movie.id} id={movie.id} />
                )}
            </Movies>
            <PrevNextBtnGroup maxPages={genrePages} setPage={setPage} page={page} />
            <ScrollTop />
            </div>
        ) : <Loading />}
    </>
    )
};

export default GenresPage;