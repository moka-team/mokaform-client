import styled from "styled-components";
const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #edeef0;
`;

const SNavBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #0d0e10;
  height: 5%;
  Button {
    margin-right: 25px;
    height: 80%;
  }
`;

const SaveBtn = styled.button`
  background-color: #0064ff;
  width: 60px;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  color: white;
  &:disabled {
    background-color: lightgrey;
    color: black;
  }
`;

const Survey = styled.div`
  display: flex;
  width: 50%;
  min-height: 100%;
  flex-direction: column;
  margin: 0% 25%;
  color: black;
  h1 {
    font-size: large;
    font-weight: 800;
    margin-top: 25px;
  }
`;

const TitleText = styled.div`
  margin-top: 15%;
  font-weight: 900;
  font-size: xx-large;
  border: none;
  background-color: #edeef0;
  color: black;

  &:focus {
    outline: none;
  }
`;

const SummaryText = styled.div`
  margin-top: 10px;
  font-weight: 500;
  font-size: medium;
  border: none;
  background-color: #edeef0;
  color: black;

  &:focus {
    outline: none;
  }
`;

const QuestionWrapper = styled.div`
  background-color: white;
  margin-top: 25px;
  margin-bottom: 15px;
  border-radius: 10px;
  padding: 20px 35px 20px 25px;
`;

const QuestionOption = styled.button`
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

const QuestionText = styled.h1`
  color: ${(props) => props.color};
  font-weight: 500;
`;

const Answer = styled.input`
  width: 100%;
  height: 40px;
  padding-left: 10px;
  margin-top: 10px;
  border-radius: 10px;
  background-color: #edeef0;
  border: none;
  font-size: 80%;

  &:focus {
    border-color: #edeef0;
  }
`;

const MessageText = styled.h1`
  margin-top: 5%;
  margin-left: 2%;
  font-weight: 700;
  font-size: x-large;
  border: none;
  color: ${(props) => props.color};

  &:focus {
    outline: none;
  }
`;

export {
  SNavBar,
  SaveBtn,
  Survey,
  TitleText,
  SummaryText,
  QuestionWrapper,
  QuestionOption,
  QuestionText,
  Answer,
  Container,
  MessageText,
};
