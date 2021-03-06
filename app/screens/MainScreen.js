import React from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import colors from "../config/colors";
import ColoringButton from "../components/ColoringButton";
import MyButton from "../components/MyButton";
import Icon from "../components/Icon";
import Screen from "../components/Screen";

import {
  // useRed,
  // useUpdateRed,
  // useGreen,
  // useUpdateGreen,
  // useBlue,
  // useUpdateBlue,
  useColors,
} from "../components/StateContext";

const [incrementBy, decrementBy] = [10, -5];
const handleColorChange = (toChange, initialValue, change) => {
  toChange(
    initialValue + change > 255 || initialValue + change < 0
      ? initialValue
      : initialValue + change
  );
};
const handleSave = async (toSave) => {
  try {
    await AsyncStorage.setItem(JSON.stringify(toSave), "");

    Alert.alert("Notice!", "Saved successfully...");
  } catch (error) {
    console.log(error);
  }
};

function MainScreen({ navigation }) {
  // const red = useRed();
  // const setRed = useUpdateRed();

  // const green = useGreen();
  // const setGreen = useUpdateGreen();

  // const blue = useBlue();
  // const setBlue = useUpdateBlue();
  const { red, setRed, green, setGreen, blue, setBlue } = useColors();

  return (
    <Screen style={styles.container}>
      <Icon
        name="menu"
        onPress={() => navigation.openDrawer()}
        style={{ marginLeft: 10 }}
      />
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
      </View>
      <View
        style={{
          flex: 1.5,
          alignItems: "center",
        }}
      >
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
      </View>

      <View style={styles.buttonContainer}>
        <MyButton
          title="reset"
          color={colors.primary}
          rippleColor="#161616"
          style={{ width: "40%" }}
          onPress={() => {
            setRed(0);
            setGreen(0);
            setBlue(0);
          }}
        />
        <MyButton
          title="save"
          color={colors.primary}
          rippleColor="#161616"
          style={{ width: "40%" }}
          onPress={() => handleSave({ red: red, green: green, blue: blue })}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  secondContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
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
    flex: 1,
    justifyContent: "space-evenly",
  },
});
export default MainScreen;
