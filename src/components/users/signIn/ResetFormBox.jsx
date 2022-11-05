import { useState } from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { LocalLoginWrapper, LoginInputContainer, LoginButton } from "./styled";
import { useRecoilState } from "recoil";
import { userState } from "../../../authentication/userState";
import * as Sentry from "@sentry/react";
import {
  getAccessToken,
  getRefreshToken,
  logout,
  setTokens,
  updateAccessToken,
} from "../../../authentication/auth";
import CustomTextField from "../../common/CustomTextField";
import apiClient from "../../../api/client";

function ResetFormBox() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  // TODO: API 주소 변경 필요!
  const handleSubmit = (event) => {
    event.preventDefault();

    apiClient
      .post("/api/v1/users/login", {
        email: inputs.email,
        password: inputs.password,
      })
      .then(function (response) {
        if (response.data.message.includes("성공")) {
          // 로그인 성공 시 로컬 스토리지에 저장
          localStorage.clear();
        } else if (response.data.code === "U001") {
          alert("이메일 또는 비밀번호가 일치하지 않습니다.");
        } else {
          window.alert("로그인 에러 발생");
        }
        setTokens(
          response.data.data.refreshToken,
          response.data.data.accessToken
        );
      })
      .catch(function (error) {
        window.alert("이메일 또는 비밀번호가 일치하지 않습니다.");
      });
  };
  return (
    <LocalLoginWrapper>
      <form onSubmit={handleSubmit}>
        <LoginInputContainer>
          <CustomTextField
            type="text"
            name="email"
            label="이메일"
            variant="filled"
            size="small"
            value={inputs.email || ""}
            onChange={handleChange}
          />
        </LoginInputContainer>
        <div>
          <div>
            <LoginButton type="submit">비밀번호 재설정 메일 보내기</LoginButton>
          </div>
        </div>
      </form>
    </LocalLoginWrapper>
  );
}

export default ResetFormBox;
