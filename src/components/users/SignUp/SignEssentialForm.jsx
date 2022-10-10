import React, { useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { EssentialForm, Message } from "./SignUpCSS";
import {
  emailState,
  nicknameState,
  passwordState,
  passwordConfirmState,
} from "./SignUpState";

export default function SignEssentialForm() {
  // 이메일, 닉네임, 비밀번호, 비밀번호 확인
  const [email, setEmail] = useRecoilState(emailState);
  const [nickname, setNickname] = useRecoilState(nicknameState);
  const [password, setPassword] = useRecoilState(passwordState);
  const [passwordConfirm, setPasswordConfirm] =
    useRecoilState(passwordConfirmState);

  //오류메시지 상태저장
  const [nicknameMessage, setNicknameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

  // 유효성 검사
  const [isNickname, setIsNickname] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const onEmailHandler = useCallback((e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("이메일 형식으로 입력해주세요.");
      setIsEmail(false);
    } else {
      setEmailMessage("올바른 이메일 형식입니다.");
      setIsEmail(true);
    }
  }, []);

  const onNicknameHandler = useCallback(
    (e) => {
      setNickname(e.target.value);
      if (e.target.value.length < 2 || e.target.value.length > 5) {
        setNicknameMessage("2글자 이상 5글자 미만으로 입력해주세요.");
        setIsNickname(false);
      } else {
        setNicknameMessage("올바른 닉네임 형식입니다.");
        setIsNickname(true);
      }
    },
    [setNickname]
  );

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
        setIsPassword(false);
      } else {
        setPasswordMessage("올바른 비밀번호 형식입니다.");
        setIsPassword(true);
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
        setIsPasswordConfirm(true);
      } else {
        setPasswordConfirmMessage("비밀번호가 일치하지 않습니다.");
        setIsPasswordConfirm(false);
      }
    },
    [password, setPasswordConfirm]
  );

  return (
    <>
      <EssentialForm
        name="email"
        type="text"
        placeholder="이메일"
        value={email}
        onChange={onEmailHandler}
      />
      {email.length > 0 && (
        <Message className={isEmail ? "success" : "error"}>
          {emailMessage}
        </Message>
      )}
      <EssentialForm
        name="nickname"
        type="text"
        placeholder="닉네임"
        value={nickname}
        onChange={onNicknameHandler}
      />
      {nickname.length > 0 && (
        <Message className={isNickname ? "success" : "error"}>
          {nicknameMessage}
        </Message>
      )}
      <EssentialForm
        name="password"
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={onPasswordHandler}
      />
      {password.length > 0 && (
        <Message className={isPassword ? "success" : "error"}>
          {passwordMessage}
        </Message>
      )}
      <EssentialForm
        name="confirmPassword"
        type="password"
        placeholder="비밀번호 확인"
        value={passwordConfirm}
        onChange={onConfirmPasswordHandler}
      />
      {passwordConfirm.length > 0 && (
        <Message className={isPasswordConfirm ? "success" : "error"}>
          {passwordConfirmMessage}
        </Message>
      )}
    </>
  );
}
