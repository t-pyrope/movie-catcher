import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Movie from '../components/Movie/Movie';
import {
  loadAdultsMovies,
  loadKidsMovies,
  loadTrendingMovies,
} from '../actions/moviesAction';
import ScrollTop from '../components/ScrollTop';
import { titleAnim } from '../animation';
import SortComponent from '../components/Sort/Sort';
import SortMain from '../components/Sort/SortMain';
import PageHeader from '../components/PageHeader/PageHeader';
import '../components/Container/container.scss';
import Pagination from '../components/Pagination/Pagination';

const MoviesPage = () => {
  const history = useHistory();
  const pathName = history.location.pathname.split('/')[2];

  const [trendPeriod, setTrendPeriod] = useState('day');
  const [sortType, setSortType] = useState('popularity.desc');
  const [title, setTitle] = useState('');
  const [arr, setArr] = useState([]);
  const [total, setTotal] = useState(0);

  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (pathName === 'trending') {
      dispatch(loadTrendingMovies('movie', trendPeriod, sortType, page));
    } else if (pathName === 'kids') {
      dispatch(loadKidsMovies(sortType, page));
    } else if (pathName === 'adults') {
      dispatch(loadAdultsMovies(sortType, page));
    }
  }, [dispatch, trendPeriod, sortType, page, pathName]);

  const {
    trending,
    kids,
    adults,
    trendingTotal,
    kidsTotal,
    adultsTotal,
  } = useSelector((state) => state.movies);

  useEffect(() => {
    if (pathName === 'trending') {
      setTitle('Trending');
      setArr([...trending]);
      setTotal(trendingTotal);
    } else if (pathName === 'kids') {
      setTitle('Popular Kids Movies');
      setArr([...kids]);
      setTotal(kidsTotal);
    } else if (pathName === 'adults') {
      setTitle('R-rated Popular Movies');
      setArr([...adults]);
      setTotal(adultsTotal);
    } else {
      history.push('/404');
    }
  }, [
    adults,
    adultsTotal,
    kids,
    kidsTotal,
    trending,
    trendingTotal,
    pathName,
    history,
  ]);

  const setTrendPeriodHandler = (e) => {
    setTrendPeriod(e.target.value);
  };

  return (
    <div>
      <motion.div variants={titleAnim} initial="hidden" animate="show">
        {title && (
          <PageHeader
            title={title}
            additionalComponent={
              pathName === 'trending' ? (
                <SortMain val={trendPeriod} callback={setTrendPeriodHandler} />
              ) : (
                <SortComponent sortType={sortType} setSortType={setSortType} />
              )
            }
          />
        )}
      </motion.div>
      {total ? (
        <Pagination
          totalPages={total}
          currentPage={page}
          setCurrentPage={setPage}
        />
      ) : (
        ''
      )}
      {arr.length ? (
        <div className="container_movies">
          {arr.map((movie) => (
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
      ) : (
        ''
      )}
      {total ? (
        <Pagination
          totalPages={total}
          currentPage={page}
          setCurrentPage={setPage}
        />
      ) : (
        ''
      )}
      <ScrollTop />
    </div>
  );
};

export default MoviesPage;
