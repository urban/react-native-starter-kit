// @flow
import * as React from "react";
import { type NavigationScreenProp } from "react-navigation";
import { connect } from "react-redux";

import { Route } from "../";
import Layout from "../../../components/Layout";
import PageTitle from "../../../components/PageTitle";
import Link from "../../../components/Link";

type Props = {
  navigateToFrontDoor: Function
};

const ForgotPasswordScreen = ({ navigateToFrontDoor }: Props) => (
  <Layout>
    <PageTitle>Forgot Password Screen</PageTitle>
    <Link title="Send" onPress={navigateToFrontDoor} />
  </Layout>
);

const mapDispatchToProps = (dispatch, ownProps) => ({
  navigateToFrontDoor: () => ownProps.navigation.navigate(Route.FrontDoor)
});

export default connect(null, mapDispatchToProps)(ForgotPasswordScreen);
