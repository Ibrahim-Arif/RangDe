import React from "react";
import { StyleSheet, FlatList } from "react-native";

import Icon from "../components/Icon";
import Screen from "../components/Screen";
import PickerItem from "../components/PickerItem";

function MenuScreen({ data, onBack }) {
  return (
    <Screen style={styles.container}>
      <Icon
        name="menu"
        onPress={onBack}
        style={{ alignSelf: "flex-end", marginRight: 10 }}
      />

      <FlatList
        data={data}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <PickerItem title={item.title} onPress={item.onPress} />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "tomato",
  },
});
export default MenuScreen;
