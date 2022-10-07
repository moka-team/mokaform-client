import { atom } from "recoil";

export const titleState = atom({
  key: "titleState",
  default: "",
});

export const descriptionState = atom({
  key: "descriptionState",
  default: "",
});

export const categoryState = atom({
  key: "categoryState",
  default: [],
});

export const dateState = atom({
  key: "date",
  default: null,
});

export const anonymState = atom({
  key: "anonym",
  default: "",
});

export const publicState = atom({
  key: "public",
  default: "",
});
