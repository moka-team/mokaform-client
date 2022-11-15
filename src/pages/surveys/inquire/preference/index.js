import React from "react";
import { useParams } from "react-router-dom";
import SubmittedSurvey from "../../../../components/surveys/inquire/submitted/submittedSurvey";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Header from "../../../../components/common/Header.jsx";
import ChatbotFab from "../../../../components/main/ChatbotFab.jsx";
import Footer from "../../../../components/main/Footer.jsx";
import CardContainer from "../../../../components/main/CardContainer.jsx";
import SubTitleText from "../../../../components/main/SubTitleText.jsx";
import DownButton from "../../../../components/main/DownButton.jsx";
import SortSelect from "../../../../components/common/SortSelect";
import CircleCarousel from "../../../../components/users/myPage/CircleCarousel";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
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
                <CircleCarousel />
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
