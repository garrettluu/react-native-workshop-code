import React, { useState } from "react";
import { StyleSheet, SafeAreaView, Button, TextInput } from "react-native";
import { saveData } from "../storage";

export default function EditNote({ route, navigation }) {
  const [title, setTitle] = useState(route.params?.title ?? "");
  const [content, setContent] = useState(route.params?.content ?? "");
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.title}
        placeholder='Note Title'
        value={title}
        onChangeText={(text) => {
          setTitle(text);
        }}
      />
      <TextInput
        multiline
        placeholder='Note content'
        value={content}
        onChangeText={(text) => {
          setContent(text);
        }}
      />
      <Button
        title='Save'
        onPress={() => {
          saveData(title, content);
          navigation.goBack();
        }}
      />
    </SafeAreaView>
  );
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
