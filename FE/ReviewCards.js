import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {Col, Row, Container, Button, Spinner} from 'react-bootstrap';
import { addCardToReview } from './decksSlice';
import { cardsToReview } from './decksSlice';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';

let counter = 0;

const nextQuestion = () => {
  console.log('button clicked ', counter ++);
};

const NextBtn = () => {
  return (
    <Button
      onClick={nextQuestion}
    >
      Next
    </Button>
  );
};

const ReviewCardsList = () => {
  // console.log('CardList ', card);
  return (
    <MDBRow className='padding-btm'>
      <MDBCol sm='5'>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>Question </MDBCardTitle>
            <MDBCardText>
              Question
            </MDBCardText>
          </MDBCardBody>
          
        </MDBCard>
      </MDBCol>

      <MDBCol sm='5'>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>Answer</MDBCardTitle>
            <MDBCardText>
              Answer
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <NextBtn sm='2' />
    </MDBRow>
  );
};

export const ReviewCards = () => {
  

  const reviews = useSelector(state => cardsToReview(state));
  console.log('ReviewCards ', reviews);
  let content ;

  if (counter < reviews.length) {
    content = <ReviewCardsList />;
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