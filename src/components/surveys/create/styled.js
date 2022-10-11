import styled from "styled-components";

const Create = styled.div`
  display: flex;
  width: 40%;
  min-height: 100%;
  flex-direction: column;
  background-color: #202632;
  color: white;
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
  width: 40%;
  min-height: 100%;
  flex-direction: column;
  background-color: #edeef0;
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

export {
  Create,
  Preview,
  QuestionWrapper,
  QuestionOption,
  QuestionText,
  Answer,
  Save,
};
