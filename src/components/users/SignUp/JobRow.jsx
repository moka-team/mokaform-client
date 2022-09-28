import React, { useState } from "react";
import Select from "react-select";
import styled from "styled-components";

const Title = styled.h1`
  display: flex;
  margin: 10px;
  margin-top: 35px;
  margin-bottom: 25px;
  color: #0064ff;
  font-weight: 700;
`;

export default function JobRow() {
  const jobs = [
    { value: "학생", label: "학생" },
    { value: "직장인", label: "직장인" },
  ];
  const [selected, setSelected] = useState(0);

  const onChangeHandler = (value) => {
    setSelected(value);
  };

  return (
    <>
      <Title>직업</Title>
      <Select
        value={jobs.find((op) => {
          return op.value === selected;
        })}
        onChange={(value) => {
          onChangeHandler(value.value);
        }}
        placeholder="직업을 선택해주세요."
        options={jobs}
      ></Select>
    </>
  );
}
