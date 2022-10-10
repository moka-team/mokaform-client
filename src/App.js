import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mypage from "./pages/users/myPage/index";
import Main from "./pages/index";
import SignUp from "./pages/users/SignUpPage";
import SignIn from "./pages/users/SignIn";
import ResetPassword from "./pages/users/ResetPassword";
import routes from "./routes";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { RecoilRoot } from "recoil";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path={routes.main} element={<Main />}></Route>
          <Route path={routes.mypage} element={<Mypage />}></Route>
          <Route path={routes.signup} element={<SignUp />}></Route>
          <Route path={routes.signin} element={<SignIn />}></Route>
          <Route
            path={routes.resetPassword}
            element={<ResetPassword />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
