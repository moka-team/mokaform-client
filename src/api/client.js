import * as Sentry from "@sentry/react";
import axios from "axios";
import {
  getAccessToken,
  logout,
  updateAccessToken,
} from "../authentication/auth";

const apiClient = axios.create({});

const reissueToken = async () => {
  try {
    const res = await apiClient.post("/api/v1/users/token/reissue");
    updateAccessToken(res.headers.authorization);
    window.location.reload();
  } catch (err) {
    if (
      err.response.data.code === "C009" ||
      err.response.data.code === "C011"
    ) {
      alert("토큰 만료! 다시 로그인해주세요! 🥰");
      logout();
      window.location.replace("/");
      localStorage.clear();
    }
  }
};

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

    // Access Token 재발행이 필요한 경우
    if (error.response.data.code === "C005") {
      reissueToken();
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

    // Access Token 재발행이 필요한 경우
    if (error.response.data.code === "C005") {
      reissueToken();
    }
    return Promise.reject(error);
  }
);

export default apiClient;
