// @flow
import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Camera, Constants, FileSystem } from "expo";
import isIPhoneX from "react-native-is-iphonex";

import { FlipButton as Button } from "@components/Buttons";
import { Face, Landmarks } from "@components";

const last = xs => xs[xs.length - 1];

const flashModeOrder = {
  off: "on",
  on: "auto",
  auto: "torch",
  torch: "off"
};

type Props = {
  newRecording: (createdAt: string, uri: string) => void
};

class CameraScreen extends React.Component<Props, *> {
  static navigationOptions = {
    title: "Camera"
  };

  state = {
    flash: "off",
    zoom: 0,
    autoFocus: "on",
    depth: 0,
    type: "front",
    whiteBalance: "auto",
    ratio: "16:9",
    ratios: [],
    faces: [],
    isRecording: false
  };

  getRatios = async () => {
    const ratios = await this.camera.getSupportedRatios();
    return ratios;
  };

  toggleFacing = () => {
    this.setState(({ type }) => ({
      type: type === "back" ? "front" : "back"
    }));
  };

  toggleFlash = () => {
    this.setState(({ flash }) => ({
      flash: flashModeOrder[flash]
    }));
  };

  setRatio = ratio => {
    this.setState(() => ({
      ratio
    }));
  };

  setFocusDepth = depth => {
    this.setState(() => ({
      depth
    }));
  };

  startRecording = () => {
    this.setState(() => ({ isRecording: true }), this.record);
  };

  record = async () => {
    if (this.camera) {
      this.camera
        .recordAsync({
          quality: "720p",
          maxDuration: 3 * 60 // in seconds
        })
        .then(({ uri }) => {
          this.setState(
            prevState => ({
              ...prevState,
              isRecording: false
            }),
            () => {
              this.props.newRecording(new Date().toISOString(), uri);
            }
          );
        })
        .catch(error => {
          console.log(`Camera Error: ${error}`);
        });
    }
  };

  stopRecording = () => {
    if (this.camera) {
      this.camera.stopRecording();
    }
  };

  onFacesDetected = ({ faces }) => this.setState(() => ({ faces }));
  onFaceDetectionError = state => console.warn("Faces detection error:", state);

  renderFaces() {
    const { faces } = this.state;
    return (
      <View style={styles.facesContainer} pointerEvents="none">
        {faces.map(({ bounds, faceID, rollAngle, yawAngle }) => (
          <Face key={faceID} {...{ bounds, faceID, rollAngle, yawAngle }} />
        ))}
      </View>
    );
  }

  renderLandmarks() {
    const { faces } = this.state;
    return (
      <View style={styles.facesContainer} pointerEvents="none">
        {faces.map(face => <Landmarks key={face.faceID} face={face} />)}
      </View>
    );
  }

  render() {
    const { isRecording } = this.state;
    return (
      <Camera
        ref={ref => {
          this.camera = ref;
        }}
        style={{
          flex: 1,
          justifyContent: "space-between"
        }}
        type={this.state.type}
        flashMode={this.state.flash}
        autoFocus={this.state.autoFocus}
        ratio={this.state.ratio}
        faceDetectionLandmarks={Camera.Constants.FaceDetection.Landmarks.all}
        onFacesDetected={this.onFacesDetected}
        onFaceDetectionError={this.onFaceDetectionError}
      >
        <View
          style={{
            flex: 0.5,
            backgroundColor: "transparent",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: Constants.statusBarHeight / 2
          }}
        >
          <Button text="FLIP" onPress={this.toggleFacing} />
          <Button
            text={`FLASH: ${this.state.flash}`}
            onPress={this.toggleFlash}
          />
        </View>
        <View
          style={{
            flex: 0.1,
            paddingBottom: isIPhoneX ? 20 : 0,
            backgroundColor: "transparent",
            flexDirection: "row",
            alignSelf: "center"
          }}
        >
          {isRecording ? (
            <Button
              icon={"stop"}
              style={{ backgroundColor: "red" }}
              onPress={this.stopRecording}
            />
          ) : (
            <Button icon={"circle"} onPress={this.startRecording} />
          )}
        </View>
        {this.renderFaces()}
        {this.renderLandmarks()}
      </Camera>
    );
  }
}

export default CameraScreen;

const styles = StyleSheet.create({
  facesContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    top: 0
  }
});
