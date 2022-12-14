import React, { useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../../../api/client";
import CustomTextField from "../../common/CustomTextField";
import {
  LocalLoginWrapper,
  LoginButton,
  LoginInputContainer
} from "../signIn/styled";
import { Message } from "../signUp/SignUpCSS";
import { EmailContext } from "./emailState";

export default function ResetPasswordForm() {
  const email = useContext(EmailContext);
  const [password, setPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordCheck, setPasswordCheck] = useState(false);

  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
  const [passwordConfirmCheck, setPasswordConfirmCheck] = useState(false);

  const navigate = useNavigate();
  const onPasswordHandler = useCallback(
    (e) => {
      const passwordRegex =
        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
      const passwordCurrent = e.target.value;
      setPassword(passwordCurrent);
      if (!passwordRegex.test(passwordCurrent)) {
        setPasswordMessage(
          "숫자,영문자,특수문자 조합으로 8자리 이상 입력해주세요."
        );
        setPasswordCheck(false);
      } else {
        setPasswordMessage("올바른 비밀번호 형식입니다.");
        setPasswordCheck(true);
      }
    },
    [setPassword]
  );

  const onConfirmPasswordHandler = useCallback(
    (e) => {
      const passwordConfirmCurrent = e.target.value;
      setPasswordConfirm(passwordConfirmCurrent);
      if (password === passwordConfirmCurrent) {
        setPasswordConfirmMessage("비밀번호가 일치합니다.");
        setPasswordConfirmCheck(true);
      } else {
        setPasswordConfirmMessage("비밀번호가 일치하지 않습니다.");
        setPasswordConfirmCheck(false);
      }
    },
    [password, setPasswordConfirm]
  );

  const fetchPassword = async () => {
    try {
      const response = await apiClient.post("/api/v1/users/reset-password", {
        email: email,
        password: password,
      });
      console.log(response);
      if (response.data.message.includes("완료")) {
        alert("비밀번호 재설정이 완료되었습니다!");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      alert("에러 발생");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    fetchPassword();
  };

  return (
    <LocalLoginWrapper>
      <form onSubmit={handleSubmit}>
        <LoginInputContainer>
          <CustomTextField
            type="password"
            name="password"
            label="새 비밀번호"
            variant="filled"
            size="small"
            value={password || ""}
            onChange={onPasswordHandler}
          />
          <Message className={passwordCheck ? "ok" : "error"}>
            {passwordMessage}
          </Message>
          <br></br>
          <br></br>
          <CustomTextField
            type="password"
            name="passwordConfirm"
            label="새 비밀번호 확인"
            variant="filled"
            size="small"
            value={passwordConfirm || ""}
            onChange={onConfirmPasswordHandler}
          />
          <Message className={passwordConfirmCheck ? "ok" : "error"}>
            {passwordConfirmMessage}
          </Message>
        </LoginInputContainer>
        <div>
          <LoginButton
            type="submit"
            disabled={!passwordCheck || !passwordConfirmCheck}
          >
            비밀번호 변경
          </LoginButton>
        </div>
      </form>
    </LocalLoginWrapper>
  );
}
