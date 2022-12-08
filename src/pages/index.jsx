import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Header from "../components/common/Header.jsx";
import ChatbotFab from "../components/main/ChatbotFab.jsx";
import Footer from "../components/main/Footer.jsx";
import CardContainer from "../components/main/CardContainer.jsx";
import SubTitleText from "../components/main/SubTitleText.jsx";
import DownButton from "../components/main/DownButton.jsx";
import SortSelect from "../components/common/SortSelect";
import styled from "styled-components";

const MContainer = styled.div`
  min-height: 100vh;
`;

const backgroundStyle = {
  background: "linear-gradient(to bottom, #F5F6FA, #C4D4E6)",
};

export default function Main() {
  return (
    <div style={backgroundStyle}>
      <CssBaseline />
      <MContainer>
        <Header />
        <main>
          <Container maxWidth="xl" sx={{ mt: 6 }}>
            <Grid container>
              <>
                <Grid item xs={10}>
                  <SubTitleText text="전체 설문 테스트" />
                </Grid>
                <Grid item xs={2}>
                  <Box textAlign={"right"}>
                    <SortSelect page={"main"} />
                  </Box>
                </Grid>
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
