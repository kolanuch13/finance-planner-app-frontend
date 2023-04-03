import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/auth-slice';
import cashflowReducer from './cashflowPage/cashflowPage-slice';
import { dynamicReducer } from './dynamics/dynamics-slice';
import planSliceReducer from './plan/plan-slice'
import statisticsReducer from './statistics/statistics-slice';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cashflowPage: cashflowReducer,
    dynamic: dynamicReducer,
    statistics: statisticsReducer,
    plan: planSliceReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
