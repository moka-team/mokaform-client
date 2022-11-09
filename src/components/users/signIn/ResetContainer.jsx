import SocialLoginContainer from "./SocialLoginContainer";
import AuthMenu from "./AuthMenu";
import { LoginFormWrapper, InfoTitle, InfoText, CenterWrapper } from "./styled";
import styled from "styled-components";
import ResetFormBox from "./ResetFormBox";
import ResetPasswordForm from "./ResetPasswordForm";
import { useState } from "react";

function ResetContainer({
  passwordContainer,
  codeCheck,
  getCodeCheck,
  title,
  text1,
  text2,
}) {
  const [email, setEmail] = useState("");
  const getEmail = (email) => {
    setEmail(email);
  };
  return (
    <LoginFormWrapper>
      <CenterWrapper>
        <InfoTitle>{title}</InfoTitle>
        <InfoText>{text1}</InfoText>
        <InfoText>{text2}</InfoText>
      </CenterWrapper>
      {!passwordContainer ? (
        <ResetFormBox email={email} getEmail={getEmail} codeCheck={codeCheck} getCodeCheck={getCodeCheck} />
      ) : (
        <ResetPasswordForm email={email}/>
      )}
    </LoginFormWrapper>
  );
}

export default ResetContainer;
