import StorybookUI from "./storybook";
import App from "./src";
// @flow
const isStorybook = process.env.REACT_NATIVE_STORYBOOK || false;

module.exports = isStorybook ? require("./storybook") : require("./src");
