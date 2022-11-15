import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import * as React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import apiClient from "../../../../api/client";
import { SaveBtn, SNavBar } from "../../common/styled";
import { useCreateSurveyActions, useCreateSurveyValue } from "../surveyState";
import { CustomSwitch } from "./CustomizedSwitches";
import SelectCategory from "./SelectCategory";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const CopyBtn = styled.button`
  background-color: rgba(51, 51, 51, 0.05);
  border-radius: 8px;
  border-width: 0;
  color: #333333;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  margin-top: 20px;
  margin-bottom: -20px;
  padding: 10px 12px;
  text-align: center;
  transition: all 200ms;
  vertical-align: baseline;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`;

function NavBar() {
  const survey = useCreateSurveyValue();
  const {
    setTitle,
    setSummary,
    setIsAnonymous,
    setIsPublic,
    setStartDate,
    setEndDate,
    setCategories,
    setQuestions,
    setMultiQuestions,
  } = useCreateSurveyActions();

  const [multiQuestionValidate, setMultiQuestionValidate] = useState([]);
  const [multiQuestionList, setMultiQuestionList] = useState(false);

  const [invalidatoinDialogOpen, setInvalidationDialogOpen] = useState(false);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);
  const [failDialogOpen, setFailDialogOpen] = useState(false);
  const [sharingUrl, setSharingUrl] = useState("");
  const [message, setMessage] = useState([]);

  useEffect(() => {
    const newArray = survey.multiQuestions.map((multiQuestion) => {
      return multiQuestion.questionIndex;
    });
    setMultiQuestionValidate([...new Set(newArray)]);
  }, [survey.multiQuestions]);

  useEffect(() => {
    const newArray = survey.questions
      .filter((question) => question.isMultipleAnswer)
      .map((question) => {
        return question.index;
      });
    setMultiQuestionList([...new Set(newArray)]);
  }, [survey.questions]);

  const handleClickDialogOpen = () => {
    setInvalidationDialogOpen(true);
  };

  const handleDialogClose = () => {
    setInvalidationDialogOpen(false);
    setMessage([]);
  };

  const handleClickSuccessDialogOpen = () => {
    setSuccessDialogOpen(true);
  };

  const handleSuccessDialogClose = () => {
    setSuccessDialogOpen(false);
  };

  const handleSuccessDialogConfirmClose = () => {
    setSuccessDialogOpen(false);
    window.location.replace("/");
  };

  const handleClickFailDialogOpen = () => {
    setFailDialogOpen(true);
  };

  const handleFailDialogClose = () => {
    setFailDialogOpen(false);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  // 모달 창의 완료 누르면 창 닫힘
  const handleClose = () => setOpen(false);
  // 모달 창의 닫기 누르면 창 닫힘 & 내용 초기화
  const closeAndReset = () => {
    setOpen(false);
    resetCreateSurveyState();
  };

  const isAnonymousOnChange = (event) => {
    setIsAnonymous(event.target.checked);
  };

  const isPublicOnChange = (event) => {
    setIsPublic(event.target.checked);
  };

  const postSurvey = async () => {
    const surveyInfo = {
      title: survey.title,
      summary: survey.summary,
      isAnonymous: survey.isAnonymous,
      isPublic: survey.isPublic,
      startDate: survey.startDate,
      endDate: survey.endDate,
      categories: survey.categories,
      questions: survey.questions,
      multiQuestions: survey.multiQuestions,
      // surveyImage: surveyImg,
    };

    try {
      const response = await apiClient.post("/api/v1/survey", surveyInfo);
      setSharingUrl(
        "https://mokaform.netlify.app/survey/" + response.data.data.sharingKey
      );
      resetCreateSurveyState();
      handleClickSuccessDialogOpen();
    } catch (error) {
      handleClickFailDialogOpen();
    }
  };

  const resetCreateSurveyState = () => {
    setTitle("");
    setSummary("");
    setIsAnonymous(false);
    setIsPublic(false);
    setStartDate(dayjs().format("YYYY-MM-DD"));
    setEndDate(dayjs(""));
    setCategories([]);
    setQuestions([]);
    setMultiQuestions([]);
  };

  const createSurvey = () => {
    multiQuestionList.length === multiQuestionValidate.length
      ? postSurvey()
      : alert("객관식 질문은 최소 한개의 선지가 필요합니다.");
  };

  const handleSubmit = () => {
    if (
      !(
        survey.title.length &&
        survey.summary.length &&
        survey.questions.length &&
        survey.endDate.length &&
        survey.categories.length
      )
    ) {
      handleClickDialogOpen();
      if (survey.title.length === 0) {
        setMessage((message) => [...message, "설문 제목 입력"]);
      }
      if (survey.summary.length === 0) {
        setMessage((message) => [...message, "설문 설명 입력"]);
      }
      if (survey.questions.length === 0) {
        setMessage((message) => [...message, "질문 한가지 이상 작성"]);
      }
      if (survey.startDate.length === 0) {
        setMessage((message) => [...message, "시작 날짜 설정"]);
      }
      if (!survey.endDate.length) {
        setMessage((message) => [...message, "종료 날짜 설정"]);
      }
      if (survey.categories.length === 0) {
        setMessage((message) => [...message, "카테고리 설정"]);
      }
    } else {
      createSurvey();
    }
  };

  return (
    <SNavBar>
      <Button onClick={handleOpen}>설문 세부 설정</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            설문 세부 설정
          </Typography>
          <Typography id="modal-modal-description">
            설문의 세부 내용을 설정해주세요.
          </Typography>
          <Typography id="anp" sx={{ mt: 1 }} variant="body2">
            설문 공개 여부
            <CustomSwitch
              style={{ color: "#edeef0" }}
              checked={survey.isPublic}
              onChange={isPublicOnChange}
            />
          </Typography>
          <Typography id="anp" sx={{ mt: 1 }} variant="body2">
            설문 시작 날짜
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={survey.startDate}
                inputFormat={"yyyy-MM-dd"}
                onChange={(newValue) => {
                  setStartDate(dayjs(newValue).format("YYYY-MM-DD"));
                }}
                minDate={dayjs().format("YYYY-MM-DD")}
                renderInput={({ inputRef, inputProps, InputProps }) => (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      svg: {
                        color: "#0064FF",
                      },
                    }}
                  >
                    <input ref={inputRef} {...inputProps} />
                    {InputProps?.endAdornment}
                  </Box>
                )}
              />
            </LocalizationProvider>
          </Typography>
          <Typography id="anp" sx={{ mt: 1 }} variant="body2">
            설문 종료 날짜
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={survey.endDate}
                inputFormat={"yyyy-MM-dd"}
                onChange={(newValue) => {
                  setEndDate(dayjs(newValue).format("YYYY-MM-DD"));
                }}
                minDate={dayjs().format("YYYY-MM-DD")}
                renderInput={({ inputRef, inputProps, InputProps }) => (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      svg: {
                        color: "#0064FF",
                      },
                    }}
                  >
                    <input ref={inputRef} {...inputProps} />
                    {InputProps?.endAdornment}
                  </Box>
                )}
              />
            </LocalizationProvider>
          </Typography>
          <Typography sx={{ mt: 2 }} variant="body2">
            <SelectCategory />
          </Typography>
          <Box sx={{ textAlign: "right", mt: 2 }}>
            <Button onClick={closeAndReset} sx={{ fontWeight: 600 }}>
              닫기
            </Button>
            <Button onClick={handleClose} sx={{ fontWeight: 600 }} autoFocus>
              확인
            </Button>
          </Box>
        </Box>
      </Modal>
      <SaveBtn onClick={handleSubmit}>저장</SaveBtn>
      <Dialog
        open={invalidatoinDialogOpen}
        onClose={handleDialogClose}
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
        <DialogTitle id="invalidate-dialog-title">알림</DialogTitle>
        <DialogContent>
          <DialogContentText id="invalidate-dialog-description">
            설문 내용 또는 세부 설정을 모두 입력해야 합니다.
          </DialogContentText>
          <DialogContentText id="invalidate-dialog-description">
            아래 항목을 체크해주세요!
          </DialogContentText>
          <br></br>
          {message.map((list) => {
            return (
              <DialogContentText id="invalidate-dialog-description">
                ✔ {list}
              </DialogContentText>
            );
          })}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>취소</Button>
          <Button onClick={handleDialogClose} autoFocus>
            확인
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={successDialogOpen}
        onClose={handleSuccessDialogClose}
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
        <DialogTitle id="success-dialog-title">알림</DialogTitle>
        <DialogContent>
          <DialogContentText
            id="success-dialog-description"
            sx={{ color: "#202632" }}
          >
            설문 생성이 완료되었습니다!
          </DialogContentText>
          <DialogContentText sx={{ color: "#202632" }}>
            공유 링크 : {sharingUrl}
          </DialogContentText>
          <DialogContentText sx={{ textAlign: "center" }}>
            <CopyBtn
              onClick={() => {
                navigator.clipboard.writeText(sharingUrl);
                document.getElementById("copy").innerText = " 복사 완료 ";
              }}
            >
              <span id="copy">공유 주소 복사하기 </span>
              <FontAwesomeIcon
                icon={faClipboard}
                style={{ cursor: "pointer" }}
              />
            </CopyBtn>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSuccessDialogConfirmClose} autoFocus>
            확인
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
        <DialogTitle id="success-dialog-title">알림</DialogTitle>
        <DialogContent>
          <DialogContentText id="success-dialog-description">
            설문 생성이 실패했습니다! 잠시 후, 다시 시도해주세요!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFailDialogClose} autoFocus>
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </SNavBar>
  );
}

export default NavBar;
