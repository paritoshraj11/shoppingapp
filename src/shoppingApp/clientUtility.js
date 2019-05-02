import axios from "axios";

export const nativeFetch = url => {
  return axios.get(url).then(result => {
    //passing data only and left error handling on  function which call one
    return result.data;
  });
};
