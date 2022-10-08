import React, { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { detailQuestionState } from "../../../atoms";

const DetailQuestionCreator = (props) => {
  const [detailQuestion, setDetailQuestion] = useState("");
  const [detailQuestionList, setDetailQuestionList] =
    useRecoilState(detailQuestionState);

  const detailQuestionOnChange = (event) => {
    setDetailQuestion(event.target.value);
  };

  //   const addDetailItem = () => {
  //     setDetailQuestionList((oldDetailQuestionList) => [
  //       ...oldDetailQuestionList,
  //       {
  //         survey_id: props.id,
  //         id: getId(),
  //         text: detailQuestion,
  //       },
  //     ]);
  //     setDetailQuestion("");
  //   };

  //   const deleteItem = (index) => {
  //     const newList = detailQuestionList.filter(
  //       (item, deleteIndex) => index !== deleteIndex
  //     );
  //     setDetailQuestionList(newList);
  //   };

  return (
    <>
      {props.countList &&
        props.countList.map((item, i) => (
          <div key={i}>
            <div>
              <input
                type="text"
                defaultValue={detailQuestion}
                onChange={detailQuestionOnChange}
                placeholder="Write your detail Question"
              />
              <button>저장</button>
              <button>X</button>
            </div>
          </div>
        ))}
    </>
  );
};

let id = 0;
function getId() {
  return id++;
}

export default DetailQuestionCreator;
