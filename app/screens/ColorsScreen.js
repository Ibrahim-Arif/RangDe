import React from "react";
import { FlatList, StyleSheet, View, TouchableOpacity } from "react-native";

import SavedColors from "../assets/SavedColors";
import ColorItem from "../components/ColorItem";
import colors from "../config/colors";

function ColorsScreen({ onClose, setColor }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClose}>
        <View style={styles.backIcon} />
      </TouchableOpacity>

      <FlatList
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-around",
          marginVertical: 5,
        }}
        data={SavedColors}
        renderItem={({ item }) => (
          <ColorItem color={item.color} setColor={setColor} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backIcon: {
    backgroundColor: colors.darkgrey,
    width: 25,
    height: 5,
    borderRadius: 10,
    marginVertical: 10,
    alignSelf: "center",
    marginBottom: 30,
  },
});
export default ColorsScreen;
