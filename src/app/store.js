import storageSession from "redux-persist/es/storage/session";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { apiSlice } from "./features/api/apiSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import authReducer from "./features/auth/authSlice";
import productReducer from "./features/products/productSlice";

const persistConfig = {
  key: "root",
  storage: storageSession,
  stateReconciler: autoMergeLevel2,
};

// Combine all reducers
const appReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
  products: productReducer,
});

// Root reducer with reset logic
const rootReducer = (state, action) => {
  return appReducer(state, action); // Otherwise, handle normally
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
});

export const persistor = persistStore(store);
export default store;
