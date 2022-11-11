import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../../../api/client";
import { setAccessToken } from "../../../authentication/auth";
import {
  UserActionsContext,
  UserContext
} from "../../../authentication/userState";
import CustomTextField from "../../common/CustomTextField";
import { LocalLoginWrapper, LoginButton, LoginInputContainer } from "./styled";

function LocalLoginContainer() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const login = useContext(UserContext);
  const { setLoggedUser } = useContext(UserActionsContext);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const fetchUser = async () => {
    try {
      const response = await apiClient.get("/api/v1/users/my");
      setLoggedUser(response.data.data);
      window.alert("로그인이 완료되었습니다.");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    apiClient
      .post("/api/v1/users/login", {
        email: inputs.email,
        password: inputs.password,
      })
      .then(function (response) {
        const token = response.headers.authorization;
        if (response.data.message.includes("성공")) {
          // 로그인 성공 시 로컬 스토리지에 저장
          localStorage.clear();
          fetchUser();
        } else if (response.data.code === "U001") {
          alert("이메일 또는 비밀번호가 일치하지 않습니다.");
        } else {
          window.alert("로그인 에러 발생");
        }
        setAccessToken(token.slice(7));
      })
      .catch(function (error) {
        console.log(error);
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
          <br></br><br></br>
          <CustomTextField
            type="password"
            name="password"
            label="비밀번호"
            variant="filled"
            size="small"
            value={inputs.password || ""}
            onChange={handleChange}
          />
        </LoginInputContainer>
        <div>
          <div>
            <LoginButton type="submit">로그인</LoginButton>
          </div>
        </div>
      </form>
    </LocalLoginWrapper>
  );
}

export default LocalLoginContainer;
