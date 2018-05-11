// @flow
import { createStackNavigator } from "react-navigation";

import { AppEnvironment } from "@library";
import createReducers from "./reducer";
import epic from "./epic";
import AuthNavigator from "./AuthNavigator";

AppEnvironment.updateEnvironment({
  epic,
  reducers: createReducers()
});

export { default as AuthLoading } from "./AuthLoading";

export default AuthNavigator;
