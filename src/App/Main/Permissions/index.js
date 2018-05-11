// @flow
import * as React from "react";
import { Button, View, Text } from "react-native";
import { Permissions } from "expo";
import { connect } from "react-redux";

import PermissionsScreen from "./Permissions";
import { action } from "../reducer";

const mapDispatchToProps = (dispatch, ownProps) => ({
  getPermissions: async () => {
    debugger;
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    status === "granted"
      ? dispatch(action.permissionsGranted())
      : dispatch(action.permissionsDenied());
  }
});

export default connect(null, mapDispatchToProps)(PermissionsScreen);
