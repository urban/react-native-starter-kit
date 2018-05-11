// @flow
import * as React from "react";
import { connect, Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import App from "@app";
import { AppEnvironment } from "@library";

const store = AppEnvironment.store();
const persistor = persistStore(store);

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
