import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/ui/Loading/Loading';
import '../components/Container/container.scss';
import Movie from '../components/Movie/Movie';
import { loadGenreMovies } from '../actions/moviesAction';
import ScrollTop from '../components/ScrollTop';
import loadGenres from '../actions/genresAction';
import PrevNextBtnGroup from '../components/PrevNextBtnGroup/PrevNextBtnGroup';
import SortComponent from '../components/Sort/Sort';
import PageHeader from '../components/PageHeader/PageHeader';

const GenresPage = () => {
  const history = useHistory();
  const pathName = history.location.pathname.split('/')[2];
  const [sortType, setSortType] = useState('popularity.desc');
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(loadGenreMovies(pathName, page, sortType));
    dispatch(loadGenres);
  }, [dispatch, pathName, page, sortType]);
  const { genreMovies, genrePages } = useSelector((state) => state.movies);
  const { genres } = useSelector((state) => state.genres);
  const titleHandler = () => {
    const title = genres.filter((genre) => genre.id === Number(pathName))[0].name;
    return `Genre: ${title}`;
  };

  return (
    <>
      {genreMovies.length ? (
        <main>
          <PageHeader
            title={titleHandler()}
            additionalComponent={(
              <SortComponent
                sortType={sortType}
                setSortType={setSortType}
              />
            )}
          />
          <PrevNextBtnGroup maxPages={genrePages} setPage={setPage} page={page} />
          <div className="container_movies">
            {genreMovies.map((movie) => (
              <Movie
                title={movie.title ? movie.title : movie.name}
                posterPath={movie.poster_path}
                rating={movie.vote_average}
                key={movie.id}
                id={movie.id}
              />
            ))}
          </div>
          <PrevNextBtnGroup maxPages={genrePages} setPage={setPage} page={page} />
          <ScrollTop />
        </main>
      ) : <Loading />}
    </>
  );
};

export default GenresPage;
