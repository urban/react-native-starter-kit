// @flow
import { AsyncStorage } from "react-native";
import { connect } from "react-redux";

import { action } from "../reducer";
import { Route as RootRoute } from "@app";
import { Route as AuthRoute } from "../";
import LoginScreen from "./LoginScreen";

const { navigateToForgotPassword } = action;

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: () => dispatch(action.login()),
  navigateToForgotPassword: () =>
    ownProps.navigation.navigate(AuthRoute.ForgotPassword)
});

export default connect(null, mapDispatchToProps)(LoginScreen);
