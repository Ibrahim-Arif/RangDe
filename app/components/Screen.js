import React from "react";
import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";

function Screen({ children, style, ...otherProps }) {
  return (
    <SafeAreaView style={[styles.container, style]} {...otherProps}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 5 : 0,
    flex: 1,
  },
});

export default Screen;
