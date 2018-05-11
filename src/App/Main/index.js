// @flow
import { createStackNavigator } from "react-navigation";

import { AppEnvironment } from "@library";
import createReducers from "./reducer";
import MainNavigator from "./MainNavigator";

AppEnvironment.updateEnvironment({
  reducers: createReducers()
});

export default MainNavigator;
