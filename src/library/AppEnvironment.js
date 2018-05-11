// @flow
import { registry } from "./redux";
import Environment, { type EnvironmentT } from "./Environment";

const last = xs => xs[xs.length - 1];

/**
 * A global stack that captures the current state of global objects that the app wants access to.
 */
export default class AppEnvironment {
  static _stack: Array<EnvironmentT> = [Environment({})];
  static _registry = registry;

  static current(): EnvironmentT {
    return last(AppEnvironment._stack);
  }

  static updateEnvironment(env: EnvironmentT) {
    // AppEnvironment.saveEnvironment(env);
    AppEnvironment._stack.push(env);
    AppEnvironment._registry.registerReducers(env.reducers);
    if (env.epic) {
      AppEnvironment._registry.registerEpic(env.epic);
    }
  }

  static store() {
    return AppEnvironment._registry.createStore();
  }

  // // Push a new environment onto the stack.
  // static pushEnvironment(env: EnvironmentT) {
  //   AppEnvironment.saveEnvironment(env);
  //   AppEnvironment._stack.push(env);
  // }

  // // Pop an environment off the stack.
  // static popEnvironment() {
  //   const last = AppEnvironment._stack.pop();
  //   const next: EnvironmentT = AppEnvironment.current() || Environment({});
  //   AppEnvironment.saveEnvironment(next);
  //   return last;
  // }

  // // Replace the current environment with a new environment.
  // static replaceCurrentEnvironment(env: EnvironmentT) {
  //   AppEnvironment.pushEnvironment(env);
  //   AppEnvironment._stack.splice(-2, 1);
  // }

  // static saveEnvironment(env: EnvironmentT) {}
}
