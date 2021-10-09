import React from 'react';
import './assets/scss/main.scss';
import {
  Switch, Route, useLocation, useHistory,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ErrorBoundary } from 'react-error-boundary';
import { useSelector } from 'react-redux';
import Header from './components/Header/Header';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import ActorDetail from './pages/ActorDetail/ActorDetail';
import Footer from './components/Footer/Footer';
import SearchPage from './pages/SearchPage/SearchPage';
import MoviesPage from './pages/MoviesPage';
import GenresPage from './pages/GenresPage';
import PeoplePage from './pages/PeoplePage';
import YearPage from './pages/YearPage';
import Page404 from './pages/Page404/Page404';
import './components/Container/container.scss';
import ErrorFallback from './components/ErrorFallback/ErrorFallback';

function App() {
  const location = useLocation();
  const history = useHistory();
  const { isFailed } = useSelector((state) => state.movies);
  const { isFailedPerson } = useSelector((state) => state.person);
  const { isMovieFailed } = useSelector((state) => state.detail);
  return (
    <div className="App">
      <div className="container_noScroll">
        <Header />
        <div className="container_main">
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname.split('/')[1]}>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/movies/:id">
                <ErrorBoundary
                  FallbackComponent={ErrorFallback}
                  onReset={() => history.goBack()}
                >
                  {isMovieFailed ? <Page404 /> : <MovieDetail />}
                </ErrorBoundary>
              </Route>
              <Route path="/search/:id">
                <SearchPage />
              </Route>
              <Route path="/genres/:id">
                {isFailed ? <Page404 /> : <GenresPage />}
              </Route>
              <Route path="/year/:id">
                <YearPage />
              </Route>
              <Route path="/people">
                <PeoplePage />
              </Route>
              <Route path="/person/:id">
                {isFailedPerson ? <Page404 /> : <ActorDetail />}
              </Route>
              <Route path="/highlights/:id">
                <MoviesPage />
              </Route>
              <Route>
                <Page404 />
              </Route>
            </Switch>
          </AnimatePresence>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
