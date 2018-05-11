// @flow
import { type Reducer } from "redux";

type State = {
  +permissions: {
    +camera: boolean
  },
  +recordings: {
    [string]: string
  }
};

type Action = {
  +type: $Values<typeof actionType>
};

export const initialState: State = {
  permissions: {
    camera: false
  },
  recordings: {}
};

export const key = "app/main";

const createActionName = name => `app/${key}/${name}`;

const t = {
  PermissionsGranted: createActionName("PermissionsGranted"),
  PermissionsDenied: createActionName("PermissionsDenied"),
  NewRecording: createActionName("NewRecording"),
  NavigateToRecording: createActionName("NavigateToRecording")
};

export const actionType = t;

export const action = {
  permissionsGranted: () => ({ type: t.PermissionsGranted }),
  permissionsDenied: () => ({ type: t.PermissionsDenied }),
  newRecording: (createdAt: string, uri: string) => ({
    type: t.NewRecording,
    payload: { [createdAt]: uri }
  }),
  navigateToRecording: recordingKey => ({
    type: t.NavigateToRecording,
    payload: recordingKey
  })
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

    case t.NewRecording:
      return {
        ...state,
        recordings: { ...state.recordings, ...action.payload }
      };

    default:
      return state;
  }
};

export default () => ({ [key]: reducer });
