import { Button } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import { SNavBar } from "./styled";

import {
  surveyTitle,
  surveySummary,
  surveyIsAnonymous,
  surveyIsPublic,
  surveyListState,
  detailMCQuestionState,
} from "../../../atoms";
import { CustomSwitch } from "./CustomizedSwitches";
import { CustomButton } from "./CustomizedButton";

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

      let newList = detailList.filter((item) => item.survey_id === i);
      let jsonString = JSON.stringify(newList);

      alert(question + "\n" + jsonString);
    }
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
      <CustomButton onClick={handleSubmit} variant="contained">
        저장
      </CustomButton>
    </SNavBar>
  );
}

export default NavBar;
