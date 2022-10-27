import { useState } from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  LocalLoginWrapper,
  LoginInputContainer,
  LoginButton,
} from "./SigninStyle";
import { useRecoilState } from "recoil";
import { userState } from "../../../authentication/userState";

const CustomTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    border: "none",
    width: "400px",
    overflow: "hidden",
    marginBottom: "15px",
    borderRadius: 8,
    backgroundColor: "#edeef0",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-focused": {
      borderColor: "#3399ff",
      outline: "2px solid#80bfff",
    },
  },
}));

function LocalLoginContainer() {
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

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(
        "/api/v1/users/login",
        {
          email: inputs.email,
          password: inputs.password,
        },
        {
          headers: {
            accessToken: getAccessToken(),
            refreshToken: getRefreshToken(),
          },
        }
      )
      .then(function (response) {
        if (response.data.message.includes("성공")) {
          // 로그인 성공 시 로컬 스토리지에 저장
          localStorage.clear();
          // 로그인 성공 시 유저 데이터 저장
          setUser(response.data.data);

          window.alert("로그인이 완료되었습니다.");
          navigate("/");
        } else if (response.data.code === "U001") {
          alert("이메일 또는 비밀번호가 일치하지 않습니다.");
        } else {
          window.alert("로그인 에러 발생");
        }
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
          <br></br>
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
