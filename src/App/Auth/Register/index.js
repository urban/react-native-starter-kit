// @flow
import * as React from "react";
import { StyleSheet, View } from "react-native";
import { type NavigationScreenProp } from "react-navigation";
import { connect } from "react-redux";

import { Route } from "../";
import Layout from "../../../components/Layout";
import PageTitle from "../../../components/PageTitle";
import Link from "../../../components/Link";
import { PrimaryButton } from "../../../components/Buttons";

type Props = {
  navigateToFrontDoor: Function,
  navigateToForgotPassword: Function
};

const RegisterScreen = ({
  navigateToFrontDoor,
  navigateToForgotPassword
}: Props) => (
  <Layout>
    <View style={styles.main}>
      <PageTitle>Register Screen</PageTitle>
      <Link title="Forgot Password?" onPress={navigateToForgotPassword} />
    </View>

    <View style={styles.controls}>
      <PrimaryButton title="Register" onPress={navigateToFrontDoor} />
    </View>
  </Layout>
);

const mapDispatchToProps = (dispatch, ownProps) => ({
  navigateToFrontDoor: () => ownProps.navigation.navigate(Route.FrontDoor),
  navigateToForgotPassword: () =>
    ownProps.navigation.navigate(Route.ForgotPassword)
});

export default connect(null, mapDispatchToProps)(RegisterScreen);

const styles = StyleSheet.create({
  main: { flex: 1, width: "100%" },
  controls: { flex: 0, flexDirection: "row" }
});
