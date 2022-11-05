import { ConstructionOutlined } from "@mui/icons-material";
import * as Sentry from "@sentry/react";
import { setUser } from "@sentry/react";
import { CONSOLE_LEVELS } from "@sentry/utils";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useRecoilState,
  useRecoilValueLoadable,
  useSetRecoilState,
} from "recoil";
import apiClient from "../../../api/client";
import {
  EssayAnswerListState,
  essayAnswerValidateCount,
  getSurveyQuery,
  multiChoiceAnswerValidateCount,
  MultipleChoiceAnswerListState,
  oxAnswerListState,
  oxAnswerValidateCount,
  surveyForSubmit,
  surveyQuestionCount,
} from "../../../atoms";
import {
  getAccessToken,
  getRefreshToken,
  logout,
  updateAccessToken,
} from "../../../authentication/auth";
import CardParticipate from "./card/CardParticipate";
import DeleteSurvey from "./DeleteSurvey";
import Error from "./Error";
import EssayQuestionItem from "./general/EssayQuestionItem";
import MultipleChoiceQuestionItem from "./general/MultipleChoiceQuestionItem";
import OXQuestionItem from "./general/OXQuestionItem";
import Loading from "./Loading";
import NavBar from "./NavBar";
import { Container, SummaryText, Survey, TitleText } from "./styled";

export default function SurveyDetail({ sharingKey }) {
  const setSurveyQuestionCount = useSetRecoilState(surveyQuestionCount);

  // 답변 저장 관련 변수
  const setEssayValidateCount = useSetRecoilState(essayAnswerValidateCount);
  const setMultiValidateCount = useSetRecoilState(
    multiChoiceAnswerValidateCount
  );
  const setOXValidateCount = useSetRecoilState(oxAnswerValidateCount);
  const setEssayAnswerList = useSetRecoilState(EssayAnswerListState);
  const setMultiChoiceAnswerList = useSetRecoilState(
    MultipleChoiceAnswerListState
  );
  const setOXAnswerList = useSetRecoilState(oxAnswerListState);

  function checkingCard(questionType, multiQuestionType) {
    if (questionType === "MULTIPLE_CHOICE") {
      if (multiQuestionType === "CARD") {
        return true;
      }
    }
    return false;
  }

  // useEffect(() => {
  //   setEssayAnswerList([]);
  //   setMultiChoiceAnswerList([]);
  //   setOXAnswerList([]);

  //   setEssayValidateCount(0);
  //   setMultiValidateCount(0);
  //   setOXValidateCount(0);

  //   apiClient
  //     .get("/api/v1/survey", {
  //       params: {
  //         sharingKey: sharingKey,
  //       },
  //     })
  //     .then(function (response) {
  //       setSurvey(response.data);
  //       setIsDeleted(response.data.data.isDeleted);
  //       setSurveyQuestionCount(response.data.data.questionCount);
  //       setLoading(false);
  //     })
  //     .finally(function () {
  //       // always executed
  //     });
  // }, [sharingKey]);

  function SurveyInfo() {
    const survey = useRecoilValueLoadable(getSurveyQuery(sharingKey));
    console.log(survey);
    console.log(survey.contents.title);
    console.log(survey.contents.summary);
    switch (survey.state) {
      case "hasValue":
        if (survey.contents.isDeleted) {
          return <DeleteSurvey></DeleteSurvey>;
        }
        return (
          <Container>
            <NavBar></NavBar>
            {survey.contents.multiQuestions.length > 0 &&
            checkingCard(
              survey.contents.questions[0].type,
              survey.contents.multiQuestions[0].multiQuestionType
            ) ? (
              <CardParticipate survey={survey.contents} />
            ) : (
              <Survey>
                <TitleText>{survey.contents.title}</TitleText>
                <SummaryText>{survey.contents.summary}</SummaryText>
                {survey.contents.questions.map((question) =>
                  question.type === "ESSAY" ? (
                    <EssayQuestionItem
                      key={question.questionId}
                      item={question}
                      survey={survey.contents}
                    ></EssayQuestionItem>
                  ) : question.type === "OX" ? (
                    <OXQuestionItem
                      key={question.questionId}
                      item={question}
                      survey={survey.contents}
                    ></OXQuestionItem>
                  ) : (
                    <MultipleChoiceQuestionItem
                      key={question.questionId}
                      item={question}
                      multiquestion={survey.contents.multiQuestions}
                      survey={survey.contents}
                    ></MultipleChoiceQuestionItem>
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
