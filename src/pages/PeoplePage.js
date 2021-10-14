import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch, useHistory } from 'react-router-dom';
import useQuery from '../helpers/useQuery';
import loadPeople from '../actions/peopleAction';
import Actor from '../components/Actor/Actor';
import Loading from '../components/ui/Loading/Loading';
import PageHeader from '../components/PageHeader/PageHeader';
import ScrollTop from '../components/ScrollTop';
import Pagination from '../components/Pagination/Pagination';

import '../components/Container/container.scss';

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

  const { people, peoplePages } = useSelector((state) => state.people);

  return (
    <section aria-label="famous actors" className="movies">
      <PageHeader title="People" />
      {peoplePages ? (
        <Pagination
          totalPages={peoplePages}
          currentPage={page}
          setCurrentPage={setPage}
        />
      ) : ''}
      <div className="container_movies">
        {people.length
          ? people.map((famous) => (
            <Actor
              actorName={famous.name}
              posterPath={famous.profile_path}
              key={famous.id}
              id={famous.id}
            />
          ))
          : <Loading />}
      </div>
      {peoplePages ? (
        <Pagination
          totalPages={peoplePages}
          currentPage={page}
          setCurrentPage={setPage}
        />
      ) : ''}
      <ScrollTop />
    </section>
  );
};

export default PeoplePage;
