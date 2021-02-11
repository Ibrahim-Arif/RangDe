import React from "react";
import { StyleSheet, FlatList, View } from "react-native";

import Icon from "../components/Icon";
import PickerItem from "../components/PickerItem";

function MenuScreen({ data, onBack }) {
  return (
    <View style={styles.container}>
      <Icon
        name="menu"
        onPress={onBack}
        style={{ alignSelf: "flex-end", marginRight: 5 }}
      />

      <FlatList
        data={data}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <PickerItem title={item.title} onPress={item.onPress} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default MenuScreen;
