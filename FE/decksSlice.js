import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  decks: [],
  reviews: [],
  reviewCardsCount: 0,
  status: 'idle',
  error: null
};

export const fetchDecks = createAsyncThunk('decks/fetchDecks', async () => {
  let res = await fetch('/decks');
  res = await res.json();
  console.log('decks/fetchDecks ', res);
  return res.decks;
});

export const addCardToReview = createAsyncThunk ('cards/addCardToReview',

  async (request) => {
    console.log('request ', request);
    let res = await fetch('/addCardToReview', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(request)
    });
    res = await res.json();
    console.log('res => cards/addCardToReview ', res);
    return res.reviews;
  }
);

export const removeCardReview = createAsyncThunk('cards/removeCardReview', 
  async(request) => {
    console.log('removeCardReview ', request);
    let res = await fetch('/removeCardReview', {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(request)
    });
    res = res.json();
    console.log('res => removeCardReview ', res);
    return res.review;
  }
);


const decksSlice = createSlice({
  name: 'decks',
  initialState,
  reducers: {
    reviewCards(state, action) {
      //Remove 1 element at index 3
      //let removed = myFish.splice(3, 1)
      const index = action.payload;
      state.decks.reviews.splice(index, 1);

    }
  },
  extraReducers: {
    [fetchDecks.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchDecks.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      console.log('fetchDecks.succeeded ',action.payload);
      console.log('fetchDecks.succeeded ',action);
      state.decks = state.decks.concat(action.payload);
    },
    [fetchDecks.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [addCardToReview.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.reviews = state.reviews.concat(action.payload);
      // increment card count
      state.reviewCardsCount ++;
      console.log('addCardToReview.succeeded ', state, action);
    },
    [removeCardReview.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.reviews.splice(action.payload);
    }
  }
});


export default decksSlice.reducer;

export const selectCardById = (state, deckId) => {
  console.log(state, deckId);
  deckId = Number(deckId);
  const deck = state.decks.decks.find(deck => deck.deck_id === deckId);
  console.log('deck ', deck.cards);
  return deck.cards;

};

export const cardsToReview = (state) => {
  console.log('cardsToReview ', state.decks.reviews);
  return state.decks.reviews;
};

export const reviewCardsCount = (state) => {
  console.log('reviewCardsCount ', state.decks.reviewCardsCount);
  return state.decks.reviewCardsCount;
};