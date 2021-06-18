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
      log: `decksCtrl.getDecks failed ${err}`,
      message: {err: `getDecks ctrl failed ${err}`}
    });
  }
};

decksCtrl.addCardToReview = async(req, res, next) => {

  console.log(req.body);
  // { card_id: 2 }
  const { card_id } = req.body;

  const queryCards = 'select * from cards where card_id = $1';
  const queryCardsValues = [card_id];

  const insertReviews = `insert into 
                          reviews(question, answer, created_on)
                          values
                          ($1, $2,current_timestamp)
                          RETURNING *`;
  
  try {
    let results = await db.query(queryCards, queryCardsValues);
    // get Cards from DB
    results = results.rows;
    console.log('results ', results);
    // destructure properties 
    const {question, answer} = results[0];

    const values = [question, answer];

    // insert new record in DB
    let reviews = await db.query(insertReviews, values);

    console.log('reviews ', reviews.rows);

    // send review record
    reviews = reviews.rows;
    res.send({reviews: reviews});
  } catch(err) {
    return next({
      log: `err in addCardToReview ${err}`,
      message: { err: `An error occurred in addCardToReview ${err}`}
    });
  }
};

module.exports = decksCtrl;