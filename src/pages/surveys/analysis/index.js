import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect,useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../../authentication/userState";
import Header from "../../../components/common/Header";
import ByItem from "../../../components/surveys/analysis/ByItem";

const Container = styled.div`
  display: flex;
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
  height:10%;
`;

const ReportBtn = styled.div`
  cursor: pointer;
  color: #0064ff;
  margin-top: 25px;
  margin-bottom:25px
`;

const Wrapper = styled.div`
  margin-top: 50px;
  height:80%;
`;

const LinkWrapper = styled.div`
  display: flex;
  width: 400px;
  height:10%;
  justify-content: space-between;
  span {
    cursor: pointer;
  }
  span:hover {
    color: #0064ff;
    text-decoration: underline;
    text-underline-offset: 10px;
  }
`;

function SurveyAnalysis() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [list, setList] = useState(state["multipleChoiceStats"])
  const user = useContext(UserContext);
  const [type, setType] = useState("multipleChoiceStats");
  const [prevType, setPrevType] = useState(null);
  const handleClick = (e) => {
    setType(e.target.id);
    setList(state[e.target.id])
  };
  
  useEffect(() => {
    if (user === null) {
      alert("로그인이 필요한 서비스입니다.");
      navigate("/");
    }
  }, []);


  useEffect(
    (e) => {
      let current = document.getElementById(type);
      current.style.color = " #0064ff";
      current.style.textDecoration = "underline";
      current.style.textUnderlineOffset = "10px";

      if (prevType !== null) {
        let prev = document.getElementById(prevType);
        prev.style.color = "black";
        prev.style.textDecoration = "none";
      }
      setPrevType(type);
    },
    [type]
  );


  return (
    <>
      <Header />
      <Container>
        <Title>설문 분석 결과 보기</Title>
        <ReportBtn>
          <FontAwesomeIcon icon={faPrint} onClick={window.print} />
        </ReportBtn>
        <LinkWrapper>
          <span id="multipleChoiceStats" onClick={handleClick}>
            객관식 통계 보기
          </span>
          <span id="essayStats" onClick={handleClick}>
            주관식 통계 보기
          </span>
          <span id="oxStats" onClick={handleClick}>
            찬부식 통계 보기
          </span>
        </LinkWrapper>
        <Wrapper>
          <ByItem result={list} type={type}/>
        </Wrapper>
      </Container>
    </>
  );
}

export default SurveyAnalysis;
