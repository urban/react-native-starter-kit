// @flow
import React from "react";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Link from "./Link";

storiesOf("Button/Link", module).add("default", () => (
  <Link title="Hello React" onPress={action("clicked-text")} />
));
