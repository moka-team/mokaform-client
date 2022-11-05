import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";
import { useRecoilValue } from "recoil";
import apiClient from "../../../api/client";
import { userState } from "../../../authentication/userState";
import { useCreateAnswerActions, useCreateAnswerValue } from "./answerState";
import { SaveBtn, SNavBar } from "./styled";

export default function NavBar() {
  const user = useRecoilValue(userState);
  const answers = useCreateAnswerValue();
  const { setEssayAnswers, setMultipleChoiceAnswers, setOXAnswers } =
    useCreateAnswerActions();

  const resetCreateAnswerState = () => {
    setEssayAnswers([]);
    setMultipleChoiceAnswers([]);
    setOXAnswers([]);
  };

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    window.location.replace("/");
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleSubmit = () => {
    const answerInfo = {
      essayAnswers: answers.essayAnswers,
      multipleChoiceAnswers: answers.multipleChoiceAnswers,
      oxAnswers: answers.oxAnswers,
    };

    answers.essayAnswerValidate === answers.essayAnswers.length &&
    answers.multipleChoiceAnswerValidate ===
      answers.multipleChoiceAnswers.length &&
    answers.oxAnswerValidate === answers.oxAnswers.length
      ? apiClient
          .post("/api/v1/answer?userId=" + user.id, answerInfo)
          .then(function (response) {
            console.log(response);
            handleClickOpen();
          })
          .finally(function () {
            resetCreateAnswerState();
          })
      : handleClickOpen2();
  };

  return (
    <SNavBar>
      <SaveBtn onClick={handleSubmit}>저장</SaveBtn>
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

      <Dialog
        open={open2}
        onClose={handleClose2}
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
        <DialogTitle id="alert-dialog-title">알림</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            모든 항목의 답변을 입력해주세요!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose2} autoFocus>
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </SNavBar>
  );
}
