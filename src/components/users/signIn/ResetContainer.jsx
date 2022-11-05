import SocialLoginContainer from "./SocialLoginContainer";
import AuthMenu from "./AuthMenu";
import { LoginFormWrapper } from "./styled";
import styled from "styled-components";
import ResetFormBox from "./ResetFormBox";

const InfoTitle = styled.h1`
  font-size: larger;
  font-weight: 600;
  color: #202632;
  margin-bottom: 30px;
`;

const InfoText = styled.h6`
  font-size: small;
  color: #202632;
  margin-top: 10px;
  color: gray;
`;

const CenterWrapper = styled.div`
  align-items: center;
  flex-direction: column;
  justify-content: center;
  display: flex;
`;

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
