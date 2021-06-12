import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  decks: [
    {id: '1', title: 'JS Interview Questions', cards: '20'},
    {id: '2', title: 'Linked List Questions', cards: '10'},
  ],
  status: 'idle',
  error: null
};

const decksSlice = createSlice({
  name: 'decks',
  initialState,
  decksAdded: {
    reducers: {}
  }
});


export default decksSlice.reducer;