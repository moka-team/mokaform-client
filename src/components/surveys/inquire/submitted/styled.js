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

const Section = styled.div`
  height: calc(var(--vh, 1vh) * 75);
  background-color: #202632;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: -5%;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(var(--vh, 1vh) * 100);
  float: right;
  display: flex;
  flex-direction: column;
  background-color: #202632;
`;

const TitleText = styled.div`
  margin-top: 7%;
  font-weight: 900;
  font-size: xx-large;
  border: none;
  color: white;
  text-align: center;

  &:focus {
    outline: none;
  }
`;

const SummaryText = styled.div`
  margin-top: 10px;
  font-weight: 500;
  font-size: medium;
  border: none;
  color: white;
  text-align: center;

  &:focus {
    outline: none;
  }
`;

export {
  Section,
  Wrapper,
  TitleText,
  SummaryText,
  QuestionWrapper2,
  QuestionOption2,
  QuestionText2,
};
