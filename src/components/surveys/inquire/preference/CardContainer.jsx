import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { surveyList } from "../../../../atoms";
import defaultImage from "../../../common/default_image.png";
import { SurveyListActionsContext, SurveyListContext } from "./surveyState";
import { useNavigate } from "react-router-dom";
function SurveyCard({ survey }) {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ pb: 1 }}>
        <Typography
          variant="body1"
          color="#202632"
          sx={{ fontSize: 15, fontWeight: 600 }}
        >
          {survey.title.length > 11
            ? survey.title.slice(0, 11) + `...`
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
  const preferenceSurveyList = useContext(SurveyListContext);
  const navigate = useNavigate();
  return (
    <Grid container columnSpacing={12} rowSpacing={3} justifyContent="center">
      {preferenceSurveyList.map((survey) => (
        <Grid item key={survey.surveyId} xs={6} sm={6} md={4} lg={2.4} xl={2.4}>
          <CardActionArea
            onClick={() => navigate(`/survey/${survey.sharingKey}`)}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
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
        </Grid>
      ))}
    </Grid>
  );
}
