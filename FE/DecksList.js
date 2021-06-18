import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import {Col, Row, Container, Button, Spinner} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchDecks } from './decksSlice';
import { useHistory } from 'react-router-dom';
import './images/0.png';
import './images/1.png';
import './images/2.png';
import './images/3.png';
import './images/4.png';
import './images/5.png';
import './images/6.png';
import './images/7.png';
import './images/8.png';
import './images/9.png';
// const img = require('../public/0.png');

const DeckCards = ( { deck, index }) => {
  return (
    
    <Col xs={12} md={4} lg={6} className='padding-btm'>
      <Card >
        <Card.Img variant="top" src={`./images/${index}.png`} className='thumbnails'/>
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
          <Link to={`/deckCards/${deck.deck_id}`}>
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
    
    content = decks.map( (deck, index) => (
      <DeckCards key={deck.deck_id} deck={deck} index={index}/>
    ));
  } else if (deckStatus === 'failed') {
    content = <div>{error}</div>;
  }
  return (
    <Container >
      <Row  >
        {content}
      </Row>
    </Container>
  );
};
  
export default DecksList;