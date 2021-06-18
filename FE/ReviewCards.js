import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {Col, Row, Container, Button, Spinner} from 'react-bootstrap';
import { addCardToReview } from './decksSlice';
import { cardsToReview } from './decksSlice';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import getStoredState from 'redux-persist/es/getStoredState';
// import { reviewCards } from './decksSlice';
import { reviewCardsCount } from './decksSlice';

let counter = 0;

const ReviewCardsList = ({reviews, onNextQuestion, counter}) => {
  // console.log('CardList ', card);
  return (
    <MDBRow className='padding-btm'>
      <MDBCol sm='5'>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>Question {reviews[counter].card_id}</MDBCardTitle>
            <MDBCardText>
              {reviews[counter].question}
            </MDBCardText>
          </MDBCardBody>
          
        </MDBCard>
      </MDBCol>

      <MDBCol sm='5'>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>Answer</MDBCardTitle>
            <MDBCardText>
              {reviews[counter].answer}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <Button
        onClick={() => onNextQuestion(reviews[counter].card_id)}
        sm='2' >
      Next
      </Button>
    </MDBRow>
  );
};

export const ReviewCards = () => {

  const reviewCount = useSelector(state => 
    reviewCardsCount(state)
  );

  let [reviewCCount, setReviewCCount] = useState(reviewCount);
  console.log('reviewCCount ', reviewCCount);
  console.log('setReviewCCount ', setReviewCCount);


  
  const initReviews = useSelector(state => cardsToReview(state));
  
  const [reviews, setReviews] = useState(initReviews);
  
  console.log('ReviewCards ', reviews);

  let content ;

  const handleNextQuestion = (index) => {
    console.log('counter before click ', counter);
    console.log('params', index);
    // const newReviewList = reviews.splice(index, 1);
    const newReviewList = reviews.filter( review => review.card_id !== index);
    counter ++;
    console.log('counter after click ', counter);
    setReviews(newReviewList);

    const newReviewCount = -- reviewCCount;
    console.log('reviewCCount after --', newReviewCount);
    setReviewCCount(newReviewCount);
  };

  if (counter < reviews.length) {
    content = <ReviewCardsList reviews={reviews} onNextQuestion={handleNextQuestion} counter={counter}/>;
  } else {
    content = <div>No cards to review</div>;
  }
  return (
    <Container>
      {content}
    </Container>
  );
};

// export default ReviewCards;