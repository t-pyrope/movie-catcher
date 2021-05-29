import React from 'react';
import './assets/scss/main.scss';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Nav from './components/Nav/Nav';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import ActorDetail from './pages/ActorDetail/ActorDetail';
import Footer from './components/Footer/Footer';
import SearchPage from './pages/SearchPage/SearchPage';
import MoviesPage from './pages/MoviesPage';
import GenresPage from './pages/GenresPage';
import PeoplePage from './pages/PeoplePage';
import YearPage from './pages/YearPage';
import './components/Container/container.scss';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <div className="container_noScroll">
        <Nav />
        <div className="container_main">
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/movies/:id">
                <MovieDetail />
              </Route>
              <Route path="/search/:id">
                <SearchPage />
              </Route>
              <Route path="/genres/:id">
                <GenresPage />
              </Route>
              <Route path="/year/:id">
                <YearPage />
              </Route>
              <Route path="/people" exact>
                <PeoplePage />
              </Route>
              <Route path="/people/:id">
                <ActorDetail />
              </Route>
              <Route path="/:id">
                <MoviesPage />
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
