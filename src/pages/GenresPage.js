import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { loadGenreMovies } from '../actions/moviesAction';
import loadGenres from '../actions/genresAction';

import Movie from '../components/Movie/Movie';
import ScrollTop from '../components/ScrollTop';
import SortComponent from '../components/Sort/Sort';
import PageHeader from '../components/PageHeader/PageHeader';
import Pagination from '../components/Pagination/Pagination';

import SkeletonPagination from '../components/skeletons/SkeletonPagination';
import SkeletonMoviesContainer from '../components/skeletons/SkeletonMoviesContainer';
import SkeletonPageHeader from '../components/skeletons/SkeletonPageHeader';

import '../components/Container/container.scss';

const GenresPage = () => {
  const history = useHistory();
  const pathName = history.location.pathname.split('/')[2];
  const [sortType, setSortType] = useState('popularity.desc');
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const {
    genreMovies, totalPages, isLoading,
  } = useSelector((state) => state.movies);
  const { genres } = useSelector((state) => state.genres);

  useEffect(() => {
    dispatch(loadGenres);
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadGenreMovies(pathName, page, sortType));
  }, [dispatch, pathName, page, sortType]);

  const titleHandler = () => {
    const title = genres.filter((genre) => genre.id === Number(pathName))[0].name;
    return `Genre: ${title}`;
  };

  return (
    <main>
      {genres.length ? (
        <PageHeader
          title={titleHandler()}
          additionalComponent={(
            <SortComponent
              sortType={sortType}
              setSortType={setSortType}
            />
          )}
        />
      ) : <SkeletonPageHeader />}
      { !isLoading
        ? (
          <Pagination
            totalPages={totalPages}
            currentPage={page}
            setCurrentPage={setPage}
          />
        )
        : <SkeletonPagination />}
      <div className="container_movies">
        {!isLoading
          ? genreMovies.map((movie) => (
            <Movie
              title={movie.title ? movie.title : movie.name}
              posterPath={movie.poster_path}
              rating={movie.vote_average}
              key={movie.id}
              id={movie.id}
            />
          ))
          : <SkeletonMoviesContainer />}
      </div>
      { !isLoading
        ? (
          <Pagination
            totalPages={totalPages}
            currentPage={page}
            setCurrentPage={setPage}
          />
        )
        : <SkeletonPagination />}
      <ScrollTop />
    </main>
  );
};

export default GenresPage;
