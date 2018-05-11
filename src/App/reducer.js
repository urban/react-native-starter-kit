// @flow
import { type Reducer } from "redux";
import { NavigationActions } from "react-navigation";

import { App, Route as RootRoute } from "./";
import { actionType as loginActionType } from "./Auth/reducer";
import MainRoute from "./Main/router";
import { actionType as mainActionType } from "./Main/reducer";

export const key = "app/navigation";

// const initialAction = { type: NavigationActions.INIT };
// const initialState = App.router.getStateForAction(initialAction);

export const reducer: Reducer<*, *> = (state: *, action: *) => {
  let nextState;
  switch (action.type) {
    case loginActionType.LoginSuccess:
      nextState = App.router.getStateForAction(
        // $FlowFixMe
        App.router.getActionForPathAndParams(RootRoute.Main),
        state
      );
      break;

    case mainActionType.PermissionsGranted:
      nextState = App.router.getStateForAction(
        // $FlowFixMe
        App.router.getActionForPathAndParams(MainRoute.Home),
        state
      );
      // replace
      const { index } = nextState;
      nextState.routes.splice(index - 1, 1);
      nextState.index--;
      break;

    default:
      nextState = App.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
};

export default () => ({ [key]: reducer });
