import AsyncStorage from '@react-native-community/async-storage';

var tokenCache = '';
var deviceIdCache = '';
var user = {};

function save(key, value) {
  if (value !== null) {
    AsyncStorage.setItem(key, value);
  }
}

async function get(key) {
  return AsyncStorage.getItem(key);
}

async function remove(key) {
  return AsyncStorage.getItem(key);
}

export default {
  save,
  remove,
  tokenCache,
  deviceIdCache,
  user
};
