import React, { useRef } from "react";
import AgeRow from "./AgeRow";
import InterestRow from "./InterestRow";
import JobRow from "./JobRow";
import SexRow from "./SexRow";
import SignEssentialForm from "./SignEssentialForm";
import { MainTitle, Rows, Button, Container } from "./SignUpCSS";

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
        <Rows>
          <MainTitle>SIGN UP | MOKA FORM</MainTitle>
          <SignEssentialForm></SignEssentialForm>
          <Button onClick={onClickHandler}>다음</Button>
        </Rows>
      </Container>
      <Container color="#f9fafb" ref={signOptionRef}>
        <Rows>
          <AgeRow></AgeRow>
          <SexRow></SexRow>
          <Button onClick={onNextBtnClickHandler}>다음</Button>
        </Rows>
      </Container>
      <Container ref={signOptionRef2}>
        <Rows>
          <JobRow></JobRow>
          <InterestRow></InterestRow>
          <Button onClick={onCompleteBtnClickHandler}>가입 완료</Button>
        </Rows>
      </Container>
    </>
  );
}
