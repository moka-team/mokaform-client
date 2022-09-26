import React from "react";
import { styled } from "@mui/material/styles";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import FaceIcon from "@mui/icons-material/Face";
import SortIcon from "@mui/icons-material/Sort";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: "absolute",
  "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

const sortActions = [
  { icon: <NewReleasesIcon />, name: "최신순" },
  { icon: <FaceIcon />, name: "참여자순" },
];

export default function SortFab() {
  const [hidden, setHidden] = React.useState(false);
  return (
    <StyledSpeedDial
      sx={{ "& .MuiFab-primary": { width: 40, height: 40 } }}
      ariaLabel="sortby dial"
      hidden={hidden}
      icon={<SortIcon />}
      direction="down"
    >
      {sortActions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          tooltipOpen
        />
      ))}
    </StyledSpeedDial>
  );
}
