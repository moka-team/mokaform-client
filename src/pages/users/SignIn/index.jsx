import { Box } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import LoginFormContainer from "../../../components/users/SignIn/LoginFormContainer";

function SignIn() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };

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

  return (
    <Container>
      <Box>
        <LogoContainer>
          <Logo src="/img/mokaform-logo.png" />
        </LogoContainer>
        <LoginFormContainer
          loginInputs={inputs}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </Box>
    </Container>
  );
}

export default SignIn;
