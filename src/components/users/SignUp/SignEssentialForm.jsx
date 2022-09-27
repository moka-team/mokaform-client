import React from "react";
import "./SignEssentialForm.css";

export default function SignEssentialForm() {
  const onIdHandler = (event) => {};

  const onNicknameHandler = (event) => {};

  const onPasswordHandler = (event) => {};

  const onConfirmPasswordHandler = (event) => {};

  return (
    <div>
      <div>
        <input
          name="id"
          type="text"
          placeholder="아이디"
          onChange={onIdHandler}
          className="signUp_form"
        />
      </div>
      <div>
        <input
          name="nickname"
          type="text"
          placeholder="닉네임"
          onChange={onNicknameHandler}
          className="signUp_form"
        />
      </div>
      <div>
        <input
          name="password"
          type="password"
          placeholder="비밀번호"
          onChange={onPasswordHandler}
          className="signUp_form"
        />
      </div>
      <div>
        <input
          name="confirmPassword"
          type="password"
          placeholder="비밀번호 확인"
          onChange={onConfirmPasswordHandler}
          className="signUp_form"
        />
      </div>
    </div>
  );
}
