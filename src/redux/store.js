import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import {persistStore , persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import counterSliceTwo from "./slices/counterSliceTwo";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["counterTwo",'counter']
};


const combinedReducer = combineReducers({
  counter: counterSlice,
  counterTwo: counterSliceTwo,
})


const persistedReducer = persistReducer(persistConfig,combinedReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
