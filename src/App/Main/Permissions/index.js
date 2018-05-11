// @flow
import { Permissions } from "expo";
import { connect } from "react-redux";

import PermissionsScreen from "./Permissions";
import { action } from "../reducer";

const mapDispatchToProps = (dispatch, ownProps) => ({
  getPermissions: async () => {
    const permissions = await Promise.all([
      Permissions.askAsync(Permissions.CAMERA),
      Permissions.askAsync(Permissions.AUDIO_RECORDING)
    ]);
    const isGranted = permissions.every(({ status }) => status === "granted");
    isGranted
      ? dispatch(action.permissionsGranted())
      : dispatch(action.permissionsDenied());
  }
});

export default connect(null, mapDispatchToProps)(PermissionsScreen);
