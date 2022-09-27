import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LocalLoginContainer from "../../../components/users/SignIn/LocalLoginContainer";

function LoginFormContainer({ loginInputs, handleChange, handleSubmit }) {
  const LoginFormContainer = styled.div`
    width: 461px;
    justify-content: center;
    align-items: center;
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
      <SocialLoginContainer>
        <KaKaoLoginImg src="./img/kakao_login_large_wide.png" onClick="" />
      </SocialLoginContainer>
    </LoginFormContainer>
  );
}

export default LoginFormContainer;
