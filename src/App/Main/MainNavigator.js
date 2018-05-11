// @flow
import { createStackNavigator } from "react-navigation";

import Route from "./router";
import CameraScreen from "./Camera";
import GalleryScreen from "./Gallery";
import HomeScreen from "./Home";
import PermissionsScreen from "./Permissions";
// import VideoPlayerScreen from "./VideoPlayer";

const MainNavigator = createStackNavigator(
  {
    [Route.Camera]: {
      screen: CameraScreen
    },
    [Route.Gallery]: {
      screen: GalleryScreen
    },
    [Route.Home]: {
      screen: HomeScreen
    },
    [Route.Permissions]: {
      screen: PermissionsScreen
    } //,
    // [Route.VideoPlayer]: {
    //   screen: VideoPlayerScreen
    // }
  },
  {
    initialRouteName: Route.Permissions
  }
);

export default MainNavigator;
