// @flow
import * as React from "react";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { Header, type NavigationScreenProp } from "react-navigation";

import { Layout, Link, TextInput } from "@components";
import { PrimaryButton } from "@components/Buttons";

type Props = {
  login: () => void,
  navigateToForgotPassword: () => void
};

const LoginScreen = ({ login, navigateToForgotPassword }: Props) => (
  <Layout>
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={Header.HEIGHT}
      enabled
    >
      <View style={styles.main}>
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

LoginScreen.navigationOptions = {
  title: "Login"
};

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

export default LoginScreen;
