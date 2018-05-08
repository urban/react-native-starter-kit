// @flow
import { createStackNavigator } from "react-navigation";

import Home from "./Home";

export const Route = {
  Home: "Home"
};

const MainNavigator = createStackNavigator({
  [Route.Home]: {
    screen: Home
  }
});

export default MainNavigator;
