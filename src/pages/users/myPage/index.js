import styled from "styled-components";
import Header from "../../../components/common/Header";
import Profile from "../../../components/users/MyPage/Profile";
import Separator from "../../../components/users/MyPage/Separator";
import ListContainer from "../../../components/users/MyPage/ListContainer";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../../../authentication/userState";
const Container = styled.div`
  padding-top: 65px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f5f6fa;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

function Mypage() {
  // 로그인 상태 검사
  const user = useRecoilValue(userState);
  useEffect(() => {
    if (user === null) {
      alert("로그인이 필요한 서비스입니다.");
      window.location.replace("http://localhost:3000/");
    }
  }, []);
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <Profile />
          <Separator />
          <ListContainer />
        </Wrapper>
      </Container>
    </>
  );
}

export default Mypage;
