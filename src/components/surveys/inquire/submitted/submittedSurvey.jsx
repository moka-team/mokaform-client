import React from "react";
import { useRecoilValueLoadable } from "recoil";
import { getSurveyQuery } from "../../../../atoms";
import DeleteSurvey from "../../participate/DeleteSurvey";
import Error from "../../participate/Error";
import Loading from "../../participate/Loading";
import {
  Container,
  SNavBar,
  SummaryText,
  Survey,
  TitleText,
} from "../../participate/styled";
import CardSubmitted from "./card/CardSubmitted";
import InquireEssayQuestionItem from "./general/EssayQuestionItem";
import InquireMultipleChoiceQuestionItem from "./general/MultipleChoiceQuestionItem";
import InquireOXQuestionItem from "./general/OXQuestionItem";

export default function SubmittedSurvey({ sharingKey }) {
  function checkingCard(questionType, multiQuestionType) {
    if (questionType === "MULTIPLE_CHOICE") {
      if (multiQuestionType === "CARD") {
        return true;
      }
    }
    return false;
  }

  function SurveyInfo() {
    const survey = useRecoilValueLoadable(getSurveyQuery(sharingKey));
    if (survey.contents.isDeleted) {
      return <DeleteSurvey request={"mypage"}></DeleteSurvey>;
    }
    switch (survey.state) {
      case "hasValue":
        return (
          <Container>
            <SNavBar></SNavBar>
            {survey.contents.multiQuestions.length > 0 &&
            checkingCard(
              survey.contents.questions[0].type,
              survey.contents.multiQuestions[0].multiQuestionType
            ) ? (
              <CardSubmitted sharingKey={sharingKey} survey={survey.contents} />
            ) : (
              <Survey>
                <TitleText>{survey.contents.title}</TitleText>
                <SummaryText>{survey.contents.summary}</SummaryText>
                {survey.contents.questions.map((question) =>
                  question.type === "ESSAY" ? (
                    <InquireEssayQuestionItem
                      key={question.questionId}
                      item={question}
                      sharingKey={sharingKey}
                      survey={survey.contents}
                    ></InquireEssayQuestionItem>
                  ) : question.type === "OX" ? (
                    <InquireOXQuestionItem
                      key={question.questionId}
                      item={question}
                      sharingKey={sharingKey}
                      survey={survey.contents}
                    ></InquireOXQuestionItem>
                  ) : (
                    <InquireMultipleChoiceQuestionItem
                      key={question.questionId}
                      item={question}
                      sharingKey={sharingKey}
                      survey={survey.contents}
                    ></InquireMultipleChoiceQuestionItem>
                  )
                )}
              </Survey>
            )}
          </Container>
        );
      case "loading":
        return <Loading></Loading>;
      case "hasError":
        return <Error></Error>;
    }
  }

  return <SurveyInfo></SurveyInfo>;
}
