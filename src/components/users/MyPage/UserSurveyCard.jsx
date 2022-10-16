import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { CardActionArea } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faPen } from "@fortawesome/free-solid-svg-icons";
import { fontFamily } from "@mui/system";
import RightButton from "./RightButton";
function SurveyCard({ survey }) {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ pb: 1 }}>
        <Typography
          variant="body1"
          color="#202632"
          sx={{ fontSize: 15, fontWeight: 600 }}
        >
          {survey.name.length > 12
            ? `${survey.name.slice(0, 12)}...`
            : survey.name}
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
          >{`${survey.responseNumber}명`}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={7} align="right" sx={{ mt: 0.5, mb: -1 }}>
        <Chip label={survey.category} />
      </Grid>
    </Grid>
  );
}

// 임시 유저가 만든 설문 리스트 데이터
const createdSurveys = [
  {
    number: 1,
    name: "생성 설문제목1",
    responseNumber: 30,
    date: "22.09.25",
    category: "IT",
  },
  {
    number: 2,
    name: "생성 설문제목2",
    responseNumber: 32,
    date: "22.09.27",
    category: "선호도 조사",
  },
  {
    number: 3,
    name: "생성 설문제목3",
    responseNumber: 20,
    date: "22.09.29",
    category: "취미",
  },
  {
    number: 4,
    name: "생성 설문제목41212121",
    responseNumber: 100,
    date: "22.09.30",
    category: "반려동물",
  },
  {
    number: 5,
    name: "생성 설문제목41212121",
    responseNumber: 100,
    date: "22.09.30",
    category: "반려동물",
  },
];

// 임시 유저가 참여한 설문 리스트 데이터
const writedSurvey = [
  {
    number: 1,
    name: "참여 설문제목1",
    responseNumber: 30,
    date: "22.09.25",
    category: "IT",
  },
  {
    number: 2,
    name: "참여 설문제목2",
    responseNumber: 32,
    date: "22.09.27",
    category: "사회정치",
  },
  {
    number: 3,
    name: "참여 설문제목3",
    responseNumber: 20,
    date: "22.09.29",
    category: "IT",
  },
  {
    number: 4,
    name: "참여 설문제목43123133",
    responseNumber: 100,
    date: "22.09.30",
    category: "IT",
  },
  {
    number: 5,
    name: "참여 설문제목43123133",
    responseNumber: 100,
    date: "22.09.30",
    category: "IT",
  },
];

export default function UserSurveyCard({ isCreated }) {
  return isCreated ? (
    <Grid container spacing={1} sx={{ marginLeft: 5 }}>
      {createdSurveys.map((survey) => (
        <Grid item key={survey.number} xs={6} sm={6} md={4} lg={2} xl={2}>
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
      <RightButton />
    </Grid>
  ) : (
    <Grid container spacing={1} sx={{ marginLeft: 5 }}>
      {writedSurvey.map((survey) => (
        <Grid item key={survey.number} xs={6} sm={6} md={4} lg={2} xl={2}>
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
      <RightButton />
    </Grid>
  );
}