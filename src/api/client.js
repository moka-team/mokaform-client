import * as Sentry from "@sentry/react";
import axios from "axios";
import {
  getAccessToken,
  logout,
  updateAccessToken,
} from "../authentication/auth";

const apiClient = axios.create({
  baseURL: "http://devapi.mokaform.site:8080",
});

apiClient.defaults.withCredentials = true;
apiClient.interceptors.request.use(
  function (config) {
    config.headers["Authorization"] = getAccessToken();
    return config;
  },
  function (error) {
    console.log(error);
    Sentry.captureException(error);

    console.log(error.response.data.code);

    // Access Token 재발행이 필요한 경우
    if (error.response.data.code === "C005") {
      apiClient
        .post("/api/v1/users/token/reissue", {
          Authorization: getAccessToken(),
        })
        .then((res) => {
          updateAccessToken(res.data.data);
          window.location.reload();
        })
        .catch(function (err) {
          if (err.response.data.code === "C009") {
            alert("토큰 만료! 다시 로그인해주세요! 🥰");
            logout();
            window.location.replace("/");
            localStorage.clear();
          }
        });
    }
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  function (config) {
    config.headers["Authorization"] = getAccessToken();
    return config;
  },
  function (error) {
    Sentry.captureException(error);

    console.log(error);

    // Access Token 재발행이 필요한 경우
    if (error.response.data.code === "C005") {
      axios
        .post("/api/v1/users/token/reissue", {
          Authorization: getAccessToken(),
        })
        .then((res) => {
          updateAccessToken(res.data.data);
          window.location.reload();
        })
        .catch(function (err) {
          if (err.response.data.code === "C009") {
            alert("토큰 만료! 다시 로그인해주세요! 🥰");
            logout();
            window.location.replace("/");
            localStorage.clear();
          }
        });
    }
    return Promise.reject(error);
  }
);

export default apiClient;
