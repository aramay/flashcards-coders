import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  decks: [
    {id: '1', title: 'JS Interview Questions', description: 'Some quick example text to build on the card title and make up the bulk of the card`&apos`s content.', totalCards: '20'},
    {id: '2', title: 'Linked List Questions', description: 'Some quick example text to build on the card title and make up the bulk of the card`&apos`s content.', totalCards: '10'},
    {id: '3', title: 'React Questions', description: 'Some quick example text to build on the card title and make up the bulk of the card`&apos`s content.', totalCards: '10'},
    {id: '4', title: 'BST Questions', description: 'Some quick example text to build on the card title and make up the bulk of the card`&apos`s content.', totalCards: '10'},
  ],
  status: 'idle',
  error: null
};

export const fetchDecks = createAsyncThunk('decks/fetchDecks', async () => {
  const res = await fetch('/decks');
  return res.decks;
});

const decksSlice = createSlice({
  name: 'decks',
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchDecks.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchDecks.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      console.log(action.payload);
      console.log(action);
      state.decks = state.decks.concat(action.payload);
    },
    [fetchDecks.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    }
  }
});


export default decksSlice.reducer;