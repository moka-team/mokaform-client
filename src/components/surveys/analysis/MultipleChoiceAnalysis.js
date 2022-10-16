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
    color: #202632;
    font-weight: 600;
  }
`;

export default function MultipleChoiceAnalysis({ item }) {
  const countMaxValue = (data) => {
    const max = data.reduce((prev, current) =>
      prev.value > current.value ? prev : current
    );
    console.log(max);
    return max;
  };
  return (
    <MultipleChoiceResult>
      <p>
        가장 많이 선택된 문항은 <span>{countMaxValue(item.data).id}</span> 문항
      </p>
      <p>
        <span>{countMaxValue(item.data).content}</span>
      </p>
    </MultipleChoiceResult>
  );
}
