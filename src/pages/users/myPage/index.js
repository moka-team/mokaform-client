import styled from "styled-components";
import Header from "../../../components/users/MyPage/MyHeader";
import Profile from "../../../components/users/MyPage/Profile";
import Separator from "../../../components/users/MyPage/Separator";
import ListContainer from "../../../components/users/MyPage/ListContainer";

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
