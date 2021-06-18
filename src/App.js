import React from 'react';
import LandingPage from '../FE/LandingPage';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Footer from '../FE/Footer';
import DeckList from '../FE/DecksList';
import { DeckCards } from '../FE/DeckCards';
import { ReviewCards }  from '../FE/ReviewCards';
import Navbar from 'react-bootstrap/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';


const App = () => {

  return (
    <Router>
      <Container className='p-3 content'>
        <Jumbotron>
          <h1 className='header'>Flash Cards-Coders</h1>
          <LandingPage />
          <Switch>
            <Route
              exact
              path='/'
              render={() => (
                <>
                  <DeckList />
                </>
              )}
            />
            <Route exact path="/deckCards/:deckId" component={DeckCards} />
            <Route exact path="/reviews" component={ReviewCards} />
            <Redirect to='/' />
          </Switch>
          <Footer />
        </Jumbotron>
        <Container>
          <Navbar fixed="bottom" variant="light" bg="light">
            <Navbar.Brand className='center-align'>Made By @aramay </Navbar.Brand>
          </Navbar>
        </Container>
      </Container>
    </Router>
  );
};

export default App;