import styled from "styled-components";
import { Link } from "react-router-dom";

function AuthMenu() {
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
    <AuthMenu>
      <ResetPasswordLink to="/reset-password">비밀번호 찾기</ResetPasswordLink>
      <SignUpLink to="/signup">회원가입</SignUpLink>
    </AuthMenu>
  );
}

export default AuthMenu;
