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
import Pagination from '../components/Pagination/Pagination';

const YearPage = () => {
  const history = useHistory();
  const pathName = history.location.pathname.split('/')[2];
  const [sortType, setSortType] = useState('popularity.desc');
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchYearMovies(pathName, page, sortType));
  }, [dispatch, pathName, sortType, page]);

  const { yearMovies, totalPages } = useSelector((state) => state.year);

  return (
    <>
      {yearMovies.length ? (
        <main role="main">
          <PageHeader
            title={+pathName
              ? `Popular in: ${pathName}`
              : 'Popular in 2021'}
            additionalComponent={(
              <SortComponent
                sortType={sortType}
                setSortType={setSortType}
              />
              )}
          />
          {totalPages ? (
            <Pagination
              totalPages={totalPages}
              currentPage={page}
              setCurrentPage={setPage}
            />
          ) : ''}
          <div className="container_movies">
            {yearMovies.map((movie) => (
              <Movie
                title={movie.title ? movie.title : movie.name}
                posterPath={movie.poster_path}
                rating={movie.vote_count === 0
                  ? 'not rated yet'
                  : movie.vote_average}
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
