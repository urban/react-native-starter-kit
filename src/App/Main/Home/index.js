// @flow
import * as React from "react";
import { AsyncStorage } from "react-native";
import { type NavigationScreenProp } from "react-navigation";
import { connect } from "react-redux";

import config from "../../../config";
import { App, Route as RootRoute } from "@app";
import Route from "../router";
import HomeScreen from "./Home";

const signOutAsync = navigation => async () => {
  try {
    await AsyncStorage.removeItem(config.userToken);
  } catch (error) {
    console.error(error);
  }
  navigation.navigate(RootRoute.Auth);
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: signOutAsync(ownProps.navigation),
  navigateToCamera: () =>
    dispatch(App.router.getActionForPathAndParams(Route.Camera)),
  navigateToGallery: () =>
    dispatch(App.router.getActionForPathAndParams(Route.Gallery))
});

export default connect(null, mapDispatchToProps)(HomeScreen);
