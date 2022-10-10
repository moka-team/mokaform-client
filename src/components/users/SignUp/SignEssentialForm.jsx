import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { EssentialForm } from "./SignUpCSS";
import {
  emailState,
  nicknameState,
  passwordState,
  passwordConfirmState,
} from "./SignUpState";

export default function SignEssentialForm() {
  const [email, setEmail] = useRecoilState(emailState);
  const [nickname, setNickname] = useRecoilState(nicknameState);
  const [password, setPassword] = useRecoilState(passwordState);
  const [passwordConfirm, setPasswordConfirm] =
    useRecoilState(passwordConfirmState);

  const onIdHandler = (e) => {
    setEmail(e.target.value);
  };

  const onNicknameHandler = (e) => {
    setNickname(e.target.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const onConfirmPasswordHandler = (e) => {
    setPasswordConfirm(e.target.value);
  };

  return (
    <>
      <EssentialForm
        name="email"
        type="text"
        placeholder="이메일"
        value={email}
        onChange={onIdHandler}
      />
      <EssentialForm
        name="nickname"
        type="text"
        placeholder="닉네임"
        value={nickname}
        onChange={onNicknameHandler}
      />
      <EssentialForm
        name="password"
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={onPasswordHandler}
      />
      <EssentialForm
        name="confirmPassword"
        type="password"
        placeholder="비밀번호 확인"
        value={passwordConfirm}
        onChange={onConfirmPasswordHandler}
      />
    </>
  );
}
