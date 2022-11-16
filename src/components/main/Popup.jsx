import * as React from "react";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import { styled } from "@mui/system";
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

export default function Popup({ categories }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

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
        label={categories[0]}
        onMouseEnter={handlePopupOpen}
        onMouseLeave={handlePopupClose}
      />
      <Popper id={id} open={open} anchorEl={anchorEl} placement="top-end">
        <Chip
          aria-describedby={id}
          label="popup1"
          sx={{
            opacity: 1,
            margin: "0.25rem 0px",
            backgroundColor: "lightgray",
          }}
        />
        <Chip
          aria-describedby={id}
          label="popup2"
          sx={{ opacity: 1, margin: "0.25rem 0px" }}
        />
        <Chip
          aria-describedby={id}
          label="popup3"
          sx={{ opacity: 1, margin: "0.25rem 0px" }}
        />

        {/* <Chip
          aria-describedby={id}
          label="popup"
          onMouseEnter={handlePopupOpen}
          onMouseLeave={handlePopupClose}
        /> */}
        {/* <StyledPopperDiv>1</StyledPopperDiv>
        <StyledPopperDiv>2</StyledPopperDiv>
        <StyledPopperDiv>3</StyledPopperDiv> */}
      </Popper>
    </div>
  );
}
