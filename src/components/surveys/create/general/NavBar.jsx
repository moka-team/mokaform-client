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
  const handleClose = () => setOpen(false);

  const isAnonymousOnChange = (event) => {
    setIsAnonymous(event.target.checked);
  };

  const isPublicOnChange = (event) => {
    setIsPublic(event.target.checked);
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

    multiQuestionList.length === multiQuestionValidate.length
      ? apiClient
          .post("/api/v1/survey", surveyInfo, {})
          .then(function (response) {
            console.log(response);
            setSharingUrl(
              "https://mokaform.netlify.app/survey/" +
                response.data.data.sharingKey
            );
            resetCreateSurveyState();
            handleClickSuccessDialogOpen();
          })
          .finally(function () {
            // always executed
          })
      : alert("객관식 질문은 최소 한개의 선지가 필요합니다.");
  };

  const handleSubmit = () => {
    survey.startDate.length > 0 &&
    survey.endDate.length > 0 &&
    survey.categories.length > 0
      ? createSurvey()
      : handleClickDialogOpen();
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
          {/* <Box pt={3}>
            <Typography id="anp" sx={{ mt: 1 }} variant="body2">
              설문 대표 이미지 설정
              <SurveyImg />
            </Typography>
          </Box>
          <Typography id="anp" sx={{ mt: 3 }} variant="body2">
            설문 익명 가능 여부
            <CustomSwitch
              style={{ color: "#edeef0" }}
              checked={isAnonymous}
              onChange={isAnonymousOnChange}
            />
          </Typography> */}
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
            <Button onClick={handleClose} sx={{ fontWeight: 600 }}>
              닫기
            </Button>
            <Button onClick={handleClose} sx={{ fontWeight: 600 }} autoFocus>
              확인
            </Button>
          </Box>
        </Box>
      </Modal>
      <SaveBtn
        onClick={handleSubmit}
        disabled={
          !(
            survey.title.length &&
            survey.summary.length &&
            survey.questions.length > 0
          )
        }
      >
        저장
      </SaveBtn>
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
            설문 세부 설정을 확인해주세요.
          </DialogContentText>
          <DialogContentText id="invalidate-dialog-description">
            설문 시작, 종료 날짜 및 카테고리 지정은 필수입니다!
          </DialogContentText>
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
