import React from "react";
import CustomizedTable from "./CustomizedTable";
import { Container, Table, Text } from "./styled";

export default function ManageSurveySection() {
  return (
    <Container>
      <Table>
        <Text>설문 관리</Text>
        <CustomizedTable></CustomizedTable>
      </Table>
    </Container>
  );
}
