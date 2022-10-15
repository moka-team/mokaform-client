import styled from "styled-components";
import LocalLoginContainer from "./LocalLoginContainer";
import SocialLoginContainer from "./SocialLoginContainer";
import AuthMenu from "./AuthMenu";

const LoginFormWrapper = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

function LoginFormContainer() {
  return (
    <LoginFormWrapper>
      <LocalLoginContainer />
      <SocialLoginContainer />
      <AuthMenu />
    </LoginFormWrapper>
  );
}

export default LoginFormContainer;
