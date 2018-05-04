// @flow
import * as React from "react";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { Header, type NavigationScreenProp } from "react-navigation";
import { connect } from "react-redux";

import { Route } from "../";
import Layout from "../../../components/Layout";
import PageTitle from "../../../components/PageTitle";
import Link from "../../../components/Link";
import { PrimaryButton } from "../../../components/Buttons";
import TextInput from "../../../components/TextInput";

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
        <PageTitle>Change Password Screen</PageTitle>
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

const mapDispatchToProps = (dispatch, ownProps) => ({
  navigateToLogin: () => ownProps.navigation.navigate(Route.Login)
});

export default connect(null, mapDispatchToProps)(ChangePasswordScreen);
