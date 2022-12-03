import React from 'react';


function MovieCard({movie}){



  const { id, title, director, year, subgenre } = movie;



  return(
    <div className="card" id={id}>
      
      <h1>{title}</h1>
      <h3>Directed by: {director}</h3> 
      <p>{title} is a {subgenre} horror movie, originally released in {year}</p>

    </div>
  )
}

export default MovieCard;