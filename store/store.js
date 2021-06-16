import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import decksReducer from '../FE/decksSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, 
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  decks: decksReducer,
});

const persistConfig = {
  key: ShadowRoot,
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export default store;

// export default configureStore({
//   reducer: {
//     decks: decksReducer
//   }
// });
