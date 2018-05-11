// @flow
import { createStackNavigator } from "react-navigation";

import Route from "./router";
import HomeScreen from "./Home";
import PermissionsScreen from "./Permissions";

const MainNavigator = createStackNavigator(
  {
    [Route.Home]: {
      screen: HomeScreen
    },
    [Route.Permissions]: {
      screen: PermissionsScreen
    }
  },
  {
    initialRouteName: Route.Permissions
  }
);

export default MainNavigator;
