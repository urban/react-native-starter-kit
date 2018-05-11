// @flow
import { connect } from "react-redux";

import CameraScreen from "./Camera";
import { action } from "../reducer";

const mapDispatchToProps = (dispatch, ownProps) => ({
  newRecording: (...args) => {
    dispatch(action.newRecording(...args));
  }
});

export default connect(null, mapDispatchToProps)(CameraScreen);
