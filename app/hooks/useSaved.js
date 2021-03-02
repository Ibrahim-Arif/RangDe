import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default useApi = () => {
  const [data, setdata] = useState([]);
  const fileArray = [];

  try {
    AsyncStorage.getAllKeys().then((keys) => {
      keys.forEach((key, index) =>
        fileArray.push({ key: index + 1, color: JSON.parse(key) })
      );

      setdata(fileArray);
    });
  } catch (error) {
    console.log(error);
  }

  return { data };
};
