import AsyncStorage from '@react-native-community/async-storage';

export async function createItem(id, value) {
  const timestamp = new Date().getTime();
  return await AsyncStorage.setItem(id, JSON.stringify({...value, timestamp}));
}

export async function deleteItem(id) {
  return await AsyncStorage.removeItem(id);
}

export async function readAllItems() {
  const keys = await AsyncStorage.getAllKeys();
  const items = await AsyncStorage.multiGet(keys);
  return items.map(([_key, item]) => JSON.parse(item));
}
