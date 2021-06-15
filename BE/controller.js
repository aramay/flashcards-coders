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

    res.send({decks: res.locals});

  } catch( err) {
    return next({
      mesg: `getDecks ctrl failed ${err}`
    });
  }
};

module.exports = decksCtrl;