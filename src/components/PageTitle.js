// @flow
import * as React from "react";
import { StyleSheet, Text } from "react-native";

type Props = {
  children: string
};

export default ({ children }: Props) => <Text>{children}</Text>;

// const styles = StyleSheet.create({});
