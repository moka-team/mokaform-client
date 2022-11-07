import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../../../api/client";
import { setTokens } from "../../../authentication/auth";
import CustomTextField from "../../common/CustomTextField";
import { LocalLoginWrapper, LoginButton, LoginInputContainer } from "./styled";

function ResetFormBox() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const fetchUser = async () => {
    try {
      const response = await apiClient.get("/api/v1/users/my");
      console.log(response.data.data);
      setLoggedUser(response.data.data);
      console.log(login);
      window.alert("로그인이 완료되었습니다.");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  // TODO: API 주소 변경 필요!
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await apiClient.post("/api/v1/users/login", {
        email: inputs.email,
        password: inputs.password,
      });
      if (response.data.message.includes("성공")) {
        // 로그인 성공 시 로컬 스토리지에 저장
        localStorage.clear();
      } else if (response.data.code === "U001") {
        alert("이메일 또는 비밀번호가 일치하지 않습니다.");
      } else {
        window.alert("로그인 에러 발생");
      }
      setTokens(
        response.data.data.accessToken.slice(7)
      );
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
