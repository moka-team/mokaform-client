import React, { useState, useEffect } from "react";
import { QuestionWrapper2, QuestionOption2, QuestionText2 } from "../styled";
import { userState } from "../../../../../authentication/userState";
import Error from "../../../participate/Error";
import Loading from "../../../participate/Loading";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { surveyForSubmitted } from "../../../../../atoms";
import * as Sentry from "@sentry/react";
import {
  getAccessToken,
  getRefreshToken,
} from "../../../../../authentication/auth";
import styled from "styled-components";

const QWrapper = styled.div`
  width: 50%;
  padding: 20px 35px 20px 35px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const QuestionContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const QuestionOption = styled.button`
  width: 25%;
  height: 300px;
  margin-top: 50px;
  border-radius: 10px;
  margin-left: 15px;
  margin-right: 15px;
  background-color: ${(props) => props.bcolor};
  border: 0;
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
`;

export default function CardQuestionItem({ item, multiquestion, sharingKey }) {
  const user = useRecoilValue(userState);
  const survey = useRecoilValue(surveyForSubmitted);
  const index = survey.questions.findIndex(
    (listItem) => listItem.questionId === item.questionId
  );

  const [multiChoiceAnswer, setMultiChoiceAnswer] = useState([]);
  const [answer, setAnswer] = useState(-1);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios
      .get("/api/v1/users/my/submitted-surveys/" + sharingKey, {
        params: {
          userId: user.id,
        },
        headers: {
          accessToken: getAccessToken(),
          refreshToken: getRefreshToken(),
        },
      })
      .then(function (response) {
        console.log(response.data.data.multipleChoiceAnswers);
        setMultiChoiceAnswer(response.data.data.multipleChoiceAnswers);
        setAnswer(
          response.data.data.multipleChoiceAnswers.filter(
            (multiChoiceAnswerItem) =>
              multiChoiceAnswerItem.questionId === item.questionId
          )[0].multiQuestionId
        );
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error.message);
        setErrorMessage(error.message);
        Sentry.captureException(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  if (error) return <Error errorMessage={errorMessage}></Error>;
  // if (loading) return <Loading></Loading>;

  return (
    <QWrapper>
      <QuestionText2 color="#0064ff">Q{index + 1}</QuestionText2>
      <QuestionText2 color="white">{item.title}</QuestionText2>
      <QuestionContentWrapper>
        {multiquestion
          .filter(
            (multiQuestionItem) =>
              item.questionId === multiQuestionItem.questionId
          )
          .map((multiQuestion) => (
            <QuestionOption
              key={multiQuestion.multiQuestionId}
              bcolor={
                multiQuestion.multiQuestionId === answer ? "#0064ff" : "#edeef0"
              }
              color={
                multiQuestion.multiQuestionId === answer ? "white" : "black"
              }
              weight={multiQuestion.multiQuestionId === answer ? 600 : 400}
              style={{ pointerEvents: "none" }}
            >
              {multiQuestion.multiQuestionContent}
            </QuestionOption>
          ))}
      </QuestionContentWrapper>
    </QWrapper>
  );
}
