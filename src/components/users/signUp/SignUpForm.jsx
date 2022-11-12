import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../../../api/client";
import AgeRow from "./AgeRow";
import JobRow from "./JobRow";
import PreferenceRow from "./PreferenceRow";
import SexRow from "./SexRow";
import SignEssentialForm from "./SignEssentialForm";
import { Container, MainTitle, Rows, SignUpButton } from "./SignUpCSS";

export default function SignUpForm() {
  const signOptionRef = useRef(null);
  const signOptionRef2 = useRef(null);

  // 피드백 반영: 리코일 -> props로 변경
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState(null);
  const [job, setJob] = useState(0);
  const [preference, setPreference] = useState("");
  const [isNickname, setIsNickname] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [isValidateEmail, setIsValidateEmail] = useState(false);
  const [isAge, setIsAge] = useState(false);
  const [isGender, setIsGender] = useState(false);
  const [isJob, setIsJob] = useState(false);
  const [isPreference, setIsPreference] = useState(false);

  const [invalidatoinDialogOpen, setInvalidationDialogOpen] = useState(false);
  const [message, setMessage] = useState([]);

  const navigate = useNavigate();

  const handleClickDialogOpen = () => {
    setInvalidationDialogOpen(true);
  };

  const handleDialogClose = () => {
    setInvalidationDialogOpen(false);
    setMessage([]);
  };

  const onClickHandler = (event) => {
    if (!(isNickname && isValidateEmail && isPassword && isPasswordConfirm)) {
      handleClickDialogOpen();
      if (!isNickname) {
        setMessage((message) => [...message, "닉네임 입력"]);
      }
      if (!isValidateEmail) {
        setMessage((message) => [...message, "이메일 인증"]);
      }
      if (!isPassword) {
        setMessage((message) => [...message, "패스워드 입력"]);
      }
      if (!isPasswordConfirm) {
        setMessage((message) => [...message, "패스워드 확인"]);
      }
    } else {
      signOptionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };
  const onNextBtnClickHandler = (event) => {
    if (!(isAge && isGender)) {
      handleClickDialogOpen();
      if (!isAge) {
        setMessage((message) => [...message, "나이 입력"]);
      }
      if (!isGender) {
        setMessage((message) => [...message, "성별 입력"]);
      }
    } else {
      signOptionRef2.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getEmail = (email) => {
    setEmail(email);
  };
  const getNickname = (nickname) => {
    setNickname(nickname);
  };
  const getPassword = (password) => {
    setPassword(password);
  };
  const getPasswordConfirm = (passwordConfirm) => {
    setPasswordConfirm(passwordConfirm);
  };
  const getAge = (age) => {
    setAge(age);
  };
  const getGender = (gender) => {
    setGender(gender);
  };
  const getJob = (job) => {
    setJob(job);
  };
  const getPreference = (preference) => {
    setPreference(preference);
  };
  const getIsNickname = (isNickname) => {
    setIsNickname(isNickname);
  };
  const getIsEmail = (isEmail) => {
    setIsEmail(isEmail);
  };
  const getIsPassword = (isPassword) => {
    setIsPassword(isPassword);
  };
  const getIsPasswordConfirm = (isPasswordConfirm) => {
    setIsPasswordConfirm(isPasswordConfirm);
  };
  const getIsEmailValidate = (isValidateEmail) => {
    setIsValidateEmail(isValidateEmail);
  };
  const getIsAge = (isAge) => {
    setIsAge(isAge);
  };
  const getIsGender = (isGender) => {
    setIsGender(isGender);
  };
  const getIsJob = (isJob) => {
    setIsJob(isJob);
  };
  const getIsPreference = (isPreference) => {
    setIsPreference(isPreference);
  };
  let ValidateInfo = false;

  const signUpPatch = async () => {
    try {
      const response = await apiClient.post("/api/v1/users/signup", {
        email: email,
        password: password,
        nickname: nickname,
        ageGroup: age,
        gender: gender,
        job: job,
        category: preference,
      });
      if (response.data.message === "새로운 유저 생성이 성공하였습니다.") {
        // window.alert("회원가입이 완료되었습니다.");
        // navigate("/email-confirm");
        navigate("/");
      } else {
        window.alert("회원가입 에러 발생");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onCompleteBtnClickHandler = (event) => {
    if (!(isJob && preference.length)) {
      handleClickDialogOpen();
      if (!isJob) {
        setMessage((message) => [...message, "직업 입력"]);
      }
      if (!preference.length) {
        setMessage((message) => [...message, "관심사 입력 (최소 1개)"]);
      }
    } else {
      event.preventDefault();
      signUpPatch();
    }
  };

  if (age === "" || gender === "" || job === "" || preference.length === 0) {
    ValidateInfo = false;
  } else {
    ValidateInfo = true;
  }

  return (
    <>
      <Container>
        <Rows>
          <MainTitle>SIGN UP | MOKA FORM</MainTitle>
          <SignEssentialForm
            email={email}
            nickname={nickname}
            password={password}
            passwordConfirm={passwordConfirm}
            isEmail={isEmail}
            isNickname={isNickname}
            isPassword={isPassword}
            isPasswordConfirm={isPasswordConfirm}
            isValidateEmail={isValidateEmail}
            getEmail={getEmail}
            getNickname={getNickname}
            getPassword={getPassword}
            getPasswordConfirm={getPasswordConfirm}
            getIsEmail={getIsEmail}
            getIsNickname={getIsNickname}
            getIsPassword={getIsPassword}
            getIsPasswordConfirm={getIsPasswordConfirm}
            getIsEmailValidate={getIsEmailValidate}
          />
          <SignUpButton onClick={onClickHandler}>다음</SignUpButton>
        </Rows>
      </Container>
      {isNickname && isValidateEmail && isPassword && isPasswordConfirm && (
        <div>
          <Container color="#f9fafb" ref={signOptionRef}>
            <Rows>
              <AgeRow age={age} getAge={getAge} getIsAge={getIsAge}></AgeRow>
              <SexRow
                gender={gender}
                getGender={getGender}
                getIsGender={getIsGender}
              ></SexRow>
              <SignUpButton onClick={onNextBtnClickHandler}>다음</SignUpButton>
            </Rows>
          </Container>
          {isAge && isGender && (
            <Container ref={signOptionRef2}>
              <Rows>
                <JobRow job={job} getJob={getJob} getIsJob={getIsJob}></JobRow>
                <PreferenceRow
                  preference={preference}
                  getPreference={getPreference}
                />
                <SignUpButton onClick={onCompleteBtnClickHandler}>
                  가입 완료
                </SignUpButton>
              </Rows>
            </Container>
          )}
        </div>
      )}
      <Dialog
        open={invalidatoinDialogOpen}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "500px",
            },
          },
        }}
      >
        <DialogTitle id="invalidate-dialog-title">알림</DialogTitle>
        <DialogContent>
          <DialogContentText id="invalidate-dialog-description">
            가입 필수 항목을 모두 입력해야 합니다.
          </DialogContentText>
          <DialogContentText id="invalidate-dialog-description">
            아래 항목을 체크해주세요!
          </DialogContentText>
          <br></br>
          {message.map((list) => {
            return (
              <DialogContentText id="invalidate-dialog-description">
                ✔ {list}
              </DialogContentText>
            );
          })}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} autoFocus>
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
