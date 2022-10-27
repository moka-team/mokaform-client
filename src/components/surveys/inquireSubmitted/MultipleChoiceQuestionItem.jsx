import React, { useState, useEffect } from "react";
import { QuestionWrapper2, QuestionOption2, QuestionText2 } from "./styled";
import { userState } from "../../../authentication/userState";
import Error from "../participate/Error";
import Loading from "../participate/Loading";
import axios from "axios";
import { useRecoilValue } from "recoil";

export default function InquireMultipleChoiceQuestionItem({
  item,
  multiquestion,
  sharingKey,
}) {
  const user = useRecoilValue(userState);
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
      })
      .finally(function () {
        // always executed
      });
  }, []);

  if (error) return <Error errorMessage={errorMessage}></Error>;
  if (loading) return <Loading></Loading>;

  return (
    <QuestionWrapper2>
      <QuestionText2 color="#0064ff">Q{item.index + 1}</QuestionText2>
      <QuestionText2 color="black">{item.title}</QuestionText2>
      {multiquestion
        .filter(
          (multiQuestionItem) =>
            item.questionId === multiQuestionItem.questionId
        )
        .map((multiQuestion) => (
          <QuestionOption2
            key={multiQuestion.multiQuestionId}
            bcolor={
              multiQuestion.multiQuestionId === answer ? "#0064ff" : "#edeef0"
            }
            color={multiQuestion.multiQuestionId === answer ? "white" : "black"}
            weight={multiQuestion.multiQuestionId === answer ? 600 : 400}
            style={{ pointerEvents: "none" }}
          >
            {multiQuestion.multiQuestionContent}
          </QuestionOption2>
        ))}
    </QuestionWrapper2>
  );
}
