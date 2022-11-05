import { AuthMenuContainer, SignUpLink } from "./styled";

function AuthMenu() {
  return (
    <AuthMenuContainer>
      <p>아직 계정이 없으신가요?</p>
      <SignUpLink to="/signup">회원가입하기</SignUpLink>
    </AuthMenuContainer>
  );
}

export default AuthMenu;
