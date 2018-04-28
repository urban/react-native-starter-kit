import StorybookUI from "./storybook";
import App from "./src";

const isStorybook = process.env.REACT_NATIVE_STORYBOOK || false;

module.exports = isStorybook ? StorybookUI : App;
