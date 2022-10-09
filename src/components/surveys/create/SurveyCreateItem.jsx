import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { surveyListState, detailMCQuestionState } from "../../../atoms";
import DetailMCQuestionCreator from "./DetailMCQuestionCreator";
import DetailSurveyItem from "./DetailSurveyItem";
import DeleteIcon from '@mui/icons-material/Delete';
import styled from "styled-components";

const Question = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 25px;  
`
const Input = styled.input`
border: none;
background-color: #202632;
color: white;
&:focus{
  outline: none;
}
`
const Num = styled.span`
  color:#0064FF;
`
export default function SurveyItem({ item }) {

  const [surveyList, setSurveyList] = useRecoilState(surveyListState);
  const index = surveyList.findIndex((listItem) => listItem === item);

  const detailQuestionList = useRecoilValue(detailMCQuestionState);

  const deleteItem = () => {
    const newList = removeItemAtIndex(surveyList, index);
    setSurveyList(newList);
  };

  const updateItem = (e) => {
    let newList = [...surveyList].map((item)=>{
      if(item.id === index) return {...item, text:e.target.value};
      else return item;
    });
    setSurveyList(newList);
  };

  return (
    <div>
      {item.type === "주관식" ? (
        <Question>
            <div>
            <Num>{index+1}</Num> <Input onChange={updateItem} value={item.text} placeholder="질문을 입력해주세요."/>
            </div>
            <DeleteIcon onClick={deleteItem} fontSize="10px" style={{cursor:"pointer"}}/>
        </Question>
      ) : item.type === "찬부식" ? (
          <Question>
            <div>
            <Num>{index+1}</Num> <Input onChange={updateItem} value={item.text} placeholder="질문을 입력해주세요."/>
            </div>
            <DeleteIcon onClick={deleteItem} fontSize="10px" style={{cursor:"pointer"}}/>
        </Question>
      ) : (
        <>
          <Question>
            <div>
            <Num>{index+1}</Num> <Input onChange={updateItem} value={item.text} placeholder="질문을 입력해주세요."/>
            </div>
            <DeleteIcon onClick={deleteItem} fontSize="10px" style={{cursor:"pointer"}}/>
          </Question>

          <DetailMCQuestionCreator id={item.id}></DetailMCQuestionCreator>
          {detailQuestionList.map((detailQuestionItem) =>
            item.id === detailQuestionItem.survey_id ? (
              <DetailSurveyItem
                key={detailQuestionItem.id}
                item={detailQuestionItem}
              />
            ) : (
              <></>
            )
          )}
        </>
      )}
    </div>
  );
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
