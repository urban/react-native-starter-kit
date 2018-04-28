// @flow
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { type NavigationState } from "react-navigation";
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { name, version } from "../package.json";
import AppNavigator, { Route } from "./App";

type Action = {
  +type: string,
  payload?: any
};

type AppState = {
  name: string,
  version: string
};

const initialAppState: AppState = {
  name,
  version
};

const appReducer = (state: AppState = initialAppState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const initialNavState: NavigationState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams(Route.Loading)
);

const navigationReducer = (
  state: NavigationState = initialNavState,
  action: Action
) => {
  // $FlowFixMe
  const nextState = AppNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

const Reducers = {
  app: "app",
  navigation: "navigation"
};

type State = {
  app: AppState,
  navigation: NavigationState
};

// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
const navKey = "root";
const middleware = createReactNavigationReduxMiddleware(
  navKey,
  state => state[Reducers.navigation]
);

export const addListener = () => createReduxBoundAddListener(navKey);

const persistConfig = {
  key: "root",
  storage
};

const initialState = {
  [Reducers.app]: initialAppState,
  [Reducers.navigation]: initialNavState
};

const rootReducer = combineReducers({
  // TODO: redux-persist is throwing strange errors w/ flow 0.65.
  // See https://github.com/rt2zz/redux-persist/issues/780
  [Reducers.app]: persistReducer(persistConfig, appReducer),
  // [Reducers.app]: appReducer,
  [Reducers.navigation]: navigationReducer
});

export default () => {
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(middleware))
  );
  /* eslint-enable */
  // $FlowFixMe
  if (module.hot) {
    // $FlowFixMe
    module.hot.accept(() => {
      store.replaceReducer(rootReducer);
    });
  }
  const persistor = persistStore(store);

  return { persistor, store };
};
