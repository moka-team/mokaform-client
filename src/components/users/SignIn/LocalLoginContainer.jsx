import { useState } from "react";
import styled from "styled-components";

const LocalLoginWrapper = styled.div`
  margin-top: 25px;
`;

const LoginInputContainer = styled.div`
  margin-right: 15px;
  margin-bottom: 25px;
`;

const EmailInput = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  margin-bottom: 8px;
  padding-left: 10px;
  font-size: 100%;
`;

const PasswordInput = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding-left: 10px;
  font-size: 100%;
`;

const LoginButton = styled.button`
  width: 100%;
  height: 62.11px;
  border: 0px;
  border-radius: 10px;
  border: none;
  background-color: #286bd0;
  color: white;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 21px;

  &:hover {
    background-color: #0064ff;
  }
`;

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
          <div>
            <EmailInput
              type="text"
              name="email"
              placeholder="이메일"
              value={inputs.email || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <PasswordInput
              type="password"
              name="password"
              placeholder="비밀번호"
              value={inputs.password || ""}
              onChange={handleChange}
            />
          </div>
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
