import { Chip } from "@mui/material";
import Grow from "@mui/material/Grow";
import Popper from "@mui/material/Popper";
import Stack from "@mui/material/Stack";
import { Box, styled } from "@mui/system";
import * as React from "react";
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
    setChecked((prev) => !prev);
  };
  const handlePopupClose = (event) => {
    setAnchorEl(null);
    setChecked((prev) => !prev);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  const [checked, setChecked] = React.useState(false);

  return (
    <div>
      <Chip
        aria-describedby={id}
        label={convertCategory(categories[0])}
        onMouseEnter={handlePopupOpen}
        onMouseLeave={handlePopupClose}
        sx={{
          backgroundColor: "#dbdde0",
        }}
      />
      {categories.length > 1 && (
        <Popper id={id} open={open} anchorEl={anchorEl} placement="top-end">
          <Stack direction="column-reverse">
            {categories.map(
              (category, idx) =>
                idx !== 0 && (
                  <Box sx={{ textAlign: "right" }}>
                    <Grow
                      in={checked}
                      {...(checked ? { timeout: idx * 500 } : {})}
                    >
                      <Chip
                        aria-describedby={id}
                        label={convertCategory(category)}
                        sx={{
                          opacity: 1,
                          margin: "0.25rem 0px",
                          backgroundColor: "#dbdde0",
                        }}
                      />
                    </Grow>
                    <br />
                  </Box>
                )
            )}
          </Stack>
        </Popper>
      )}
    </div>
  );
}
