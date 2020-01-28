import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff",
  },
  welcome: {
    fontSize: 20,
    justifyContent: "center",
    textAlign: "center",
    margin: 10,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React native!</Text>
    </View>
  );
}
