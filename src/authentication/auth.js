import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setAccessToken = (accessToken) => {
  cookies.set("access_token", accessToken, {
    sameSite: "strict",
  });
};

export const updateAccessToken = (newAccessToken) => {
  cookies.remove("access_token");
  setAccessToken(newAccessToken.slice(7));
};

export const logout = () => {
  cookies.remove("access_token");
};

export const getAccessToken = () => {
  return cookies.get("access_token");
};
