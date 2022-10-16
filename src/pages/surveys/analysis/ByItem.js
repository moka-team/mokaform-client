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

export default function ByItem() {
  return (
    <Container>
      {data.map((item, idx) => (
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
      ))}
    </Container>
  );
}
