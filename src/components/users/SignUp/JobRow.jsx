import React, { useState } from "react";
import Select from "react-select";
import { useRecoilState } from "recoil";
import { Title } from "./SignUpCSS";
import { jobState } from "./SignUpState";

export default function JobRow() {
  const jobs = [
    { value: "학생", label: "학생" },
    { value: "직장인", label: "직장인" },
  ];
  const [job, setJob] = useRecoilState(jobState);
  const [selected, setSelected] = useState(0);

  const onChangeHandler = (value) => {
    setSelected(value);
    if (value === "학생") {
      setJob("student");
    }
    if (value === "직장인") {
      setJob("worker");
    }
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
