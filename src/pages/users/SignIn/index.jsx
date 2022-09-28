import { Box } from "@mui/material";
import styled from "styled-components";
import LoginFormContainer from "../../../components/users/SignIn/LoginFormContainer";

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

function SignIn() {
  return (
    <Container>
      <Box>
        <LogoContainer>
          <Logo src="/img/mokaform-logo.png" />
        </LogoContainer>
        <LoginFormContainer />
      </Box>
    </Container>
  );
}

export default SignIn;
