import { useRecoilState, useRecoilValue } from "recoil";
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
  const surveyList = useRecoilValue(surveyListState);
  const detailList = useRecoilValue(detailMCQuestionState);
  const category = useRecoilValue(surveyCategory);
  const surveyImg = useRecoilValue(surveyImage);
  const title = useRecoilValue(surveyTitle);
  const summary = useRecoilValue(surveySummary);
  const [isAnonymous, setIsAnonymous] = useRecoilState(surveyIsAnonymous);
  const [isPublic, setIsPublic] = useRecoilState(surveyIsPublic);
  const [startDate, setStartDate] = useRecoilState(surveyStartDate);
  const [endDate, setEndDate] = useRecoilState(surveyEndDate);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const isAnonymousOnChange = (event) => {
    setIsAnonymous(event.target.checked);
  };

  const isPublicOnChange = (event) => {
    setIsPublic(event.target.checked);
  };
  const handleSubmit = () => {
    alert(
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
      isAnonymous: isAnonymous,
      isPublic: isPublic,
      startDate: startDate,
      endDate: endDate,
      questions: surveyList,
      multiQuestions: detailList,
      category: category,
      surveyImage: surveyImg,
    };

    console.log(JSON.stringify(surveyInfo));

    axios
      .post("/api/v1/survey/create", surveyInfo)
      .then((res) => console.log(res.data));
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
        disabled={!(title.length && summary.length)}
      >
        저장
      </SaveBtn>
    </SNavBar>
  );
}

export default NavBar;
