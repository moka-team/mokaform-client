import React, { useState, useEffect } from "react";
import { QuestionWrapper2, QuestionOption2, QuestionText2 } from "./styled";
import { userState } from "../../../authentication/userState";
import Error from "../participate/Error";
import Loading from "../participate/Loading";
import axios from "axios";
import { useRecoilValue } from "recoil";

export default function InquireOXQuestionItem({ item, sharingKey }) {
  const user = useRecoilValue(userState);
  const [oxAnswer, setOXAnswer] = useState([]);
  const [answer, setAnswer] = useState(false);

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
        console.log(response.data.data.oxAnswers);
        setOXAnswer(response.data.data.oxAnswers);
        console.log(oxAnswer);
        setAnswer(
          response.data.data.oxAnswers.filter(
            (oxAnswerItem) => oxAnswerItem.questionId === item.questionId
          )[0].isYes
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
      <QuestionOption2
        key={item.questionId}
        bcolor={answer ? "#0064ff" : "#edeef0"}
        color={answer ? "white" : "black"}
        weight={answer ? 600 : 400}
        style={{ pointerEvents: "none" }}
      >
        네 😀
      </QuestionOption2>
      <QuestionOption2
        bcolor={!answer ? "#0064ff" : "#edeef0"}
        color={!answer ? "white" : "black"}
        weight={!answer ? 600 : 400}
        style={{ pointerEvents: "none" }}
      >
        아니오 🥲
      </QuestionOption2>
    </QuestionWrapper2>
  );
}
