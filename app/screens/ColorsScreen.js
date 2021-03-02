import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ColorItem from "../components/ColorItem";
import useSaved from "../hooks/useSaved";

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
          <ColorItem color={item.color} navigation={navigation} />
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
