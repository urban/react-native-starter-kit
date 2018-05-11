// @flow
import { type Reducer } from "redux";

type State = {
  +permissions: {
    +camera: boolean
  }
};

type Action = {
  +type: $Values<typeof actionType>
};

export const initialState: State = {
  permissions: {
    camera: false
  }
};

export const key = "app/main";

const createActionName = name => `app/${key}/${name}`;

const t = {
  PermissionsGranted: createActionName("PermissionsGranted"),
  PermissionsDenied: createActionName("PermissionsDenied")
};

export const actionType = t;

export const action = {
  permissionsGranted: () => ({ type: t.PermissionsGranted }),
  permissionsDenied: () => ({ type: t.PermissionsDenied })
};

export const reducer: Reducer<State, Action> = (
  state: State = initialState,
  action: Action
) => {
  switch (action.type) {
    case t.PermissionsGranted:
      return { ...state, permissions: { ...state.permissions, camera: true } };
    case t.PermissionsDenied:
      return { ...state, permissions: { ...state.permissions, camera: false } };
    default:
      return state;
  }
};

export default () => ({ [key]: reducer });
