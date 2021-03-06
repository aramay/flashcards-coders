import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { reviewCardsCount } from './decksSlice';
const LandingPage = () => {

  const reviewCount = useSelector(state => 
    reviewCardsCount(state)
  );

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/" className='text-style'>FC-Coders</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#create">Create</Nav.Link>
          <Nav.Link href="#Topics">Topics</Nav.Link>
          <Link to={'/reviews'}>
            <Navbar.Text>
            Review Count
              <span>&nbsp; {reviewCount}</span > 
            </Navbar.Text>
          </Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    </>
  );
};
  
export default LandingPage;
  