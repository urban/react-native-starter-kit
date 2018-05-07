// @flow
import { ActivityIndicator, AsyncStorage, View } from "react-native";
import { type NavigationScreenProp } from "react-navigation";
import { connect } from "react-redux";

import config from "../../../config";
import { Route as RootRoute } from "../../";
import AuthLoadingScreen from "./AuthLoadingScreen";

// Fetch the token from storage then navigate to our appropriate place
const bootstrap = navigation => async () => {
  const userToken = await AsyncStorage.getItem(config.userToken);

  // This will switch to the App screen or Auth screen and this loading
  // screen will be unmounted and thrown away.
  navigation.navigate(userToken ? RootRoute.Main : RootRoute.Auth);
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  bootstrap: bootstrap(ownProps.navigation)
});

export default connect(null, mapDispatchToProps)(AuthLoadingScreen);
