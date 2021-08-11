import axios from "axios";
import constants from "src/utils/constants";
import { getData as getToken } from "src/utils/localStorageUtil";


export const apiData = async (url) => {
  try {
    var completeUrl = constants.BASE_API_URL + url;
    const getData = await axios.get(completeUrl);
    return getData;
  } catch (error) {
    console.log("server error");
    return error;
  }
};

export const apiDataPost = async (url, data) => {
  try {
    var completeUrl = constants.BASE_API_URL + url;
    const getData = await axios.post(completeUrl, data);
    return getData;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};

export const securedApiData = async (url) => {
  try {
    var completeUrl = constants.BASE_API_URL + url;
    const getData = await axios.get(completeUrl, {
      headers: {
        Authorization: `Bearer ${getToken("token")}`,
      },
    });
    return getData;
  } catch (error) {
    console.log("server error");
    return error;
  }
};

export const securedApiDataPost = async (url, data) => {
  try {
    var completeUrl = constants.BASE_API_URL + url;
    const getData = await axios.post(completeUrl, data, {
      headers: {
        Authorization: `Bearer ${getToken("token")}`,
      },
    });
    return getData;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};
