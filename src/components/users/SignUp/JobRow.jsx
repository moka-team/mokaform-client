import React, { useState } from "react";
import Select from "react-select";
import { useRecoilState } from "recoil";
import { Title } from "./SignUpCSS";
import { jobState } from "./SignUpState";

export default function JobRow() {
  const jobs = [
    { value: "학생", label: "학생" },
    { value: "직장인", label: "직장인" },
    { value: "공무원", label: "공무원" },
    { value: "자영업자", label: "자영업자" },
    { value: "주부", label: "주부" },
    { value: "프리랜서", label: "프리랜서" },
    { value: "취업준비생", label: "취업준비생" },
    { value: "무직", label: "무직" },
  ];
  const [job, setJob] = useRecoilState(jobState);
  const [selected, setSelected] = useState(0);

  const onChangeHandler = (value) => {
    setSelected(value);
    if (value === "학생") {
      setJob("STUDENT");
    }
    if (value === "직장인") {
      setJob("OFFICE_WORKERS");
    }
    if (value === "공무원") {
      setJob("PUBLIC_OFFICIAL");
    }
    if (value === "자영업자") {
      setJob("SELF_EMPLOYED");
    }
    if (value === "주부") {
      setJob("HOUSEWIFE");
    }
    if (value === "프리랜서") {
      setJob("FREELANCER");
    }
    if (value === "취업준비생") {
      setJob("JOB_SEEKER");
    }
    if (value === "무직") {
      setJob("JOBLESS");
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
