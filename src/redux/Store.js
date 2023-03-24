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
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const middleware = getDefaultMiddleware => {
   getDefaultMiddleware({
     serializableCheck: {
       ignoreActions: [FLUSH, REHYDRATE, PERSIST, PURGE, REGISTER]
     }
  });
}

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
