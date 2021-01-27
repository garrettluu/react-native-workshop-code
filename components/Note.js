import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";

export default function Note({ title, content, onClick }) {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "black",
    width: "100%",
    padding: 5,
  },
  h1: {
    fontSize: 24,
  },
});
