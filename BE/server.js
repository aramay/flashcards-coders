const path = require('path');
const express = require('express');
const app  = express();
const { getDecks, addCardToReview } = require('./controller');

const PORT = 3000;


// handle parding request body
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// handle request for static sites
app.use(express.static(path.resolve(__dirname, '../client')));


// handle get request to decks
app.get('/decks', [getDecks]);

app.post('/addCardToReview', [addCardToReview]);
// catch unkown request to server
app.use('*', (req,res) => {
  res.send('Unkown request to server');
});

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware',
    status: 500,
    message: { err: 'An error occurred'}
  };
  const errObj = Object.assign({}, defaultErr, err);
  console.error(errObj.log);
  return res,status(errObj.status).json(errObj.message);
});

// start the server
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}..`);
});

module.exports = app;