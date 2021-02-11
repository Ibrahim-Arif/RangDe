import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import MainScreen from "./app/screens/MainScreen";
import ColorsScreen from "./app/screens/ColorsScreen";

const navigator = createStackNavigator(
  {
    Home: MainScreen,
    Saved: ColorsScreen,
  },
  {
    initialRouteName: "Home",
  }
);

export default createAppContainer(navigator);
