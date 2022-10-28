import React from "react";
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
import { useRecoilValue } from "recoil";
import { surveyList } from "../../atoms";
import { Link } from "react-router-dom";
import defaultImage from "../common/default_image.png";

function SurveyCard({ survey }) {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ pb: 1 }}>
        <Typography
          variant="body1"
          color="#202632"
          sx={{ fontSize: 18, fontWeight: 600 }}
        >
          {survey.title.length > 16
            ? survey.title.slice(0, 14) + `...`
            : survey.title}
        </Typography>
      </Grid>
      <Grid item xs={6} sx={{ pt: 1, mb: -1 }}>
        <Stack direction="row" spacing={0.5}>
          <FontAwesomeIcon
            icon={faPen}
            size={"lg"}
            style={{ color: "#636870", paddingTop: "2px" }}
          />
          <Typography color="#636870">{`${survey.surveyeeCount}명 응답`}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6} align="right" sx={{ mt: 0.5, mb: -1 }}>
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
          }[survey.surveyCategories[0]]
        }
      </Grid>
    </Grid>
  );
}

export default function CardContainer() {
  const surveys = useRecoilValue(surveyList);

  console.log(surveys);
  return (
    <Grid container spacing={2}>
      {surveys.map((survey) => (
        <Grid item key={survey.surveyId} xs={6} sm={6} md={4} lg={2.4} xl={2.4}>
          <Link
            to={`/survey/${survey.sharingKey}`}
            style={{ textDecoration: "none" }}
          >
            <CardActionArea>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  src={defaultImage}
                  sx={{ height: 256 }}
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
