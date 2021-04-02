import Nav from './components/Nav';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import ActorDetail from './pages/ActorDetail';
import Footer from './components/Footer';
import SearchPage from './pages/SearchPage';
import MoviesPage from './pages/MoviesPage';
import GenresPage from './pages/GenresPage';
import PeoplePage from './pages/PeoplePage';
import YearPage from './pages/YearPage';
import {Wrapper} from './styles';
import GlobalStyles from './components/GlobalStyles';
import styled from 'styled-components';
import {Switch, Route, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <NoScrollX>
      <GlobalStyles />
      <Nav />
      <Wrapper>
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
      </Wrapper>
      </NoScrollX>
      <Footer />
    </div>
  );
}

const NoScrollX = styled.div`
  overflow-x: hidden;
`

export default App;
