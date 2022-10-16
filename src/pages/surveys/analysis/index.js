import styled from "styled-components";
import ByItem from "./ByItem";
import Header from "../../../components/main/Header";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 100px;
  color: #202632;
`;
const Title = styled.div`
  color: #0064ff;
  text-decoration: underline;
  text-underline-offset: 10px;
`;

const Wrapper = styled.div`
  margin-top: 50px;
`;
function SurveyAnalysis() {
  return (
    <>
      <Header />
      <Container>
        <Title>설문 분석 결과 보기</Title>
        <Wrapper>
          <ByItem />
        </Wrapper>
      </Container>
    </>
  );
}

export default SurveyAnalysis;
