// @flow

import { type Reducer } from "redux";
import { persistedReducer } from "../../utils/redux";

type State = {
  +isLoading: boolean,
  +isLoggedIn: boolean
};

type Action = {
  +type: $Values<typeof actionType>
};

export const initialState: State = {
  isLoading: false,
  isLoggedIn: false
};

export const key = "auth";

const createActionName = name => `app/${key}/${name}`;

const t = {
  Login: createActionName("Login"),
  LoginSuccess: createActionName("LoginSuccess"),
  LoginError: createActionName("LoginError"),
  Logout: createActionName("Logout"),
  Register: createActionName("Register"),
  RegisterSuccess: createActionName("RegisterSuccess"),
  NavigateToForgotPassword: createActionName("NavigateToForgotPassword")
};

export const actionType = t;

export const action = {
  login: () => ({ type: t.Login }),
  loginSuccess: () => ({ type: t.LoginSuccess }),
  loginError: () => ({ type: t.LoginError }),
  logout: () => ({ type: t.Logout }),
  register: () => ({ type: t.Register }),
  registerSuccess: () => ({ ttype: t.RegisterSuccess }),
  navigateToForgotPassword: () => ({ type: t.NavigateToForgotPassword })
};

export const reducer: Reducer<State, Action> = (
  state: State = initialState,
  action: Action
): State => {
  switch (action.type) {
    case t.Login:
      return { ...state, isLoading: true };

    case t.LoginSuccess:
      return { ...state, isLoading: false, isLoggedIn: true };

    case t.LoginError:
      return { ...state, isLoading: false, isLoggedIn: false };

    case t.Logout:
      return { ...state, isLoggedIn: false };

    case t.RegisterSuccess:
      return { ...state, isLoggedIn: true };

    default:
      return state;
  }
};

export default () => ({ [key]: persistedReducer(reducer) });
