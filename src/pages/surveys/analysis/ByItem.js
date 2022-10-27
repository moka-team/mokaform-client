import styled from "styled-components";
import data from "./data";

import EssayComponent from "../../../components/surveys/analysis/EssayComponent";
import BarChart from "../../../components/surveys/analysis/BarChart";
import PieChart from "../../../components/surveys/analysis/PieChart";
import MultipleChoiceAnalysis from "../../../components/surveys/analysis/MultipleChoiceAnalysis";
import WordCloud from "../../../components/surveys/analysis/WordCloud";
import OXAnalysis from "../../../components/surveys/analysis/OXAnalysis";

import { useEffect, useState } from "react";
import axios from "axios";

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

export default function ByItem({ surveyId }) {
  const [stat, setStat] = useState(null);
  const fetchAnalysis = async () => {
    const response = await axios.get(
      `/api/v1/users/my/surveys/${surveyId}/stats`
    );
    setStat(response.data.data);
  };

  useEffect(() => {
    fetchAnalysis();
  }, []);
  console.log(stat.essayStats[0]);
  return (
    <Container>
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
      {/* <WordCloud item={stat} /> */}
    </Container>
  );
}
