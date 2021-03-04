import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useSaved() {
  const [saved, setSaved] = useState([]);

  const getSaved = async () => {
    const fileArray = [];

    try {
      const keys = await AsyncStorage.getAllKeys();
      keys.forEach((key) => fileArray.push({ color: JSON.parse(key) }));
      setSaved(fileArray);
    } catch (error) {
      console.log(error);
    }
  };

  const updateSaved = () => {
    try {
      saved.forEach(async (color) => {
        await AsyncStorage.setItem(JSON.stringify(color), "");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return { saved, setSaved, getSaved, updateSaved };
}
