import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/auth-slice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PERSIST,
  PURGE,
  REGISTER,
  PAUSE,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

// const middleware = getDefaultMiddleware => {
//   getDefaultMiddleware({
//     serializableCheck: {
//       ignoreActions: [FLUSH, REHYDRATE, PERSIST, PURGE, REGISTER]
//     }
//   });
// }

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
