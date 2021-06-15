// @ts-nocheck

const db = require('./models');

const decksCtrl = {};

decksCtrl.getDecks = (req, res, next) => {
  console.log(' getDecks ctrl ');
  res.status(200).send('/deck GET request');
};

module.exports = decksCtrl;