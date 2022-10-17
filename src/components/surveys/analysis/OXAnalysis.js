import styled from "styled-components";

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
export default function OXAnalysis({ item }) {
  return (
    <OXResult>
      {item.data[0]["Yes"] >= item.data[0]["No"] ? (
        <>
          <p>
            <span>예</span>라고 답한 사람이 <span>{item.data[0]["Yes"]}</span>
            명으로
          </p>
          <p>
            아니오보다 {item.data[0]["Yes"] - item.data[0]["No"]}명 더 많습니다.
          </p>
        </>
      ) : (
        <>
          <p>
            <span>아니오</span>라고 답한 사람이{" "}
            <span>{item.data[0]["No"]}</span>명으로
          </p>
          <p>
            예보다 {item.data[0]["No"] - item.data[0]["Yes"]}명 더 많습니다.
          </p>
        </>
      )}
    </OXResult>
  );
}
