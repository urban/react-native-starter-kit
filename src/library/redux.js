// @flow
import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  type Store
} from "redux";
import storage from "redux-persist/lib/storage";
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";
import { combineEpics, createEpicMiddleware, ofType } from "redux-observable";
import { BehaviorSubject, Observable } from "rxjs";
import { mergeMap, tap } from "rxjs/operators";
import { persistReducer } from "redux-persist";
import { type Reducer } from "redux";

// TODO: fix me!!!!
import { key } from "@app/reducer";

// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
const navKey = "root";
const navigationMiddleware = createReactNavigationReduxMiddleware(
  navKey,
  // $FlowFixMe
  state => state[key]
);

export const addListener = createReduxBoundAddListener(navKey);

// TODO: Add to Environment
export const persistConfig = {
  key: "root",
  storage
};

export const persistedReducer = (reducer: Reducer<*, *>): Reducer<*, *> =>
  // $FlowFixMe
  persistReducer(persistConfig, reducer);

const initialReducers = {};
const initialEpic = action$ =>
  action$.pipe(ofType("FIZZBUZZ"), mergeMap(() => Observable.empty()));

class Registry {
  _emitChange: ?Function;
  _reducers: Object;
  _epic$: any;
  _middleware: Array<Function> = [navigationMiddleware];
  _store: ?Store<*, *>;

  constructor() {
    this._emitChange = null;
    this._reducers = initialReducers;
    this._epic$ = new BehaviorSubject(initialEpic);
    const rootEpic = (action$, store) =>
      this._epic$.pipe(mergeMap(epic => epic(action$, store)));
    this._middleware.push(createEpicMiddleware(rootEpic));
  }

  registerReducers(reducers: { [string]: Function }) {
    this._reducers = {
      ...this._reducers,
      ...reducers
    };

    if (this._store) {
      this._store.replaceReducer(combineReducers(this._reducers));
    }
  }

  registerEpic(epic: ?any) {
    this._epic$.next(epic);
  }

  createStore() {
    if (this._store) {
      return this._store;
    }

    /* eslint-disable no-underscore-dangle */
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    this._store = createStore(
      combineReducers(this._reducers),
      composeEnhancers(applyMiddleware(...this._middleware))
    );
    /* eslint-enable */
    // $FlowFixMe
    if (module.hot) {
      // $FlowFixMe
      module.hot.accept(() => {
        if (this._store) {
          this._store.replaceReducer(combineReducers(this._reducers));
        }
      });
    }

    return this._store;
  }
}

export const registry = new Registry();
