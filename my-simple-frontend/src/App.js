import React, { useState, useEffect } from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Home from './components/Home';


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
        <h4>Horror Rater</h4>
        <Link to="/">Home</Link>
        <Switch>
          <Route path='/'>
            <Home movies={movies} onAddMovie={onAddMovie}/>
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
