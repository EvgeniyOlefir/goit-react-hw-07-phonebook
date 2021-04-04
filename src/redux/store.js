import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import contactReducer from './phonebook-reducer';

const myMiddleware = store => next => action => {
  console.log('моя прослойка!', action);
  next(action);
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  myMiddleware,
  logger,
];

// const phonebookPersistConfig = {
//   key: 'phonebook',
//   storage,
//   blacklist: ['filter'],
// };

const store = configureStore({
  reducer: {
    phonebook: contactReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

// const persistor = persistStore(store);

// eslint-disable-next-line
export default store;
