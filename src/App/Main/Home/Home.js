// @flow
import * as React from "react";

import { Layout, Link, PageTitle } from "@components";

type Props = {
  logout: () => void,
  navigateToCamera: () => void,
  navigateToGallery: () => void
};

export default ({ logout, navigateToCamera, navigateToGallery }: Props) => (
  <Layout>
    <PageTitle>Home Screen</PageTitle>
    <Link title="Camera" onPress={navigateToCamera} />
    <Link title="Gallery" onPress={navigateToGallery} />
    <Link title="Logout" onPress={logout} />
  </Layout>
);
