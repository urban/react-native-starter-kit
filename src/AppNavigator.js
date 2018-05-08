// @flow
import * as React from "react";
import { connect } from "react-redux";

import App from "./App";
import { addListener } from "./utils/redux";

type Props = {
  dispatch: Function,
  navigation: any
};

export class AppWithNavigationState extends React.Component<Props> {
  render() {
    const { dispatch, navigation: state } = this.props;

    return (
      <App
        navigation={{
          dispatch,
          state,
          addListener
        }}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    navigation: state.navigation
  };
};

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(
  AppWithNavigationState
);
