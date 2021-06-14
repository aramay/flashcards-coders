import React from 'react';
import LandingPage from '../FE/LandingPage';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Footer from '../FE/Footer';
import DeckList from '../FE/DecksList';
import {DeckCards} from '../FE/DeckCards';
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
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <Jumbotron>
                <h1 className='header'>Flash Cards - Coders</h1>
                <LandingPage />
                <DeckList />
              </Jumbotron>
            )}
          />
          <Route exact path="/deckCards/:deckId" component={DeckCards} />
          <Redirect to='/' />
        </Switch>
        <Footer />
      </Container>
    </Router>
  );
};

export default App;