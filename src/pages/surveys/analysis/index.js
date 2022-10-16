import { useEffect, useState } from "react";
import styled from "styled-components";
import ByItem from "./ByItem";
import Header from "../../../components/main/Header";
import Summary from "./Summary";
import Detail from "./Detail";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 100px;
  font-family: "MonoplexKR";
`;

const LinkWrapper = styled.div`
  display: flex;
  width: 400px;
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

const Wrapper = styled.div`
  margin-top: 50px;
`;
function SurveyAnalysis() {
  const [type, setType] = useState("case1");
  const [prevType, setPrevType] = useState(null);
  const handleClick = (e) => {
    setType(e.target.id);
  };

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
        <LinkWrapper>
          <span id="case1" onClick={handleClick}>
            요약 보기
          </span>
          <span id="case2" onClick={handleClick}>
            문항별 보기
          </span>
          <span id="case3" onClick={handleClick}>
            분석 결과 보기
          </span>
        </LinkWrapper>
        <Wrapper>
          {type === "case1" ? (
            <Summary></Summary>
          ) : type === "case2" ? (
            <ByItem />
          ) : (
            <Detail></Detail>
          )}
        </Wrapper>
      </Container>
    </>
  );
}

export default SurveyAnalysis;
