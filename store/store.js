import { configureStore } from '@reduxjs/toolkit';
import decksReducer from '../FE/decksSlice';

export default configureStore({
  reducer: {
    decks: decksReducer
  }
});