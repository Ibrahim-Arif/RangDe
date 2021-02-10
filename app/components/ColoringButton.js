import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";

import colors from "../config/colors";
import Icon from "../components/Icon";

function ColoringButton({ title, value, onIncrement, onDecrement }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.detailContainer}>
        <Icon
          IconComponent={
            <Entypo name="plus" size={24} color={colors.primary} />
          }
          onPress={onIncrement}
        />
        <Text style={styles.text}>{value}</Text>
        <Icon
          IconComponent={
            <Entypo name="minus" size={24} color={colors.primary} />
          }
          onPress={onDecrement}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "60%",
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: colors.black,
    width: "35%",
    textAlign: "center",
  },
  title: {
    fontSize: 22,
  },
});
export default ColoringButton;
