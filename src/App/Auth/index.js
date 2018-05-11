// @flow
import { createStackNavigator } from "react-navigation";

import { AppEnvironment, Environment } from "@library";
import createReducers from "./reducer";
import epic from "./epic";
import ChangePassword from "./ChangePassword";
import FrontDoor from "./FrontDoor";
import ForgotPassword from "./ForgotPassword";
import Login from "./Login";
import Register from "./Register";
import AuthLoading from "./AuthLoading";

const env = Environment({
  epic,
  reducers: createReducers()
});

AppEnvironment.updateEnvironment(env);

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
