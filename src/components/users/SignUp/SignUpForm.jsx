import React, { useRef, useState } from "react";
import AgeRow from "./AgeRow";
import InterestRow from "./InterestRow";
import JobRow from "./JobRow";
import SexRow from "./SexRow";
import { useRecoilState } from "recoil";
import {
  emailState,
  nicknameState,
  passwordState,
  passwordConfirmState,
  ageGroupState,
  genderState,
  jobState,
  preferenceState,
} from "./SignUpState";
import SignEssentialForm from "./SignEssentialForm";
import { MainTitle, Rows, Button, Container } from "./SignUpCSS";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { alertTitleClasses } from "@mui/material";

export default function SignUpForm() {
  const signOptionRef = useRef(null);
  const signOptionRef2 = useRef(null);

  const [email, setEmail] = useRecoilState(emailState);
  const [nickname, setNickname] = useRecoilState(nicknameState);
  const [password, setPassword] = useRecoilState(passwordState);
  const [passwordConfirm, setPasswordConfirm] =
    useRecoilState(passwordConfirmState);
  const [ageGroup, setAgeGroup] = useRecoilState(ageGroupState);
  const [gender, setGender] = useRecoilState(genderState);
  const [job, setJob] = useRecoilState(jobState);
  const [preference, setPreference] = useRecoilState(preferenceState);

  const onClickHandler = (event) => {
    signOptionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const onNextBtnClickHandler = (event) => {
    signOptionRef2.current?.scrollIntoView({ behavior: "smooth" });
  };

  const signUpPatch = () => {
    axios
      .post("/api/v1/users/signup", {
        email: email,
        password: password,
        nickname: nickname,
        ageGroup: ageGroup,
        gender: gender,
        job: job,
        // preference_category: preference,
      })
      .then(function (response) {
        // if (response.data.code == 0) {
        //   alert("회원가입 성공");
        // } else {
        //   let message = response.data.message;
        //   alert("회원가입 실패 " + message);
        // }
        window.alert(response.data.message);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // 회원가입 성공 시 모든 전역 데이터 지우기
  const onCompleteBtnClickHandler = (event) => {
    event.preventDefault();
    console.log(
      "email=" +
        email +
        "nickname=" +
        nickname +
        "password =" +
        password +
        "비밀번호 확인 = " +
        passwordConfirm +
        "연령대 = " +
        ageGroup +
        "성별 = " +
        gender +
        "직업 = " +
        job +
        "관심사 = " +
        preference
    );
    if (
      email === "" ||
      nickname === "" ||
      password === "" ||
      passwordConfirm === "" ||
      ageGroup === "" ||
      gender === "" ||
      job === ""
    ) {
      console.log("잘못된 형식");
    } else {
      signUpPatch();
      setEmail("");
      setNickname("");
      setPassword("");
      setPasswordConfirm("");
      setAgeGroup("");
      setGender("");
      setJob("");
      setPreference("");
    }
  };

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
