import { useState } from "react";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import Box from "@mui/material/Box";
import axios from "axios";
import { SNavBar, SaveBtn } from "./styled";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  surveyTitle,
  surveySummary,
  surveyIsAnonymous,
  surveyIsPublic,
  surveyListState,
  detailMCQuestionState,
  surveyEndDate,
  surveyStartDate,
  surveyCategory,
  surveyImage,
  createdQuestionCount,
  isStartDateValidate,
  isEndDateValidate,
} from "../../../atoms";
import { CustomSwitch } from "./CustomizedSwitches";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import dayjs from "dayjs";
import SurveyImg from "./SurveyImg";
import SelectCategory from "./SelectCategory";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";
import { userState } from "../../../authentication/userState";

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
  const user = useRecoilValue(userState);
  const questionCount = useRecoilValue(createdQuestionCount);
  const [surveyList, setSurveyList] = useRecoilState(surveyListState);
  const [detailList, setDetailList] = useRecoilState(detailMCQuestionState);
  const [category, setCategory] = useRecoilState(surveyCategory);
  const [surveyImg, setSurveyImage] = useRecoilState(surveyImage);
  const [title, setTitle] = useRecoilState(surveyTitle);
  const [summary, setSummary] = useRecoilState(surveySummary);
  const [isAnonymous, setIsAnonymous] = useRecoilState(surveyIsAnonymous);
  const [isPublic, setIsPublic] = useRecoilState(surveyIsPublic);
  const [startDate, setStartDate] = useRecoilState(surveyStartDate);
  const [endDate, setEndDate] = useRecoilState(surveyEndDate);
  const [startDateValidate, setStartDateValidate] =
    useRecoilState(isStartDateValidate);
  const [endDateValidate, setEndDateValidate] =
    useRecoilState(isEndDateValidate);
  const [invalidatoinDialogOpen, setInvalidationDialogOpen] = useState(false);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);
  const [failDialogOpen, setFailDialogOpen] = useState(false);
  const [sharingUrl, setSharingUrl] = useState("");
  const navigate = useNavigate();

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

  const resetRecoilValue = () => {
    setTitle("");
    setSummary("");
    setIsAnonymous(false);
    setIsPublic(false);
    setStartDate(dayjs(""));
    setEndDate(dayjs(""));
    setCategory([]);
    setSurveyImage("");
    setSurveyList([]);
    setDetailList([]);
    setStartDateValidate(false);
    setEndDateValidate(false);
  };

  const createSurvey = () => {
    console.log(
      "설문 정보" +
        "\n" +
        "title: " +
        title +
        "\n" +
        "summary: " +
        summary +
        "\n" +
        "isAnonymous: " +
        isAnonymous +
        "\n" +
        "isPublic: " +
        isPublic +
        "\n" +
        "시작 날짜: " +
        startDate +
        "\n" +
        "종료 날짜: " +
        endDate +
        "\n" +
        "카테고리 : " +
        category +
        "\n" +
        "이미지 : " +
        surveyImg
    );

    const surveyInfo = {
      title: title,
      summary: summary,
      isAnonymous: isAnonymous,
      isPublic: isPublic,
      startDate: startDate,
      endDate: endDate,
      categories: category,
      questions: surveyList,
      multiQuestions: detailList,
      // surveyImage: surveyImg,
    };

    console.log("===================================");
    console.log(JSON.stringify(surveyInfo));
    console.log("===================================");

    axios
      .post("/api/v1/survey?userId=" + user.id, surveyInfo)
      .then(function (response) {
        console.log(response);
        setSharingUrl(
          "https://mokaform.netlify.app/survey/" + response.data.data.sharingKey
        );
        resetRecoilValue();
        handleClickSuccessDialogOpen();
      })
      .catch(function (error) {
        console.log(error.message);
        handleClickFailDialogOpen();
      })
      .finally(function () {
        // always executed
      });
  };

  const handleSubmit = () => {
    startDateValidate && endDateValidate
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
          <Box pt={3}>
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
          </Typography>
          <Typography id="anp" sx={{ mt: 1 }} variant="body2">
            설문 공개 여부
            <CustomSwitch
              style={{ color: "#edeef0" }}
              checked={isPublic}
              onChange={isPublicOnChange}
            />
          </Typography>
          <Typography id="anp" sx={{ mt: 1 }} variant="body2">
            설문 시작 날짜
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={startDate}
                inputFormat={"yyyy-MM-dd"}
                onChange={(newValue) => {
                  setStartDate(dayjs(newValue).format("YYYY-MM-DD"));
                  setStartDateValidate(true);
                }}
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
                value={endDate}
                inputFormat={"yyyy-MM-dd"}
                onChange={(newValue) => {
                  setEndDate(dayjs(newValue).format("YYYY-MM-DD"));
                  setEndDateValidate(true);
                }}
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
        </Box>
      </Modal>
      <SaveBtn
        onClick={handleSubmit}
        disabled={!(title.length && summary.length && questionCount > 0)}
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
              maxWidth: "500px", // Set your width here
            },
          },
        }}
      >
        <DialogTitle id="invalidate-dialog-title">알림</DialogTitle>
        <DialogContent>
          <DialogContentText id="invalidate-dialog-description">
            설문 시작 날짜와 종료 날짜를 확인해주세요!
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
              maxWidth: "500px", // Set your width here
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
              maxWidth: "500px", // Set your width here
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
