import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import MainScreen from "./app/screens/MainScreen";
import ColorsScreen from "./app/screens/ColorsScreen";
import Icon from "./app/components/Icon";

const appStack = createStackNavigator();
const savedStack = createStackNavigator();
const drawer = createDrawerNavigator();

const SavedNavigation = ({ navigation }) => (
  <savedStack.Navigator initialRouteName="Saved">
    <savedStack.Screen
      name="Saved"
      component={ColorsScreen}
      options={{
        headerLeft: () => (
          <Icon
            name="keyboard-backspace"
            onPress={() => navigation.navigate("Home")}
          />
        ),
      }}
    />
  </savedStack.Navigator>
);

const AppNavigation = () => (
  <appStack.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false }}
  >
    <appStack.Screen name="Home" component={MainScreen} />
  </appStack.Navigator>
);

const MyDrawer = () => (
  <drawer.Navigator initialRouteName="Home">
    <drawer.Screen name="Home" component={AppNavigation} />
    <drawer.Screen name="Saved" component={SavedNavigation} />
  </drawer.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
