import React from "react";
import MovieContainer from "./MovieContainer";


function Home ({movies}){

  return(
    <div>
      <div id='main-movie-list'>
      <h4>This is all the movies.</h4>
      <MovieContainer movies={movies}/>
    </div>
    </div>
  )
}

export default Home;