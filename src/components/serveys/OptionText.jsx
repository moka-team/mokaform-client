import React from "react";
import Typography from "@mui/material/Typography";

export default function OptionText({ text }) {
  return (
    <Typography
      variant="h6"
      align="left"
      color="#202632"
      paragraph
      sx={{ pt: 3, fontWeight: "bold", fontSize: "18px" }}
    >
      {text}
    </Typography>
  );
}
