import styled from "styled-components";

import BarChart from "./BarChart";
import EssayComponent from "./EssayComponent";
import MultipleChoiceAnalysis from "./MultipleChoiceAnalysis";
import OXAnalysis from "./OXAnalysis";
import PieChart from "./PieChart";
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
  width: 70%;
`;
const Title = styled.div`
  text-align: center;
`;

//index에 따라서 Sorting 하기

export default function ByItem({ result }) {
  return (
    <Container>
      <Wrapper>
        {/* 찬부식 */}
        {result["oxStats"].map((item) => (
          <>
            <Title>{item.title}</Title>
            <OXAnalysis item={item} />
            <BarChart data={[{ Yes: item.yes, No: item.no }]} />
          </>
        ))}

        {/* 주관식 */}
        {result["essayStats"].map((item) => (
          <>
            <Title>{item.title}</Title>
            <WordCloud item={item.answerContents} />
            <EssayComponent data={item.answerContents}></EssayComponent>
          </>
        ))}

        {/* 객관식 */}
        {result["multipleChoiceStats"].map((item) => (
          <>
            <Title>{item.title}</Title>
            <PieChart data={item.results} />
            <MultipleChoiceAnalysis item={item.results} />
          </>
        ))}
      </Wrapper>
    </Container>
  );
}
