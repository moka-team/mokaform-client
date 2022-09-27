import { Box } from "@mui/material";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import styled from "styled-components";

function SignIn() {
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
    alert(inputs);
  };

  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Logo = styled.img`
    margin-top: 233px;
    height: 144px;
  `;

  const LoginFormContainer = styled.div`
    width: 461px;
    justify-content: center;
    align-items: center;
  `;

  const LoginInputContainer = styled.div`
    margin-right: 15px;
    margin-top: 25px;
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

  const SocialLoginContainer = styled.div`
    margin-top: 30px;
  `;

  const KaKaoLoginImg = styled.img`
    width: 100%;
    padding: 0;
    border-radius: 10px;
    border: none;

    object-fit: scale-down;
  `;

  const AuthMenu = styled.div`
    position: relative;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    margin-top: 12.89px;
  `;

  const ResetPasswordLink = styled(Link)`
    text-decoration-line: none;
    color: #000000cc;
    &:link {
      text-decoration-line: none;
      color: #000000cc;
    }
    &:visited {
      text-decoration-line: none;
      color: #000000cc;
    }
    &:hover {
      text-decoration-line: none;
      color: #0064ff;
    }
    &:active {
      text-decoration-line: none;
      color: #000000cc;
    }
  `;

  const SignUpLink = styled(Link)`
    position: absolute;
    top: 0%;
    right: 0%;
    text-decoration: none;
    color: #000000cc;
    &:link {
      text-decoration-line: none;
      color: #000000cc;
    }
    &:visited {
      text-decoration-line: none;
      color: #000000cc;
    }
    &:hover {
      text-decoration: none;
      color: #0064ff;
    }
    &:active {
      text-decoration-line: none;
      color: #000000cc;
    }
  `;

  return (
    <Container>
      <Box>
        <LogoContainer>
          <Logo src="/img/mokaform-logo.png" />
        </LogoContainer>
        <LoginFormContainer>
          <div>
            <form>
              <LoginInputContainer>
                <div>
                  <EmailInput
                    type="text"
                    name="email"
                    placeholder="이메일"
                    value={inputs.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <PasswordInput
                    type="password"
                    name="password"
                    placeholder="비밀번호"
                    value={inputs.password}
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
          </div>
          <AuthMenu>
            <ResetPasswordLink to="/reset-password">
              비밀번호 찾기
            </ResetPasswordLink>
            <SignUpLink to="/signup">회원가입</SignUpLink>
          </AuthMenu>
          <SocialLoginContainer>
            <KaKaoLoginImg src="./img/kakao_login_large_wide.png" onClick="" />
          </SocialLoginContainer>
        </LoginFormContainer>
      </Box>
    </Container>
  );
}

export default SignIn;
