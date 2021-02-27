import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import SavedColors from "../assets/SavedColors";
import ColorItem from "../components/ColorItem";

function ColorsScreen({ route, navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-around",
          marginVertical: 5,
        }}
        data={SavedColors}
        renderItem={({ item }) => (
          <ColorItem
            color={item.color}
            navigation={navigation}
            setColor={route.params.setColor}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 10,
  },
});
export default ColorsScreen;
