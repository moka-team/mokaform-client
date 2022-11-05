import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { userState } from "../../../authentication/userState";
import Header from "../../../components/common/Header";
import ByItem from "../../../components/surveys/analysis/ByItem";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 100px;
  color: #202632;
  min-height: 89vh;
  background-color: #f5f6fa;
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
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);

  useEffect(() => {
    if (user === null) {
      alert("로그인이 필요한 서비스입니다.");
      navigate("/");
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
          <ByItem result={state} />
        </Wrapper>
      </Container>
    </>
  );
}

export default SurveyAnalysis;
