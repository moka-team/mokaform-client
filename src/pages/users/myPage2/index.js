import styled from "styled-components";
import Header from "../../../components/users/MyPage2/MyHeader";
import Profile from "../../../components/users/MyPage2/Profile";
import ListContainer from "../../../components/users/MyPage2/ListContainer";

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
