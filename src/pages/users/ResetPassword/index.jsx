import { Box } from "@mui/material";
import styled from "styled-components";
import EmailFormContainer from "../../../components/users/ResetPassword/EmailFormContainer";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  margin-top: 233px;
  height: 144px;
`;

const ResetPasswordDescription = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  text-align: center;
  line-height: 39px;
`;

function ResetPassword() {
  return (
    <Container>
      <Box>
        <LogoContainer>
          <Logo src="/img/mokaform-logo.png" />
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
