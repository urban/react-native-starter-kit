// @flow
import * as React from "react";
import { StyleSheet, View } from "react-native";
import { type NavigationScreenProp } from "react-navigation";

import Layout from "../../../components/Layout";
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
      <Link title="Forgot Password?" onPress={navigateToForgotPassword} />
    </View>

    <View style={styles.controls}>
      <PrimaryButton title="Register" onPress={navigateToFrontDoor} />
    </View>
  </Layout>
);

RegisterScreen.navigationOptions = {
  title: "Registration"
};

export default RegisterScreen;

const styles = StyleSheet.create({
  main: { flex: 1, width: "100%" },
  controls: { flex: 0, flexDirection: "row" }
});
