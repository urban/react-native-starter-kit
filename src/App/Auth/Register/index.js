// @flow
import * as React from "react";
import { type NavigationScreenProp } from "react-navigation";
import { connect } from "react-redux";

import { Route } from "../";
import Layout from "../../../components/Layout";
import PageTitle from "../../../components/PageTitle";
import Link from "../../../components/Link";

type Props = {
  navigateToFrontDoor: Function,
  navigateToForgotPassword: Function
};

const RegisterScreen = ({
  navigateToFrontDoor,
  navigateToForgotPassword
}: Props) => (
  <Layout>
    <PageTitle>Register Screen</PageTitle>
    <Link title="Register" onPress={navigateToFrontDoor} />
    <Link title="Forgot Password?" onPress={navigateToForgotPassword} />
  </Layout>
);

const mapDispatchToProps = (dispatch, ownProps) => ({
  navigateToFrontDoor: () => ownProps.navigation.navigate(Route.FrontDoor),
  navigateToForgotPassword: () =>
    ownProps.navigation.navigate(Route.ForgotPassword)
});

export default connect(null, mapDispatchToProps)(RegisterScreen);
