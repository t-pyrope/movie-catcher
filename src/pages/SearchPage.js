import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import fetchSearch from '../actions/searchAction';
import {
  Movies, MovieHeader, ButtonLikeLink, Loading,
} from '../styles';
import ScrollTop from '../components/ScrollTop';
import Movie from '../components/Movie';
import Actor from '../components/Actor';
import PrevNextBtnGroup from '../components/PrevNextBtnGroup';

const SearchPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    dispatch(fetchSearch(history.location.pathname.split('/')[2], page));
  }, [dispatch, history, page]);
  const { searchedMovie, searchedPerson } = useSelector((state) => state.searched);
  const getSearchNameHandler = () => {
    const searchName = history.location.pathname.split('/')[2];
    return searchName;
  };

  const toggleSearchHandler = () => {
    setPage(1);
    setToggle(!toggle);
  };
  return (
    <div>
      <ButtonLikeLink onClick={() => history.goBack()}>Back</ButtonLikeLink>
      <SearchMovieHeader>
        <h2>
          Results for
          {' '}
          {getSearchNameHandler()}
        </h2>
        <motion.p onClick={toggleSearchHandler} initial={{ backgroundColor: '#353535' }} animate={{ backgroundColor: toggle ? '#353535' : '#252525' }} transition={{ duration: 0.4 }}>in movies</motion.p>
        <motion.p onClick={toggleSearchHandler} initial={{ backgroundColor: '#353535' }} animate={{ backgroundColor: toggle ? '#252525' : '#353535' }} transition={{ duration: 0.4 }}>in people</motion.p>
      </SearchMovieHeader>
      <PrevNextBtnGroup maxPages={5} setPage={setPage} page={page} />

      {!toggle && (
        <div>
          {searchedMovie.length ? (
            <Movies>
              {searchedMovie.map((movie) => (
                <Movie
                  title={movie.title ? movie.title : movie.name}
                  posterPath={movie.poster_path}
                  rating={movie.vote_average}
                  key={movie.id}
                  id={movie.id}
                />
              ))}
            </Movies>
          ) : <Loading />}
        </div>
      )}
      {toggle && (
        <div>
          {searchedPerson.length ? (
            <Movies>
              {searchedPerson.map((person) => (
                <Actor
                  actorName={person.name}
                  posterPath={person.profile_path}
                  key={person.id}
                  id={person.id}
                />
              ))}
            </Movies>
          ) : <Loading />}
        </div>
      )}
      <PrevNextBtnGroup maxPages={5} setPage={setPage} page={page} />
      <ScrollTop />
    </div>
  );
};

const SearchMovieHeader = styled(MovieHeader)`
    justify-content: flex-start;
    align-items: flex-start;

    p {
        padding: 0.5rem 2rem;
        margin-left: 1rem;
        border-radius: 0.5rem;
        cursor: pointer;
    }
`;

export default SearchPage;
