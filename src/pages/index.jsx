import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../components/main/Header.jsx";
import ChatbotFab from "../components/main/ChatbotFab.jsx";
import Footer from "../components/main/Footer.jsx";
import SortFab from "../components/main/SortFab.jsx";
import CardContainer from "../components/main/CardContainer.jsx";
import SubTitleText from "../components/main/SubTitleText.jsx";
import DownButton from "../components/main/DownButton.jsx";
import SortSelect from "../components/main/SortSelect";
const loadMore = () => {};

const theme = createTheme({
  background: {
    default: "red",
  },
});

const backgroundStyle = {
  background: "linear-gradient(to bottom, #F5F6FA, #C4D4E6)",
};

export default function Main() {
  const [logined, setLogined] = useState(false);
  return (
    <div style={backgroundStyle}>
      <CssBaseline />
      <Header />
      <main>
        {/* Hero unit */}
        <Container maxWidth="xl" sx={{ mt: 6 }}>
          <Grid container>
            {logined === false ? (
              <>
                <Grid item xs={10}>
                  <SubTitleText text="전체 설문" />
                </Grid>
                <Grid item xs={2}>
                  <Box textAlign={"right"}>
                    <SortSelect />
                  </Box>
                </Grid>
              </>
            ) : (
              // 유저 네임으로 나중에 수정해야함
              <SubTitleText text="모카님에게 추천하는 설문" />
            )}
          </Grid>
          {logined === false ? (
            <CardContainer logined={false} />
          ) : (
            <CardContainer logined={true} />
          )}
          {logined === true && (
            <>
              <SubTitleText text="지금 트렌드인 설문" />
              <CardContainer logined={true} />
            </>
          )}
        </Container>
        <ChatbotFab />
        <Box textAlign="center">
          {/* <Button
            variant="contained"
            sx={{ mt: 3, fontWeight: "bold" }}
            onClick={loadMore}
          >
            더보기
          </Button> */}
          <DownButton />
        </Box>
      </main>

      <Footer />
    </div>
  );
}
