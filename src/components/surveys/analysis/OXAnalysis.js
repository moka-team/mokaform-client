import styled from "styled-components";

const OXResult = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  span {
    color: #0064ff;
    font-size: 20px;
    font-weight: 600;
  }
`;
export default function OXAnalysis({ item }) {
  console.log(item);
  return (
    <OXResult>
      {item.yes >= item.no ? (
        <>
          <p>{item.title} 문제에 대해</p>
          <p>
            <span>예</span>라고 답한 사람이 <span>{item.yes}</span>
            명으로
          </p>
          <p>
            전체 응답자의{" "}
            <span>{(item.yes / (item.yes + item.no)) * 100}%</span>를
            차지합니다.
          </p>
        </>
      ) : (
        <>
          <p>
            <span>아니오</span>라고 답한 사람이 <span>{item.no}</span>명으로
          </p>
          <p>예보다 {item.no - item.yes}명 더 많습니다.</p>
        </>
      )}
    </OXResult>
  );
}
