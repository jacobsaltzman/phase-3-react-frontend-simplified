import React from "react";
import { useParams } from "react-router-dom";

function MoviePage({}){

  const {movieId} = useParams();
  console.log(movieId)

return (
  <div>movie page</div>
)


}

export default MoviePage;


/*
  const { id, title, director, year, subgenre, description } = movie;



  return(
    <div className="page" id={id}>
      
      <h1>{title}</h1>
      <h3>Directed by: {director}</h3> 
      <p>{title} is a {subgenre} horror movie, originally released in {year}</p>
      <p>Synopsis: {description}</p>
    </div>
   
  )
*/