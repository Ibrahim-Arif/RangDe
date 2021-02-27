import React, { useState, useEffect } from "react";
import { FlatList, RefreshControl, StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import ColorItem from "../components/ColorItem";

function ColorsScreen({ navigation }) {
  const [data, setdata] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const Colors = async () => {
    const v = [];
    try {
      let keys = await AsyncStorage.getAllKeys();

      keys.forEach((key, index) =>
        v.push({ key: index + 1, color: JSON.parse(key) })
      );
    } catch (error) {
      console.log(error);
    }
    setdata(v);
  };

  const onRefresh = () => {
    setRefreshing(true);
    Colors();
    setRefreshing(false);
  };

  useEffect(() => {
    Colors();
    console.log(data);
  }, []);

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
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={["dodgerblue"]}
          />
        }
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
