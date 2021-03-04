import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ColorItem from "../components/ColorItem";
import { useSavedd, useUpdateSavedd } from "../components/StateContext";

function ColorsScreen({ navigation }) {
  const saved = useSavedd();
  const setSaved = useUpdateSavedd();
  let i = 1;

  if (!saved.length) alert("empty!");

  return (
    <View style={styles.container}>
      <FlatList
        data={saved}
        keyExtractor={() => JSON.stringify(i++)}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-around",
          marginVertical: 5,
        }}
        renderItem={({ item }) => (
          <ColorItem
            color={item}
            navigation={navigation}
            onLongPress={() => setSaved(saved.filter((c) => c !== item))}
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
