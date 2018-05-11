// @flow
import { connect } from "react-redux";

import GalleryScreen from "./Gallery";
import { action, key } from "../reducer";

const mapStateToProps = state => ({
  recordings: state[key].recordings
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  navigateToRecording: recordingKey => {
    dispatch(action.navigateToRecording(recordingKey));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GalleryScreen);
