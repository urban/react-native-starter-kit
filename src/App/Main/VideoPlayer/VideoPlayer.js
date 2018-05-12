// @flow
import * as React from "react";
import { View } from "react-native";
import { Constants, FileSystem, Video } from "expo";
import { FlipButton as Button } from "@components/Buttons";

type Props = {
  uri: string
};

type State = {
  paused: boolean
};

export default class VideoScreen extends React.Component<Props, State> {
  state: State = {
    paused: false
  };

  handleToggleVideo = () => {
    this.setState(({ paused }) => ({ paused: !paused }));
  };

  handleStopVideo = () => {
    this.setState(() => ({ paused: true }));
  };

  render() {
    const { uri } = this.props;
    const { paused } = this.state;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "transparent",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          paddingTop: Constants.statusBarHeight
        }}
      >
        <Video
          source={{ uri }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay={paused}
          useNativeControls
          style={{ flex: 1, width: "100%", height: "auto" }}
        />
        {/*
        <View
          style={{
            flex: 0.5,
            backgroundColor: "transparent",
            flexDirection: "row",
            justifyContent: "space-around",
            paddingTop: Constants.statusBarHeight / 2
          }}
        >
          <Button
            icon={paused ? "pause" : "play"}
            onPress={this.handleToggleVideo}
          />
          <Button icon="stop" onPress={this.handleStopVideo} />
        </View>
        */}
      </View>
    );
  }
}
