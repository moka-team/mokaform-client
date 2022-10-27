import styled from "styled-components";
import data from "./data";

import EssayComponent from "../../../components/surveys/analysis/EssayComponent";
import BarChart from "../../../components/surveys/analysis/BarChart";
import PieChart from "../../../components/surveys/analysis/PieChart";
import MultipleChoiceAnalysis from "../../../components/surveys/analysis/MultipleChoiceAnalysis";
import WordCloud from "../../../components/surveys/analysis/WordCloud";
import OXAnalysis from "../../../components/surveys/analysis/OXAnalysis";

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
  console.log(result);
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

      {/* {data.map((item, idx) => (
        <Wrapper key={idx}>
          <Title>{idx + 1}번 문항에 대한 분석결과</Title>
          {item.question_type === "MULTIPLE_CHOICE" ? (
            <>
              <PieChart data={item.data} />
              <MultipleChoiceAnalysis item={item} />
            </>
          ) : item.question_type === "OX" ? (
            <>
              <OXAnalysis item={item} />
              <BarChart data={item.data} />
            </>
          ) : (
            <>
              <WordCloud item={item} />
              <EssayComponent data={item.data}></EssayComponent>
            </>
          )}
        </Wrapper>
      ))} */}
    </Container>
  );
}
