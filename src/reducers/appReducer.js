// @flow
import { name, version } from "../../package.json";

type Action = {
  +type: string,
  payload?: any
};

type State = {
  name: string,
  version: string
};

const initialState: State = {
  name,
  version
};

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};
