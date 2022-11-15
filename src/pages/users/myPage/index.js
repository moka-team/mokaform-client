import styled from "styled-components";
import Header from "../../../components/users/myPage/MyHeader";
import Profile from "../../../components/users/myPage/Profile";
import ListContainer from "../../../components/users/myPage/ListContainer";
import { useLocation } from "react-router-dom";

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
