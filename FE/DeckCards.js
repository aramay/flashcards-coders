import React, { useState } from 'react';
import { selectCardById } from './decksSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap-floating-label';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import {Col, Row, Container, Button, Spinner} from 'react-bootstrap';
import { addCardToReview } from './decksSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { reviewCardsCount } from './decksSlice';

const LearnBtn = ({card_id}) => {

  const dispatch = useDispatch();
  const reviewCount = useSelector(state => 
    reviewCardsCount(state)
  );

  let [reviewCCount, setReviewCCount] = useState(reviewCount);

  const addCardToReviewClicked = async () => {
    console.log('addCardToReviewClicked ', card_id);
    try {
      const res = await dispatch(addCardToReview({card_id}));
      console.log('deckCards ', res);
      setReviewCCount(( ) => reviewCCount ++);
      unwrapResult(res);
    } catch(err) {
      console.error(`Failed request /addCardToReview ${err}`);
    }
  };

  return (
    <Button
      variant="primary"
      onClick={addCardToReviewClicked}
    > Learn
    </Button>
  );
};

const CardsList = ({ card }) => {
  console.log('CardList ', card);
  return (
    <MDBRow className='padding-btm'>
      <MDBCol sm='5'>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>Question {card.card_id}</MDBCardTitle>
            <MDBCardText>
              {card.question}
            </MDBCardText>
          </MDBCardBody>
          
        </MDBCard>
      </MDBCol>

      <MDBCol sm='5'>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>Answer</MDBCardTitle>
            <MDBCardText>
              {card.answer}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <LearnBtn card_id={card.card_id}sm='2' />
    </MDBRow>
  );
};

export const DeckCards = ({match}) => {

  console.log('DeckCards ', match);
  const { deckId } = match.params;

  const deckCards = useSelector(state => selectCardById (state, deckId));
  console.log('DeckCards ', deckCards);

  const content = deckCards.map( card => (
    <CardsList card={card} key={card.card_id} />
  ));

  return (
    <Container>
      {content}
    </Container>
  );
};

