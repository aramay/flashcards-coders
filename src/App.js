import React from 'react';
import LandingPage from '../FE/LandingPage';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Footer from '../FE/Footer';
import DeckList from '../FE/DecksList';

const App = () => {
  const m = [];

  return (
    <Container className='p-3 content'>
      <Jumbotron>
        <h1 className='header'>Flash Cards - Coders</h1>
        <LandingPage />
        <DeckList />
      </Jumbotron>
      <Footer />
    </Container>
  );
};

export default App;