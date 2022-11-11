import {
  CenterWrapper, InfoText, InfoTitle, LoginFormWrapper
} from "../signIn/styled";
import ResetFormBox from "./ResetFormBox";
import ResetPasswordForm from "./ResetPasswordForm";

function ResetContainer({
  passwordContainer,
  codeCheck,
  getCodeCheck,
  title,
  text1,
  text2,
}) {
  return (
    <LoginFormWrapper>
      <CenterWrapper>
        <InfoTitle>{title}</InfoTitle>
        <InfoText>{text1}</InfoText>
        <InfoText>{text2}</InfoText>
      </CenterWrapper>
      {!passwordContainer ? (
        <ResetFormBox codeCheck={codeCheck} getCodeCheck={getCodeCheck} />
      ) : (
        <ResetPasswordForm />
      )}
    </LoginFormWrapper>
  );
}

export default ResetContainer;
