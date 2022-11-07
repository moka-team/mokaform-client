import * as Sentry from "@sentry/react";
import axios from "axios";
import {
  getAccessToken,
  logout,
  updateAccessToken,
} from "../authentication/auth";

const apiClient = axios.create({});

apiClient.defaults.withCredentials = true;
apiClient.defaults.headers["Access-Control-Allow-Origin"] = "*";
apiClient.defaults.headers["Content-Type"] = "application/json";
apiClient.interceptors.request.use(
  function (config) {
    config.headers["Authorization"] = `Bearer ${getAccessToken()}`;
    return config;
  },
  function (error) {
    Sentry.captureException(error);

    console.error("에러: " + error.response);
    // Access Token 재발행이 필요한 경우
    if (error.response.data.code === "C005") {
      apiClient
        .post("/api/v1/users/token/reissue")
        .then((res) => {
          updateAccessToken(res.headers.authorization);
          window.location.reload();
        })
        .catch(function (err) {
          if (
            err.response.data.code === "C009" ||
            err.response.data.code === "C011"
          ) {
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
    config.headers["Authorization"] = `Bearer ${getAccessToken()}`;
    return config;
  },
  function (error) {
    Sentry.captureException(error);
    console.error("에러:" + error);

    // Access Token 재발행이 필요한 경우
    if (error.response.data.code === "C005") {
      axios
        .post("/api/v1/users/token/reissue")
        .then((res) => {
          updateAccessToken(res.headers.authorization);
          window.location.reload();
        })
        .catch(function (err) {
          if (
            err.response.data.code === "C009" ||
            err.response.data.code === "C011"
          ) {
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
