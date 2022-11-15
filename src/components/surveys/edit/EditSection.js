import { Create, Summary, Title } from "../common/styled";
import { SurveyEditItem } from "./SurveyEditItem";
import SurveyItemCreator from "./SurveyItemCreator";
import { useEditSurveyActions, useEditSurveyValue } from "./surveyState";

export function EditSection() {
  const currentSurvey = useEditSurveyValue();
  const { setTitle, setSummary } = useEditSurveyActions();
  return (
    <Create>
      <Title
        value={currentSurvey.title}
        onChange={(e) => setTitle(e.target.value)}
      ></Title>
      <Summary
        value={currentSurvey.summary}
        onChange={(e) => setSummary(e.target.value)}
      ></Summary>
      {currentSurvey.questions.map((surveyItem) => (
        <SurveyEditItem key={surveyItem.index} item={surveyItem} />
      ))}
      <SurveyItemCreator />
    </Create>
  );
}
