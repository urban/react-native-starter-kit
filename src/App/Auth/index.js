import { StackNavigator } from "react-navigation";

import FrontDoor from "./FrontDoor";
import ForgotPassword from "./ForgotPassword";
import Login from "./Login";
import Register from "./Register";
import AuthLoading from "./AuthLoading";

export { default as AuthLoading } from "./AuthLoading";

export const Route = {
  FrontDoor: "FrontDoor",
  ForgotPassword: "ForgotPassword",
  Login: "Login",
  Register: "Register",
  AuthLoading: "Connecting"
};

const AuthNavigator = StackNavigator({
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
});

export default AuthNavigator;
