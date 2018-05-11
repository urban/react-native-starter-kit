// @flow
import { type Reducer } from "redux";
import { NavigationActions } from "react-navigation";

import { App, Route } from "./";
import { actionType as loginActionType } from "./Auth/reducer";

export const key = "app/navigation";

// const initialAction = { type: NavigationActions.INIT };
// const initialState = App.router.getStateForAction(initialAction);

export const reducer: Reducer<*, *> = (state: *, action: *) => {
  let nextState;
  switch (action.type) {
    case loginActionType.LoginSuccess:
      nextState = App.router.getStateForAction(
        // $FlowFixMe
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

export default () => ({ [key]: reducer });
