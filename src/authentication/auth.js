import { useCookies } from "react-cookie";

const [cookie, setCookie, removeCookie] = useCookies("access_token");

export const setAccessToken = (accessToken) => {
  setCookie(accessToken);
};

export const updateAccessToken = (newAccessToken) => {
  removeCookie("access_token");
  setCookie(newAccessToken.slice(7));
};

export const logout = () => {
  removeCookie("access_token");
};

export const getAccessToken = () => {
  return cookie.accessToken;
};
