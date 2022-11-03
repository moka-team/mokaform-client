import { ArrowDownwardOutlined } from "@mui/icons-material";
import { React, useContext } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { surveyListState, surveySummary, surveyTitle } from "../../../../atoms";
import { Create, Summary, Title } from "../../common/styled";
import {
  useCounter,
  useCreateSurveyActions,
  useCreateSurveyValue,
} from "../surveyState";
import SurveyCreateItem from "./SurveyCreateItem";
import SurveyItemCreator from "./SurveyItemCreator";

export default function CreateSection() {
  const survey = useCreateSurveyValue();
  const { setTitle, setSummary } = useCreateSurveyActions();

  const titleOnChange = (event) => {
    setTitle(event.target.value);
  };

  const summaryOnChange = (event) => {
    setSummary(event.target.value);
  };

  return (
    <Create>
      <Title
        placeholder="설문 제목을 입력해주세요."
        onChange={titleOnChange}
      ></Title>
      <Summary
        placeholder="설문 설명을 입력해주세요."
        onChange={summaryOnChange}
      ></Summary>
      {survey.questions.map((surveyItem) => (
        <SurveyCreateItem key={surveyItem.index} item={surveyItem} />
      ))}
      <SurveyItemCreator></SurveyItemCreator>
    </Create>
  );
}
