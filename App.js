import React from 'react'
import LandingPage from './FE/LandingPage'
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

const App = () => {
  return (
    <Container className='p-3'>
      <Jumbotron>
        <h1 className='header'>Flash Cards - Coders</h1>
        <LandingPage />
      </Jumbotron>
    </Container>

  )
}

export default App


