import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch, useHistory } from 'react-router-dom';
import useQuery from '../helpers/useQuery';
import loadPeople from '../actions/peopleAction';
import Actor from '../components/Actor/Actor';
import PageHeader from '../components/PageHeader/PageHeader';
import ScrollTop from '../components/ScrollTop';
import Pagination from '../components/Pagination/Pagination';

import '../components/Container/container.scss';
import SkeletonPagination from '../components/skeletons/SkeletonPagination';
import SkeletonMoviesContainer from '../components/skeletons/SkeletonMoviesContainer';

const PeoplePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { url } = useRouteMatch();
  const [page, setPage] = useState(1);
  const query = useQuery();
  const queryPage = +query.get('page');

  useEffect(() => {
    if (queryPage) {
      setPage(queryPage);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(loadPeople(page));
    history.push(`${url}?page=${page}`);
  }, [page, history, url, dispatch]);

  const { people, peoplePages, isLoading } = useSelector((state) => state.people);

  return (
    <section aria-label="famous actors" className="movies">
      <PageHeader title="People" />
      {peoplePages ? (
        <Pagination
          totalPages={peoplePages}
          currentPage={page}
          setCurrentPage={setPage}
        />
      ) : <SkeletonPagination />}
      <div className="container_movies">
        {!isLoading
          ? people.map((famous) => (
            <Actor
              actorName={famous.name}
              posterPath={famous.profile_path}
              key={famous.id}
              id={famous.id}
            />
          ))
          : <SkeletonMoviesContainer />}
      </div>
      {peoplePages ? (
        <Pagination
          totalPages={peoplePages}
          currentPage={page}
          setCurrentPage={setPage}
        />
      ) : <SkeletonPagination />}
      <ScrollTop />
    </section>
  );
};

export default PeoplePage;
