import MoreIcon from "@mui/icons-material/MoreVert";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { alpha, styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../authentication/auth";
import {
  UserActionsContext,
  UserContext,
} from "../../authentication/userState";
import { Logo } from "./Logo";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  "&:hover": {
    backgroundColor: alpha("#202632", 0.15),
  },
  "&:focus": {
    backgroundColor: alpha("#202632", 0.15),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    borderBottom: "1px solid",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "30ch",
    },
  },
}));

const appBarStyle = {
  backgroundColor: "#F5F6FA",
  color: "#0064FF",
  position: "fixed",
  boxShadow: "none", // 그림자 없애기
};

const onRefInput = (c) => {
  this.input = c;
};

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [surveyAnchorEl, setSurveyAnchorEl] = React.useState(null);
  const [logined, setLogined] = useState(false);

  const inputEl = useRef(null);
  const isMenuOpen = Boolean(anchorEl);
  const menuId = "primary-search-account-menu";

  const isSurveyOpen = Boolean(surveyAnchorEl);

  const navigate = useNavigate();
  const user = useContext(UserContext);
  const { setLoggedUser } = useContext(UserActionsContext);

  const handleNavigateGeneralSurvey = (event) => {
    setSurveyAnchorEl(null);
    navigate("/create-survey");
  };

  const handleNavigateCardSurvey = (event) => {
    setSurveyAnchorEl(null);
    navigate("/create-card-survey");
  };

  const onNavigateMain = (event) => {
    navigate("/");
  };

  const onNavigateSignIn = (event) => {
    navigate("/signin");
  };
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleNavigateMypage = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    navigate(`/mypage/${user.userId}`);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    logout();
    window.location.replace("/");
    localStorage.clear();
    setLoggedUser(null);
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
      <MenuItem onClick={handleNavigateMypage}>마이페이지</MenuItem>
      <MenuItem onClick={handleLogout}>로그아웃</MenuItem>
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
            {!user.loggedIn ? (
              <Button
                sx={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: "#0064FF",
                }}
                onClick={onNavigateSignIn}
              >
                SIGN IN
              </Button>
            ) : (
              <>
                <Button
                  onClick={handleProfileMenuOpen}
                  sx={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    color: "#0064FF",
                  }}
                  endIcon={
                    <Avatar
                      alt={user.nickname}
                      sx={{ width: 30, height: 30 }}
                    />
                  }
                >
                  {user.nickname}
                </Button>
              </>
            )}
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
