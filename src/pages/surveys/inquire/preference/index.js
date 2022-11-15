import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Header from "../../../../components/common/Header.jsx";
import CardContainer from "../../../../components/surveys/inquire/preference/CardContainer";
import ChatbotFab from "../../../../components/main/ChatbotFab.jsx";
import DownButton from "../../../../components/main/DownButton.jsx";
import Footer from "../../../../components/main/Footer.jsx";
import SubTitleText from "../../../../components/main/SubTitleText.jsx";
import CircleCarousel from "../../../../components/surveys/inquire/preference/CircleCarousel";
const MContainer = styled.div`
  min-height: 100vh;
`;

const backgroundStyle = {
  background: "linear-gradient(to bottom, #F5F6FA, #C4D4E6)",
};

export default function InquirePreferenceSurvey() {
  const { state } = useLocation();
  const { text } = state;
  return (
    <div style={backgroundStyle}>
      <CssBaseline />
      <MContainer>
        <Header />
        <main>
          <Container maxWidth="xl" sx={{ mt: 6 }}>
            <Grid container>
              <>
                <CircleCarousel text={text}/>
                <Grid item xs={10}>
                  <SubTitleText text={text} />
                </Grid>
                <Grid item xs={2}></Grid>
              </>
            </Grid>
            <CardContainer />
          </Container>
          <ChatbotFab />
          <Box textAlign="center">
            <DownButton />
          </Box>
        </main>
      </MContainer>
      <Footer />
    </div>
  );
}
