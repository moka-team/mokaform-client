import React from "react";
import { surveyListState } from "../../../atoms";
import { useRecoilValue } from "recoil";

export default function SurveyPreviewItem({ item }) {
  const surveyList = useRecoilValue(surveyListState);
  return (
    <div>
      {" "}
      <div>
        {item.type === "주관식" ? (
          <>
            <br></br>
            질문: {item.text}
            <div>
              <input type="text" defaultValue={item.type} />
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
            <input type="text" defaultValue={item.type} />
          </>
        )}
      </div>
    </div>
  );
}
