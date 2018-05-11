// @flow
import { type Reducer } from "redux";

import Service, { type ServiceT } from "./Service";

// TODO: replace * w/ types
type Reducers = { [string]: Reducer<*, *> };

export type EnvironmentT = {
  +apiService: ServiceT,
  +epic?: *,
  +reducers: Reducers
};

type Props = {
  apiService?: ServiceT,
  epic?: *,
  reducers?: Reducers
};

const initialReducers = {};

export default ({
  apiService = Service(),
  epic,
  reducers = initialReducers
}: Props): EnvironmentT => ({
  apiService,
  epic,
  reducers
});
