import styled from "styled-components";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeLoginStatus } from "../../../reduxModule/userSlice";

const SHeader = styled.div`
  display: flex;
  align-items: center;
  height: 10%;
  width: 100%;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 800;
  font-size: 20px;
  width: 20%;
  text-align: center;
  color: #0064ff;
  margin-left: 1px;
`;

const Button = styled.div`
  display: flex;
  width: 80%;
  justify-content: flex-end;
  margin-right: 50px;
`;

const CreateBtn = styled.div`
  margin-right: 50px;
  font-weight: 400;
  cursor: pointer;
`;
const LoginBtn = styled.div`
  color: #0064ff;
  font-weight: 600;
  cursor: pointer;
`;

function Header() {
  const [login, setLogin] = useState(false);
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.logined);

  const setUserLogin = () => {
    setLogin(!login);
    dispatch(changeLoginStatus(login));
    alert(`loginStatus : ${loginStatus}`);
  };

  return (
    <SHeader>
      <Logo>MOKA FORM</Logo>
      <Button>
        <CreateBtn>설문 만들기</CreateBtn>
        <LoginBtn onClick={() => setUserLogin()}>
          {login ? "LOG OUT" : "LOG IN"}
        </LoginBtn>
        <p>{login}</p>
      </Button>
    </SHeader>
  );
}
export default Header;
