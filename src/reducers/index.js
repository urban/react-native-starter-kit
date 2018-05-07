// @flow
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import appReducer from "./appReducer";
import navigationReducer from "./navigationReducer";

export const Reducers = {
  app: "app",
  navigation: "navigation"
};

const persistConfig = {
  key: "root",
  storage
};

export default combineReducers({
  [Reducers.app]: persistReducer(persistConfig, appReducer),
  [Reducers.navigation]: navigationReducer
});
