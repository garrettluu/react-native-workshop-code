import React, { useState } from "react";
import { StyleSheet, SafeAreaView, Button, TextInput } from "react-native";
import { saveData } from "../storage";

export default function EditNote({ navigation }) {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
  },
});
