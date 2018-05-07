// @flow
import * as React from "react";
import { ActivityIndicator, View } from "react-native";
import { type NavigationScreenProp } from "react-navigation";

import Layout from "../../../components/Layout";

type Props = {
  bootstrap: Function
};

class AuthLoadingScreen extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    props.bootstrap();
  }

  render() {
    return (
      <Layout>
        <ActivityIndicator />
      </Layout>
    );
  }
}

export default AuthLoadingScreen;
