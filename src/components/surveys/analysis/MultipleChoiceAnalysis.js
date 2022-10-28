import styled from "styled-components";

const MultipleChoiceResult = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  p {
    margin-bottom: 10px;
  }
  span {
    color: #0064ff;
    font-size: 20px;
    font-weight: 600;
  }
`;
const formatting = (data) => {
  const result = [];
  data.forEach((ele, idx) => {
    const tmp = {};
    tmp.id = idx;
    tmp.label = idx;
    tmp.content = ele.multiQuestionContent;
    tmp.value = ele.multiQuestionContentCount;

    result.push(tmp);
  });
  return result;
};
export default function MultipleChoiceAnalysis({ item }) {
  const formattedItem = formatting(item);

  const countMaxValue = (data) => {
    const max = data.reduce((prev, current) =>
      prev.value > current.value ? prev : current
    );
    return max;
  };
  return (
    <MultipleChoiceResult>
      <p>
        가장 많이 선택된 문항은{" "}
        <span>{countMaxValue(formattedItem).id + 1}</span> 문항
      </p>
      <p>
        <span>{countMaxValue(formattedItem).content}</span>
      </p>
    </MultipleChoiceResult>
  );
}
