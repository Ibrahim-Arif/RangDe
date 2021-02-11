import React, { useState } from "react";
import { StyleSheet, View, Text, LogBox, Alert } from "react-native";
import Drawer from "react-native-drawer";

import colors from "../config/colors";
import ColoringButton from "../components/ColoringButton";
import MyButton from "../components/MyButton";
import Icon from "../components/Icon";
import MenuScreen from "./MenuScreen";

import SavedColors from "../assets/SavedColors";

const [incrementBy, decrementBy] = [10, -5];
const handleColorChange = (toChange, initialValue, change) => {
  toChange(
    initialValue + change > 255 || initialValue + change < 0
      ? initialValue
      : initialValue + change
  );
};
const handleSave = (toSave) => {
  SavedColors.push({
    key: SavedColors.length + 1,
    color: toSave,
  });
  Alert.alert("Notice!", "Saved successfully...");
};

function MainScreen({ navigation }) {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const [isDrawer, setIsDrawer] = useState(false);

  const setColor = (color) => {
    setRed(color.red);
    setGreen(color.green);
    setBlue(color.blue);
  };

  LogBox.ignoreLogs([
    "componentWillReceiveProps has been renamed",
    "componentWillMount has been renamed",
  ]);

  const menuList = [
    {
      title: "Saved",
      onPress: () => {
        setIsDrawer(false);
        navigation.navigate("Saved", { setColor });
      },
    },
    {
      title: "Account (todo)",
      onPress: null,
    },
    {
      title: "Setting (todo)",
      onPress: null,
    },
  ];

  return (
    <Drawer
      type="static"
      openDrawerOffset={0.5}
      open={isDrawer}
      content={
        <MenuScreen
          data={menuList}
          onBack={() => setIsDrawer(false)}
          renderRight={() => setIsDrawer(false)}
        />
      }
    >
      <View style={styles.container}>
        {!isDrawer && (
          <Icon
            name="menu"
            onPress={() => setIsDrawer(true)}
            style={{ marginLeft: 10 }}
          />
        )}
        {isDrawer && <View style={{ height: 40 }} />}

        <View style={styles.secondContainer}>
          <View
            style={[
              styles.color,
              { backgroundColor: `rgb(${red}, ${green} , ${blue} )` },
            ]}
          />
          <Text
            selectable
            style={styles.text}
          >{`rgb(${red}, ${green}, ${blue})`}</Text>

          <ColoringButton
            title="Red"
            value={red}
            onIncrement={() => handleColorChange(setRed, red, incrementBy)}
            onDecrement={() => handleColorChange(setRed, red, decrementBy)}
          />
          <ColoringButton
            title="Green"
            value={green}
            onIncrement={() => handleColorChange(setGreen, green, incrementBy)}
            onDecrement={() => handleColorChange(setGreen, green, decrementBy)}
          />
          <ColoringButton
            title="Blue"
            value={blue}
            onIncrement={() => handleColorChange(setBlue, blue, incrementBy)}
            onDecrement={() => handleColorChange(setBlue, blue, decrementBy)}
          />

          <View style={styles.buttonContainer}>
            <MyButton
              title="reset"
              color={colors.primary}
              style={{ width: "30%" }}
              onPress={() => {
                setRed(0);
                setGreen(0);
                setBlue(0);
              }}
            />
            <MyButton
              title="save"
              color={colors.primary}
              style={{ width: "30%" }}
              onPress={() => handleSave({ red: red, green: green, blue: blue })}
            />
          </View>
        </View>
      </View>
    </Drawer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  secondContainer: {
    top: 30,
    alignItems: "center",
  },
  color: {
    width: 150,
    height: 150,
    borderRadius: 15,
    marginBottom: 5,
  },
  text: {
    marginBottom: 30,
    fontSize: 18,
    color: colors.black,
    fontWeight: "bold",
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },
});
export default MainScreen;
