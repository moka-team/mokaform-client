import styled from "styled-components";
import ByItem from "./ByItem";
import Header from "../../../components/common/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { useRecoilValue } from "recoil";
import { userState } from "../../../authentication/userState";
import { useEffect } from "react";

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

const ReportBtn = styled.div`
  cursor: pointer;
  color: #0064ff;
  margin-top: 25px;
`;

const Wrapper = styled.div`
  margin-top: 50px;
`;
function SurveyAnalysis() {
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
        <Title>설문 분석 결과 보기</Title>
        <ReportBtn>
          <FontAwesomeIcon icon={faPrint} onClick={window.print} />
        </ReportBtn>
        <Wrapper>
          <ByItem />
        </Wrapper>
      </Container>
    </>
  );
}

export default SurveyAnalysis;
