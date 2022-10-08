import styled from "styled-components";
import { useRef, useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
} from "@mui/material";

const Container = styled.div`
  height: 100vh;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
const Create = styled.div`
  display: flex;
`;
const Creation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  flex-direction: column;
  background-color: #202632;
  color: white;
`;
const Preview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  flex-direction: column;
`;

function CreateSurvey() {
  const previewArea = useRef();
  const questionArea = useRef();
  const [selected, setSelected] = useState("");
  const handleSelect = (event) => {
    setSelected(event.target.value);
  };
  const createQuestion = () => {
    if (selected === "주관식") {
      const questionBox = document.createElement("div");
      const question = document.createElement("input");
      const Q = document.createElement("p");
      const A = document.createElement("input");

      A.disabled = true;
      question.onchange = function (e) {
        Q.innerHTML = "Q" + e.target.value;
      };

      questionBox.appendChild(question);
      questionArea.current.appendChild(questionBox);

      previewArea.current.appendChild(Q);
      previewArea.current.appendChild(A);

      const hr = document.createElement("hr");
      const hr1 = document.createElement("hr");
      questionArea.current.appendChild(hr);
      previewArea.current.appendChild(hr1);
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
        Q.innerHTML = "Q" + e.target.value;
      };

      questionBox.appendChild(question);
      questionArea.current.appendChild(questionBox);
      previewArea.current.appendChild(Q);
      previewArea.current.appendChild(AnswerBox);
      const hr = document.createElement("hr");
      const hr1 = document.createElement("hr");
      questionArea.current.appendChild(hr);
      previewArea.current.appendChild(hr1);
    } else {
      const questionBox = document.createElement("div");
      const question = document.createElement("input");
      const addBtn = document.createElement("button");
      const answerList = document.createElement("div");

      const answerBox = document.createElement("div");

      addBtn.innerText = "ADD";

      addBtn.onclick = () => {
        const list = document.createElement("input");
        list.setAttribute("style", "display : block");
        answerList.appendChild(list);

        list.onchange = function (e) {
          const answerList = document.createElement("p");
          answerList.innerHTML = e.target.value;
          answerBox.appendChild(answerList);
        };
      };

      const Q = document.createElement("p");

      question.onchange = function (e) {
        Q.innerHTML = "Q" + e.target.value;
      };

      questionBox.appendChild(question);
      questionArea.current.appendChild(questionBox);
      questionArea.current.appendChild(addBtn);
      questionArea.current.appendChild(answerList);

      previewArea.current.appendChild(Q);
      previewArea.current.appendChild(answerBox);
      const hr = document.createElement("hr");
      const hr1 = document.createElement("hr");
      questionArea.current.appendChild(hr);
      previewArea.current.appendChild(hr1);
    }
  };

  return (
    <Container>
      <Create>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="select-label">Type</InputLabel>
          <Select onChange={handleSelect} value={selected} label="type">
            <MenuItem value={"주관식"}>주관식</MenuItem>
            <MenuItem value={"객관식"}>객관식</MenuItem>
            <MenuItem value={"찬부식"}>찬부식</MenuItem>
          </Select>
        </FormControl>
        <Button onClick={createQuestion}>Create</Button>
      </Create>
      <Wrapper>
        <Creation>
          <div ref={questionArea}></div>
        </Creation>
        <Preview>
          <div ref={previewArea}></div>
        </Preview>
      </Wrapper>
    </Container>
  );
}

export default CreateSurvey;
