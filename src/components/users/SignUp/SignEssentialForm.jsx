import React from "react";
import "./SignEssentialForm.css";

export default function SignEssentialForm() {
  const onIdHandler = (event) => {};

  const onNicknameHandler = (event) => {};

  const onPasswordHandler = (event) => {};

  const onConfirmPasswordHandler = (event) => {};

  const onClickHandler = (event) => {};

  return (
    <div className="sign_essentail_form_container">
      <form>
        <h1>SIGN UP | MOKA FORM</h1>
        <div>
          <input
            name="id"
            type="text"
            placeholder="아이디"
            onChange={onIdHandler}
            class="signUp_form"
          />
        </div>
        <div>
          <input
            name="nickname"
            type="text"
            placeholder="닉네임"
            onChange={onNicknameHandler}
            class="signUp_form"
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="비밀번호"
            onChange={onPasswordHandler}
            class="signUp_form"
          />
        </div>
        <div>
          <input
            name="confirmPassword"
            type="password"
            placeholder="비밀번호 확인"
            onChange={onConfirmPasswordHandler}
            class="signUp_form"
          />
        </div>
        <div>
          <button
            type="button"
            onClick={onClickHandler}
            className="essential_button"
          >
            다음
          </button>
        </div>
      </form>
    </div>
  );
}
