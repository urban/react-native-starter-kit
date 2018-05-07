// @flow

type State = {
  +isLoggedIn: boolean
};

export const initialState: State = { isLoggedIn: false };

const Login: "Login" = "Login";
const Logout: "Logout" = "Logout";
const Register: "Register" = "Register";
const RegisterSuccess: "RegisterSuccess" = "RegisterSuccess";
const NavigateToForgotPassword: "NavigateToForgotPassword" =
  "NavigateToForgotPassword";

export const actions = {
  login: () => ({ type: Login }),
  logout: () => ({ type: Logout }),
  register: () => ({ type: Register }),
  registerSuccess: () => ({ type: RegisterSuccess }),
  navigateToForgotPassword: () => ({ type: NavigateToForgotPassword })
};

export type Action = {
  +type:
    | typeof Login
    | typeof Logout
    | typeof Register
    | typeof RegisterSuccess
    | typeof NavigateToForgotPassword
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case Login:
      return { ...state, isLoggedIn: true };

    case Logout:
      return { ...state, isLoggedIn: false };

    case RegisterSuccess:
      return { ...state, isLoggedIn: true };

    default:
      return state;
  }
};

export default reducer;
