import React, { useEffect } from 'react';
import {Col, Row, Container, Button, Spinner} from 'react-bootstrap';
import { addCardToReview } from './decksSlice';

const ReviewCards = () => {

  // useEffect( () => {
  //   dispatchEvent(addCardToReview())
  // }, [])

  const addCardToReviewClicked = () => {
    dispatchEvent(addCardToReview());
  };

  return (
    <Button
      variant="primary"
      onClick={addCardToReviewClicked}
    >
    </Button>
  );
};

export default ReviewCards;