import React, { useEffect, useState } from "react";
import { SNavBar, SaveBtn } from "./styled";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  EssayAnswerListState,
  MultipleChoiceAnswerListState,
  oxAnswerListState,
  isEssayAnswerValidate,
  isMultiChoiceAnswerValidate,
  isOXAnswerValidate,
} from "../../../atoms";
import axios from "axios";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const isEssayValidate = useRecoilValue(isEssayAnswerValidate);
  const isMultiChoiceValidate = useRecoilValue(isMultiChoiceAnswerValidate);
  const isOXValidate = useRecoilValue(isOXAnswerValidate);

  const [isSubmit, setIsSubmit] = useState(false);
  const essayAnswerList = useRecoilValue(EssayAnswerListState);
  const multiChoiceAnswerList = useRecoilState(MultipleChoiceAnswerListState);
  const oxAnswerList = useRecoilState(oxAnswerListState);
  const answerInfo = {
    essayAnswers:
      essayAnswerList.length === 1 ? [essayAnswerList[0]] : essayAnswerList[0],
    multipleChoiceAnswers:
      multiChoiceAnswerList.length === 1
        ? [multiChoiceAnswerList[0]]
        : multiChoiceAnswerList[0],
    oxAnswers: oxAnswerList.length === 1 ? [oxAnswerList[0]] : oxAnswerList[0],
  };
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };

  const handleSubmit = () => {
    axios.post("/api/v1/answer?userId=1", answerInfo).then((res) => {
      console.log(res.data);
      handleClickOpen();
    });
  };

  return (
    <SNavBar>
      <SaveBtn
        disabled={!(isEssayValidate && isMultiChoiceValidate && isOXValidate)}
        onClick={handleSubmit}
      >
        저장
      </SaveBtn>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "500px", // Set your width here
            },
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">설문 참여 완료!</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            설문에 참여해주셔서 감사합니다 😆😆
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </SNavBar>
  );
}
