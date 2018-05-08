// @flow
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";

import { Reducers } from "../reducers";

// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
const navKey = "root";
const middleware = createReactNavigationReduxMiddleware(
  navKey,
  // $FlowFixMe
  state => state[Reducers.navigation]
);

const addListener = createReduxBoundAddListener(navKey);

export { middleware, addListener };
