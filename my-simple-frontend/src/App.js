import React, { useState, useEffect } from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Movies from './components/Movies';
import MoviePage from './components/MoviePage';


function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/movies")
      .then((r) => r.json())
      .then((data)=> setMovies(data))
  }, [])

  function onAddMovie(newMovie){
    setMovies([...movies, newMovie])
  }

  return (
    <div className="App">
      <header className="App-header">
        <h4>Horror Rater Simplified</h4>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Switch>
          <Route exact path="/">
          <div>Home</div>
          </Route>
          <Route exact path='/movies'>
            <Movies movies={movies} onAddMovie={onAddMovie}/>
          </Route>
          <Route path="/movies/:movieId">
            <MoviePage />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
