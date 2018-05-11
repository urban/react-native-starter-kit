// @flow
import { connect } from "react-redux";

import Route from "../router";
import ChangePasswordScreen from "./ChangePasswordScreen";

const mapDispatchToProps = (dispatch, ownProps) => ({
  navigateToLogin: () => ownProps.navigation.navigate(Route.Login)
});

export default connect(null, mapDispatchToProps)(ChangePasswordScreen);
