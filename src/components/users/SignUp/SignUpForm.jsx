import React, { useRef } from "react";
import AgeRow from "./AgeRow";
import InterestRow from "./InterestRow";
import JobRow from "./JobRow";
import SexRow from "./SexRow";
import SignEssentialForm from "./SignEssentialForm";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;

  &.center {
    background-color: #f9fafb;
  }
`;

const Row = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Button = styled.button`
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
`;

const Title = styled.h1`
  margin: 10px;
  margin-top: 35px;
  margin-bottom: 25px;
  font-weight: 700;
`;

export default function SignUpForm() {
  const signOptionRef = useRef(null);
  const signOptionRef2 = useRef(null);

  const onClickHandler = (event) => {
    signOptionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const onNextBtnClickHandler = (event) => {
    signOptionRef2.current?.scrollIntoView({ behavior: "smooth" });
  };
  const onCompleteBtnClickHandler = (event) => {};

  return (
    <>
      <Container>
        <Row>
          <Title>SIGN UP | MOKA FORM</Title>
          <SignEssentialForm></SignEssentialForm>
          <Button onClick={onClickHandler}>다음</Button>
        </Row>
      </Container>
      <Container ref={signOptionRef} className="center">
        <Row>
          <AgeRow></AgeRow>
          <SexRow></SexRow>
          <Button onClick={onNextBtnClickHandler}>다음</Button>
        </Row>
      </Container>
      <Container ref={signOptionRef2}>
        <Row>
          <JobRow></JobRow>
          <InterestRow></InterestRow>
          <Button onClick={onCompleteBtnClickHandler}>가입 완료</Button>
        </Row>
      </Container>
    </>
  );
}
