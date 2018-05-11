// @flow
import * as React from "react";

import { Layout, Link, PageTitle } from "@components";

type Props = {
  logout: () => void
};

export default ({ logout }: Props) => (
  <Layout>
    <PageTitle>Home Screen</PageTitle>
    <Link title="Logout" onPress={logout} />
  </Layout>
);
