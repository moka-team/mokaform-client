import SocialLoginContainer from "./SocialLoginContainer";
import AuthMenu from "./AuthMenu";
import { LoginFormWrapper, InfoTitle, InfoText, CenterWrapper } from "./styled";
import styled from "styled-components";
import ResetFormBox from "./ResetFormBox";

function ResetContainer() {
  return (
    <LoginFormWrapper>
      <CenterWrapper>
        <InfoTitle>비밀번호를 잊어버리셨나요?</InfoTitle>
        <InfoText>가입한 계정 정보를 입력해주세요.</InfoText>
        <InfoText>계정 이메일로 비밀번호 재설정 링크를 보내드립니다.</InfoText>
      </CenterWrapper>
      <ResetFormBox />
    </LoginFormWrapper>
  );
}

export default ResetContainer;
