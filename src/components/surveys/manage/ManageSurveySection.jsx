import React from "react";
import Header from "../../main/Header";
import CustomizedTable from "./CustomizedTable";
import { Container, Table, Text } from "./styled";

export default function ManageSurveySection() {
  return (
    <Container>
      <Header></Header>
      <Table>
        <Text>설문 관리</Text>
        <CustomizedTable></CustomizedTable>
      </Table>
    </Container>
  );
}
