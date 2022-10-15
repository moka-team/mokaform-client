import { TagCloud } from "react-tagcloud";
import styled from "styled-components";
import data from "./data";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "MonoplexKR";
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  text-align: center;
`;

const MultipleChoiceResult = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  span {
    color: #0064ff;
    font-size: 20px;
    font-weight: 600;
  }
`;

const OXResult = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  span {
    color: #0064ff;
    font-size: 20px;
    font-weight: 600;
  }
`;

const WordCloudContainer = styled.div`
  padding: 50px;
`;

export default function Detail() {
  const countMaxValue = (data) => {
    const max = data.reduce((prev, current) =>
      prev.value > current.value ? prev : current
    );
    return max;
  };

  const countNum = (data) => {
    const obj = {};

    const json = [];

    data.forEach((element) => {
      element.content.split(" ").map((word) => {
        if (word in obj) {
          obj[word] += 1;
        } else {
          obj[word] = 1;
        }
      });
    });

    Object.keys(obj).map((key) => json.push({ value: key, count: obj[key] }));

    return json;
  };
  return (
    <Container>
      {data.map((item, idx) => (
        <Wrapper key={idx}>
          <Title>{idx + 1}번 문항에 대한 분석결과</Title>
          {item.question_type === "MULTIPLE_CHOICE" ? (
            <MultipleChoiceResult>
              <p>
                가장 많이 선택된 문항은{" "}
                <span>{countMaxValue(item.data).id}</span> 문항이며
              </p>
              <p>
                그 내용은 <span>{countMaxValue(item.data).content}</span>{" "}
                입니다.
              </p>
            </MultipleChoiceResult>
          ) : item.question_type === "OX" ? (
            <OXResult>
              {item.data[0]["Yes"] >= item.data[0]["No"] ? (
                <>
                  <p>
                    <span>예</span>라고 답한 사람이{" "}
                    <span>{item.data[0]["Yes"]}</span>명으로
                  </p>
                  <p>
                    아니오보다 {item.data[0]["Yes"] - item.data[0]["No"]}명 더
                    많습니다.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <span>아니오</span>라고 답한 사람이{" "}
                    <span>{item.data[0]["No"]}</span>명으로
                  </p>
                  <p>
                    예보다 {item.data[0]["No"] - item.data[0]["Yes"]}명 더
                    많습니다.
                  </p>
                </>
              )}
            </OXResult>
          ) : (
            <WordCloudContainer>
              <TagCloud minSize={20} maxSize={40} tags={countNum(item.data)} />
            </WordCloudContainer>
          )}
        </Wrapper>
      ))}
    </Container>
  );
}
