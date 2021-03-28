import {trending} from './api';

import Home from './pages/Home';
import MovieDetail from './components/MovieDetail';

import GlobalStyles from './components/GlobalStyles';

import {Switch, Route, useLocation} from 'react-router-dom';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyles />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/movie/:id">
          <MovieDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
