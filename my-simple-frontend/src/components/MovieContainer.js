import React from "react";
import { Link } from "react-router-dom";

function MovieContainer({movies}){

  return(
    <ul className="container">
      {movies.map((movie) => {
        return (
          <div key={movie.id}>
          <Link to={`/movies/${movie.id}`} className="movie-link">{movie.title}</Link>
          </div>
        )
      })}
    </ul>
  )
}

export default MovieContainer;