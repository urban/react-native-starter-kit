// @flow
import * as React from "react";
import { Button } from "react-native-elements";

import themes from "../styles/themes";
import { ThemeConsumer } from "../utils/ThemeContext";

type Props = {
  title: string,
  onPress: Function
};

export const PrimaryButton = (props: Props) => (
  <ThemeConsumer>
    {theme => {
      const { colors } = themes[theme];
      return (
        <Button
          {...props}
          buttonStyle={{
            backgroundColor: colors.primary,
            borderRadius: 0
          }}
          containerStyle={{
            flex: 1
          }}
        />
      );
    }}
  </ThemeConsumer>
);

export const SecondaryButton = (props: Props) => (
  <ThemeConsumer>
    {theme => {
      const { colors } = themes[theme];
      return (
        <Button
          {...props}
          titleStyle={{
            color: colors.dark
          }}
          buttonStyle={{
            backgroundColor: colors.light,
            borderRadius: 0
          }}
          containerStyle={{
            flex: 1
          }}
        />
      );
    }}
  </ThemeConsumer>
);
