import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import {Col, Row, Container, Button, Spinner} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchDecks } from './decksSlice';

const DeckCards = ( { deck }) => {
  return (
    
    <Col xs={12} md={4} lg={6} >
      <Card >
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>{deck.title}</Card.Title>
          <Card.Text>
            {deck.description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
              Total Cards : {deck.totalCards}
          </ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Link to={`/deckCards/${deck.id}`}>
            <Button variant="primary">View Cards</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col >
  );
};

const DecksList = () => {
  const dispatch = useDispatch();
  // state.decks.decks - comes from store prop - decks
  const decks = useSelector(state => state.decks.decks);
  const error = useSelector(state => state.decks.error);
  const deckStatus = useSelector(state => state.decks.status);
  
  
  useEffect( () => {
    if(deckStatus === 'idle') {
      dispatch(fetchDecks());
    }
  }, [deckStatus, dispatch]);
  
  let content;

  if(deckStatus === 'idle') {
    content = <Spinner animation="grow" />;
    
  } else if (deckStatus === 'succeeded') {
    
    content = decks.map( deck => (
      <DeckCards key={deck.deck_id} deck={deck} />
    ));
  } else if (deckStatus === 'failed') {
    content = <div>{error}</div>;
  }
  return (
    <Container className='p-3'>
      <Row xs={1} md={8} >
        {content}
      </Row>
    </Container>
  );
};
  
export default DecksList;