import { useState, useRef } from "react";
import styled from "styled-components";

const Create = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Picker = styled.div`
  display: flex;
`;

function CreateSurvey() {
  const targets = useRef([]);

  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const [type, setType] = useState("주관식");
  const onChange = (event) => setToDo(event.target.value);
  const handleSelect = (event) => {
    setType(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [...currentArray, [type, toDo]]);
    setToDo("");
  };
  const delToDo = (index) => {
    setToDos(toDos.filter((item, todoIndex) => index !== todoIndex));
  };

  return (
    <div>
      <Create>
        <Picker>
          <form>
            <select onChange={handleSelect}>
              <option value={"주관식"}>주관식</option>
              <option value={"객관식"}>객관식</option>
              <option value={"찬부식"}>찬부식</option>
            </select>
          </form>
          <form onSubmit={onSubmit}>
            <input
              onChange={onChange}
              value={toDo}
              type="text"
              placeholder="Write your Question"
            />
            <button>Create</button>
          </form>
        </Picker>
      </Create>
      <hr />
      <ul>
        {toDos.map((item, index) =>
          item[0] === "주관식" ? (
            <li key={index}>
              <span>
                질문{index + 1}. {item[1]}
              </span>
              <input />
              <button
                onClick={() => delToDo(index)}
                style={{
                  border: "none",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                ❌
              </button>
            </li>
          ) : item[0] === "찬부식" ? (
            <li key={index}>
              <span>
                질문{index + 1}. {item[1]}
              </span>
              <div>
                <label>
                  <input type="radio" name={index} value="YES" />
                  YES
                </label>
                <label>
                  <input type="radio" name={index} value="NO" />
                  NO
                </label>
              </div>
              <button
                onClick={() => delToDo(index)}
                style={{
                  border: "none",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                ❌
              </button>
            </li>
          ) : (
            <li key={index}>
              <span>
                질문{index + 1}. {item[1]}
              </span>
              <button
                onClick={() => {
                  const p = document.createElement("input");
                  p.setAttribute("style", "display:block");
                  targets.current[index].appendChild(p);
                }}
              >
                ADD Option
              </button>
              <button
                onClick={() => delToDo(index)}
                style={{
                  border: "none",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                ❌
              </button>
              <div ref={(el) => (targets.current[index] = el)}></div>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default CreateSurvey;
