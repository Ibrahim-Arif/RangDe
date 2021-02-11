import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function ColorItem({ color, setColor, navigation }) {
  console.log(navigation);
  const { red, green, blue } = color;

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: `rgb(${red}, ${green}, ${blue})` },
      ]}
      onPress={() => {
        setColor(color);
        navigation.navigate("Home");
      }}
    >
      <Text style={styles.text}>{`rgb(${red}, ${green}, ${blue})`}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "45%",
    height: 80,
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    color: "#fff",
    marginLeft: 5,
  },
});
export default ColorItem;
