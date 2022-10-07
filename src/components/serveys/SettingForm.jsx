import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Header from "../main/Header";
import BasicInput from "./BasicInput";
import NextButton from "./NextButton";
import OptionText from "./OptionText";
import RadioButton from "./RadioButton";
import Calendar from "./Calendar";
import MultiSelect from "./MultiSelect";
import { Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useRecoilState } from "recoil";
import { titleState } from "./optionState";

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

export default function SettingForm() {
  const onNextBtnClickHandler = (event) => {};
  const onSubmitForm = () => {
    alert("value");
    console.log("입력");
  };

  const onClick = () => {
    console.log("hi");
  };
  return (
    <Container maxWidth="md" sx={{ mt: 7, pb: 7 }}>
      <form onSubmit={onSubmitForm}>
        <Grid container sx={{ mb: 2 }}>
          <Grid item xs={12}>
            <OptionText text="설문 제목"></OptionText>
          </Grid>
          <Grid item xs={12}>
            <BasicInput text="설문 제목을 입력해주세요." type="title" />
          </Grid>
        </Grid>
        <Grid container sx={{ mb: 2 }}>
          <Grid item xs={12}>
            <OptionText text="설문 설명"></OptionText>
          </Grid>
          <Grid item xs={12}>
            <BasicInput text="설문의 설명을 입력해주세요." type="describe" />
          </Grid>
        </Grid>
        <Grid container sx={{ mb: 2 }}>
          <Grid item xs={12}>
            <OptionText text="카테고리 설정"></OptionText>
          </Grid>
          <Grid item xs={12}>
            <MultiSelect />
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
      </form>
    </Container>
  );
}
