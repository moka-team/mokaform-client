import { React, useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { CardActionArea } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import RightButton from "./RightButton";
import axios from "axios";
import routes from "../../../routes";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../../../authentication/userState";
import Loading from "../../surveys/participate/Loading";
import Error from "../../surveys/participate/Error";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

function SurveyCard({ survey }) {
  let category = survey.surveyCategories[0];
  return (
    <Grid container>
      <Grid item xs={12} sx={{ pb: 1 }}>
        <Typography
          variant="body1"
          color="#202632"
          sx={{ fontSize: 15, fontWeight: 600 }}
        >
          {survey?.title?.length > 12
            ? `${survey.title.slice(0, 12)}...`
            : survey.title}
        </Typography>
      </Grid>

      <Grid item xs={5} sx={{ pt: 1, mb: -1 }}>
        <Stack direction="row" spacing={0.5}>
          <FontAwesomeIcon
            icon={faPen}
            size={"lg"}
            style={{ color: "#636870", paddingTop: "2px" }}
          />
          <Typography
            color="#636870"
            sx={{ fontSize: 14 }}
          >{`${survey.surveyeeCount}명`}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={7} align="right" sx={{ mt: 0.5, mb: -1 }}>
        {
          {
            HOBBY: <Chip label="취미" />,
            DAILY_LIFE: <Chip label="일상" />,
            IT: <Chip label="IT" />,
            LEARNING: <Chip label="학습" />,
            PSYCHOLOGY: <Chip label="심리" />,
            SOCIAL_POLITICS: <Chip label="사회·정치" />,
            PREFERENCE_RESEARCH: <Chip label="선호도 조사" />,
            PET: <Chip label="반려동물" />,
          }[category]
        }
      </Grid>
    </Grid>
  );
}

export default function UserParticipatedSurveyCard() {
  const [participatedSurvey, setParticipatedSurvey] = useState(null);
  const [user, setUser] = useRecoilState(userState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(user);
  useEffect(() => {
    axios
      .get("/api/v1/users/my/submitted-surveys", {
        params: {
          page: 0,
          size: 4,
          sort: "surveyeeCount,desc",
          userId: 1,
        },
      })
      .then(function (response) {
        console.log(response);
        setParticipatedSurvey(response.data.data.content);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error.message);
        setError(true);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  if (error) return <Error></Error>;
  if (loading) return <Loading></Loading>;

  return (
    <Grid container spacing={1} sx={{ ml: 5, mt: 1, mb: 4, mr: -3 }}>
      {participatedSurvey.map((survey) => (
        <Grid item key={survey.surveyId} xs={6} sm={6} md={4} lg={2} xl={2}>
          <CardActionArea sx={{ width: 200 }}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                width: 200,
              }}
            >
              <CardMedia
                component="img"
                image="https://source.unsplash.com/random"
                alt="random"
                sx={{ height: 150 }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <SurveyCard survey={survey} />
              </CardContent>
            </Card>
          </CardActionArea>
        </Grid>
      ))}
      <ButtonContainer>
        <Link to={`/survey/${user.id}/manage`} surveyId={1}>
          <RightButton />
        </Link>
      </ButtonContainer>
    </Grid>
  );
}
