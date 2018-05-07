// @flow
import { connect } from "react-redux";

import { Route } from "../";
import RegisterScreen from "./RegisterScreen";

const mapDispatchToProps = (dispatch, ownProps) => ({
  navigateToFrontDoor: () => ownProps.navigation.navigate(Route.FrontDoor),
  navigateToForgotPassword: () =>
    ownProps.navigation.navigate(Route.ForgotPassword)
});

export default connect(null, mapDispatchToProps)(RegisterScreen);
