import React, { useState } from "react";
import Select from "react-select";
import "./Row.css";

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
    <div>
      <section>
        <h3 className="row_title">직업</h3>
        <div>
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
        </div>
      </section>
    </div>
  );
}
