import * as React from "react";
import {
  AsyncStorage,
  KeyboardAvoidingView,
  StyleSheet,
  View
} from "react-native";
import { Header, type NavigationScreenProp } from "react-navigation";
import { connect } from "react-redux";

import { actions, type Action } from "../reducer";
import config from "../../../config";
import { Route as RootRoute } from "../../";
import { Route as AuthRoute } from "../";
import Layout from "../../../components/Layout";
import PageTitle from "../../../components/PageTitle";
import TextInput from "../../../components/TextInput";
import { PrimaryButton } from "../../../components/Buttons";
import Link from "../../../components/Link";

const LoginScreen = ({ login, navigateToForgotPassword }) => (
  <Layout>
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={Header.HEIGHT}
      enabled
    >
      <View style={styles.main}>
        <PageTitle>Login Screen</PageTitle>
        <TextInput
          label="Username"
          placeholder="Please enter your username..."
        />
        <TextInput
          label="Password"
          secureTextEntry={true}
          placeholder="Please enter your password..."
        />
        <Link title="Forgot Password?" onPress={navigateToForgotPassword} />
      </View>
      <View style={styles.controls}>
        <PrimaryButton title="Login" onPress={login} />
      </View>
    </KeyboardAvoidingView>
  </Layout>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  },
  main: {
    flex: 1,
    width: "100%"
  },
  controls: { flex: 0, flexDirection: "row" }
});

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
