import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setRefreshToken = (refreshToken) => {
  return cookies.set("refresh_token", refreshToken, {
    sameSite: "strict",
    httpOnly: true,
  });
};

export const setAccessToken = (accessToken) => {
  return cookies.set("access_token", accessToken, {
    sameSite: "strict",
  });
};

export const setTokens = (refreshToken, accessToken) => {
  setRefreshToken(refreshToken);
  setAccessToken(accessToken);
};

export const updateAccessToken = (newAccessToken) => {
  setAccessToken(newAccessToken);
};

export const logout = () => {
  cookies.remove("refresh_token", {
    httpOnly: true,
  });
  cookies.remove("access_token");
};

export const getAccessToken = () => {
  return cookies.get("access_token");
};

export const getRefreshToken = () => {
  return cookies.get("refresh_token");
};
