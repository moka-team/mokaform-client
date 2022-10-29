import React, { useState, useRef } from "react";
import { useRecoilState } from "recoil";
import { surveyForSubmit } from "../../../../atoms";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import styled from "styled-components";
import CardQuestionItem from "./CardQuestionItem";

const Section = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  background-color: #202632;
  width: 100%;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const NextButton = styled.button`
  width: 415px;
  height: 50px;
  margin: 10px;
  margin-top: 45px;
  border-radius: 10px;
  border: none;
  background-color: #286bd0;
  color: white;
  font-weight: bold;
  &:hover {
    background-color: #0064ff;
  }
  &:disabled {
    background-color: gray;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(var(--vh, 1vh) * 100);
  float: right;
  display: flex;
  flex-direction: column;
  background-color: #202632;
`;

export default function CardParticipate() {
  const cardRef = useRef([]);
  const [survey, setSurvey] = useRecoilState(surveyForSubmit);
  const [successDialogOpen, setSuccessDialogOpen] = useState(true);

  const handleSuccessDialogClose = () => {
    setSuccessDialogOpen(false);
  };

  const handleSuccessDialogConfirmClose = () => {
    setSuccessDialogOpen(false);
  };

  const onClickHandler = (index) => {
    cardRef.current[index + 1]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Dialog
        open={successDialogOpen}
        onClose={handleSuccessDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "500px", // Set your width here
            },
          },
        }}
      >
        {/* 설문제목 */}
        <DialogTitle id="success-dialog-title">{survey.data.title}</DialogTitle>
        <DialogContent>
          {/* 설문 설명 */}
          <DialogContentText
            id="success-dialog-description"
            sx={{ color: "#202632" }}
          >
            {survey.data.summary}
          </DialogContentText>
          <DialogContentText sx={{ color: "#202632" }}>
            하나의 질문씩 공개되는 카드 설문입니다.
          </DialogContentText>
          <DialogContentText sx={{ color: "#202632" }}>
            신중하게 답해주세요!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSuccessDialogConfirmClose} autoFocus>
            확인
          </Button>
        </DialogActions>
      </Dialog>
      <Wrapper>
        {survey.data.questions.map((question, index) => (
          <Section ref={(el) => (cardRef.current[index] = el)}>
            <CardQuestionItem
              key={question.questionId}
              item={question}
              multiquestion={survey.data.multiQuestions}
            ></CardQuestionItem>
            {index !== survey.data.questions.length - 1 && (
              <NextButton onClick={() => onClickHandler(index)}>
                다음
              </NextButton>
            )}
          </Section>
        ))}
      </Wrapper>
    </>
  );
}
