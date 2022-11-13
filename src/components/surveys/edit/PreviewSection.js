import { Preview, SummaryText, TitleText } from "../common/styled";
import SurveyPreviewItem from "./SurveyPreviewItem";
import { useEditSurveyValue } from "./surveyState";

export function PreviewSection() {
  const survey = useEditSurveyValue();
  return (
    <Preview>
      <TitleText>{survey.title}</TitleText>
      <SummaryText>{survey.summary}</SummaryText>
      {survey.questions.map((surveyItem) => (
        <SurveyPreviewItem key={surveyItem.index} item={surveyItem} />
      ))}
    </Preview>
  );
}
