import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button';

const LandingPage = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">FC - Coders</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Create</Nav.Link>
          <Nav.Link href="#features">Courses</Nav.Link>
          <Nav.Link href="#pricing">Notification</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    </>
    );
  }
  
  export default LandingPage
  