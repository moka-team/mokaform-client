import { React, useState } from "react";
import { useSetRecoilState } from "recoil";
import { surveyListState } from "../../../atoms";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { AddCircle } from "@mui/icons-material";
import { Button } from "@mui/material";
import styled from "styled-components";

const options = ["ESSAY", "MULTIPLE_CHOICE", "OX"];

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default function SurveyItemCreator() {
  const [question, setQuestion] = useState("");
  const [type, setType] = useState("ESSAY");
  const setSurveyList = useSetRecoilState(surveyListState);

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setType(options[index]);
    addItem(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const addItem = (index) => {
    setSurveyList((oldSurveyList) => [
      ...oldSurveyList,
      {
        surveyIndex: getId(),
        title: question,
        type: options[index],
        index : index,
        isMultipleAnswer : (index === 1) ? true : false
      },
    ]);
    setQuestion("");
    setType(options[index]);
  };

  return (
    <Container>
      <Button
        id="lock-button"
        aria-haspopup="listbox"
        aria-controls="lock-menu"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClickListItem}
        sx={{marginTop:"20px"}}
      >
        <AddCircle sx={{ color: "white" }} />
      </Button>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>

    </Container>
  );
}

let id = 0;
function getId() {
  return id++;
}
