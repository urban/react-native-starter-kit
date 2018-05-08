// @flow
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { type NavigationAction, type NavigationState } from "react-navigation";
import storage from "redux-persist/lib/storage";

import { middleware, registry } from "./utils/redux";

const initialState = {};

// Preserve initial state for not-yet-loaded reducers
const combine = reducers => {
  const names = Object.keys(reducers);
  Object.keys(initialState).forEach(x => {
    if (names.indexOf(x) === -1) {
      reducers[x] = (state = null) => state;
    }
  });
  return combineReducers(reducers);
};

export default () => {
  const reducer = combine(registry.getReducers());
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(...middleware))
  );
  /* eslint-enable */
  // $FlowFixMe
  if (module.hot) {
    // $FlowFixMe
    module.hot.accept(() => {
      const reducers = registry.getReducers();
      store.replaceReducer(combine(reducers));
    });
  }

  // Replace the store's reducer whenever a new reducer is registered
  registry.setChangeListener(reducers => {
    store.replaceReducer(combine(reducers));
  });

  return store;
};
