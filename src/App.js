import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mypage from "./pages/users/myPage/index";
import Main from "./pages/index";
import SignUp from "./pages/users/SignUpPage";
import SignIn from "./pages/users/SignIn";
import ResetPassword from "./pages/users/ResetPassword";
import CreateSurvey from "./pages/surveys/create/index";
import routes from "./routes";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import SurveyAnalysis from "./pages/surveys/analysis";
import Participate from "./pages/surveys/participate/index";
import ManageSurvey from "./pages/surveys/manage";
import Show from "./pages/surveys/show";
import InquireSubmittedSurvey from "./pages/surveys/inquireSubmittedSurvey";
import { useRecoilValue } from "recoil";
import { userState } from "./authentication/userState";

const GlobalStyle = createGlobalStyle`
  ${reset}
  font-family: 'Inter', sans-serif;
`;

function App() {
  // 로그인 확인 수정 필요
  const user = useRecoilValue(userState);
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
        <Route path={routes.resetPassword} element={<ResetPassword />}></Route>
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
          element={user !== null ? <ManageSurvey /> : <SignIn signInAlert={true}/>}
        ></Route>
        <Route
          path={routes.createdSurvey}
          element={user !== null ? <Show /> : <SignIn signInAlert={true}/>}
        ></Route>
        <Route
          path={routes.inquireSubmittedSurvey}
          element={user !== null ? <InquireSubmittedSurvey /> : <SignIn signInAlert={true}/>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
