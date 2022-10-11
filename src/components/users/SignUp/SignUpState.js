import { atom } from "recoil";

export const emailState = atom({
  key: "emailState",
  default: "",
});

export const nicknameState = atom({
  key: "nicknameState",
  default: "",
});

export const passwordState = atom({
  key: "passwordState",
  default: "",
});

export const passwordConfirmState = atom({
  key: "passwordConfirmState",
  default: "",
});

export const ageGroupState = atom({
  key: "ageGroupState",
  default: "",
});

export const genderState = atom({
  key: "genderState",
  default: "",
});

export const jobState = atom({
  key: "jobState",
  default: "",
});

export const preferenceState = atom({
  key: "preferenceState",
  default: [],
});

export const isEmailState = atom({
  key: "isEmailState",
  default: false,
});

export const isNicknameState = atom({
  key: "isNicknameState",
  default: false,
});

export const isPasswordState = atom({
  key: "isPasswordState",
  default: false,
});

export const isPasswordConfirmState = atom({
  key: "isPasswordConfirmState",
  default: false,
});
