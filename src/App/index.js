// @flow
import * as React from "react";
import { connect } from "react-redux";
import { createSwitchNavigator } from "react-navigation";

import { addListener, registry } from "../utils/redux";
import reducer, { key } from "./reducer";
import AuthStack, { AuthLoading } from "./Auth";
import MainStack from "./Main";

registry.registerReducers({ [key]: reducer });

export const Route = {
  Loading: "Loading",
  Main: "Main",
  Auth: "Auth"
};

export const App = createSwitchNavigator(
  {
    [Route.Loading]: AuthLoading,
    [Route.Main]: MainStack,
    [Route.Auth]: AuthStack
  },
  {
    initialRouteName: Route.Loading
  }
);

type Props = {
  dispatch: Function,
  navigation: any
};

export class AppWithNavigationState extends React.Component<Props> {
  render() {
    const { dispatch, navigation: state } = this.props;
    const nav = { dispatch, state, addListener };
    // $FlowFixMe
    return <App navigation={nav} />;
  }
}

const mapStateToProps = state => {
  return {
    navigation: state[key]
  };
};

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(
  AppWithNavigationState
);
