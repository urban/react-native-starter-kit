// @flow
import * as React from "react";
import { Text } from "react-native";
import { Input } from "react-native-elements";

type Props = {
  error?: string,
  label: string,
  placeholder: string,
  secureTextEntry?: boolean
};

export default ({ label, error, ...props }: Props) => (
  <React.Fragment>
    <Text>{label}</Text>
    <Input {...props} />
  </React.Fragment>
);
