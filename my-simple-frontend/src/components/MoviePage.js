import React from "react";
import { useParams } from "react-router-dom";
import ReviewsContainer from "./ReviewsContainer";


function MoviePage({movies}){

  const {movieId} = useParams();
  const movie = movies[movieId -1] //minus one to account for the array offset
  const reviews = movie.reviews

return (
  <div className="page" id={movie.id}>
      
      <h1>{movie.title}</h1>
      <img alt="movie poster" src={movie.image}></img>
      <h3>Directed by: {movie.director}</h3> 
      <p>{movie.title} is a {movie.subgenre} horror movie, originally released in {movie.year}</p>
      <p>Synopsis: {movie.description}</p>

      <h4>Read the Reviews:</h4>
      <ReviewsContainer reviews={reviews}/>
    </div>
)


}

export default MoviePage;


/*
  const { id, title, director, year, subgenre, description } = movie;



  return(
    
   
  )
*/