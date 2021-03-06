import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

function PickerItem({ title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 15,
    fontSize: 20,
    fontWeight: "bold",
    color: "#7a7a7a",
    textTransform: "capitalize",
  },
});

export default PickerItem;
