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
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { fontFamily } from "@mui/system";
function ServeyCard({ servey }) {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ pb: 1 }}>
        <Typography
          variant="body1"
          color="#202632"
          sx={{ fontSize: 18, fontWeight: 600, }}
        >
          {servey.name}
        </Typography>
      </Grid>

      <Grid item xs={6} sx={{ pt: 1, mb: -1 }}>
        <Stack direction="row" spacing={0.5}>
          <FontAwesomeIcon
            icon={faPen}
            size={"lg"}
            style={{ color: "#636870", paddingTop: "2px" }}
          />
          <Typography color="#636870">{`${servey.responseNumber}명 응답`}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6} align="right" sx={{ mt: 0.5, mb: -1 }}>
        <Chip label={servey.category} />
      </Grid>
    </Grid>
  );
}

const serveys = [
  {
    number: 1,
    name: "설문제목1",
    responseNumber: 30,
    date: "22.09.25",
    category: "IT",
  },
  {
    number: 2,
    name: "설문제목2",
    responseNumber: 32,
    date: "22.09.27",
    category: "IT",
  },
  {
    number: 3,
    name: "설문제목3",
    responseNumber: 20,
    date: "22.09.29",
    category: "취미",
  },
  {
    number: 4,
    name: "설문제목4",
    responseNumber: 100,
    date: "22.09.30",
    category: "IT",
  },
  {
    number: 5,
    name: "설문제목5",
    responseNumber: 60,
    date: "22.10.10",
    category: "취미",
  },
  {
    number: 6,
    name: "설문제목6",
    responseNumber: 50,
    date: "22.09.27",
    category: "취미",
  },
  {
    number: 7,
    name: "설문제목7",
    responseNumber: 80,
    date: "22.09.27",
    category: "일상",
  },
  {
    number: 8,
    name: "설문제목8",
    responseNumber: 40,
    date: "22.10.05",
    category: "일상",
  },
  {
    number: 9,
    name: "설문제목9",
    responseNumber: 100,
    date: "22.10.07",
    category: "IT",
  },
  {
    number: 10,
    name: "설문제목10",
    responseNumber: 65,
    date: "22.09.27",
    category: "IT",
  },
];

const userSuggestServey = [
  {
    number: 1,
    name: "추천 설문제목1",
    responseNumber: 30,
    date: "22.09.25",
    category: "IT",
  },
  {
    number: 2,
    name: "추천 설문제목2",
    responseNumber: 32,
    date: "22.09.27",
    category: "IT",
  },
  {
    number: 3,
    name: "추천 설문제목3",
    responseNumber: 20,
    date: "22.09.29",
    category: "IT",
  },
  {
    number: 4,
    name: "추천 설문제목4",
    responseNumber: 100,
    date: "22.09.30",
    category: "IT",
  },
  {
    number: 5,
    name: "추천 설문제목5",
    responseNumber: 60,
    date: "22.10.10",
    category: "취미",
  },
];

export default function CardContainer({ logined }) {
  return logined ? (
    <Grid container spacing={2}>
      {userSuggestServey.map((servey) => (
        <Grid item key={servey.number} xs={6} sm={6} md={4} lg={3} xl={2.4}>
          <CardActionArea>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                image="https://source.unsplash.com/random"
                alt="random"
                sx={{ height: 256 }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <ServeyCard servey={servey} />
              </CardContent>
            </Card>
          </CardActionArea>
        </Grid>
      ))}
    </Grid>
  ) : (
    <Grid container spacing={2}>
      {serveys.map((servey) => (
        <Grid item key={servey.number} xs={6} sm={6} md={4} lg={3} xl={2.4}>
          <CardActionArea>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                image="https://source.unsplash.com/random"
                alt="random"
                sx={{ height: 256 }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <ServeyCard servey={servey} />
              </CardContent>
            </Card>
          </CardActionArea>
        </Grid>
      ))}
    </Grid>
  );
}
