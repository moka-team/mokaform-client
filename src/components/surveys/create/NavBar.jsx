import styled from "styled-components";
import { Button } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
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
  bottom: 0;
  left: 0;
  right: 0;
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
            <Switch checked={isAnonymous} onChange={isAnonymousOnChange} />
          }
          label="익명 답변 가능"
        />
        <FormControlLabel
          control={<Switch checked={isPublic} onChange={isPublicOnChange} />}
          label="설문 공개"
        />
      </FormGroup>
      <Button onClick={handleSubmit} variant="contained">
        저장
      </Button>
    </SNavBar>
  );
}

export default NavBar;
