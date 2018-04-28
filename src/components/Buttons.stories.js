// @flow
import React from "react";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { PrimaryButton, SecondaryButton } from "./Buttons";

storiesOf("Button/Primary", module).add("default", () => (
  <PrimaryButton
    title="Hello Button"
    onPress={() => {
      action("clicked-text");
    }}
  />
));

storiesOf("Button/Secondary", module).add("default", () => (
  <SecondaryButton
    title="Hello Button"
    onPress={() => {
      action("clicked-text");
    }}
  />
));
