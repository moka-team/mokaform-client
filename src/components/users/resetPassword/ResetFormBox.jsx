import { Stack } from "@mui/material";
import { useContext, useState } from "react";
import Timecode from "react-timecode";
import Timer from "react-timer-wrapper";
import apiClient from "../../../api/client";
import CustomTextField from "../../common/CustomTextField";
import {
  LocalLoginWrapper,
  LoginButton,
  LoginInputContainer,
} from "../signIn/styled";
import { Message } from "../signUp/SignUpCSS";
import { EmailActionsContext, EmailContext } from "./emailState";
import { TextMessage, TimeMessage } from "./styled";

function ResetFormBox({ codeCheck, getCodeCheck }) {
  const email = useContext(EmailContext);
  const { setValidateEmail } = useContext(EmailActionsContext);
  const [emailMessage, setEmailMessage] = useState("");
  const [emailCheck, setEmailCheck] = useState(false);
  const [code, setCode] = useState("");
  const [codeMessage, setCodeMessage] = useState("");
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(5 * 60 * 1000);
  const [isTimeout, setIsTimeout] = useState(false);

  const TimerStyle = {
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "-10px",
    color: !isTimeout ? "#0064ff" : "#ff2727",
  };

  const handleChange = (event) => {
    setValidateEmail(event.target.value);
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
        if (!emailCheck) {
          setEmailMessage("이메일 전송이 완료되었습니다!");
        } else {
          setEmailMessage("이메일 재전송이 완료되었습니다!");
          setTime(0);
          setIsTimeout(false);
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

  // 타이머 시간 업데이트
  const onTimerUpdate = ({ time, duration }) => {
    setTime(time);
    setDuration(duration);
  };

  // 타이머 끝남
  const onTimerFinish = ({ time, duration }) => {
    setIsTimeout(true);
  };

  // 타이머 시작
  const onTimerStart = ({ time, duration }) => {
    setTime(0);
    setIsTimeout(false);
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
          <LoginButton
            type="submit"
            disabled={(!isTimeout && emailCheck) || codeCheck}
          >
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
              <TextMessage className={codeCheck ? "ok" : "error"}>
                {codeMessage}
              </TextMessage>
              {!codeCheck && (
                <>
                  <TimeMessage className={!isTimeout ? "ok" : "error"}>
                    남은 시간:&nbsp;
                  </TimeMessage>
                  <Timer
                    active={!isTimeout}
                    onStart={onTimerStart}
                    duration={5 * 60 * 1000}
                    onTimeUpdate={onTimerUpdate}
                    onFinish={onTimerFinish}
                  />
                  <Timecode
                    style={TimerStyle}
                    time={duration - time}
                    component="p"
                  />
                </>
              )}
            </Stack>
          </LoginInputContainer>
          <div>
            <LoginButton type="submit" disabled={codeCheck}>
              인증번호 확인
            </LoginButton>
          </div>
        </form>
      )}
    </LocalLoginWrapper>
  );
}

export default ResetFormBox;
