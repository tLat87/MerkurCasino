import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { persistConfig } from './persistConfig';
import { combineReducers } from 'redux';
import objectReducer from './slices/objectSlice';

const rootReducer = combineReducers({
  objects: objectReducer, // ✅ Должно совпадать с `useSelector(state => state.objects)`
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
