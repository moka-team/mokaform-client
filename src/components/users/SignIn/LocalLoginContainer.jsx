import { useState } from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import {
  LocalLoginWrapper,
  LoginInputContainer,
  LoginButton,
} from "./SigninStyle";

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

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("email: " + inputs.email + "\n" + "password: " + inputs.password);
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
