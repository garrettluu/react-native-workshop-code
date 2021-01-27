import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  View,
  Button,
} from "react-native";
import Note from "../components/Note";
import { getAllData } from "../storage";

export default function Home({ navigation }) {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    getAllData().then((data) => {
      setNotes(
        data.map((note) => {
          return (
            <Note
              title={note[0]}
              content={note[1]}
              onClick={() => {
                navigation.navigate("EditNote", {
                  title: note[0],
                  content: note[1],
                });
              }}
            />
          );
        }),
      );
    });
  });
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>My Notes</Text>
          <Button
            title='New Note'
            onPress={() => {
              navigation.navigate("EditNote");
            }}
          />
          {notes}
          <StatusBar style='auto' />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
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
