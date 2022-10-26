import React, { useRef, useState } from "react";
import AgeRow from "./AgeRow";
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
  isEmailState,
  isNicknameState,
  isPasswordState,
  isPasswordConfirmState,
} from "./SignUpState";
import SignEssentialForm from "./SignEssentialForm";
import { MainTitle, Rows, Button, Container } from "./SignUpCSS";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { alertTitleClasses } from "@mui/material";
import PreferenceRow from "./PreferenceRow";

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

  const [isNickname, setIsNickname] = useRecoilState(isNicknameState);
  const [isEmail, setIsEmail] = useRecoilState(isEmailState);
  const [isPassword, setIsPassword] = useRecoilState(isPasswordState);
  const [isPasswordConfirm, setIsPasswordConfirm] = useRecoilState(
    isPasswordConfirmState
  );

  const navigate = useNavigate();
  const onClickHandler = (event) => {
    signOptionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const onNextBtnClickHandler = (event) => {
    signOptionRef2.current?.scrollIntoView({ behavior: "smooth" });
  };

  let ValidateInfo = false;

  const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";
  const URL = `${PROXY}/api/v1/users/signup`;

  console.log(URL)
  const signUpPatch = () => {
    axios
      .post(URL, {
        email: email,
        password: password,
        nickname: nickname,
        ageGroup: ageGroup,
        gender: gender,
        job: job,
        category: preference,
      })
      .then(function (response) {
        if (response.data.message === "새로운 유저 생성이 성공하였습니다.") {
          // 회원가입 성공 시 모든 전역 데이터 지우기
          setEmail("");
          setNickname("");
          setPassword("");
          setPasswordConfirm("");
          setAgeGroup("");
          setGender("");
          setJob("");
          setPreference([]);
          window.alert("회원가입이 완료되었습니다.");
          navigate("/");
        } else {
          console.log(response)
          window.alert("회원가입 에러 발생");
        }
      })
      .catch(function (error) {
        console.log(response)
        console.log(error);
      });
  };

  const onCompleteBtnClickHandler = (event) => {
    event.preventDefault();
    signUpPatch();
  };

  if (
    ageGroup === "" ||
    gender === "" ||
    job === "" ||
    preference.length === 0
  ) {
    ValidateInfo = false;
  } else {
    ValidateInfo = true;
  }

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
          <PreferenceRow />
          <Button
            disabled={
              !(
                isNickname &&
                isEmail &&
                isPassword &&
                isPasswordConfirm &&
                ValidateInfo
              )
            }
            onClick={onCompleteBtnClickHandler}
          >
            가입 완료
          </Button>
        </Rows>
      </Container>
    </>
  );
}
