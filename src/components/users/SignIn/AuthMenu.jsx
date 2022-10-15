import styled from "styled-components";
import { Link } from "react-router-dom";

const AuthMenuContainer = styled.div`
  margin-top: 30px;
  margin-left: 80px;
  margin-right: 80px;
  position: relative;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  p {
    color: #000000cc;
  }
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

function AuthMenu() {
  return (
    <AuthMenuContainer>
      <p>아직 계정이 없으신가요?</p>
      <SignUpLink to="/signup">회원가입하기</SignUpLink>
    </AuthMenuContainer>
  );
}

export default AuthMenu;
