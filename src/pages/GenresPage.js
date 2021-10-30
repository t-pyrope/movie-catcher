/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useQuery from '../helpers/useQuery';
import { loadGenreMovies } from '../actions/moviesAction';

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
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    genreMovies, totalPages, isLoading, sortType,
  } = useSelector((state) => state.movies);
  const { genres } = useSelector((state) => state.genres);

  const query = useQuery();
  const pathName = query.get('genre');
  const page = +query.get('page');
  const sortName = query.get('sort');

  useEffect(() => {
    if (genres.length) {
      const { id } = genres.filter((genre) => genre.name.toLowerCase() === pathName)[0];
      if (sortName === sortType) {
        dispatch(loadGenreMovies(id, page, sortType));
        history.push(`/genres?genre=${pathName}&sort=${sortType}&page=${page}`);
      } else {
        dispatch(loadGenreMovies(id, page, sortName));
        history.push(`/genres?genre=${pathName}&sort=${sortName}&page=${page}`);
      }
    }
  }, [page, sortName, genres.length, pathName]);

  const setSorting = (type) => {
    history.push(`/genres?genre=${pathName}&sort=${type}&page=1`);
  };

  const setPage = (p) => {
    history.push(`/genres?genre=${pathName}&sort=${sortType}&page=${p}`);
  };

  return (
    <main>
      {genres.length ? (
        <PageHeader
          title={pathName
            ? `Genre: ${pathName[0].toUpperCase()}${pathName.slice(1)}`
            : ''}
          additionalComponent={(
            <SortComponent
              sortType={sortType}
              setSortType={setSorting}
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
              rating={movie.vote_count === 0
                ? 'no rating'
                : movie.vote_average}
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
