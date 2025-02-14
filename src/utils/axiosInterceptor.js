import axios from "axios";
import('dotenv')

import {currentEnv,urls} from "./webService"

let baseURL;
let Domain;
baseURL = urls[currentEnv]
Domain = "Autonomouse";
let Axios;

// Removed getCookie function as we'll use localStorage instead

const init = () => {
  Axios = axios.create({
    baseURL: baseURL,
  });
  Axios.interceptors.request.use(handleSuccessRequest, handleErrorRequest);
  Axios.interceptors.response.use(handleSuccess, handleError);
  Axios.defaults.timeout = 20000;
  // Update to use localStorage
  Axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
  axios.defaults.headers.common['accept'] = "application/json";
  Axios.defaults.headers.common['Cache-Control'] = "no-cache";
};

const handleSuccessRequest = (request) => {
  // Update to use localStorage
  let token = localStorage.getItem("token");
  let userId = localStorage.getItem("userId")
  if (token) {
    request.headers["Authorization"] = token;
    request.headers["accept"] = "application/json";
  }
  return request;
};

const handleErrorRequest = (error) => {
  return Promise.reject(error);
};

const handleSuccess = (response) => {
  return response;
};

const handleError = (error) => {
  if (error.code === 'ECONNABORTED') {
    const timeoutResponse = {
      msg: "Request Time Out",
      data: {
        data: {
          msg: "Request Time Out"
        },
        msg: "Request Time Out"
      },
      response: {
        data: {
          msg: "Request Time Out"
        },
      },
      status: 408,
      statusText: 'Request Timeout',
      headers: {},
    };
    return Promise.reject(timeoutResponse);
  }
  else if (error?.code == "ERR_NETWORK") {
    const timeoutResponse = {
      msg: error?.message,
      data: {
        data: {
          msg: error?.message
        },
        msg: error?.message
      },
      response: {
        data: {
          msg: error?.message
        },
      },
      status: 408,
      statusText: 'Request Timeout',
      headers: {},
    };
    return Promise.reject(timeoutResponse);
  }
  else if (error.response?.status == 503) {
    const timeoutResponse = {
      data: {
        data: {
          msg: "Could not reach to server"
        },
        msg: "Could not reach to server"
      },
      response: {
        data: {
          msg: "Could not reach to server"
        },
      },
      status: 408,
      statusText: 'Request Timeout',
      headers: {},
    };
    return Promise.reject(timeoutResponse);
  }
  // Update authentication check to use localStorage
  else if (error?.response?.status == 401 || !localStorage.getItem("token")) {
    // window.location.href = "/Login"
    return Promise.reject(error.response);
  }
  else if (axios.isCancel(error)) {
    return Promise.reject(error);
  }
  else {
    return Promise.reject(error.response);
  }
};

init();

export default Axios;