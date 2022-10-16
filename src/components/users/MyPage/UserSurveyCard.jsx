import { React, useState, useEffect } from "react";
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
import axios from "axios";
function SurveyCard({ survey }) {
  let category = survey.surveyCategories[0];
  console.log(survey.title);
  return (
    <Grid container>
      <Grid item xs={12} sx={{ pb: 1 }}>
        <Typography
          variant="body1"
          color="#202632"
          sx={{ fontSize: 15, fontWeight: 600 }}
        >
          {/* 설문 제목 길이 제한 필요 예상합니다 . . */}
          {survey.title}
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

function changeCategory() {}

// 임시 유저가 만든 설문 리스트 데이터
const createdSurveys = [
  {
    number: 1,
    title: "생성 설문제목1",
    surveyeeCount: 30,
    endDate: "22.09.25",
    surveyCategories: "IT",
  },
  {
    number: 2,
    title: "생성 설문제목2",
    surveyeeCount: 32,
    endDate: "22.09.27",
    surveyCategories: "선호도 조사",
  },
  {
    number: 3,
    title: "생성 설문제목3",
    surveyeeCount: 20,
    endDate: "22.09.29",
    surveyCategories: "취미",
  },
  {
    number: 4,
    title: "생성 설문제목41212121",
    surveyeeCount: 100,
    endDate: "22.09.30",
    surveyCategories: "반려동물",
  },
  {
    number: 5,
    title: "생성 설문제목41212121",
    surveyeeCount: 100,
    endDate: "22.09.30",
    surveyCategories: "반려동물",
  },
];

// 임시 유저가 참여한 설문 리스트 데이터
const writedSurvey = [
  {
    number: 1,
    title: "참여 설문제목1",
    surveyeeCount: 30,
    endDate: "22.09.25",
    surveyCategories: "IT",
  },
  {
    number: 2,
    title: "참여 설문제목2",
    surveyeeCount: 32,
    endDate: "22.09.27",
    surveyCategories: "사회정치",
  },
  {
    number: 3,
    title: "참여 설문제목3",
    surveyeeCount: 20,
    endDate: "22.09.29",
    surveyCategories: "IT",
  },
  {
    number: 4,
    title: "참여 설문제목43123133",
    surveyeeCount: 100,
    endDate: "22.09.30",
    surveyCategories: "IT",
  },
  {
    number: 5,
    title: "참여 설문제목43",
    surveyeeCount: 100,
    date: "22.09.30",
    surveyCategories: "IT",
  },
];

export default function UserSurveyCard({ isCreated }) {
  const [createdMySurvey, setCreatedMySurvey] = useState(null);

  useEffect(() => {
    (async () => {
      // TODO: userId 부분 수정 필요!
      const posts = await axios.get("/api/v1/users/my/surveys", {
        params: {
          page: 0,
          size: 4,
          sort: "surveyeeCount,desc",
          userId: 1,
        },
      });
      setCreatedMySurvey(posts.data.data.content);
    })();
  }, []);

  return isCreated && createdMySurvey !== null ? (
    <Grid container spacing={1} sx={{ ml: 5, mt: 1, mb: 4, mr: -3 }}>
      {createdMySurvey.map((survey) => (
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
      <RightButton />
    </Grid>
  ) : (
    <Grid container spacing={1} sx={{ ml: 5, mt: 1, mr: -3 }}>
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
