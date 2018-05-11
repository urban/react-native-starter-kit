// @flow
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

export default ({ bounds, faceID, rollAngle, yawAngle }) => (
  <View
    key={faceID}
    transform={[
      { perspective: 600 },
      { rotateZ: `${rollAngle.toFixed(0)}deg` },
      { rotateY: `${yawAngle.toFixed(0)}deg` }
    ]}
    style={[
      styles.face,
      {
        ...bounds.size,
        left: bounds.origin.x,
        top: bounds.origin.y
      }
    ]}
  >
    <Text style={styles.faceText}>ID: {faceID}</Text>
    <Text style={styles.faceText}>rollAngle: {rollAngle.toFixed(0)}</Text>
    <Text style={styles.faceText}>yawAngle: {yawAngle.toFixed(0)}</Text>
  </View>
);

const styles = StyleSheet.create({
  face: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 2,
    position: "absolute",
    borderColor: "#FFD700",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  faceText: {
    color: "#FFD700",
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
    backgroundColor: "transparent"
  }
});
