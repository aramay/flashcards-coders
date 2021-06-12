import React from 'react';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const DecksList = () => {
  // state.decks.decks - comes from store prop - decks
  const decks = useSelector(state => state.decks.decks);

  const renderDecks = decks.map( deck => (
    <>
      <Col xs={2} md={3} lg={6} >
        <Card key={deck.id}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card`&apos`s content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};
  
export default DecksList;