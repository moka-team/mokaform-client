import React from "react";
import { detailMCQuestionState } from "../../../atoms";
import { useRecoilValue } from "recoil";

export default function SurveyPreviewItem({ item }) {
  const detailQuestionList = useRecoilValue(detailMCQuestionState);
  return (
    <div>
      {" "}
      <div>
        {item.type === "주관식" ? (
          <>
            <br></br>
            질문: {item.text}
            <div>
              <input type="text" placeholder="답변" />
            </div>
          </>
        ) : item.type === "찬부식" ? (
          <>
            <br></br>
            질문: {item.text}
            <div>
              <label>
                <input type="radio" name={item.id} value="YES" />
                YES
              </label>
              <label>
                <input type="radio" name={item.id} value="NO" />
                NO
              </label>
            </div>
          </>
        ) : (
          <>
            <br></br>
            질문: {item.text}
            {detailQuestionList.map((detailQuestionItem) =>
              item.id === detailQuestionItem.survey_id ? (
                <div>세부질문: {detailQuestionItem.text}</div>
              ) : (
                <></>
              )
            )}
          </>
        )}
      </div>
    </div>
  );
}