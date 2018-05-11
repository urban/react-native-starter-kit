// @flow
import * as React from "react";
import { FileSystem, Permissions } from "expo";
import { RefreshControl, ScrollView, View } from "react-native";
import { ListItem } from "react-native-elements";

import "@expo/vector-icons";

type Props = {
  recordings: {
    [string]: string
  },
  navigateToRecording: (recordingKey: string) => void
};

export default class Gallary extends React.Component<Props> {
  render() {
    const { recordings } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
          {Object.entries(recordings).map(([key, uri], i) => (
            <ListItem
              key={i}
              title={uri}
              leftIcon={{ name: "camera" }}
              onPress={() => this.props.navigateToRecording(key)}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}
