import LocalLoginContainer from "./LocalLoginContainer";
import SocialLoginContainer from "./SocialLoginContainer";
import AuthMenu from "./AuthMenu";
import { LoginFormWrapper } from "./styled";

function LoginFormContainer() {
  return (
    <LoginFormWrapper>
      <LocalLoginContainer />
      <AuthMenu />
    </LoginFormWrapper>
  );
}

export default LoginFormContainer;
