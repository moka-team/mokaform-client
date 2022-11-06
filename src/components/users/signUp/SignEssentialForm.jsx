import { Box } from "@mui/material";
import * as Sentry from "@sentry/react";
import { setUser } from "@sentry/react";
import React, { useCallback, useState } from "react";
import {
  getAccessToken,
  getRefreshToken,
  logout,
  updateAccessToken
} from "../../../authentication/auth";
import CustomTextField from "../../common/CustomTextField";
import  apiClient  from '../../../api/client';
import { Message } from "./SignUpCSS";
export default function SignEssentialForm({
  email,
  nickname,
  password,
  passwordConfirm,
  isNickname,
  isEmail,
  isPassword,
  isPasswordConfirm,
  getEmail,
  getNickname,
  getPassword,
  getPasswordConfirm,
  getIsNickname,
  getIsEmail,
  getIsPassword,
  getIsPasswordConfirm,
}) {

  //오류메시지 상태저장
  const [nicknameMessage, setNicknameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

  const onEmailHandler = useCallback((e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    getEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("이메일 형식으로 입력해주세요.");
      getIsEmail(false);
    } else {
      apiClient
        .get("/api/v1/users/check-email-duplication", {
          params: {
            email: emailCurrent,
          },
          // headers: {
          //   accessToken: getAccessToken(),
          //   refreshToken: getRefreshToken(),
          // },
        })
        .then(function (response) {
          if (response.data.message.includes("성공")) {
            if (response.data.data.isDuplicated === false) {
              setEmailMessage("사용 가능한 이메일입니다.");
              getIsEmail(true);
            } else {
              setEmailMessage(
                "중복 이메일이 있습니다. 다른 이메일을 입력해주세요."
              );
              getIsEmail(false);
            }
          } else {
            console.log("에러발생");
            setEmailMessage(
              "중복 이메일이 있습니다. 다른 이메일을 입력해주세요."
            );
            getIsEmail(false);
          }
        })
    }
  }, []);

  const onNicknameHandler = useCallback(
    (e) => {
      getNickname(e.target.value);
      if (e.target.value.length < 2 || e.target.value.length > 5) {
        setNicknameMessage("2글자 이상 5글자 이하로 입력해주세요.");
        getIsNickname(false);
      } else {
        apiClient
          .get("/api/v1/users/check-nickname-duplication", {
            params: {
              nickname: e.target.value,
            },
            // headers: {
            //   accessToken: getAccessToken(),
            //   refreshToken: getRefreshToken(),
            // },
          })
          .then(function (response) {
            if (response.data.message.includes("성공")) {
              console.log(response.data.data.isDuplicated);
              if (response.data.data.isDuplicated === false) {
                setNicknameMessage("사용 가능한 닉네임입니다.");
                getIsNickname(true);
              } else {
                setNicknameMessage(
                  "중복 닉네임이 있습니다. 다른 닉네임을 입력해주세요."
                );
                getIsNickname(false);
              }
            } else {
              console.log("에러발생");
              setNicknameMessage(
                "중복 닉네임이 있습니다. 다른 닉네임을 입력해주세요."
              );
              getIsNickname(false);
            }
          })
      }
    },
    [getNickname]
  );

  const onPasswordHandler = useCallback(
    (e) => {
      const passwordRegex =
        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
      const passwordCurrent = e.target.value;
      getPassword(passwordCurrent);
      if (!passwordRegex.test(passwordCurrent)) {
        setPasswordMessage(
          "숫자,영문자,특수문자 조합으로 8자리 이상 입력해주세요."
        );
        getIsPassword(false);
      } else {
        setPasswordMessage("올바른 비밀번호 형식입니다.");
        getIsPassword(true);
      }
    },
    [getPassword]
  );

  const onConfirmPasswordHandler = useCallback(
    (e) => {
      const passwordConfirmCurrent = e.target.value;
      getPasswordConfirm(passwordConfirmCurrent);
      if (password === passwordConfirmCurrent) {
        setPasswordConfirmMessage("비밀번호가 일치합니다.");
        getIsPasswordConfirm(true);
      } else {
        setPasswordConfirmMessage("비밀번호가 일치하지 않습니다.");
        getIsPasswordConfirm(false);
      }
    },
    [password, getPasswordConfirm]
  );

  return (
    <>
      <CustomTextField
        name="email"
        type="text"
        label="이메일"
        value={email}
        variant="filled"
        size="small"
        onChange={onEmailHandler}
      />
      <Box sx={{ width: 400, height: 25 }}>
        {email.length > 0 && (
          <Message className={isEmail ? "success" : "error"}>
            {emailMessage}
          </Message>
        )}
      </Box>
      <CustomTextField
        name="nickname"
        type="text"
        autoComplete="off"
        label="닉네임"
        value={nickname}
        variant="filled"
        size="small"
        onChange={onNicknameHandler}
      />
      <Box sx={{ width: 400, height: 25 }}>
        {nickname.length > 0 && (
          <Message className={isNickname ? "success" : "error"}>
            {nicknameMessage}
          </Message>
        )}
      </Box>
      <CustomTextField
        autoComplete="off"
        name="password"
        type="password"
        label="비밀번호"
        value={password}
        variant="filled"
        size="small"
        onChange={onPasswordHandler}
      />
      <Box sx={{ width: 400, height: 25 }}>
        {password.length > 0 && (
          <Message className={isPassword ? "success" : "error"}>
            {passwordMessage}
          </Message>
        )}
      </Box>
      <CustomTextField
        name="confirmPassword"
        type="password"
        label="비밀번호 확인"
        value={passwordConfirm}
        variant="filled"
        size="small"
        onChange={onConfirmPasswordHandler}
      />
      <Box sx={{ width: 400, height: 25 }}>
        {passwordConfirm.length > 0 && (
          <Message className={isPasswordConfirm ? "success" : "error"}>
            {passwordConfirmMessage}
          </Message>
        )}
      </Box>
    </>
  );
}
