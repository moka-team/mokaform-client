import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { surveyForSubmit } from "../../../atoms";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import MultipleChoiceQuestionItem from "./MultipleChoiceQuestionItem";
import PreviewSection from "../create-card/PreviewSection";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  border-radius: 10px;
  padding: 20px 35px 20px 25px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export default function CardParticipate() {
  const [survey, setSurvey] = useRecoilState(surveyForSubmit);
  const [successDialogOpen, setSuccessDialogOpen] = useState(true);

  const handleSuccessDialogClose = () => {
    setSuccessDialogOpen(false);
  };

  const handleSuccessDialogConfirmClose = () => {
    setSuccessDialogOpen(false);
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
      <Section>
        {survey.data.questions.map((question) => (
          <MultipleChoiceQuestionItem
            key={question.questionId}
            item={question}
            multiquestion={survey.data.multiQuestions}
          ></MultipleChoiceQuestionItem>
        ))}
      </Section>
    </>
  );
}
