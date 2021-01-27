import AsyncStorage from "@react-native-async-storage/async-storage";

// Really simple local db that stores key-value pairs
// Use for examples which require mock DB operations

export async function saveData(key, value) {
  try {
    const jsonVal = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonVal);
  } catch (e) {
    console.log("Error saving!");
  }
}

export async function getData(key) {
  try {
    const val = await AsyncStorage.getItem(key);
    if (val !== null) {
      const jsonVal = JSON.parse(val);
      return jsonVal;
    } else {
      return null;
    }
  } catch (e) {
    console.log("Error reading value!");
  }
}

export async function getAllData() {
  let keys = [];
  try {
    keys = await AsyncStorage.getAllKeys();
    let result = await AsyncStorage.multiGet(keys);
    return result.map(([k, v]) => {
      return [k, JSON.parse(v)];
    });
  } catch (e) {
    console.log("Error getting all data!");
  }
}
