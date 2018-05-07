// @flow
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { type NavigationAction, type NavigationState } from "react-navigation";
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { name, version } from "../package.json";
import AppNavigator, { Route } from "./App";

import reducer, { Reducers } from "./reducers";

// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
const navKey = "root";
const middleware = createReactNavigationReduxMiddleware(
  navKey,
  state => state[Reducers.navigation]
);

export const addListener = () => createReduxBoundAddListener(navKey);

export default () => {
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(middleware))
  );
  /* eslint-enable */
  // $FlowFixMe
  if (module.hot) {
    // $FlowFixMe
    module.hot.accept(() => {
      store.replaceReducer(reducer);
    });
  }
  const persistor = persistStore(store);

  return { persistor, store };
};
