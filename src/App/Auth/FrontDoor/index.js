import * as React from "react";
import { StyleSheet, View } from "react-native";
import { type NavigationScreenProp } from "react-navigation";
import { connect } from "react-redux";

import { Route } from "../";
import Layout, { Theme as LayoutTheme } from "../../../components/Layout";
import PageTitle from "../../../components/PageTitle";
import Link from "../../../components/Link";
import { PrimaryButton, SecondaryButton } from "../../../components/Buttons";

const FrontDoorScreen = ({ navigateToLogin, navigateToRegister }) => (
  <Layout theme={LayoutTheme.dark}>
    <View style={styles.main} />
    <View style={styles.controls}>
      <SecondaryButton title="Login" onPress={navigateToLogin} />
      <PrimaryButton title="Register" onPress={navigateToRegister} />
    </View>
  </Layout>
);

FrontDoorScreen.navigationOptions = () => ({
  header: null
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  navigateToLogin: () => ownProps.navigation.navigate(Route.Login),
  navigateToRegister: () => ownProps.navigation.navigate(Route.Register)
});

export default connect(null, mapDispatchToProps)(FrontDoorScreen);

const styles = StyleSheet.create({
  main: { flex: 1 },
  controls: { flex: 0, flexDirection: "row" }
});
