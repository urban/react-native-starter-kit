// @flow
import * as React from "react";
import { ActivityIndicator } from "react-native";

import { Layout } from "@components/";

type Props = {
  getPermissions: () => void
};

export default class extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    props.getPermissions();
  }

  render() {
    return (
      <Layout>
        <ActivityIndicator />
      </Layout>
    );
  }
}
