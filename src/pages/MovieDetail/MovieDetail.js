import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import loadDetail from '../../actions/detailAction';
import star from '../../img/star.png';
import noPoster from '../../img/no-poster.png';
import Loading from '../../components/ui/Loading/Loading';
import ButtonLikeLink from '../../components/ui/buttons/ButtonLikeLink';
import ScrollTop from '../../components/ScrollTop';
import '../../components/Container/container.scss';
import '../ActorDetail/actorDetail.scss';

const MovieDetail = () => {
  const [countries, setCountries] = useState([]);
  const history = useHistory();
  const arr = history.location.pathname.split('/');
  const id = arr[arr.length - 1];

  const dispatch = useDispatch();
  const { detail, isLoading } = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(loadDetail(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (detail.production_countries) {
      const c = detail.production_countries.map((country) => country.name);
      setCountries(c);
    }
  }, [detail]);

  const getPosterHandler = () => {
    return detail.poster_path
      ? `https://image.tmdb.org/t/p/w780${detail.poster_path}`
      : noPoster;
  };

  return (
    <>
      {!isLoading
        ? (
          <main className="container_moviePage">
            <ButtonLikeLink callback={() => history.goBack()} text="Back" />
            <div className="info">
              <div className="info__desc">
                <div className="info__basic">
                  <h1>{detail.title}</h1>
                  <p className="info__countries">
                    <span className="info__country">
                      {countries.length ? countries.join(', ') : 'No information about country'}
                    </span>
                  </p>
                  <p className="info__genres">
                    {detail.genres.map((genre) => (
                      <Link to={`/genres/${genre.id}`} key={genre.id}>
                        <span className="info__genre">{genre.name}</span>
                      </Link>
                    ))}

                  </p>
                  <p className="info__rating">
                    Rating:
                    {' '}
                    <img src={star} alt="rating" />
                    {' '}
                    {detail.vote_count === 0 ? 'not rated yet' : detail.vote_average}
                    {' ('}
                    <a
                      href={`https://www.themoviedb.org/movie/${detail.id}`}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="link"
                    >
                      rate on TMDB
                    </a>
                    )
                  </p>
                </div>
                <div>
                  <h2>Description</h2>
                  <p className="info__overview">{detail.overview}</p>
                </div>
              </div>
              <img src={getPosterHandler()} className="info__poster" alt={detail.title} />
            </div>
            <ScrollTop />
          </main>
        )
        : <Loading />}
    </>
  );
};

export default MovieDetail;
