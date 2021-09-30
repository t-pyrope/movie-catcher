import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadPeople from '../actions/peopleAction';
import Actor from '../components/Actor/Actor';
import '../components/Container/container.scss';
import Loading from '../components/ui/Loading/Loading';
import PageHeader from '../components/PageHeader/PageHeader';
import ScrollTop from '../components/ScrollTop';
import Pagination from '../components/Pagination/Pagination';

const PeoplePage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(loadPeople(page));
  }, [dispatch, page]);
  const { people, peoplePages } = useSelector((state) => state.people);

  return (
    <section aria-label="famous actors" className="movies">
      <PageHeader title="People" />
      <Pagination
        totalPages={peoplePages}
        currentPage={page}
        setCurrentPage={setPage}
      />
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
      <Pagination
        totalPages={peoplePages}
        currentPage={page}
        setCurrentPage={setPage}
      />
      <ScrollTop />
    </section>
  );
};

export default PeoplePage;
