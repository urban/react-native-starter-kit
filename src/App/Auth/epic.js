// @flow
import { ofType } from "redux-observable";
import { delay, filter, mapTo, tap } from "rxjs/operators";
import { actionType as t, action as a } from "./reducer";

const authEpic = action$ =>
  action$.pipe(
    ofType(t.Login),
    delay(1000),
    mapTo(a.loginSuccess()),
    tap(x => console.log(x))
  );

export default authEpic;
