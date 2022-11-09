import { ErrorOutlineRounded } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../../../api/client";
import { setAccessToken } from "../../../authentication/auth";
import CustomTextField from "../../common/CustomTextField";
import { Message } from "../signUp/SignUpCSS";
import { LocalLoginWrapper, LoginButton, LoginInputContainer } from "./styled";
import Timer from "react-timer-wrapper";
import Timecode from "react-timecode";
import styled from "styled-components";
import { Stack } from "@mui/material";

const Wrapper = styled.div`
  padding-right: 20px;
`;

const TimeMessage = styled.p`
  margin-left: 7px;
  margin-top: 1px;
  font-size: small;
  font-weight: 600;
  color: #0064ff;
`;

const TextMessage = styled.p`
  margin-top: 1px;
  font-size: small;
  color: #0064ff;
`;
function ResetFormBox({ email, getEmail, codeCheck, getCodeCheck }) {
  // const [email, setEmail] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [emailCheck, setEmailCheck] = useState(false);
  const [code, setCode] = useState("");
  const [codeMessage, setCodeMessage] = useState("");
  // const [codeCheck, setCodeCheck] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordCheck, setPasswordCheck] = useState(false);

  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(5 * 60 * 1000);

  const navigate = useNavigate();

  const handleChange = (event) => {
    getEmail(event.target.value);
  };

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const fetchEmail = async () => {
    try {
      const response = await apiClient.post(
        "/api/v1/users/reset-password/email-verification/send",
        null,
        {
          params: {
            email: email,
          },
        }
      );
      console.log(response);
      if (response.data.message.includes("완료")) {
        if (duration === 5 * 60 * 1000) {
          setEmailMessage("이메일 전송이 완료되었습니다!");
        } else {
          setEmailMessage("이메일 재전송이 완료되었습니다!");
          setDuration(5 * 60 * 1000);
          setTime(0);
        }

        setEmailCheck(true);
      }
    } catch (error) {
      console.log(error);
      if (error.response.data.code === "U001") {
        setEmailMessage("존재하지 않는 계정의 이메일입니다. 다시 확인해주세요");
      }
    }
  };

  const fetchCode = async () => {
    try {
      const response = await apiClient.get(
        "/api/v1/users/reset-password/email-verification/check",
        {
          params: {
            email: email,
            code: code,
          },
        }
      );
      console.log(response);
      if (response.data.message.includes("완료")) {
        setCodeMessage("인증번호 확인이 완료되었습니다!");
        getCodeCheck(true);
      }
    } catch (error) {
      console.log(error);
      if (error.response.data.code === "U003") {
        setCodeMessage("유효시간이 만료된 인증번호입니다. 재인증해주세요.");
      } else if (error.response.data.code === "U004") {
        setCodeMessage("인증번호가 일치하지 않습니다. 다시 입력해주세요.");
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    fetchEmail();
  };

  const handleCodeSubmit = async (event) => {
    event.preventDefault();
    fetchCode();
  };

  const onTimerUpdate = ({ time, duration }) => {
    setTime(time);
    setDuration(duration);
  };

  return (
    <LocalLoginWrapper>
      <form onSubmit={handleSubmit}>
        <LoginInputContainer>
          <CustomTextField
            type="text"
            name="email"
            label="이메일"
            variant="filled"
            size="small"
            value={email || ""}
            onChange={handleChange}
            disabled={emailCheck}
          />
          <Message className={emailCheck ? "ok" : "error"}>
            {emailMessage}
          </Message>
        </LoginInputContainer>

        <div>
          <LoginButton type="submit" disabled={codeCheck}>
            계정 인증 메일 보내기
          </LoginButton>
        </div>
      </form>
      <br></br>
      <br></br>
      {emailCheck && (
        <form onSubmit={handleCodeSubmit}>
          <LoginInputContainer>
            <CustomTextField
              type="text"
              name="code"
              label="인증번호"
              variant="filled"
              size="small"
              value={code || ""}
              onChange={handleCodeChange}
              disabled={codeCheck}
            />
            <Stack direction="row" justifyContent="flex-end">
              <TextMessage>{codeMessage}</TextMessage>
              <TimeMessage>남은 시간:&nbsp;</TimeMessage>
              <Timer
                active
                duration={5 * 60 * 1000}
                onTimeUpdate={onTimerUpdate}
              />
              <Timecode
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  marginBottom: "-10px",
                  color: "#0064FF",
                }}
                time={duration - time}
                component="p"
              />
            </Stack>
          </LoginInputContainer>
          <div>
            <LoginButton type="submit" disabled={codeCheck}>
              인증번호 확인
            </LoginButton>
          </div>
        </form>
      )}
      {/* <br></br>
      <br></br> */}
      {/* {codeCheck && (
        <form>
          <LoginInputContainer>
            <CustomTextField
              type="password"
              name="password"
              label="새 비밀번호"
              variant="filled"
              size="small"
              value={code || ""}
              onChange={handlePasswordChange}
            />
            <Message></Message>
            <CustomTextField
              type="password"
              name="password"
              label="새 비밀번호 확인"
              variant="filled"
              size="small"
              value={code || ""}
              onChange={handlePasswordChange}
            />
            <Message></Message>
          </LoginInputContainer>
          <div>
            <LoginButton type="submit">비밀번호 변경</LoginButton>
          </div>
        </form>
      )} */}
    </LocalLoginWrapper>
  );
}

export default ResetFormBox;
