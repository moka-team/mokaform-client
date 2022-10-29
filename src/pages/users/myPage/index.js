import styled from "styled-components";
import Header from "../../../components/users/mypage/MyHeader";
import Profile from "../../../components/users/mypage/Profile";
import ListContainer from "../../../components/users/mypage/ListContainer";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../../../authentication/userState";
import { useParams } from "react-router-dom";

const Container = styled.div`
  padding-top: 65px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f6fa;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

function Mypage() {
  const { userId } = useParams;
  // 로그인 상태 검사
  const user = useRecoilValue(userState);
  useEffect(() => {
    if (user === null) {
      alert("로그인이 필요한 서비스입니다.");
    }
  }, []);
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <Profile />
          <ListContainer />
        </Wrapper>
      </Container>
    </>
  );
}

export default Mypage;
