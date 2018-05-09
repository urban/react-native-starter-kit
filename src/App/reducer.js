// @flow
import { type NavigationState, type NavigationAction } from "react-navigation";

import { App, Route } from "./";
import { actionType as loginActionType } from "./Auth/reducer";

export const key = "app/navigation";

export default (state: NavigationState, action: NavigationAction) => {
  let nextState;
  switch (action.type) {
    case loginActionType.LoginSuccess:
      nextState = App.router.getStateForAction(
        App.router.getActionForPathAndParams(Route.Main),
        state
      );
      break;

    default:
      nextState = App.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
};
