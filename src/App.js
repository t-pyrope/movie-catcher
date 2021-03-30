import Nav from './components/Nav';
import Home from './pages/Home';
import MovieDetail from './components/MovieDetail';
import Footer from './components/Footer';
import SearchPage from './pages/SearchPage';
import MoviesPage from './pages/MoviesPage';
import GenresPage from './pages/GenresPage';
import {Wrapper} from './styles';
import GlobalStyles from './components/GlobalStyles';

import {Switch, Route, useLocation} from 'react-router-dom';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Wrapper>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/movie/:id">
          <MovieDetail />
        </Route>
        <Route path="/search/:id">
          <SearchPage />
        </Route>
        <Route path="/genres/:id">
          <GenresPage />
        </Route>
        <Route path="/:id">
          <MoviesPage />
        </Route>
      </Switch>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
