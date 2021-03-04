import { TouchableNativeFeedback, StyleSheet, Text, View } from "react-native";
import React from "react";

function MyButton({
  title = "Button",
  onPress,
  style,
  titleStyle,
  color = "#000",
  rippleColor = "#898989",
}) {
  return (
    <View style={[styles.container, { backgroundColor: color }, style]}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple(rippleColor)}
        onPress={onPress}
      >
        <View style={styles.container}>
          <Text style={[styles.text, titleStyle]}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 25,
    justifyContent: "center",
    height: 55,
    width: "100%",
    overflow: "hidden",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});

export default MyButton;
