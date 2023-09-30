import {configureStore,combineReducers} from '@reduxjs/toolkit';
import CompleteData from './Dataslice'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'

  import storage from 'redux-persist/lib/storage'

  const persistConfig = {
    key: 'Gama',
    version: 1,
    storage,
  }

  const rootreducer = combineReducers({EveryData:CompleteData})

  const persistedReducer = persistReducer(persistConfig, rootreducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)