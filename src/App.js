import React from 'react';
import LandingPage from '../FE/LandingPage';
import { Container, Jumbotron, Navbar } from 'react-bootstrap';
import DeckList from '../FE/DecksList';
import { DeckCards } from '../FE/DeckCards';
import { ReviewCards }  from '../FE/ReviewCards';
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
          <Navbar fixed="bottom" variant="light" bg="light">
            <Navbar.Brand className='center-align'>Developed by @aramay </Navbar.Brand>
          </Navbar>
        </Jumbotron>
      </Container>
    </Router>
  );
};

export default App;