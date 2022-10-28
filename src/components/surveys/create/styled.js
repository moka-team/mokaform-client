import styled from "styled-components";

const Create = styled.div`
  display: flex;
  width: ${(props) => props.width || "40%"};
  min-height: 100%;
  flex-direction: column;
  background-color: ${(props) => props.bgColor || "#202632"};
  color: ${(props) => props.tcolor || "white"};
  float: left;
  padding: 0% 5% 5% 5%;
  h1 {
    font-size: large;
    font-weight: 800;
    margin-top: 25px;
  }
`;

const Preview = styled.div`
  display: flex;
  width: ${(props) => props.width || "40%"};
  min-height: 100%;
  flex-direction: column;
  background-color: ${(props) => props.bgColor || "#f5f6fa"};
  float: right;
  padding: 0% 5% 5% 5%;
  color: black;
  h1 {
    font-size: large;
    font-weight: 800;
    margin-top: 25px;
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

const Save = styled.div`
  color: white;
  font-weight: 500;
  text-align: right;
`;

const Title = styled.input`
  margin-top: ${(props) => props.mTop || "10%"};
  font-weight: 900;
  font-size: xx-large;
  border: none;
  background-color: ${(props) => props.bgColor || "#202632"};
  color: ${(props) => props.tcolor || "white"};

  &:focus {
    outline: none;
  }
`;

const Summary = styled.input`
  margin-top: 10px;
  font-weight: 500;
  font-size: medium;
  border: none;
  background-color: ${(props) => props.bgColor || "#202632"};
  color: ${(props) => props.tcolor || "white"};

  &:focus {
    outline: none;
  }
`;

const TitleText = styled.h6`
  margin-top: ${(props) => props.mTop || "12%"};
  font-weight: 900;
  font-size: xx-large;
  border: none;
  background-color: ${(props) => props.bgColor || "#f5f6fa"};
  color: ${(props) => props.tcolor || "black"};

  &:focus {
    outline: none;
  }
`;

const SummaryText = styled.h3`
  margin-top: 10px;
  font-weight: 500;
  font-size: medium;
  border: none;
  background-color: ${(props) => props.bgColor || "#f5f6fa"};
  color: ${(props) => props.tcolor || "black"};

  &:focus {
    outline: none;
  }
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
  /* background-color: white; */
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

const DetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Input = styled.input`
  border: none;
  background-color: ${(props) => props.bgColor || "#202632"};
  margin-bottom: 2px;
  color: ${(props) => props.tColor || "white"};
  &:focus {
    outline: none;
  }
`;

const Question = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
`;

const MInput = styled.input`
  border: none;
  background-color: ${(props) => props.bgColor || "#202632"};
  font-size: 18px;
  color: ${(props) => props.tColor || "white"};
  &:focus {
    outline: none;
  }
`;

const Num = styled.span`
  color: #0064ff;
  font-size: 20px;
`;

export {
  Create,
  Preview,
  QuestionWrapper,
  QuestionOption,
  QuestionText,
  Answer,
  Save,
  Title,
  Summary,
  TitleText,
  SummaryText,
  SNavBar,
  SaveBtn,
  DetailContainer,
  Input,
  Question,
  MInput,
  Num,
};
