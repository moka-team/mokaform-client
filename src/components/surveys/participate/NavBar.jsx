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
import { userState } from "../../../authentication/userState";

export default function NavBar() {
  const user = useRecoilValue(userState);

  const [isEssayValidate, setIsEssayValidate] = useRecoilState(
    isEssayAnswerValidate
  );
  const [isMultiChoiceValidate, setIsMultiChoiceValidate] = useRecoilState(
    isMultiChoiceAnswerValidate
  );
  const [isOXValidate, setIsOXValidate] = useRecoilState(isOXAnswerValidate);

  const [isSubmit, setIsSubmit] = useState(false);
  const [essayAnswerList, setEssayAnswerList] =
    useRecoilState(EssayAnswerListState);
  const [multiChoiceAnswerList, setMultiChoiceAnswerList] = useRecoilState(
    MultipleChoiceAnswerListState
  );
  const [oxAnswerList, setOXAnswerList] = useRecoilState(oxAnswerListState);
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    window.location.replace("http://localhost:3000/");
  };

  const resetRecoilValue = () => {
    setIsEssayValidate(false);
    setIsMultiChoiceValidate(false);
    setIsOXValidate(false);

    setEssayAnswerList([]);
    setMultiChoiceAnswerList([]);
    setOXAnswerList([]);

    console.log("모두삭제!");
  };

  const handleSubmit = () => {
    const answerInfo = {
      essayAnswers:
        essayAnswerList.length === 0
          ? []
          : essayAnswerList.length === 1
          ? [essayAnswerList[0]]
          : essayAnswerList[0],

      multipleChoiceAnswers:
        multiChoiceAnswerList.length === 0
          ? []
          : multiChoiceAnswerList.length === 1
          ? [multiChoiceAnswerList[0]]
          : multiChoiceAnswerList[0],

      oxAnswers:
        oxAnswerList.length === 0
          ? []
          : oxAnswerList.length === 1
          ? [oxAnswerList[0]]
          : oxAnswerList[0],
    };

    console.log(JSON.stringify(answerInfo));

    axios
      .post("/api/v1/answer?userId=" + user.id, answerInfo)
      .then(function (response) {
        console.log(response);
        resetRecoilValue();
        handleClickOpen();
      })
      .catch(function (error) {
        console.log(error.message);
        resetRecoilValue();
        // handleClickFailDialogOpen();
      })
      .finally(function () {
        // always executed
      });

    // console.log(JSON.stringify(answerInfo));
    // axios.post("/api/v1/answer?userId=" + user.id, answerInfo).then((res) => {
    //   console.log(res.data);
    //   handleClickOpen();
    //   resetRecoilValue();
    // });
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
