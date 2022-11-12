import React, { useState } from "react";
import Select from "react-select";
import { Title } from "./SignUpCSS";

export default function JobRow({ job, getJob, getIsJob }) {
  const jobs = [
    { value: "STUDENT", label: "학생" },
    { value: "OFFICE_WORKERS", label: "직장인" },
    { value: "PUBLIC_OFFICIAL", label: "공무원" },
    { value: "SELF_EMPLOYED", label: "자영업자" },
    { value: "HOUSEWIFE", label: "주부" },
    { value: "FREELANCER", label: "프리랜서" },
    { value: "JOB_SEEKER", label: "취업준비생" },
    { value: "JOBLESS", label: "무직" },
  ];
  const [selected, setSelected] = useState(0);

  const onChangeHandler = (value) => {
    getIsJob(true);
    setSelected(value);
    getJob(value);
    console.log(value);
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
