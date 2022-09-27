import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LocalLoginContainer from "./LocalLoginContainer";
import SocialLoginContainer from "./SocialLoginContainer";

function LoginFormContainer({ loginInputs, handleChange, handleSubmit }) {
  const LoginFormContainer = styled.div`
    width: 461px;
    justify-content: center;
    align-items: center;
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
    <LoginFormContainer>
      <LocalLoginContainer
        loginInputs={loginInputs}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <AuthMenu>
        <ResetPasswordLink to="/reset-password">
          비밀번호 찾기
        </ResetPasswordLink>
        <SignUpLink to="/signup">회원가입</SignUpLink>
      </AuthMenu>
      <SocialLoginContainer />
    </LoginFormContainer>
  );
}

export default LoginFormContainer;
