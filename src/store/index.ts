import {configureStore} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

import reducer from './reducers/index';

/* configure store with all the reducers (persisted reducer) */
const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: {
        /* fix for issue with non-serializable values for redux-persist action */
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

/* add redux-persist to store */
const persistor = persistStore(store);

/* type to use for useAppSelector */
export type RootState = ReturnType<typeof store.getState>;
/* type to use for useAppDispatch */
export type AppDispatch = typeof store.dispatch;

export {persistor};
export default store;
