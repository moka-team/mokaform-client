import { Box } from "@mui/material";
import React, { useCallback, useState } from "react";
import apiClient from "../../../api/client";
import CustomTextField from "../../common/CustomTextField";
import EmailCustomTextField from "./EmailCustomTextField";
import TextField from "@mui/material/TextField";
import { EmailCheckButton, EmailWrapper, Message, Rows } from "./SignUpCSS";
import Timer from "react-timer-wrapper";
import Timecode from "react-timecode";
export default function SignEssentialForm({
  email,
  nickname,
  password,
  passwordConfirm,
  isNickname,
  isEmail,
  isPassword,
  isPasswordConfirm,
  isValidateEmail,
  getEmail,
  getNickname,
  getPassword,
  getPasswordConfirm,
  getIsNickname,
  getIsEmail,
  getIsPassword,
  getIsPasswordConfirm,
  getIsEmailValidate,
}) {
  //오류메시지 상태저장
  const [nicknameMessage, setNicknameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [emailValidateOpen, setEmailValidateOpen] = useState(false);
  const [emailValidateText, setEmailValidateText] = useState("");
  const [emailValidate, setEmailValidate] = useState(false);
  const [emailValidateMessage, setEmailValidateMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

  const [time, setTime] = useState();
  const [duration, setDuration] = useState();

  const onTimerUpdate = ({ time, duration }) => {
    setTime(time);
    setDuration(duration);
  };

  const checkEmail = async (emailCurrent) => {
    try {
      const response = await apiClient.get(
        "/api/v1/users/check-email-duplication",
        {
          params: {
            email: emailCurrent,
          },
        }
      );
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
        setEmailMessage("중복 이메일이 있습니다. 다른 이메일을 입력해주세요.");
        getIsEmail(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onEmailHandler = useCallback((e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    getEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("이메일 형식으로 입력해주세요.");
      getIsEmail(false);
    } else {
      checkEmail(emailCurrent);
    }
  }, []);

  const onValidateHandler = useCallback((e) => {
    setEmailValidateText(e.target.value);
  }, []);

  const onEmailCheckHandler = useCallback((e) => {
    setEmailValidateOpen(true);
  }, []);

  const onEmailValidateCheckHandler = useCallback((e) => {
    // 인증번호 확인

    // 인증번호 일치
    getIsEmailValidate(true);
    setEmailValidateMessage("정상 확인 되었습니다.");

    // 인증번호 불일치
    getIsEmailValidate(false);
    setEmailValidateMessage("인증번호가 다릅니다.");
  }, []);

  const checkNickname = async (nickname) => {
    try {
      const response = await apiClient.get(
        "/api/v1/users/check-nickname-duplication",
        {
          params: {
            nickname: nickname,
          },
        }
      );
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
    } catch (error) {
      console.log(error);
    }
  };

  const onNicknameHandler = useCallback(
    (e) => {
      getNickname(e.target.value);
      if (e.target.value.length < 2 || e.target.value.length > 5) {
        setNicknameMessage("2글자 이상 5글자 이하로 입력해주세요.");
        getIsNickname(false);
      } else {
        checkNickname(e.target.value);
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
      <EmailCustomTextField
        name="email"
        type="text"
        label="이메일"
        value={email}
        variant="filled"
        size="small"
        onChange={onEmailHandler}
      />
      <EmailCheckButton onClick={onEmailCheckHandler} disabled={!isEmail}>
        인증 요청
      </EmailCheckButton>
      <Box sx={{ width: 400, height: 25 }}>
        {email.length > 0 && (
          <Message className={isEmail ? "success" : "error"}>
            {emailMessage}
          </Message>
        )}
      </Box>
      {emailValidateOpen && (
        <div>
          <EmailCustomTextField
            name="validate"
            type="text"
            label="인증번호"
            value={emailValidateText}
            variant="filled"
            size="small"
            onChange={onValidateHandler}
          />
          <EmailCheckButton onClick={onEmailValidateCheckHandler}>
            인증확인
          </EmailCheckButton>
          <Box sx={{ width: 400, height: 25 }}>
            <Message className={isValidateEmail ? "success" : "error"}>
              {emailValidateMessage}
            </Message>
            <Timer
              active
              duration={5 * 60 * 1000}
              onTimeUpdate={onTimerUpdate}
            />
            <Timecode time={duration - time} />
          </Box>
        </div>
      )}
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
