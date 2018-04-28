// @flow
import * as React from "react";
import { addNavigationHelpers, SwitchNavigator } from "react-navigation";
import { connect, Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import AppNavigator from "./App";
import configureStore, { addListener } from "./store";

type Props = {
  dispatch: Function,
  nav: any
};

const App = ({ dispatch, nav: state }: Props) => (
  <AppNavigator
    navigation={addNavigationHelpers({
      state,
      dispatch,
      addListener
    })}
  />
);

const mapStateToProps = ({ nav }) => ({ nav });
const mapDispatchToProps = dispatch => ({ dispatch });
const AppWithNavigationState = connect(mapStateToProps, mapDispatchToProps)(
  App
);

const { persistor, store } = configureStore();

// export default () => (
//   <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
//       <AppWithNavigationState />
//     </PersistGate>
//   </Provider>
// );
export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppNavigator />
    </PersistGate>
  </Provider>
);
