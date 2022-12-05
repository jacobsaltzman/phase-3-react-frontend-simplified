import React, {useState} from "react";
import MovieContainer from "./MovieContainer";
import { Route, useRouteMatch } from "react-router-dom";
import MoviePage from "./MoviePage";


function Movies ({movies, onAddMovie}){

  const match = useRouteMatch();
  

  const[formData, setFormData] = useState({
    title: "",
    director: "",
    subgenre: "",
    year: "",
    image: "",
    description: ""
  })

  function handleChange(e) {
    const {name, value} = e.target;
    setFormData((formData) => ({...formData, [name]: value}))
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:9292/movies", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accepts': 'application/json'
    },
    body: JSON.stringify(formData)
  })
      .then((r) => r.json())
      .then((data) => {
        onAddMovie(data)
        setFormData({
          title: "",
          director: "",
          subgenre: "",
          year: "",
          image: "",
          description: ""
        });
      });
      alert("Added to the Movies DB! Thanks for contributing");
  };


  return(
    <div>
      <div id='main-movie-list'>
      <h4>Read all the movies.</h4>
      <MovieContainer movies={movies}/>
    </div>

    <Route path={`${match.url}/:movieId`}>
        <MoviePage />
      </Route>

    <form className="new-movie-form" onSubmit={handleSubmit}>
        <h4>Create A New Movie</h4>

        <label>Title</label>
        <input type="text" id="title" name="title" onChange={handleChange} value={formData.title}/>

        <label>Director</label>
        <input type="text" id="director" name="director" onChange={handleChange} value={formData.director}/>

        <label>Subgenre</label>
        <select name="subgenre" id="subgenre" onChange={handleChange} value={formData.subgenre}>
          <option>Select One</option>
          <option value="Paranormal">Paranormal</option>
          <option value="Slasher">Slasher</option>
          <option value="Psych">Psychological</option>
          <option value="Comedy">Comedy</option>
          <option value="SciFi">Sci-fi</option>
          <option value="Gore">Gore</option>
          <option value="Monster">Monster</option>
          <option value="Mystery/Thriller">Mystery/Thriller</option>
          <option value="FF">Found Footage</option>
          <option value="Other">Other</option>
        </select>

        <label>Year</label>
        <input type="number" id="year" name="year" onChange={handleChange} value={formData.year}/>

        <label>Image URL</label>
        <input type="text" id="image" name="image" onChange={handleChange} value={formData.image}></input>

        <label>Description</label>
        <input type="text" id="description" name="description" onChange={handleChange} value={formData.description}></input>

        <button type="submit">Add Movie</button>
      </form>
    </div>
  )
}

export default Movies;