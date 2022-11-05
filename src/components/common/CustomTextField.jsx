import React from "react";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    border: "none",
    width: "400px",
    overflow: "hidden",
    marginBottom: "15px",
    borderRadius: 8,
    backgroundColor: "#edeef0",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-focused": {
      borderColor: "#3399ff",
      outline: "2px solid#80bfff",
    },
  },
}));

export default CustomTextField;
