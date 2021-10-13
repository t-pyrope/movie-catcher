import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import useQuery from '../../helpers/useQuery';
import fetchSearch from '../../actions/searchAction';
import Loading from '../../components/ui/Loading/Loading';
import ButtonLikeLink from '../../components/ui/buttons/ButtonLikeLink';
import ScrollTop from '../../components/ScrollTop';
import Movie from '../../components/Movie/Movie';
import Actor from '../../components/Actor/Actor';
import Pagination from '../../components/Pagination/Pagination';
import './searchPage.scss';
import '../../components/Container/container.scss';

const SearchPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const query = useQuery();

  const [page, setPage] = useState(1);
  const [toggle, setToggle] = useState(false);

  const {
    searchedMovie, searchedPerson,
    movieError, personError, searched,
    movieTotalPages, personTotalPages,
  } = useSelector((state) => state.searched);

  const searchedName = query.get('search');

  useEffect(() => {
    history.push(`/search?search=${searchedName}&page=${page}`);
    dispatch(fetchSearch(searchedName, page));
  }, [page, searchedName, history, dispatch]);

  const toggleSearchHandler = () => {
    setPage(1);
    setToggle(!toggle);
  };

  return (
    <main role="main" className="searchPage">
      <ButtonLikeLink callback={() => history.goBack()} text="Back" />
      <header className="searchPage__header">
        <h2 className="searchPage__title">
          Results for:
          {' '}
          {searched}
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

      {!toggle && (
        <div>
          {searchedMovie.length ? (
            <>
              <Pagination
                totalPages={movieTotalPages}
                currentPage={page}
                setCurrentPage={setPage}
              />
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
              <Pagination
                totalPages={movieTotalPages}
                currentPage={page}
                setCurrentPage={setPage}
              />
            </>
          ) : movieError || <Loading />}
        </div>
      )}
      {toggle && (
        <div>
          {searchedPerson.length ? (
            <>
              <Pagination
                totalPages={personTotalPages}
                currentPage={page}
                setCurrentPage={setPage}
              />
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
              <Pagination
                totalPages={personTotalPages}
                currentPage={page}
                setCurrentPage={setPage}
              />
            </>
          ) : personError || <Loading />}
        </div>
      )}
      <ScrollTop />
    </main>
  );
};

export default SearchPage;
