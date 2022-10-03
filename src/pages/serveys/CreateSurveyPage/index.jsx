import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Header from "../../../components/main/Header";
import BasicInput from "../../../components/serveys/BasicInput";
import { Stack, Typography } from "@mui/material";
import { Button } from "../../../components/users/SignUp/SignUpCSS";
import NextButton from "../../../components/serveys/NextButton";
import Box from "@mui/material/Box";
import OptionText from "../../../components/serveys/OptionText";
import RadioButton from "../../../components/serveys/RadioButton";
import Calendar from "../../../components/serveys/Calendar";

const backgroundStyle = {
  background: "#F5F6FA",
};

const openRadio = [
  {
    value: "public",
    label: "전체 공개",
  },
  {
    value: "private",
    label: "워크스페이스 사용자에게만 공개",
  },
];
const openAnonym = [
  { value: "anonym", label: "익명 답변 가능" },
  { value: "name", label: "익명 답변 불가능" },
];

export default function CreateSurvey() {
  const onNextBtnClickHandler = (event) => {};

  return (
    <>
      <Header />
      <div style={backgroundStyle}>
        <CssBaseline />
        <main>
          <Container maxWidth="md" sx={{ mt: 7 }}>
            <Grid container sx={{ mb: 2 }}>
              <Grid item xs={12}>
                <OptionText text="설문 제목"></OptionText>
              </Grid>
              <Grid item xs={12}>
                <BasicInput />
              </Grid>
            </Grid>
            <Grid container sx={{ mb: 2 }}>
              <Grid item xs={12}>
                <OptionText text="설문 설명"></OptionText>
              </Grid>
              <Grid item xs={12}>
                <BasicInput />
              </Grid>
            </Grid>
            <Grid container sx={{ mb: 2 }}>
              <Grid item xs={12}>
                <OptionText text="카테고리 설정"></OptionText>
              </Grid>
              <Grid item xs={12}>
                <BasicInput />
              </Grid>
            </Grid>
            <Grid container sx={{ mb: 2 }}>
              <Grid item xs={12}>
                <OptionText text="설문 기간"></OptionText>
              </Grid>

              <Grid item xs={10} sx={{ mr: 10 }}>
                <Stack direction="row">
                  <Calendar text="설문 시작 날짜" />
                  <Box sx={{ pl: 5 }}></Box>
                  <Calendar text="설문 종료 날짜" />
                </Stack>
              </Grid>
            </Grid>
            <Grid container sx={{ mb: 2 }}>
              <Grid item xs={12}>
                <OptionText text="익명 답변 가능 여부"></OptionText>
              </Grid>
              <Grid item xs={12}>
                <RadioButton props={openAnonym} />
              </Grid>
            </Grid>
            <Grid container sx={{ mb: 2 }}>
              <Grid item xs={12}>
                <OptionText text="설문 공개 범위"></OptionText>
              </Grid>
              <Grid item xs={12}>
                <RadioButton props={openRadio} />
              </Grid>
            </Grid>
            <Box sx={{ textAlign: "center", mt: 4 }}>
              <NextButton></NextButton>
            </Box>
          </Container>
        </main>
      </div>
    </>
  );
}
