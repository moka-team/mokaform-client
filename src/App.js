import axios from "axios";
import { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import apiClient from "./api/client";
import "./App.css";
import { getAccessToken, getRefreshToken } from "./authentication/auth";
import { UserActionsContext, UserContext } from "./authentication/userState";
import Main from "./pages/index";
import SurveyAnalysis from "./pages/surveys/analysis";
import CreateCardSurvey from "./pages/surveys/create/card/index";
import CreateSurvey from "./pages/surveys/create/general/index";
import Show from "./pages/surveys/inquire/created/general";
import InquireSubmittedSurvey from "./pages/surveys/inquire/submitted";
import ManageSurvey from "./pages/surveys/manage";
import Participate from "./pages/surveys/participate/index";
import Mypage from "./pages/users/myPage/index";
import SignIn from "./pages/users/signIn";
import SignUp from "./pages/users/signUp";
import routes from "./routes";
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
  const { setLoggedUser } = useContext(UserActionsContext);

  useEffect(() => {
    async function fetchUser() {
      if (getAccessToken()) {
        const res = await apiClient.get("api/v1/users/my");
        setLoggedUser(res.data.data);
      }
    }
    fetchUser();
  }, []);
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
