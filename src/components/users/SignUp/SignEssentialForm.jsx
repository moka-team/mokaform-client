import React from "react";
import { EssentialForm } from "./SignUpCSS";

export default function SignEssentialForm() {
  const onIdHandler = (event) => {};

  const onNicknameHandler = (event) => {};

  const onPasswordHandler = (event) => {};

  const onConfirmPasswordHandler = (event) => {};

  return (
    <>
      <EssentialForm
        name="id"
        type="text"
        placeholder="아이디"
        onChange={onIdHandler}
      />
      <EssentialForm
        name="nickname"
        type="text"
        placeholder="닉네임"
        onChange={onNicknameHandler}
      />
      <EssentialForm
        name="password"
        type="password"
        placeholder="비밀번호"
        onChange={onPasswordHandler}
      />
      <EssentialForm
        name="confirmPassword"
        type="password"
        placeholder="비밀번호 확인"
        onChange={onConfirmPasswordHandler}
      />
    </>
  );
}
