// @flow
import { connect } from "react-redux";

import { Route } from "../";
import ForgotPasswordScreen from "./ForgotPasswordScreen";

const mapDispatchToProps = (dispatch, ownProps) => ({
  navigateToChangePassword: () =>
    ownProps.navigation.navigate(Route.ChangePassword)
});

export default connect(null, mapDispatchToProps)(ForgotPasswordScreen);
