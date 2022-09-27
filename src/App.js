import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mypage from "./pages/users/myPage/index"
import Main from "./pages/index";
import SignUp from "./pages/users/SignUpPage/index";
import routes from "./routes";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
  <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route path={routes.main} element={<Main />}></Route>
      <Route path={routes.mypage} element={<Mypage />}></Route>
      <Route path={routes.signup} element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
);
}

export default App;
