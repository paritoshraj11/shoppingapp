import axios from "axios";

export const nativeFetch = url => {
  return axios.get(url).then(result => {
    //passing data only and left error handling on  function which call one
    return result.data;
  });
};

export const isArrayEqaul = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length !== arr2.length) {
    return false;
  }
  let _arr1 = arr1.concat().sort();
  let _arr2 = arr2.concat().sort();
  for (var i = 0; i < _arr1.length; i++) {
    if (_arr1[i] !== _arr2[i]) return false;
  }
  return true;
};
