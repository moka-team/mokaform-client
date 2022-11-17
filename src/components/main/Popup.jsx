import * as React from "react";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import { Box, styled } from "@mui/system";
import { Chip } from "@mui/material";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import Grow from "@mui/material/Grow";
const StyledPopperDiv = styled("div")(
  ({ theme }) => `
  padding: 0.5rem;
  border: none;
  background-color: ${theme.palette.mode === "dark" ? "#121212" : "lightgray"};
  opacity: 1;
  margin: 0.25rem 0px;
`
);

function convertCategory(category) {
  switch (category) {
    case "HOBBY":
      return "취미";
    case "DAILY_LIFE":
      return "일상";
    case "IT":
      return "IT";
    case "LEARNING":
      return "학습";
    case "PSYCHOLOGY":
      return "심리";
    case "SOCIAL_POLITICS":
      return "사회·정치";
    case "PREFERENCE_RESEARCH":
      return "선호도 조사";
    case "PET":
      return "반려동물";
    default:
      return "";
  }
}

export default function Popup({ categories }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopupOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopupClose = (event) => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  console.log(categories);
  return (
    <div>
      <Chip
        aria-describedby={id}
        label={convertCategory(categories[0])}
        onMouseEnter={handlePopupOpen}
        onMouseLeave={handlePopupClose}
      />
      {categories.length > 1 && (
        <Popper id={id} open={open} anchorEl={anchorEl} placement="top-end">
          {categories.map(
            (category, idx) =>
              idx !== 0 && (
                <Box sx={{ textAlign: "right" }}>
                  <Chip
                    aria-describedby={id}
                    label={convertCategory(category)}
                    sx={{
                      opacity: 1,
                      margin: "0.25rem 0px",
                      backgroundColor: "lightgray",
                    }}
                  />
                  <br />
                </Box>
              )
          )}
        </Popper>
      )}
    </div>
  );
}
