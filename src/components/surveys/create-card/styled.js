import styled from "styled-components";

export const QuestionWrapper = styled.div`
  width: 100%;
  margin-top: 25px;
  margin-bottom: 15px;
  border-radius: 10px;
  padding: 20px 35px 20px 35px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const QuestionContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const OptionWrapper = styled.div`
  width: 100%;
  background-color: black;
  justify-content: center;
  flex-direction: row;
  display: flex;
`;

export const QuestionOption = styled.button`
  width: 25%;
  height: 300px;
  margin-top: 50px;
  border-radius: 10px;
  margin-left: 15px;
  margin-right: 15px;
  background-color: #edeef0;
  border: 0;
  color: black;

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
  text-align: center;
  margin-top: 10px;
`;

export const Wrapper = styled.div`
  width: 70%;
  min-height: calc(var(--vh, 1vh) * 100);
  float: right;
  display: flex;
  flex-direction: column;
  background-color: #202632;
`;
