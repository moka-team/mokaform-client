import { React, useState } from "react";
import { useSetRecoilState } from "recoil";
import { surveyListState } from "../../../atoms";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { AddCircle } from "@mui/icons-material";
import { Button } from "@mui/material";
import styled from "styled-components";

const options = ["주관식", "객관식", "찬부식"];

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`


export default function SurveyItemCreator() {
  const [question, setQuestion] = useState("");
  const [type, setType] = useState("주관식");
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
    addItem(index)
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const addItem = (index) => {
    setSurveyList((oldSurveyList) => [
      ...oldSurveyList,
      {
        id: getId(),
        text: question,
        type: options[index],
      },
    ]);
    setQuestion("");
    setType(options[index]);
  };

  const typeOnChange = (event) => {
    setType(event.target.value);
  };

  const questionOnChange = (event) => {
    setQuestion(event.target.value);
  };

  return (
    <Container>
        <Button
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickListItem}
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

{/* 
      <select onChange={typeOnChange}>
        <option value={"주관식"}>주관식</option>
        <option value={"객관식"}>객관식</option>
        <option value={"찬부식"}>찬부식</option>
      </select>
      <div>
        <input
          type="text"
          defaultValue={question}
          onChange={questionOnChange}
          placeholder="Write your Question"
        />
        <button onClick={addItem}>Add</button>
      </div> */}
    </Container>
  );
}

let id = 0;
function getId() {
  return id++;
}
