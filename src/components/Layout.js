// @flow
import * as React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

import { themes } from "@styles";
import { ThemeConsumer } from "./ThemeContext";

export const Theme = {
  dark: "dark",
  light: "light"
};

const BarStyle = {
  dark: "light-content",
  light: "dark-content"
};

type Props = {
  children: React.Node,
  theme?: $Keys<typeof Theme>
};

export default ({ children, theme: bgColor = Theme.light }: Props) => (
  <ThemeConsumer>
    {theme => {
      const { colors } = themes[theme];
      const style = {
        backgroundColor: colors[bgColor] || colors[Theme.light]
      };
      return (
        <SafeAreaView style={[styles.base, style]}>
          <StatusBar barStyle={BarStyle[bgColor] || BarStyle[Theme.light]} />
          {children}
        </SafeAreaView>
      );
    }}
  </ThemeConsumer>
);

const styles = StyleSheet.create({
  base: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start"
  }
});
