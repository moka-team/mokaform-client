import MoreIcon from "@mui/icons-material/MoreVert";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../authentication/auth";
import { UserActionsContext } from "../../../authentication/userState";
import { Logo } from "../../common/Logo";

const appBarStyle = {
  backgroundColor: "#F5F6FA",
  color: "#0064FF",
  position: "fixed",
  boxShadow: "none", // 그림자 없애기
};

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [surveyAnchorEl, setSurveyAnchorEl] = React.useState(null);

  const inputEl = useRef(null);
  const isMenuOpen = Boolean(anchorEl);
  const isSurveyOpen = Boolean(surveyAnchorEl);
  const menuId = "primary-search-account-menu";

  const navigate = useNavigate();
  const { setLoggedUser } = useContext(UserActionsContext);

  const handleNavigateGeneralSurvey = (event) => {
    setSurveyAnchorEl(null);
    navigate("/create-survey");
  };
  const handleNavigateCardSurvey = (event) => {
    setSurveyAnchorEl(null);
    navigate("/create-card-survey");
  };
  const onClickHandler = (event) => {
    navigate("/create-survey");
  };
  const onNavigateMain = (event) => {
    navigate("/");
  };
  const handleLogout = () => {
    // local storage에 user 정보 삭제
    window.location.replace("/");
    localStorage.clear();
    setLoggedUser(null);
    logout();
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleCreateSurveyMenuOpen = (event) => {
    setSurveyAnchorEl(event.currentTarget);
  };
  const handleCreateSurveyMenuClose = () => {
    setSurveyAnchorEl(null);
  };

  const renderSurvey = (
    <Menu
      anchorEl={surveyAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      // id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isSurveyOpen}
      onClose={handleCreateSurveyMenuClose}
    >
      <MenuItem onClick={handleNavigateGeneralSurvey}>일반형</MenuItem>
      <MenuItem onClick={handleNavigateCardSurvey}>카드형</MenuItem>
    </Menu>
  );

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>마이페이지</MenuItem>
      <MenuItem onClick={handleMenuClose}>로그아웃</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={appBarStyle}>
        <Toolbar>
          <Logo to="/">MOKAFORM</Logo>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              sx={{
                fontSize: "15px",
                fontWeight: "bold",
                color: "#202632",
                mr: 3,
                ml: 3,
              }}
              onClick={handleCreateSurveyMenuOpen}
            >
              설문 만들기
            </Button>

            <Button
              sx={{
                fontSize: "15px",
                fontWeight: "bold",
                color: "#0064FF",
              }}
              onClick={handleLogout}
            >
              LOGOUT
            </Button>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderSurvey}
      {renderMenu}
    </Box>
  );
}
