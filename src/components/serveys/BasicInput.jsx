import React, { useState } from "react";
import InputUnstyled from "@mui/base/InputUnstyled";
import { styled } from "@mui/system";
import { useBadge } from "@mui/base";
import { titleState } from "./optionState";
import { descriptionState } from "./optionState";
import { useRecoilState } from "recoil";

const blue = {
  100: "#DAECFF",
  200: "#80BFFF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
};

const grey = {
  50: "#F3F6F9",
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};

const StyledInputElement = styled("input")(
  ({ theme }) => `
  margin-top: -0.5em;
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border-radius: 12px;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${"#edeef0"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${
    theme.palette.mode === "dark" ? grey[900] : grey[50]
  };

  &:focus {
    border-color: ${blue[100]};
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[500] : blue[200]};
  }
`
);

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return (
    <InputUnstyled
      components={{ Input: StyledInputElement }}
      {...props}
      ref={ref}
    />
  );
});

export default function BasicInput({ text, type }) {
  const [title, setTitle] = useRecoilState(titleState);
  const [description, setDescription] = useRecoilState(descriptionState);
  // console.log(description);
  // console.log(title);
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  return (
    <CustomInput
      aria-label="Demo input"
      placeholder={text}
      onChange={{ type } === "title" ? onChangeTitle : onChangeDescription}
    />
  );
}
