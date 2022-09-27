import styled from "styled-components";
import Header from "../../../components/users/MyPage/MypageHeader";
import Profile from "../../../components/users/MyPage/Profile";
import Separator from "../../../components/users/MyPage/Separator";
import ListContainer from "../../../components/users/MyPage/ListContainer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 90%;
`;

function Mypage() {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Profile />
        <Separator />
        <ListContainer />
      </Wrapper>
    </Container>
  );
}

export default Mypage;
