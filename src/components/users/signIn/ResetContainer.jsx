import { LoginFormWrapper, InfoTitle, InfoText, CenterWrapper } from "./styled";
import styled from "styled-components";
import ResetFormBox from "./ResetFormBox";
import ResetPasswordForm from "./ResetPasswordForm";
import { EmailContextProvider } from "./emailState";

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
      <EmailContextProvider>
        {!passwordContainer ? (
          <ResetFormBox codeCheck={codeCheck} getCodeCheck={getCodeCheck} />
        ) : (
          <ResetPasswordForm />
        )}
      </EmailContextProvider>
    </LoginFormWrapper>
  );
}

export default ResetContainer;
