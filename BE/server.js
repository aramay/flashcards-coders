const path = require('path');
const express = require('express');
const app  = express();
const { getDecks } = require('./controller');

const PORT = 3000;


// handle parding request body
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// handle request for static sites
app.use(express.static(path.resolve(__dirname, '../client')));


// handle get request to decks
app.get('/decks', [getDecks]);

// catch unkown request to server
app.use('*', (req,res) => {
  res.send('Unkown request to server');
});



app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}..`);
});

module.exports = app;