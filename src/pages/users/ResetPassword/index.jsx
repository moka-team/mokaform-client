import { Box } from "@mui/material";
import styled from "styled-components";
import EmailFormContainer from "../../../components/users/ResetPassword/EmailFormContainer";
import { SignInLogo } from "../../../components/common/Logo";

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

const Logo = styled.img`
  margin-top: 233px;
  height: 144px;
`;

const ResetPasswordDescription = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  line-height: 39px;
`;

function ResetPassword() {
  return (
    <Container>
      <Box>
        <LogoContainer>
          <SignInLogo>MOKA FORM</SignInLogo>
        </LogoContainer>
        <ResetPasswordDescription>
          가입한 이메일 주소를 입력해주세요.
        </ResetPasswordDescription>
        <EmailFormContainer />
      </Box>
    </Container>
  );
}

export default ResetPassword;
