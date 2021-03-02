import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import ColorItem from "../components/ColorItem";
import useSaved from "../hooks/useSaved";

const handleLongPress = ({ color }) => {
  AsyncStorage.removeItem(JSON.stringify(color));
};

function ColorsScreen({ navigation }) {
  const { data } = useSaved();

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-around",
          marginVertical: 5,
        }}
        data={data}
        renderItem={({ item }) => (
          <ColorItem
            color={item.color}
            navigation={navigation}
            onLongPress={() => handleLongPress(item)}
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
