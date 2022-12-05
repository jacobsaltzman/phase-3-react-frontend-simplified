import React, {useState} from "react";
import ReviewForm from "./ReviewForm";

function ReviewsContainer({reviews, id}){

  const[allReviews, setAllReviews] = useState(reviews)

  function onAddReview(newReview){
    setAllReviews([...allReviews, newReview])
  }
  

if (allReviews !== undefined){
  
  
  return(
    <div>
    <h3>There are {allReviews.length} reviews for this movie!</h3>
    <ul className='review-list'>
      {allReviews.map((review) => {
        return(
          <li id={review.id} key={review.id}>Anon says: "{review.comments}", rating it a {review.user_rating} out of 5 overall and a scare factor of {review.scare_scale}!</li>
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