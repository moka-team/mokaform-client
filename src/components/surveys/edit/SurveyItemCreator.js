import { AddCircle } from "@mui/icons-material";
import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { React, useEffect, useState } from "react";
import styled from "styled-components";
import { useEditSurveyActions, useEditSurveyValue } from './surveyState';

const options = ["ESSAY", "MULTIPLE_CHOICE", "OX"];
const kOtions = ["주관식", "객관식", "찬부식"];

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default function SurveyItemCreator() {
  const survey = useEditSurveyValue();
  const { setQuestions } = useEditSurveyActions();
  const [questionList, setQuestionList] = useState([]);

  const [question, setQuestion] = useState("");
  const [, setType] = useState("ESSAY");

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

  const addItem = (optionIndex) => {
    setQuestionList([
      ...survey.questions,
      {
        index: getId(),
        title: question,
        type: options[optionIndex],
        isMultipleAnswer: optionIndex === 1 ? true : false,
      },
    ]);
    setQuestion("");
    setType(options[optionIndex]);
  };

  useEffect(() => {
    setQuestions(questionList);
  }, [questionList]);

  return (
    <Container>
      <Button
        id="lock-button"
        aria-haspopup="listbox"
        aria-controls="lock-menu"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClickListItem}
        sx={{ marginTop: "20px" }}
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
            {kOtions[index]}
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
