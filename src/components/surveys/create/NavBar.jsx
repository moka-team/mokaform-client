import styled from "styled-components";
import { Button } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import axios from "axios"

import {
  surveyTitle,
  surveySummary,
  surveyIsAnonymous,
  surveyIsPublic,
  surveyListState,
  detailMCQuestionState,
} from "../../../atoms";

const SNavBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  /* background-color: #0d0e10; */
  background-color: white;
  height: 5%;
  Button {
    margin-right: 25px;
    height: 80%;
  }
`;
function NavBar() {
  const label = { inputProps: { "aria-label": "Switch demo" } };

  const surveyList = useRecoilValue(surveyListState);
  const detailList = useRecoilValue(detailMCQuestionState);

  const title = useRecoilValue(surveyTitle);
  const summary = useRecoilValue(surveySummary);
  const [isAnonymous, setIsAnonymous] = useRecoilState(surveyIsAnonymous);
  const [isPublic, setIsPublic] = useRecoilState(surveyIsPublic);

  const isAnonymousOnChange = (event) => {
    setIsAnonymous(event.target.checked);
  };

  const isPublicOnChange = (event) => {
    setIsPublic(event.target.checked);
  };

  const handleSubmit = () => {

    const surveyInfo = {
      surveyorId :1,
      title:title,
      isAnonymous:isAnonymous,
      isPublic:isPublic,
      startDate:"2021-11-08T11:58:20.551705",
      endDate:"2021-11-08T11:58:20.551705",
      questions:surveyList,
      multiQuestions:detailList
    }

    console.log(JSON.stringify(surveyInfo))


    axios.post(
      "/api/v1/survey/create",surveyInfo
    ).then(res =>console.log(res.data))
  };
  return (
    <SNavBar>
      <FormGroup row="true">
        <FormControlLabel
          control={
            <Switch
              style={{ color: "#edeef0" }}
              checked={isAnonymous}
              onChange={isAnonymousOnChange}
            />
          }
          label={
            <Box fontWeight={500} color="#0d0e10">
              익명 답변 가능
            </Box>
          }
        />
        <FormControlLabel
          control={
            <Switch
              style={{ color: "#edeef0" }}
              checked={isPublic}
              onChange={isPublicOnChange}
            />
          }
          label={
            <Box fontWeight={500} color="#0d0e10">
              설문 공개
            </Box>
          }
        />
      </FormGroup>
      <Button onClick={handleSubmit} variant="contained">
        저장
      </Button>
    </SNavBar>
  );
}

export default NavBar;
