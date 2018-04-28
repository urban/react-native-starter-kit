import * as React from "react";
import { AsyncStorage } from "react-native";
import { type NavigationScreenProp } from "react-navigation";
import { connect } from "react-redux";

import { actions, type Action } from "../reducer";
import config from "../../../config";
import { Route as RootRoute } from "../../";
import { Route as AuthRoute } from "../";
import Layout from "../../../components/Layout";
import PageTitle from "../../../components/PageTitle";
import { PrimaryButton } from "../../../components/Buttons";
import Link from "../../../components/Link";

const LoginScreen = ({ login, navigateToForgotPassword }) => (
  <Layout>
    <PageTitle>Login Screen</PageTitle>
    <Link title="Forgot Password?" onPress={navigateToForgotPassword} />
    <PrimaryButton title="Login" onPress={login} />
  </Layout>
);

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
