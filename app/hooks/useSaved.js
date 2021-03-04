import { useSavedd } from "../components/StateContext";

export default function useSaved() {
  // AsyncStorage.clear();
  const saved = useSavedd();

  // const getSaved = async () => {
  //   const fileArray = [];
  //   console.log("\ninside getsaved");

  //   try {
  //     const keys = await AsyncStorage.getAllKeys();
  //     keys.forEach((key) => fileArray.push(JSON.parse(key)));

  //     setSaved(fileArray);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const updateSaved = () => {
  //   try {
  //     // saved.forEach((color) => {
  //     //   AsyncStorage.setItem(JSON.stringify(color), "").then();
  //     // });

  //     console.log("\ninside update saved");
  //     console.log(saved);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // return { updateSaved };
}
