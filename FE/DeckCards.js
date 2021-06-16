import React from 'react';
import { selectCardById } from './decksSlice';
import { useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap-floating-label';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import {Col, Row, Container, Button, Spinner} from 'react-bootstrap';
import { addCardToReview } from './decksSlice';


const LearnBtn = () => {
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

const CardsList = ({ card }) => {
  return (
    <MDBRow>
      <MDBCol sm='4'>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>Question</MDBCardTitle>
            <MDBCardText>
              {card.question}
            </MDBCardText>
          </MDBCardBody>
          <LearnBtn />
        </MDBCard>
      </MDBCol>

      <MDBCol sm='4'>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>Answer</MDBCardTitle>
            <MDBCardText>
              {card.answer}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
};

export const DeckCards = ({match}) => {

  console.log(match);
  const { deckId } = match.params;

  const deckCards = useSelector(state => selectCardById (state, deckId));
  console.log(deckCards);

  let content;

  deckCards.map( card => (
    content = <CardsList card={card} key={card.card_id}/>
  ));

  return (
    <>
      {content}
    </>
  );
};

