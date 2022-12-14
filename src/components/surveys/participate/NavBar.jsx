import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useContext, useState } from "react";
import { useRecoilValue } from "recoil";
import apiClient from "../../../api/client";
import { userState } from "../../../authentication/userState";
import { useCreateAnswerActions, useCreateAnswerValue } from "./answerState";
import { SaveBtn, SNavBar } from "./styled";
import { UserContext } from "../../../authentication/userState";

export default function NavBar() {
  const user = useContext(UserContext);
  const answers = useCreateAnswerValue();
  const { setEssayAnswers, setMultipleChoiceAnswers, setOXAnswers } =
    useCreateAnswerActions();

  const resetCreateAnswerState = () => {
    setEssayAnswers([]);
    setMultipleChoiceAnswers([]);
    setOXAnswers([]);
  };

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [failDialogOpen, setFailDialogOpen] = useState(false);

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

  const handleClickFailDialogOpen = () => {
    setFailDialogOpen(true);
  };

  const handleFailDialogClose = () => {
    setFailDialogOpen(false);
  };

  const handleSubmit = () => {
    answers.essayAnswerValidate === answers.essayAnswers.length &&
    answers.multipleChoiceAnswerValidate ===
      answers.multipleChoiceAnswers.length &&
    answers.oxAnswerValidate === answers.oxAnswers.length
      ? postAnswer()
      : handleClickOpen2();
  };

  const postAnswer = async () => {
    const answerInfo = {
      essayAnswers: answers.essayAnswers,
      multipleChoiceAnswers: answers.multipleChoiceAnswers,
      oxAnswers: answers.oxAnswers,
    };

    try {
      const response = apiClient.post("/api/v1/answer", answerInfo);
      console.log(response);
      handleClickOpen();
      resetCreateAnswerState();
    } catch (error) {
      handleClickFailDialogOpen();
    }
  };

  return (
    <SNavBar>
      <SaveBtn onClick={handleSubmit}>??????</SaveBtn>
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
        <DialogTitle id="alert-dialog-title">?????? ?????? ??????!</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ????????? ?????????????????? ??????????????? ????????
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            ??????
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
        <DialogTitle id="alert-dialog-title">??????</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ?????? ????????? ????????? ??????????????????!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose2} autoFocus>
            ??????
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={failDialogOpen}
        onClose={handleFailDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "500px",
            },
          },
        }}
      >
        <DialogTitle id="success-dialog-title">??????</DialogTitle>
        <DialogContent>
          <DialogContentText id="success-dialog-description">
            ?????? ????????? ??????????????????! ?????? ???, ?????? ??????????????????!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFailDialogClose} autoFocus>
            ??????
          </Button>
        </DialogActions>
      </Dialog>
    </SNavBar>
  );
}
