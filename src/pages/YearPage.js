import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PageHeader from '../components/PageHeader/PageHeader';
import Movie from '../components/Movie/Movie';
import fetchYearMovies from '../actions/yearAction';
import ScrollTop from '../components/ScrollTop';
import SortComponent from '../components/Sort/Sort';
import '../components/Container/container.scss';
import Loading from '../components/ui/Loading/Loading';

const YearPage = () => {
  const history = useHistory();
  const pathName = history.location.pathname.split('/')[2];
  const [sortType, setSortType] = useState('popularity.desc');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchYearMovies(pathName, '1', sortType));
  }, [dispatch, pathName, sortType]);

  const { yearMovies } = useSelector((state) => state.year);
  const titleHandler = () => {
    return `Popular in: ${pathName}`;
  };

  return (
    <>
      {yearMovies.length ? (
        <main role="main">
          <PageHeader
            title={titleHandler()}
            additionalComponent={(
              <SortComponent
                sortType={sortType}
                setSortType={setSortType}
              />
              )}
          />
          <div className="container_movies">
            {yearMovies.map((movie) => (
              <Movie
                title={movie.title ? movie.title : movie.name}
                posterPath={movie.poster_path}
                rating={movie.vote_average}
                key={movie.id}
                id={movie.id}
              />
            ))}
          </div>
          <ScrollTop />
        </main>
      ) : <Loading />}
    </>
  );
};

export default YearPage;
