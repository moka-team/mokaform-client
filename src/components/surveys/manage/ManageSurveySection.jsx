import { React, useState, useEffect } from "react";
import Header from "../../main/Header";
import CustomizedTable from "./CustomizedTable";
import { Container, Table, Text } from "./styled";
import axios from "axios";
import Error from "../detail/Error";
import Loading from "../detail/Loading";

export default function ManageSurveySection({ userId }) {
  const [survey, setSurvey] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios
      .get("/api/v1/users/my/surveys", {
        params: {
          userId: userId,
        },
      })
      .then(function (response) {
        console.log(response);
        setSurvey(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error.message);
        setErrorMessage(error.message);
        setError(true);
      })
      .finally(function () {
        // always executed
      });
  }, [userId]);

  if (error) return <Error errorMessage={errorMessage}></Error>;
  if (loading) return <Loading></Loading>;

  return (
    <Container>
      <Header></Header>
      <Table>
        <Text>설문 관리</Text>
        <CustomizedTable survey={survey.data.content}></CustomizedTable>
      </Table>
    </Container>
  );
}
