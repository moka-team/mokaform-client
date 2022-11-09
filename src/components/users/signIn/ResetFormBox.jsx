import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../../../api/client";
import { setAccessToken } from "../../../authentication/auth";
import CustomTextField from "../../common/CustomTextField";
import { Message } from "../signUp/SignUpCSS";
import { LocalLoginWrapper, LoginButton, LoginInputContainer } from "./styled";

function ResetFormBox() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const navigate = useNavigate();

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const fetchUser = async () => {
    // try {
    //   const response = await apiClient.get("/api/v1/users/my");
    //   console.log(response.data.data);
    //   setLoggedUser(response.data.data);
    //   console.log(login);
    //   window.alert("로그인이 완료되었습니다.");
    //   navigate("/");
    // } catch (error) {
    //   console.log(error);
    // }
  };

  // TODO: API 주소 변경 필요!
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await apiClient.post(
        "/api/v1/users/reset-password/email-verification/send",
        {
          params: { email: email },
        }
      );
      console.log(response);
      // if (response.data.message.includes("성공")) {
      //   // 로그인 성공 시 로컬 스토리지에 저장
      //   localStorage.clear();
      // } else if (response.data.code === "U001") {
      //   alert("이메일 또는 비밀번호가 일치지 않습니다.");
      // } else {
      //   window.alert("로그인 에러 발생");
      // }
      // setAccessToken(response.headers.accessToken.slice(7));
    } catch (error) {
      window.alert("이메일 또는 비밀번호가 일치하지 않습니다.");
    }
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
            value={email || ""}
            onChange={handleChange}
          />
          <Message>1233</Message>
        </LoginInputContainer>

        <div>
          <LoginButton type="submit">비밀번호 재설정 메일 보내기</LoginButton>
        </div>
      </form>
      <form>
        <LoginInputContainer>
          <CustomTextField
            type="text"
            name="number"
            label="인증번호"
            variant="filled"
            size="small"
            value={email || ""}
            onChange={handleChange}
          />
          <Message>1233</Message>
        </LoginInputContainer>
        <div>
          <LoginButton type="submit">인증번호 확인</LoginButton>
        </div>
      </form>
    </LocalLoginWrapper>
  );
}

export default ResetFormBox;
