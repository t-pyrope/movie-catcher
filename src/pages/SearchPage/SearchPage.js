import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import fetchSearch from '../../actions/searchAction';
import Loading from '../../components/ui/Loading/Loading';
import ButtonLikeLink from '../../components/ui/buttons/ButtonLikeLink';
import ScrollTop from '../../components/ScrollTop';
import Movie from '../../components/Movie/Movie';
import Actor from '../../components/Actor/Actor';
import PrevNextBtnGroup from '../../components/PrevNextBtnGroup/PrevNextBtnGroup';
import './searchPage.scss';
import '../../components/Container/container.scss';

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
    <main role="main" className="searchPage">
      <ButtonLikeLink callback={() => history.goBack()} text="Back" />
      <header className="searchPage__header">
        <h2 className="searchPage__title">
          Results for
          {' '}
          {getSearchNameHandler()}
        </h2>
        <motion.p
          className="searchPage__option"
          onClick={toggleSearchHandler}
          initial={{ backgroundColor: '#353535' }}
          animate={{ backgroundColor: toggle ? '#353535' : '#292929' }}
          transition={{ duration: 0.4 }}
        >
          in movies
        </motion.p>
        <motion.p
          className="searchPage__option"
          onClick={toggleSearchHandler}
          initial={{ backgroundColor: '#353535' }}
          animate={{ backgroundColor: toggle ? '#292929' : '#353535' }}
          transition={{ duration: 0.4 }}
        >
          in people
        </motion.p>
      </header>
      <PrevNextBtnGroup maxPages={5} setPage={setPage} page={page} />

      {!toggle && (
        <div>
          {searchedMovie.length ? (
            <div className="container_movies">
              {searchedMovie.map((movie) => (
                <Movie
                  title={movie.title ? movie.title : movie.name}
                  posterPath={movie.poster_path}
                  rating={movie.vote_average}
                  key={movie.id}
                  id={movie.id}
                />
              ))}
            </div>
          ) : <Loading />}
        </div>
      )}
      {toggle && (
        <div>
          {searchedPerson.length ? (
            <div className="container_movies">
              {searchedPerson.map((person) => (
                <Actor
                  actorName={person.name}
                  posterPath={person.profile_path}
                  key={person.id}
                  id={person.id}
                />
              ))}
            </div>
          ) : <Loading />}
        </div>
      )}
      <PrevNextBtnGroup maxPages={5} setPage={setPage} page={page} />
      <ScrollTop />
    </main>
  );
};

export default SearchPage;
