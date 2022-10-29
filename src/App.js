import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mypage from "./pages/users/myPage/index";
import Main from "./pages/index";

import SignUp from "./pages/users/signUp";
import SignIn from "./pages/users/signIn";
import CreateSurvey from "./pages/surveys/create/general/index";
import routes from "./routes";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import SurveyAnalysis from "./pages/surveys/analysis";
import Participate from "./pages/surveys/participate/index";
import ManageSurvey from "./pages/surveys/manage";
import Show from "./pages/surveys/inquire/created/general";
import InquireSubmittedSurvey from "./pages/surveys/inquire/submitted";
import { useRecoilValue } from "recoil";
import { userState } from "./authentication/userState";
import CreateCardSurvey from "./pages/surveys/create/card/index";
import { useEffect } from "react";

const GlobalStyle = createGlobalStyle`
  ${reset}
  font-family: 'Inter', sans-serif;
`;

function setScreenSize() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`); //"--vh"라는 속성으로 정의해준다.
}

function App() {
  // 로그인 확인 수정 필요
  const user = useRecoilValue(userState);

  window.addEventListener("resize", () => setScreenSize());

  useEffect(() => {
    setScreenSize();
  });

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
