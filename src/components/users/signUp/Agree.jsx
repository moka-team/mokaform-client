import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Box, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stack from "@mui/material/Stack";
import React from "react";
import { useNavigate } from "react-router-dom";
import { SignInLogo } from "../../common/Logo";
import { Container, LogoContainer } from "../signIn/styled";
import { AgreeButton, Message2 } from "./SignUpCSS";

import { useState } from "react";
import styled from "styled-components";
import { PolicyLink } from "../../common/styled";
const RoundedBox = styled(Box)`
  background-color: white;
  border-radius: 20px;
  border: 1px;
  padding: 40px;
`;

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Agree() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [agreeTermsOfService, setAgreeTermsOfService] = useState(false);
  const [agreePrivacyPolicy, setAgreePrivacyPolicy] = useState(false);

  const onCancleClickHandler = (event) => {};
  const onagreeTermsOfServiceChangeHandler = (event) => {
    setAgreeTermsOfService(event.target.checked);
  };
  const onConfirmClickHandler = (event) => {
    agreePrivacyPolicy && agreeTermsOfService
      ? navigate("/signup")
      : setMessage("이용약관과 개인정보처리방침에 동의해주세요.");
  };
  const onAgreePrivacyChangeHandler = (event) => {
    setAgreePrivacyPolicy(event.target.checked);
  };

  return (
    <Container>
      <RoundedBox>
        <LogoContainer>
          <SignInLogo>MOKAFORM</SignInLogo>
        </LogoContainer>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={agreeTermsOfService}
                onChange={onagreeTermsOfServiceChangeHandler}
                {...label}
                icon={<CheckCircleOutlineIcon />}
                checkedIcon={<CheckCircleIcon />}
              />
            }
            label="모카폼 이용약관 동의 (필수)"
            sx={{ width: 300 }}
          />
          <Typography variant="body2" align="right" sx={{ width: 50 }}>
            <PolicyLink
              to={`/termsOfService`}
              style={{ textDecoration: "none" }}
            >
              보기
            </PolicyLink>
          </Typography>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={agreePrivacyPolicy}
                onChange={onAgreePrivacyChangeHandler}
                {...label}
                icon={<CheckCircleOutlineIcon />}
                checkedIcon={<CheckCircleIcon />}
              />
            }
            label="모카폼 개인정보처리방침 동의 (필수)"
            sx={{ width: 300 }}
          />
          <Typography variant="body2" align="right" sx={{ width: 50 }}>
            <PolicyLink
              to={`/privacyPolicy`}
              style={{ textDecoration: "none" }}
            >
              보기
            </PolicyLink>
          </Typography>
        </Stack>
        <Box sx={{ width: 400, height: 25 }}>
          <Message2 className="error">{message}</Message2>
        </Box>
        <AgreeButton className="cancle">취소</AgreeButton>
        <AgreeButton onClick={onConfirmClickHandler}>확인</AgreeButton>
      </RoundedBox>
    </Container>
  );
}
