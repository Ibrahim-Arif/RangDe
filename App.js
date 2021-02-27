import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import MainScreen from "./app/screens/MainScreen";
import ColorsScreen from "./app/screens/ColorsScreen";

const stack = createStackNavigator();

const AppNavigation = () => (
  <stack.Navigator initialRouteName="Home">
    <stack.Screen
      name="Home"
      component={MainScreen}
      options={{ headerShown: false }}
    />
    <stack.Screen name="Saved" component={ColorsScreen} />
  </stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
}
