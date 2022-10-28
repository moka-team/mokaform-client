import styled from "styled-components";

export const QuestionWrapper = styled.div`
  background-color: white;
  margin-top: 25px;
  margin-bottom: 15px;
  border-radius: 10px;
  padding: 20px 35px 20px 25px;
`;

export const QuestionOption = styled.button`
  width: 100%;
  height: 40px;
  margin-top: 10px;
  border-radius: 10px;
  padding-left: 10px;
  background-color: #edeef0;
  border: 0;
  color: black;
  text-align: left;

  &:hover {
    background-color: #0064ff;
    opacity: 0.9;
    color: white;
    font-weight: 400;
  }
`;

export const QuestionText = styled.h1`
  color: ${(props) => props.color};
  font-weight: 500;
`;
