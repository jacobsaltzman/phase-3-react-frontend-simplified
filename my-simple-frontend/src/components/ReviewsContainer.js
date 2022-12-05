import React, {useState} from "react";
import ReviewForm from "./ReviewForm";

function ReviewsContainer({reviews, id}){

  const[allReviews, setAllReviews] = useState(reviews)
  const [isEditMode, setIsEditMode] = useState(true);
  const [formData, setFormData] = useState();

  function handleEditMode(){
    setIsEditMode(!isEditMode)
  }

  function onEditReview(updatedReview){
    const updatedReviews = allReviews.map((review) => {
      if (review.id === updatedReview.id) {
        return updatedReview;
      } else {
        return review;
      }
    });
    setAllReviews(updatedReviews);
  }

  function handleChange(e) {
    const value = e.target.value;
    setFormData(value)
  }

  function handleEditReviewClick(e) {
    fetch(`http://localhost:9292/reviews/${e.currentTarget.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
          comments: formData
      }),
    })
      .then((r) => r.json())
      .then((updatedItems) => {
      onEditReview(updatedItems)
    });
    setFormData("")
    handleEditMode()
    alert("Edit complete.")
  }

  function onAddReview(newReview){
    if (allReviews === undefined){
      const allReviews = []
      setAllReviews([...allReviews, newReview])
    }
    else { 
    setAllReviews([...allReviews, newReview])
    }
  }

  const handleDeleteReview = (e) => {
    e.preventDefault();
    

    fetch(`http://localhost:9292/reviews/${e.currentTarget.id}`, {
        method: "DELETE",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        },
    })
    .then((response) => response.json())
    .then((data) => onDeleteReview(data));
}
  
 
  function onDeleteReview(deletedReview) {
    const updatedReviews = allReviews.filter((review) => review.id !== deletedReview.id);
    setAllReviews(updatedReviews);
  }

if (allReviews !== undefined){
  
  
  return(
    <div>
    <h3>There are {allReviews.length} reviews for this movie!</h3>
    <ul className='review-list'>
      {allReviews.map((review) => {
        return(
          <div key={review.id}>
          
          {isEditMode? <li id={review.id} key={review.id}>Anon says: "{review.comments}", rating it a {review.user_rating} out of 5 overall and a scare factor of {review.scare_scale}!<button id={review.id} type='submit' onClick={handleDeleteReview}>Delete The Review</button><button id='edit-review-button' type='submit'onClick={handleEditMode}>{isEditMode? 'edit?': 'nevermind!'}</button></li> : <div><input onChange={handleChange} type='text' placeholder={review.comments}></input><button button id={review.id} type='submit' onClick={handleEditReviewClick}>Submit Update</button></div>}
      
          
          </div>
        )
      })}
    </ul>
    
      <ReviewForm setAllReviews={setAllReviews} onAddReview={onAddReview} id={id}/>
    </div>
  )

}
  else{


    return(
      <div>
      <p>No Reviews Yet. Add one.</p>
        <ReviewForm setAllReviews={setAllReviews} onAddReview={onAddReview} id={id}/>
      </div>
    )
  }
}

export default ReviewsContainer;