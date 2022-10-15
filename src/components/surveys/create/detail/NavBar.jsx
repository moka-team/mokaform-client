import React from "react";
import { SNavBar, SaveBtn } from "./styled";

export default function NavBar() {
  const handleSubmit = () => {};
  return (
    <SNavBar>
      <SaveBtn onClick={handleSubmit}>저장</SaveBtn>
    </SNavBar>
  );
}
