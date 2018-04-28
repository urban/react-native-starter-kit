// @flow
import baseTheme, { NAME as BASE } from "./themes.base";

export type Theme = typeof BASE;

export default {
  [BASE]: baseTheme
};
