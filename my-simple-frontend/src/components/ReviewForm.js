import React, {useState} from "react";


function ReviewForm({onAddReview, id}){

  const[formData, setFormData] = useState({
    movie_id: id, 
    comments: "",
    user_rating: 0,
    scare_scale: 0
  })

  function handleChange(e) {
    const {name, value} = e.target;
    setFormData((formData) => ({...formData, [name]: value}))
  }


  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:9292/reviews", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accepts': 'application/json'
    },
    body: JSON.stringify(formData)
  })
      .then((r) => r.json())
      .then((data) => {
        onAddReview(data)
        setFormData({
          movie_id: id,
          comments: "",
          user_rating: 0,
          scare_scale: 0
        });
      });
      alert("Added the Review! Thanks for contributing!");
  };


  return(
  <section>
      <form className="new-review-form" onSubmit={handleSubmit}>
      <h4>Create a review:</h4>
        <label>Comments:
        <textarea id="comments" name="comments" onChange={handleChange} value={formData.comments}/>
        </label>
        <label>Overall Rating</label>
        <input type="number" id="user_rating" name="user_rating" onChange={handleChange} value={formData.user_rating}/>

        <label>Scare Scale</label>
        <input type="number" id="scare_scale" name="scare_scale" onChange={handleChange} value={formData.scare_scale}/>

        <button type="submit">Post Review</button>
      </form>
    </section>
  )
}

export default ReviewForm;