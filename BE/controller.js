// @ts-nocheck
const db = require('./models');

const decksCtrl = {};

decksCtrl.getDecks = async (req, res, next) => {
  console.log(' getDecks ctrl ');
  const queryDecks = 'select * from decks';
  const queryCards = 'select * from cards';

  try {
    const { rows } = await db.query(queryDecks);
    const cardRows = await db.query(queryCards);

    res.locals = rows.map(deck => ({
      ...deck,
      cards: cardRows.rows.filter( card => card.deck_id === deck.deck_id),
      totalCards: 20
    }));

    console.log(res.locals);
    res.send({decks: res.locals});

  } catch( err) {
    return next({
      mesg: `getDecks ctrl failed ${err}`
    });
  }
};

decksCtrl.addCardToReview = async(req, res, next) => {

  console.log(req.body);
  // { card_id: 2 }
  const { card_id } = req.body;

  const queryCards = 'select * from cards where card_id = $1';
  const values = [card_id];

  try {
    let results = await db.query(queryCards, values);
    results = results.rows;
    // res.send('/addCardToReview req');
    console.log(results);
    res.send({reviews: results});

    console.log(results);
  } catch(err) {
    return next({
      log: `err in addCardToReview ${err}`,
      message: { err: `An error occurred in addCardToReview ${err}`}
    });
  }
};

module.exports = decksCtrl;