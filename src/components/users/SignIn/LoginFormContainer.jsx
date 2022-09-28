import styled from "styled-components";
import LocalLoginContainer from "./LocalLoginContainer";
import SocialLoginContainer from "./SocialLoginContainer";
import AuthMenu from "./AuthMenu";

const LoginFormWrapper = styled.div`
  width: 461px;
  justify-content: center;
  align-items: center;
`;

function LoginFormContainer({ loginInputs, handleChange, handleSubmit }) {
  return (
    <LoginFormWrapper>
      <LocalLoginContainer
        loginInputs={loginInputs}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <SocialLoginContainer />
      <AuthMenu />
    </LoginFormWrapper>
  );
}

export default LoginFormContainer;
