import styled from "styled-components";
import LocalLoginContainer from "./LocalLoginContainer";
import SocialLoginContainer from "./SocialLoginContainer";
import AuthMenu from "./AuthMenu";

function LoginFormContainer({ loginInputs, handleChange, handleSubmit }) {
  const LoginFormContainer = styled.div`
    width: 461px;
    justify-content: center;
    align-items: center;
  `;

  return (
    <LoginFormContainer>
      <LocalLoginContainer
        loginInputs={loginInputs}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <AuthMenu />
      <SocialLoginContainer />
    </LoginFormContainer>
  );
}

export default LoginFormContainer;
