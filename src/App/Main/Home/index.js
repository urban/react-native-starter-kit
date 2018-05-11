// @flow
import * as React from "react";
import { AsyncStorage } from "react-native";
import { type NavigationScreenProp } from "react-navigation";
import { connect } from "react-redux";

import config from "../../../config";
import { Route as RootRoute } from "@app";
import Route from "../router";
import { Layout, Link, PageTitle } from "@components";

const HomeScreen = ({ logout }) => (
  <Layout>
    <PageTitle>Home Screen</PageTitle>
    <Link title="Logout" onPress={logout} />
  </Layout>
);

const signOutAsync = navigation => async () => {
  try {
    await AsyncStorage.removeItem(config.userToken);
  } catch (error) {
    console.error(error);
  }
  navigation.navigate(RootRoute.Auth);
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: signOutAsync(ownProps.navigation)
});

export default connect(null, mapDispatchToProps)(HomeScreen);
