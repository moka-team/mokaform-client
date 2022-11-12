import { Box, StyledEngineProvider } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { SignInLogo } from "../../../components/common/Logo";
import ResetContainer from "../../../components/users/resetPassword/ResetContainer";
import { EmailContextProvider } from "../../../components/users/resetPassword/emailState";
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

function ResetPassword() {
  const [codeCheck, setCodeCheck] = useState(false);
  const getCodeCheck = (codeCheck) => {
    setCodeCheck(codeCheck);
  };
  const passwordRef = useRef(null);

  useEffect(() => {
    passwordRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [codeCheck]);

  return (
    <>
      <EmailContextProvider>
        <Container>
          <StyledEngineProvider injectFirst>
            <RoundedBox>
              <LogoContainer>
                <SignInLogo to="/">MOKAFORM</SignInLogo>
              </LogoContainer>

              <ResetContainer
                passwordContainer={false}
                codeCheck={codeCheck}
                getCodeCheck={getCodeCheck}
                title={"비밀번호를 잊어버리셨나요?"}
                text1={"가입한 계정 정보를 입력해주세요."}
                text2={"계정 이메일로 인증번호를 보내드립니다."}
              />
            </RoundedBox>
          </StyledEngineProvider>
        </Container>
        {codeCheck && (
          <Container ref={passwordRef}>
            <StyledEngineProvider injectFirst>
              <RoundedBox>
                <LogoContainer>
                  <SignInLogo to="/">MOKAFORM</SignInLogo>
                </LogoContainer>
                <ResetContainer
                  passwordContainer={true}
                  title={"비밀번호 재설정"}
                  text1={"계정 확인이 완료되었습니다."}
                  text2={"새로운 비밀번호를 설정해주세요."}
                />
              </RoundedBox>
            </StyledEngineProvider>
          </Container>
        )}
      </EmailContextProvider>
    </>
  );
}

export default ResetPassword;
