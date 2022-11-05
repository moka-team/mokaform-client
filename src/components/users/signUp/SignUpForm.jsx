import * as Sentry from "@sentry/react";
import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAccessToken,
  getRefreshToken,
  logout,
  updateAccessToken
} from "../../../authentication/auth";
import AgeRow from "./AgeRow";
import JobRow from "./JobRow";
import PreferenceRow from "./PreferenceRow";
import SexRow from "./SexRow";
import SignEssentialForm from "./SignEssentialForm";
import { Button, Container, MainTitle, Rows } from "./SignUpCSS";
import { setUser } from "@sentry/react";
import  apiClient  from '../../../api/client';

export default function SignUpForm() {
  const signOptionRef = useRef(null);
  const signOptionRef2 = useRef(null);

  // 피드백 반영: 리코일 -> props로 변경
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [job, setJob] = useState("");
  const [preference, setPreference] = useState("");
  const [isNickname, setIsNickname] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const navigate = useNavigate();
  const onClickHandler = (event) => {
    signOptionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const onNextBtnClickHandler = (event) => {
    signOptionRef2.current?.scrollIntoView({ behavior: "smooth" });
  };

  const getEmail = (email) => {
    setEmail(email);
  };
  const getNickname = (nickname) => {
    setNickname(nickname);
  };
  const getPassword = (password) => {
    setPassword(password);
  };
  const getPasswordConfirm = (passwordConfirm) => {
    setPasswordConfirm(passwordConfirm);
  };
  const getAge = (age) => {
    setAge(age);
  };
  const getGender = (gender) => {
    setGender(gender);
  };
  const getJob = (job) => {
    setJob(job);
  };
  const getPreference = (preference) => {
    setPreference(preference);
  };
  const getIsNickname = (isNickname) => {
    setIsNickname(isNickname);
  };
  const getIsEmail = (isEmail) => {
    setIsEmail(isEmail);
  };
  const getIsPassword = (isPassword) => {
    setIsPassword(isPassword);
  };
  const getIsPasswordConfirm = (isPasswordConfirm) => {
    setIsPasswordConfirm(isPasswordConfirm);
  };

  let ValidateInfo = false;

  const signUpPatch = () => {
    apiClient
      .post(
        "/api/v1/users/signup",
        {
          email: email,
          password: password,
          nickname: nickname,
          ageGroup: age,
          gender: gender,
          job: job,
          category: preference,
        },
        {
          // headers: {
          //   accessToken: getAccessToken(),
          //   refreshToken: getRefreshToken(),
          // },
        }
      )
      .then(function (response) {
        if (response.data.message === "새로운 유저 생성이 성공하였습니다.") {
          window.alert("회원가입이 완료되었습니다.");
          navigate("/");
        } else {
          window.alert("회원가입 에러 발생");
        }
      })
  };

  const onCompleteBtnClickHandler = (event) => {
    event.preventDefault();
    signUpPatch();
  };

  if (age === "" || gender === "" || job === "" || preference.length === 0) {
    ValidateInfo = false;
  } else {
    ValidateInfo = true;
  }

  return (
    <>
      <Container>
        <Rows>
          <MainTitle>SIGN UP | MOKA FORM</MainTitle>
          <SignEssentialForm
            email={email}
            nickname={nickname}
            password={password}
            passwordConfirm={passwordConfirm}
            isEmail={isEmail}
            isNickname={isNickname}
            isPassword={isPassword}
            isPasswordConfirm={isPasswordConfirm}
            getEmail={getEmail}
            getNickname={getNickname}
            getPassword={getPassword}
            getPasswordConfirm={getPasswordConfirm}
            getIsEmail={getIsEmail}
            getIsNickname={getIsNickname}
            getIsPassword={getIsPassword}
            getIsPasswordConfirm={getIsPasswordConfirm}
          />
          <Button onClick={onClickHandler}>다음</Button>
        </Rows>
      </Container>
      <Container color="#f9fafb" ref={signOptionRef}>
        <Rows>
          <AgeRow age={age} getAge={getAge}></AgeRow>
          <SexRow gender={gender} getGender={getGender}></SexRow>
          <Button onClick={onNextBtnClickHandler}>다음</Button>
        </Rows>
      </Container>
      <Container ref={signOptionRef2}>
        <Rows>
          <JobRow job={job} getJob={getJob}></JobRow>
          <PreferenceRow
            preference={preference}
            getPreference={getPreference}
          />
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
