import { useRecoilState, useRecoilValue } from "recoil";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import axios from "axios";
import { SNavBar, SaveBtn } from "./styled";

import {
  surveyTitle,
  surveySummary,
  surveyIsAnonymous,
  surveyIsPublic,
  surveyListState,
  detailMCQuestionState,
} from "../../../atoms";
import { CustomSwitch } from "./CustomizedSwitches";

function NavBar() {
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
        isPublic
    );

    for (let i = 0; i < surveyList.length; i++) {
      let question = surveyList[i].text;

      let newList = detailList.filter((item) => item.question_id === i);
      let jsonString = JSON.stringify(newList);

      alert(question + "\n" + jsonString);
    }
    axios
      .post("/api/v1/survey/save", {
        surveyor_id: 1,
        title: title,
        is_anonymous: isAnonymous,
        is_public: isPublic,
        startDate: "2021-11-08T11:58:20.551705",
        endDate: "2021-11-08T11:58:20.551705",
      })
      .then((res) => console.log(res.data));
  };
  return (
    <SNavBar>
      <FormGroup row="true">
        <FormControlLabel
          control={
            <CustomSwitch
              style={{ color: "#edeef0" }}
              checked={isAnonymous}
              onChange={isAnonymousOnChange}
            />
          }
          label={
            <Box
              fontWeight={500}
              color="#edeef0"
              marginLeft={1}
              marginRight={2}
            >
              익명 답변 가능
            </Box>
          }
        />
        <FormControlLabel
          control={
            <CustomSwitch
              style={{ color: "#edeef0" }}
              checked={isPublic}
              onChange={isPublicOnChange}
            />
          }
          label={
            <Box
              fontWeight={500}
              color="#edeef0"
              marginLeft={1}
              marginRight={2}
            >
              설문 공개
            </Box>
          }
        />
      </FormGroup>
      <SaveBtn onClick={handleSubmit}>저장</SaveBtn>
    </SNavBar>
  );
}

export default NavBar;
