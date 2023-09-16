import Navbar from "./Navbar";

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Home from "./Home";
import NotFound from "./NotFound";
import MovieDetails from "./MovieDetails";
import MovieList from "./MovieList";
function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/movies/:id">
              <MovieDetails />
            </Route>
            <Route path="/movies">
              <MovieList />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
