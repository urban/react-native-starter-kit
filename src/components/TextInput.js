import * as React from "react";
import { Text } from "react-native";
import { Input } from "react-native-elements";

export default ({ label, error, ...props }) => (
  <React.Fragment>
    <Text>{label}</Text>
    <Input {...props} />
  </React.Fragment>
);
