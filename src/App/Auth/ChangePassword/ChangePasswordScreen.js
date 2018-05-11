// @flow
import * as React from "react";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { Header, type NavigationScreenProp } from "react-navigation";

import { Layout, Link, TextInput } from "@components";
import { PrimaryButton } from "@components/Buttons";

type Props = {
  navigateToLogin: Function
};

const ChangePasswordScreen = ({ navigateToLogin }: Props) => (
  <Layout>
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={Header.HEIGHT}
      enabled
    >
      <View style={styles.main}>
        <TextInput
          label="New Password"
          secureTextEntry={true}
          placeholder="Please enter your new password..."
        />
        <TextInput
          label="Confirm New Password"
          secureTextEntry={true}
          placeholder="Please confirm your new password..."
        />
      </View>
      <View style={styles.controls}>
        <PrimaryButton title="Change Password" onPress={navigateToLogin} />
      </View>
    </KeyboardAvoidingView>
  </Layout>
);

ChangePasswordScreen.navigationOptions = {
  title: "Change Password"
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

export default ChangePasswordScreen;
