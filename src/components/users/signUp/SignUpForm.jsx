import * as Sentry from "@sentry/react";
import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import AgeRow from "./AgeRow";
import JobRow from "./JobRow";
import PreferenceRow from "./PreferenceRow";
import SexRow from "./SexRow";
import SignEssentialForm from "./SignEssentialForm";
import { Button, Container, MainTitle, Rows } from "./SignUpCSS";
import {
  ageGroupState,
  emailState,
  genderState,
  isEmailState,
  isNicknameState,
  isPasswordConfirmState,
  isPasswordState,
  jobState,
  nicknameState,
  passwordConfirmState,
  passwordState,
  preferenceState,
} from "./SignUpState";
import {
  getAccessToken,
  getRefreshToken,
  updateAccessToken,
} from "../../../authentication/auth";
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

  const signUpPatch = () => {
    axios
      .post(
        "/api/v1/users/signup",
        {
          email: email,
          password: password,
          nickname: nickname,
          ageGroup: ageGroup,
          gender: gender,
          job: job,
          category: preference,
        },
        {
          headers: {
            accessToken: getAccessToken(),
            refreshToken: getRefreshToken(),
          },
        }
      )
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
          window.alert("회원가입 에러 발생");
        }
      })
      .catch(function (error) {
        Sentry.captureException(error);
        // Access Token 재발행이 필요한 경우
        if (error.code === "C005") {
          axios
            .post("/api/v1/users/token/reissue", {
              headers: {
                accessToken: getAccessToken(),
                refreshToken: getRefreshToken(),
              },
            })
            .then((res) => {
              updateAccessToken(res.data.data);
            })
            .catch(function (error) {
              Sentry.captureException(error);
              // Access Token 재발행이 필요한 경우
              if (error.code === "C005") {
                axios
                  .post("/api/v1/users/token/reissue", {
                    headers: {
                      accessToken: getAccessToken(),
                      refreshToken: getRefreshToken(),
                    },
                  })
                  .then((res) => {
                    updateAccessToken(res.data.data);
                  });
              }
            });
        }
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
