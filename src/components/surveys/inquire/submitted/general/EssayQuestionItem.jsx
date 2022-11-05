import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import apiClient from '../../../../../api/client';
import { surveyForSubmitted } from "../../../../../atoms";
import { userState } from "../../../../../authentication/userState";
import Error from "../../../participate/Error";
import Loading from "../../../participate/Loading";
import {
  Answer,
  QuestionText,
  QuestionWrapper,
} from "../../../participate/styled";

export default function InquireEssayQuestionItem({ item, sharingKey }) {
  const user = useRecoilValue(userState);
  const survey = useRecoilValue(surveyForSubmitted);
  const index = survey.questions.findIndex(
    (listItem) => listItem.questionId === item.questionId
  );

  const [essayAnswer, setEssayAnswer] = useState([]);
  const [answer, setAnswer] = useState("");

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    apiClient
      .get("/api/v1/users/my/submitted-surveys/" + sharingKey, {
        params: {
          userId: user.id,
        }
      })
      .then(function (response) {
        console.log(response);
        setEssayAnswer(response.data.data.essayAnswers);
        console.log(essayAnswer);
        setAnswer(
          response.data.data.essayAnswers.filter(
            (essayAnswerItem) => essayAnswerItem.questionId === item.questionId
          )[0].answerContent
        );
        setLoading(false);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  if (error) return <Error errorMessage={errorMessage}></Error>;
  if (loading) return <Loading></Loading>;

  return (
    <QuestionWrapper>
      <QuestionText color="#0064ff">Q{index + 1}</QuestionText>
      <QuestionText color="black">{item.title}</QuestionText>
      <Answer disabled value={answer}></Answer>
    </QuestionWrapper>
  );
}
