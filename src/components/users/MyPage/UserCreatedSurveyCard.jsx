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
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { createdMySurvey } from "../../../atoms";
import defaultImage from "../../common/default_image.png";

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

export default function UserSurveyCard() {
  const [createdSurvey, setCreatedSurvey] = useRecoilState(createdMySurvey);

  return (
    <Grid container spacing={1} sx={{ ml: 5, mt: 1, mb: 4, mr: -3 }}>
      {createdSurvey.map((survey) => (
        <Grid
          item
          key={survey.surveyId}
          xs={6}
          sm={6}
          md={4}
          lg={2.25}
          xl={2.25}
        >
          <Link
            to={`/my/survey/${survey.sharingKey}`}
            style={{ textDecoration: "none" }}
          >
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
                  src={defaultImage}
                  sx={{ height: 150 }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <SurveyCard survey={survey} />
                </CardContent>
              </Card>
            </CardActionArea>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
