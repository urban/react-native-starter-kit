// @flow
import * as React from "react";
import { connect, Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import AppNavigator from "./AppNavigator";
import configureStore from "./store";

const { persistor, store } = configureStore();

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppNavigator />
    </PersistGate>
  </Provider>
);
