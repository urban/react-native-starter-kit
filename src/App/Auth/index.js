// @flow
import { createStackNavigator } from "react-navigation";

import { registry } from "../../utils/redux";
import reducer, { key } from "./reducer";
import ChangePassword from "./ChangePassword";
import FrontDoor from "./FrontDoor";
import ForgotPassword from "./ForgotPassword";
import Login from "./Login";
import Register from "./Register";
import AuthLoading from "./AuthLoading";

registry.register(key, reducer, true);

export { default as AuthLoading } from "./AuthLoading";

export const Route = {
  ChangePassword: "ChangePassword",
  FrontDoor: "FrontDoor",
  ForgotPassword: "ForgotPassword",
  Login: "Login",
  Register: "Register",
  AuthLoading: "Connecting"
};

export default createStackNavigator(
  {
    [Route.ChangePassword]: {
      screen: ChangePassword
    },
    [Route.FrontDoor]: {
      screen: FrontDoor
    },
    [Route.ForgotPassword]: {
      screen: ForgotPassword
    },
    [Route.Login]: {
      screen: Login
    },
    [Route.Register]: {
      screen: Register
    },
    [Route.AuthLoading]: {
      screen: AuthLoading
    }
  },
  {
    initialRouteName: Route.FrontDoor
  }
);
