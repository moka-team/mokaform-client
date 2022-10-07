import styled from "styled-components";
import { useRef, useState } from "react";

const Container = styled.div`
  height: 100vh;
  background-color: #202632;
  color: white;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;
const Creation = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
`;
const Preview = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
`;

function CreateSurvey() {
  const previewArea = useRef();
  const questionArea = useRef();
  const [selected, setSelected] = useState("주관식");
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };
  const createQuestion = () => {
    if (selected === "주관식") {
      const questionBox = document.createElement("div");
      const question = document.createElement("input");
      const Q = document.createElement("p");
      const A = document.createElement("input");
      A.disabled = true;
      question.onchange = function (e) {
        Q.innerHTML = e.target.value;
      };

      questionBox.appendChild(question);
      questionArea.current.appendChild(questionBox);
      previewArea.current.appendChild(Q);
      previewArea.current.appendChild(A);
    } else if (selected === "찬부식") {
      const questionBox = document.createElement("div");
      const question = document.createElement("input");
      const Q = document.createElement("p");

      const AnswerBox = document.createElement("form");
      const YES = document.createElement("input");
      const NO = document.createElement("input");
      YES.setAttribute("type", "radio");
      YES.setAttribute("name", "answer");
      NO.setAttribute("type", "radio");
      NO.setAttribute("name", "answer");

      AnswerBox.appendChild(YES);
      AnswerBox.appendChild(NO);

      question.onchange = function (e) {
        Q.innerHTML = e.target.value;
      };

      questionBox.appendChild(question);
      questionArea.current.appendChild(questionBox);
      previewArea.current.appendChild(Q);
      previewArea.current.appendChild(AnswerBox);
    } else {
      const questionBox = document.createElement("div");
      const question = document.createElement("input");
      const Q = document.createElement("p");

      question.onchange = function (e) {
        Q.innerHTML = e.target.value;
      };

      questionBox.appendChild(question);
      questionArea.current.appendChild(questionBox);
      previewArea.current.appendChild(Q);
    }
  };

  return (
    <Container>
      <select onChange={handleSelect} value={selected}>
        <option>주관식</option>
        <option>객관식</option>
        <option>찬부식</option>
      </select>
      <button onClick={createQuestion}>Create</button>
      <Wrapper>
        <Creation>
          <div ref={questionArea}></div>
        </Creation>
        <Preview>
          <p>Preview</p>
          <div ref={previewArea}></div>
        </Preview>
      </Wrapper>
    </Container>
  );
}

export default CreateSurvey;
