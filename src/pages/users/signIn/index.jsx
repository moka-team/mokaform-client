import { Box, StyledEngineProvider } from "@mui/material";
import styled from "styled-components";
import LoginFormContainer from "../../../components/users/signIn/LoginFormContainer";
import { SignInLogo } from "../../../components/common/Logo";
import { useEffect } from "react";
import {
  Container,
  LogoContainer,
} from "../../../components/users/signIn/styled";

const RoundedBox = styled(Box)`
  background-color: white;
  border-radius: 20px;
  border: 1px;
  padding: 40px;
`;

const Logo = styled.img`
  height: 144px;
`;

function SignIn({ signInAlert }) {
  console.log(signInAlert);
  useEffect(() => {
    if (signInAlert === true) {
      alert("로그인이 필요한 서비스입니다.");
    }
  }, []);
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
