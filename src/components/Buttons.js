// @flow
import * as React from "react";
import { Button } from "react-native-elements";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { themes } from "@styles";
import { ThemeConsumer } from "./ThemeContext";

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

export const FlipButton = ({ icon, text, onPress = () => {}, style = {} }) => (
  <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
    {text ? <Text style={styles.text}>{text}</Text> : null}
    {icon ? <FontAwesome name={icon} size={15} color="white" /> : null}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    flex: 0.3,
    height: 40,
    marginHorizontal: 2,
    marginBottom: 10,
    marginTop: 20,
    padding: 5,
    backgroundColor: "#03A9F4",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 15
  }
});
