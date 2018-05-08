// @flow
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { type NavigationAction, type NavigationState } from "react-navigation";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import reducer from "./reducers";
import { middleware } from "./utils/redux";

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
