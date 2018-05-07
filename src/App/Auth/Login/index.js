// @flow
import { AsyncStorage } from "react-native";
import { connect } from "react-redux";

import { actions, type Action } from "../reducer";
import config from "../../../config";
import { Route as RootRoute } from "../../";
import { Route as AuthRoute } from "../";
import LoginScreen from "./LoginScreen";

const logInAsync = navigation => async () => {
  await AsyncStorage.setItem(config.userToken, "abc");
  navigation.navigate(RootRoute.Main);
};

const { navigateToForgotPassword } = actions;

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: logInAsync(ownProps.navigation),
  navigateToForgotPassword: () =>
    ownProps.navigation.navigate(AuthRoute.ForgotPassword)
});

export default connect(null, mapDispatchToProps)(LoginScreen);
