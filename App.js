import React from "react";
import { StyleSheet, View } from "react-native";

import ColorsScreen from "./app/screens/ColorsScreen";
import MainScreen from "./app/screens/MainScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <MainScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
