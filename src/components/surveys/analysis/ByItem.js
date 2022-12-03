import styled from "styled-components";

import BarChart from "./BarChart";
import EssayComponent from "./EssayComponent";
import MultipleChoiceAnalysis from "./MultipleChoiceAnalysis";
import OXAnalysis from "./OXAnalysis";
import PieChart from "./PieChart";
import Radar from "./Radar";
import WordCloud from "./WordCloud";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  text-align: center;
`;

//index에 따라서 Sorting 하기

export default function ByItem({ result, type }) {
  return (
    <Container>
      {result.length === 0 ? (
        <Wrapper>해당 문항이 존재하지 않습니다.</Wrapper>
      ) : (
        <Wrapper>
          {type === "oxStats"
            ? result.map((item) => (
                <>
                  <Title>{item.title}</Title>
                  <OXAnalysis item={item} />
                  <BarChart data={[{ Yes: item.yes, No: item.no }]} />
                </>
              ))
            : type === "essayStats"
            ? result.map((item) => (
                <>
                  <Title>{item.title}</Title>
                  <Radar data={item.answerContents} />
                  <WordCloud item={item.answerContents} />
                  <EssayComponent data={item.answerContents}></EssayComponent>
                </>
              ))
            : result.map((item) => (
                <>
                  <Title>{item.title}</Title>
                  <PieChart data={item.results} />
                  <MultipleChoiceAnalysis item={item.results} />
                </>
              ))}
        </Wrapper>
      )}
    </Container>
  );
}
