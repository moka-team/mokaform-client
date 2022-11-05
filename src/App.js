import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/index";
import Mypage from "./pages/users/myPage/index";

import axios from "axios";
import { useContext, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { getAccessToken, getRefreshToken } from "./authentication/auth";
import SurveyAnalysis from "./pages/surveys/analysis";
import CreateCardSurvey from "./pages/surveys/create/card/index";
import CreateSurvey from "./pages/surveys/create/general/index";
import Show from "./pages/surveys/inquire/created/general";
import InquireSubmittedSurvey from "./pages/surveys/inquire/submitted";
import ManageSurvey from "./pages/surveys/manage";
import Participate from "./pages/surveys/participate/index";
import SignIn from "./pages/users/signIn";
import SignUp from "./pages/users/signUp";
import routes from "./routes";
import { UserContext } from "./authentication/userState";
const GlobalStyle = createGlobalStyle`
  ${reset}
  font-family: 'Inter', sans-serif;
`;

function setScreenSize() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`); //"--vh"라는 속성으로 정의해준다.
}

function App() {
  window.addEventListener("resize", () => setScreenSize());

  useEffect(() => {
    setScreenSize();
    axios.defaults.headers.common["accessToken"] = getAccessToken();
    axios.defaults.headers.common["refreshToken"] = getRefreshToken();
  });

  const user = useContext(UserContext);
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path={routes.main} element={<Main />}></Route>
        <Route
          path={routes.mypage}
          element={user !== null ? <Mypage /> : <SignIn signInAlert={true} />}
        ></Route>
        <Route path={routes.signup} element={<SignUp />}></Route>
        <Route path={routes.signin} element={<SignIn />}></Route>
        <Route
          path={routes.createSurvey}
          element={
            user !== null ? <CreateSurvey /> : <SignIn signInAlert={true} />
          }
        ></Route>
        <Route
          path={routes.surveyStats}
          element={
            user !== null ? <SurveyAnalysis /> : <SignIn signInAlert={true} />
          }
        ></Route>
        <Route
          path={routes.participateSurvey}
          element={
            user != null ? <Participate /> : <SignIn signInAlert={true} />
          }
        ></Route>
        <Route
          path={routes.manageSurvey}
          element={
            user !== null ? <ManageSurvey /> : <SignIn signInAlert={true} />
          }
        ></Route>
        <Route
          path={routes.createdSurvey}
          element={user !== null ? <Show /> : <SignIn signInAlert={true} />}
        ></Route>
        <Route
          path={routes.inquireSubmittedSurvey}
          element={
            user !== null ? (
              <InquireSubmittedSurvey />
            ) : (
              <SignIn signInAlert={true} />
            )
          }
        ></Route>
        <Route
          path={routes.createCardSurvey}
          element={
            user !== null ? <CreateCardSurvey /> : <SignIn signInAlert={true} />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
