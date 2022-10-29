import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  EssayAnswerListState,
  essayAnswerValidateCount,
  multiChoiceAnswerValidateCount,
  MultipleChoiceAnswerListState,
  oxAnswerListState,
  oxAnswerValidateCount,
  surveyQuestionCount,
} from "../../../atoms";
import { userState } from "../../../authentication/userState";
import { SaveBtn, SNavBar } from "./styled";
import * as Sentry from "@sentry/react";
import {
  getAccessToken,
  getRefreshToken,
  logout,
  updateAccessToken,
} from "../../../authentication/auth";
import { setUser } from "@sentry/react";
export default function NavBar() {
  const user = useRecoilValue(userState);

  // 답변 저장 활성화 관련 변수
  const [essayValidateCount, setEssayValidateCount] = useRecoilState(
    essayAnswerValidateCount
  );
  const [multiValidateCount, setMultiValidateCount] = useRecoilState(
    multiChoiceAnswerValidateCount
  );
  const [oxValidateCount, setOXValidateCount] = useRecoilState(
    oxAnswerValidateCount
  );
  const questionCount = useRecoilValue(surveyQuestionCount);

  // 답변 저장 POST 관련 변수
  const [essayAnswerList, setEssayAnswerList] =
    useRecoilState(EssayAnswerListState);
  const [multiChoiceAnswerList, setMultiChoiceAnswerList] = useRecoilState(
    MultipleChoiceAnswerListState
  );
  const [oxAnswerList, setOXAnswerList] = useRecoilState(oxAnswerListState);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    window.location.replace("/");
  };

  const resetRecoilValue = () => {
    setEssayAnswerList([]);
    setMultiChoiceAnswerList([]);
    setOXAnswerList([]);

    setEssayValidateCount(0);
    setMultiValidateCount(0);
    setOXValidateCount(0);
  };

  const handleSubmit = () => {
    const answerInfo = {
      essayAnswers:
        essayAnswerList.length === 0
          ? []
          : essayAnswerList.length === 1
          ? [essayAnswerList[0]]
          : essayAnswerList,

      multipleChoiceAnswers:
        multiChoiceAnswerList.length === 0
          ? []
          : multiChoiceAnswerList.length === 1
          ? [multiChoiceAnswerList[0]]
          : multiChoiceAnswerList,

      oxAnswers:
        oxAnswerList.length === 0
          ? []
          : oxAnswerList.length === 1
          ? [oxAnswerList[0]]
          : oxAnswerList,
    };

    console.log(JSON.stringify(answerInfo));

    axios
      .post("/api/v1/answer?userId=" + user.id, answerInfo, {
        headers: {
          accessToken: getAccessToken(),
          refreshToken: getRefreshToken(),
        },
      })
      .then(function (response) {
        console.log(response);
        resetRecoilValue();
        handleClickOpen();
      })
      .catch(function (error) {
        console.log(error.message);
        resetRecoilValue();
        Sentry.captureException(error);
        // Access Token 재발행이 필요한 경우
        if (error.code === "C005") {
          axios
            .post("/api/v1/users/token/reissue", {
              headers: {
                accessToken: getAccessToken(),
                refreshToken: getRefreshToken(),
              },
            })
            .then((res) => {
              updateAccessToken(res.data.data);
            })
            .catch(function (error) {
              alert("refresh token 만료");
              logout();
              window.location.replace("/");
              localStorage.clear();
              setUser(null);
            });
        }
        // handleClickFailDialogOpen();
      })
      .finally(function () {
        // always executed
      });
  };

  return (
    <SNavBar>
      <SaveBtn
        disabled={
          essayValidateCount + multiValidateCount + oxValidateCount !==
          questionCount
        }
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
