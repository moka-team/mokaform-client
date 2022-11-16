import styled from "styled-components";

/* Rows */
const Title = styled.h1`
  display: flex;
  margin: 10px;
  margin-top: 35px;
  margin-bottom: 25px;
  color: #0064ff;
  font-weight: 700;
`;

const PreferenceButton = styled.button`
  width: 100px;
  height: 100px;
  margin: 10px;
  border: none;
  border-radius: 50%;

  &:hover {
    transform: scale(1.1);
  }

  &.unchecked {
    color: black;
    font-weight: 400;
    background-color: #f9fafb;
  }

  &.checked {
    color: white;
    font-weight: 600;
    background-color: #0064ff;
  }
`;

const Row = styled.button`
  width: 100px;
  height: 100px;
  margin: 10px;
  border: none;
  border-radius: 50%;
  background-color: ${(props) => props.color};

  &:hover {
    transform: scale(1.1);
  }
`;

const Rows = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
`;

/* SignEssentialForm */
const EssentialForm = styled.input`
  display: block;
  width: 400px;
  height: 45px;
  padding-left: 10px;
  margin: 10px;
  border-radius: 10px;
  border: 0px;
  background-color: #edeef0;
  &:hover {
    border-color: #3399ff;
    outline: 1px solid #80bfff;
  }

  &:focus {
    border-color: #3399ff;
    outline: 3px solid #80bfff;
  }
`;

/* EssentialForm Span */
const Message = styled.p`
  font-size: small;
  width: 400px;
  padding-left: 20px;
  margin: -5px, 10px, 30px, 10px;
  text-align: left;

  &.success {
    color: #8f8c8b;
  }

  &.ok {
    color: #0064ff;
  }

  &.error {
    color: #ff2727;
  }
`;

/* SignUpForm */
const MainTitle = styled.h1`
  margin: 10px;
  margin-top: 35px;
  margin-bottom: 25px;
  color: black;
  font-weight: 700;
`;

const SignUpButton = styled.button`
  width: 415px;
  height: 50px;
  margin: 10px;
  margin-top: 45px;
  border-radius: 10px;
  border: none;
  background-color: #286bd0;
  color: white;
  font-weight: bold;
  &:hover {
    background-color: #0064ff;
  }
  &:disabled {
    background-color: gray;
  }
`;

const EmailCheckButton = styled.button`
  width: 90px;
  height: 47px;
  border-radius: 10px;
  border: none;
  background-color: #286bd0;
  margin-bottom: 15px;
  margin-left: 10px;
  color: white;
  &:hover {
    background-color: #0064ff;
  }
  &:disabled {
    background-color: gray;
  }
`;

const EmailWrapper = styled.div``;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: ${(props) => props.color || "white"};
`;

const TimeMessage = styled.p`
  margin-left: 7px;
  margin-top: 1px;
  font-size: small;
  font-weight: 600;
  color: #0064ff;
  &.ok {
    color: #0064ff;
  }
  &.error {
    color: #ff2727;
  }
`;

const TextMessage = styled.p`
  margin-top: 1px;
  font-size: small;
  padding-left: 20px;
  color: #0064ff;
  &.ok {
    color: #0064ff;
  }
  &.error {
    color: #ff2727;
  }
`;

const AgreeButton = styled.button`
  width: 190px;
  height: 50px;
  border: 0px;
  border-radius: 10px;
  border: none;
  background-color: #286bd0;
  color: white;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  margin-top: 10px;
  margin-left: 10px;

  &.cancle {
    background-color: gray;
    &:hover {
      background-color: gray;
    }
  }
  &:hover {
    background-color: #0064ff;
  }
  &:disabled {
    background-color: gray;
  }
`;

const Message2 = styled.p`
  font-size: small;
  width: 400px;
  padding-left: 20px;
  text-align: left;
  margin-top: 40px;

  &.success {
    color: #8f8c8b;
  }

  &.ok {
    color: #0064ff;
  }

  &.error {
    color: #ff2727;
  }
`;

export {
  Title,
  Row,
  Rows,
  EssentialForm,
  Message,
  SignUpButton,
  Container,
  MainTitle,
  PreferenceButton,
  EmailCheckButton,
  EmailWrapper,
  TimeMessage,
  TextMessage,
  AgreeButton,
  Message2,
};
