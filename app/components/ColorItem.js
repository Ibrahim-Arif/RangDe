import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useColors } from "../components/StateContext";

function ColorItem({ color, navigation, onLongPress }) {
  const { red, green, blue } = color;
  const { setRed, setGreen, setBlue } = useColors();

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: `rgb(${red}, ${green}, ${blue})` },
      ]}
      onPress={() => {
        setRed(red);
        setGreen(green);
        setBlue(blue);

        navigation.navigate("Home");
      }}
      onLongPress={onLongPress}
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
