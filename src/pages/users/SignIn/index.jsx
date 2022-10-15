import { Box, StyledEngineProvider } from "@mui/material";
import styled from "styled-components";
import LoginFormContainer from "../../../components/users/SignIn/LoginFormContainer";
import { SignInLogo } from "../../../components/common/Logo";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f6fa;
`;

const RoundedBox = styled(Box)`
  background-color: white;
  border-radius: 20px;
  border: 1px;
  padding: 40px;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 50px;
`;

const Logo = styled.img`
  height: 144px;
`;

function SignIn() {
  return (
    <Container>
      <StyledEngineProvider injectFirst>
        <RoundedBox>
          <LogoContainer>
            <SignInLogo to="/">MOKAFORM</SignInLogo>
          </LogoContainer>
          <LoginFormContainer />
        </RoundedBox>
      </StyledEngineProvider>
    </Container>
  );
}

export default SignIn;
