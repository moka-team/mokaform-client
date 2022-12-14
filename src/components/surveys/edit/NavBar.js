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
import { SaveBtn, SNavBar } from "../common/styled";
import { CustomSwitch } from "../create/general/CustomizedSwitches";
import SelectCategory from "./SelectCategory";
import { useEditSurveyActions, useEditSurveyValue } from "./surveyState";

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
  const survey = useEditSurveyValue();
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
  } = useEditSurveyActions();
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
  // ?????? ?????? ?????? ????????? ??? ??????
  const handleClose = () => setOpen(false);
  // ?????? ?????? ?????? ????????? ??? ?????? & ?????? ?????????
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
    alert(JSON.stringify(survey));

    try {
      //TODO: ?????? ?????? API
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
      : alert("????????? ????????? ?????? ????????? ????????? ???????????????.");
  };

  const handleSubmit = () => {
    alert(JSON.stringify(survey));
  };

  return (
    <SNavBar>
      <Button onClick={handleOpen}>?????? ?????? ??????</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ?????? ?????? ??????
          </Typography>
          <Typography id="modal-modal-description">
            ????????? ?????? ????????? ??????????????????.
          </Typography>
          <Typography id="anp" sx={{ mt: 1 }} variant="body2">
            ?????? ?????? ??????
            <CustomSwitch
              style={{ color: "#edeef0" }}
              checked={survey.isPublic}
              onChange={isPublicOnChange}
            />
          </Typography>
          <Typography id="anp" sx={{ mt: 1 }} variant="body2">
            ?????? ?????? ??????
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
            ?????? ?????? ??????
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
          <Typography sx={{ mt: 2 }} variant="body2"></Typography>
          <Box sx={{ textAlign: "right", mt: 2 }}>
            <Button onClick={closeAndReset} sx={{ fontWeight: 600 }}>
              ??????
            </Button>
            <Button onClick={handleClose} sx={{ fontWeight: 600 }} autoFocus>
              ??????
            </Button>
          </Box>
        </Box>
      </Modal>
      <SaveBtn onClick={handleSubmit}>??????</SaveBtn>
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
        <DialogTitle id="invalidate-dialog-title">??????</DialogTitle>
        <DialogContent>
          <DialogContentText id="invalidate-dialog-description">
            ?????? ?????? ?????? ?????? ????????? ?????? ???????????? ?????????.
          </DialogContentText>
          <DialogContentText id="invalidate-dialog-description">
            ?????? ????????? ??????????????????!
          </DialogContentText>
          <br></br>
          {message.map((list) => {
            return (
              <DialogContentText id="invalidate-dialog-description">
                ??? {list}
              </DialogContentText>
            );
          })}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>??????</Button>
          <Button onClick={handleDialogClose} autoFocus>
            ??????
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
        <DialogTitle id="success-dialog-title">??????</DialogTitle>
        <DialogContent>
          <DialogContentText
            id="success-dialog-description"
            sx={{ color: "#202632" }}
          >
            ?????? ????????? ?????????????????????!
          </DialogContentText>
          <DialogContentText sx={{ color: "#202632" }}>
            ?????? ?????? : {sharingUrl}
          </DialogContentText>
          <DialogContentText sx={{ textAlign: "center" }}>
            <CopyBtn
              onClick={() => {
                navigator.clipboard.writeText(sharingUrl);
                document.getElementById("copy").innerText = " ?????? ?????? ";
              }}
            >
              <span id="copy">?????? ?????? ???????????? </span>
              <FontAwesomeIcon
                icon={faClipboard}
                style={{ cursor: "pointer" }}
              />
            </CopyBtn>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSuccessDialogConfirmClose} autoFocus>
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
            ?????? ????????? ?????????????????????! ?????? ???, ?????? ??????????????????!
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

export default NavBar;
