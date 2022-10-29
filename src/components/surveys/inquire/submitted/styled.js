import styled from "styled-components";

const QuestionWrapper2 = styled.div`
  background-color: white;
  margin-top: 25px;
  margin-bottom: 15px;
  border-radius: 10px;
  padding: 20px 35px 20px 25px;
`;

const QuestionOption2 = styled.button`
  width: 100%;
  height: 40px;
  margin-top: 10px;
  border-radius: 10px;
  padding-left: 10px;
  background-color: ${(props) => props.bcolor};
  border: 0;
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  text-align: left;

  &:hover {
    background-color: #0064ff;
    opacity: 0.9;
    color: white;
    font-weight: 400;
  }
`;

const QuestionText2 = styled.h1`
  color: ${(props) => props.color};
  font-weight: 500;
`;

export { QuestionWrapper2, QuestionOption2, QuestionText2 };
