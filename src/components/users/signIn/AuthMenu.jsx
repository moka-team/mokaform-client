import {
  AuthMenuContainer,
  SignUpLink,
  ResetPasswordLink,
  Wrapper,
  Distinguish,
} from "./styled";
import styled from "styled-components";

function AuthMenu() {
  return (
    // <AuthMenuContainer>
    //   <p>아직 계정이 없으신가요?</p>
    //   <SignUpLink to="/signup">회원가입하기</SignUpLink>
    // </AuthMenuContainer>
    <Wrapper>
      <ResetPasswordLink to="/reset-password">비밀번호 찾기</ResetPasswordLink>
      <Distinguish>|</Distinguish>
      <SignUpLink to="/signup">회원가입</SignUpLink>
    </Wrapper>
  );
}

export default AuthMenu;
