import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { loadMovies } from '../actions/moviesAction';
import ScrollTop from '../components/ScrollTop';
import Carousel from '../components/Carousel';
import { titleAnim } from '../animation';

const Home = () => {
  const dispatch = useDispatch();
  const [trendPeriod, setTrendPeriod] = useState('day');
  useEffect(() => {
    dispatch(loadMovies('movie', trendPeriod, 'popularity.desc', '1'));
  }, [dispatch, trendPeriod]);
  const { trending, kids, adults } = useSelector((state) => state.movies);

  const setTrendPeriodHandler = (e) => {
    setTrendPeriod(e.target.value);
  };

  return (
    <MovieList>
      <motion.div className="title" variants={titleAnim} initial="hidden" animate="show">
        <h2>Trending</h2>
        <select value={trendPeriod} onChange={setTrendPeriodHandler}>
          <option value="day">This day</option>
          <option value="week">This week</option>
        </select>
      </motion.div>
      <Carousel movies={trending} title="trending" />
      <div className="title">
        <h2>Popular for kids</h2>
      </div>
      <Carousel movies={kids} title="kids" />
      <div className="title">
        <h2>R-rated popular movies</h2>
      </div>
      <Carousel movies={adults} title="adults" />
      <ScrollTop />
    </MovieList>
  );
};

const MovieList = styled(motion.div)`
    position: relative;
    .title {
        padding: 1.5rem 0rem;
        display: flex;
        justify-content: flex-start;

        h2 {
            margin-right: 1rem;
        }
    }
`;

export default Home;
