import { useState } from "react";
import styled from "styled-components";

const EmailFormWrapper = styled.div`
  width: 461px;
  margin-top: 25px;
  justify-content: center;
  align-items: center;
`;

const EmailInputContainer = styled.div`
  margin-right: 15px;
  margin-bottom: 25px;
`;

const EmailInput = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  margin-bottom: 8px;
  padding-left: 10px;
  font-size: 100%;
`;

const ConfirmButton = styled.button`
  width: 100%;
  height: 62.11px;
  border: 0px;
  border-radius: 10px;
  border: none;
  background-color: #286bd0;
  color: white;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 21px;

  &:hover {
    background-color: #0064ff;
  }
`;

function EmailFormContainer() {
  const [inputs, setInputs] = useState({
    email: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("email: " + inputs.email);
  };

  return (
    <EmailFormWrapper>
      <form onSubmit={handleSubmit}>
        <EmailInputContainer>
          <div>
            <EmailInput
              type="text"
              name="email"
              placeholder="이메일"
              value={inputs.email || ""}
              onChange={handleChange}
            />
          </div>
        </EmailInputContainer>
        <div>
          <ConfirmButton type="submit">확인</ConfirmButton>
        </div>
      </form>
    </EmailFormWrapper>
  );
}

export default EmailFormContainer;
