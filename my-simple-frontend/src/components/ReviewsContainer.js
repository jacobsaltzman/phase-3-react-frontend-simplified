import React from 'react';

function ReviewsContainer({reviews}){


if (reviews !== undefined){
  
  
  return(
    <div>
    <h3>There are {reviews.length} reviews for this movie!</h3>
    <ul className='review-list'>
      {reviews.map((review) => {
        return(
          <li id={review.id} key={review.id}>Anon says: "{review.comments}", rating it a {review.user_rating} out of 5 overall and a scare factor of {review.scare_scale}!</li>
        )
      })}
    </ul>
    </div>
  )

}
  else{
    return(
      <p>No Reviews Yet...</p>
    )
  }
}

export default ReviewsContainer;