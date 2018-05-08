// @flow
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";

import { key } from "../App/reducer";
// import { BehaviorSubject } from "rxjs/BehaviorSubject";
// import { createEpicMiddleware } from "redux-observable";

// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
const navKey = "root";
const navigationMiddleware = createReactNavigationReduxMiddleware(
  navKey,
  // $FlowFixMe
  state => state[key]
);

// const epic$ = new BehaviorSubject();

export const middleware = [navigationMiddleware];

export const addListener = createReduxBoundAddListener(navKey);

// TODO: Add to Environment
const config = {
  key: "root",
  storage
};

class Registry {
  _emitChange: ?Function;
  _reducers: Object;

  constructor() {
    this._emitChange = null;
    this._reducers = {};
  }

  getReducers() {
    return { ...this._reducers };
  }

  register(name: string, reducer: Function, persist: ?boolean = false) {
    this._reducers = {
      ...this._reducers,
      [name]: persist ? persistReducer(config, reducer) : reducer
    };
    // $FlowFixMe
    this._emitChange && this._emitChange(this.getReducers());
  }

  setChangeListener(listener: Function) {
    this._emitChange = listener;
  }
}

export const registry = new Registry();
