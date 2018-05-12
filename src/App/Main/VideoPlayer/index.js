// @flow
import { connect } from "react-redux";

import VideoPlayerScreen from "./VideoPlayer";
import { action, key } from "../reducer";

const mapStateToProps = (state, ownProps) => {
  const { selectedRecording, recordings } = state[key];
  debugger;
  return {
    uri: recordings[selectedRecording]
  };
};

export default connect(mapStateToProps, null)(VideoPlayerScreen);
