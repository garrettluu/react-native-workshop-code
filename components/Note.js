import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";

export default function Note({ title, content, onClick, key }) {
  return (
    <View style={styles.container} onPress={onClick}>
      <Text style={styles.h1}>{title}</Text>
      <Text>{content}</Text>
      <Button title='Edit note' onPress={onClick} />
    </View>
  );
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
