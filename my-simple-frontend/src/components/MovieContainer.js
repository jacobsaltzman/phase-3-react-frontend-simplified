import React from "react";
import { Link, useParams } from "react-router-dom";

function MovieContainer({movies}){

  const params = useParams();

  return(
    <ul className="container">
      {movies.map((movie) => {
        return (
          <div>
          <Link to={`/movies/${movie.id}`} className="movie-link">{movie.title}</Link>
          </div>
        )
      })}
    </ul>
  )
}

export default MovieContainer;