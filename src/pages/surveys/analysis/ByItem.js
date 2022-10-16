import styled from "styled-components";
import data from "./data";

import EssayComponent from "../../../components/surveys/analysis/EssayComponent";
import BarChart from "../../../components/surveys/analysis/BarChart";
import PieChart from "../../../components/surveys/analysis/PieChart";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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
            <PieChart data={item.data} />
          ) : item.question_type === "OX" ? (
            <BarChart data={item.data} />
          ) : (
            <EssayComponent data={item.data}></EssayComponent>
          )}
        </Wrapper>
      ))}
    </Container>
  );
}
