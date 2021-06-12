import React from 'react';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import {Col, Row, Container} from 'react-bootstrap';

const DecksList = () => {
  // state.decks.decks - comes from store prop - decks
  const decks = useSelector(state => state.decks.decks);

  // const renderDecks = decks.map( deck => (
  return (
    <Container className='p-3'>
      <Row xs={1} md={2} className="g-4">
        {decks.map( deck => (
          <Col xs={4} md={4} lg={6} key={deck.id}>
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
                <Card.Link href="#">Learn</Card.Link>
                <Card.Link href="#">Unlearn</Card.Link>
              </Card.Body>
            </Card>
          </Col >
        ))}
      </Row>;
    </Container>
  );
};
  
export default DecksList;