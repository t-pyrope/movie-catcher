import React, { useEffect } from 'react';
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
import useQuery from '../helpers/useQuery';

const YearPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const query = useQuery();
  const year = query.get('year');
  const page = +query.get('page');
  const sortType = query.get('sort');

  useEffect(() => {
    if (!year) {
      history.push('year?year=2021&sort=popularity.desc&page=1');
    } else if (!page) {
      history.push(`year?year=${year}&sort=popularity.desc&page=1`);
    } else if (!sortType) {
      history.push(`year?year=${year}&sort=popularity.desc&page=1`);
    }
    if (year && page && sortType) {
      dispatch(fetchYearMovies(year, page, sortType));
    }
  }, [dispatch, year, sortType, page, history]);

  const { yearMovies, totalPages } = useSelector((state) => state.year);

  const setSortType = (type) => {
    history.push(`year?year=${year}&sort=${type}&page=1`);
  };

  const setPage = (p) => {
    history.push(`year?year=${year}&sort=${sortType}&page=${p}`);
  };

  return (
    <>
      {yearMovies.length ? (
        <main role="main">
          <PageHeader
            title={+year ? `${year}` : '2021'}
            additionalComponent={
              <SortComponent sortType={sortType} setSortType={setSortType} />
            }
          />
          {totalPages && (
            <Pagination
              totalPages={totalPages}
              currentPage={page}
              setCurrentPage={setPage}
            />
          )}
          <div className="container_movies">
            {yearMovies.map((movie) => (
              <Movie
                title={movie.title ? movie.title : movie.name}
                posterPath={movie.poster_path}
                rating={
                  movie.vote_count === 0 ? 'not rated yet' : movie.vote_average
                }
                key={movie.id}
                id={movie.id}
              />
            ))}
          </div>
          <ScrollTop />
        </main>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default YearPage;
