import { StackNavigator } from "react-navigation";

import Home from "./Home";

export const Route = {
  Home: "Home"
};

const MainNavigator = StackNavigator({
  [Route.Home]: {
    screen: Home
  }
});

export default MainNavigator;
