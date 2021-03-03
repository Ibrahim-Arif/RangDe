import { TouchableNativeFeedback, StyleSheet, Text, View } from "react-native";
import React from "react";

function MyButton({
  title = "Button",
  onPress,
  style,
  titleStyle,
  color = "#000",
}) {
  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple("skyblue", false, 55)}
      onPress={onPress}
    >
      <View style={[styles.container, { backgroundColor: color }, style]}>
        <Text style={[styles.text, titleStyle]}>{title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 25,
    justifyContent: "center",
    height: 55,
    width: "100%",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});

export default MyButton;
