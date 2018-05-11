// @flow
import * as React from "react";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { Header, type NavigationScreenProp } from "react-navigation";

import { Layout, Link, TextInput } from "@components";
import { PrimaryButton } from '@components/Buttons';

type Props = {
  navigateToChangePassword: Function
};

const ForgotPasswordScreen = ({ navigateToChangePassword }: Props) => (
  <Layout>
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={Header.HEIGHT}
      enabled
    >
      <View style={styles.main}>
        <TextInput label="Email" placeholder="Please enter your email..." />
      </View>
      <View style={styles.controls}>
        <PrimaryButton title="Send" onPress={navigateToChangePassword} />
      </View>
    </KeyboardAvoidingView>
  </Layout>
);

ForgotPasswordScreen.navigationOptions = {
  title: "Forgot Password"
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

export default ForgotPasswordScreen;
