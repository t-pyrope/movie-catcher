import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { loadMovies } from '../actions/moviesAction';
import ScrollTop from '../components/ScrollTop';
import SortMain from '../components/Sort/SortMain';
import Carousel from '../components/Carousel/Carousel';
import PageHeader from '../components/PageHeader/PageHeader';
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
    <div>
      <article>
        <motion.div
          variants={titleAnim}
          initial="hidden"
          animate="show"
        >
          <PageHeader
            title="Trending"
            additionalComponent={(
              <SortMain
                val={trendPeriod}
                callback={setTrendPeriodHandler}
              />
)}
          />
        </motion.div>
        <Carousel movies={trending} title="trending" />
      </article>
      <article>
        <PageHeader title="Popular for kids" />
        <Carousel movies={kids} title="kids" />
      </article>
      <article>
        <PageHeader title="R-rated popular movies" />
        <Carousel movies={adults} title="adults" />
      </article>
      <ScrollTop />
    </div>
  );
};

export default Home;
