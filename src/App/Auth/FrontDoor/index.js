// @flow
import { connect } from "react-redux";

import { Route } from "../";
import FrontDoorScreen from "./FrontDoorScreen";

const mapDispatchToProps = (dispatch, ownProps) => ({
  navigateToLogin: () => ownProps.navigation.navigate(Route.Login),
  navigateToRegister: () => ownProps.navigation.navigate(Route.Register)
});

export default connect(null, mapDispatchToProps)(FrontDoorScreen);
