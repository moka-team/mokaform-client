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

const GlobalStyle = createGlobalStyle`
  ${reset}
  font-family: 'Inter', sans-serif;
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path={routes.main} element={<Main />}></Route>
        <Route path={routes.mypage} element={<Mypage />}></Route>
        <Route path={routes.signup} element={<SignUp />}></Route>
        <Route path={routes.signin} element={<SignIn />}></Route>
        <Route path={routes.resetPassword} element={<ResetPassword />}></Route>
        <Route path={routes.createSurvey} element={<CreateSurvey />}></Route>
        <Route path={routes.surveyStats} element={<SurveyAnalysis />}></Route>
        <Route
          path={routes.participateSurvey}
          element={<Participate />}
        ></Route>
        <Route path={routes.manageSurvey} element={<ManageSurvey />}></Route>
        <Route path={routes.createdSurvey} element={<Show />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
