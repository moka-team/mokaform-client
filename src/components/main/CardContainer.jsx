import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { useRecoilState } from "recoil";
import { surveyList } from "../../atoms";
function ServeyCard({ servey }) {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ pb: 1 }}>
        <Typography
          variant="body1"
          color="#202632"
          sx={{ fontSize: 18, fontWeight: 600 }}
        >
          {servey.title}
        </Typography>
      </Grid>

      <Grid item xs={6} sx={{ pt: 1, mb: -1 }}>
        <Stack direction="row" spacing={0.5}>
          <FontAwesomeIcon
            icon={faPen}
            size={"lg"}
            style={{ color: "#636870", paddingTop: "2px" }}
          />
          <Typography color="#636870">{`${servey.surveyeeCount}명 응답`}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6} align="right" sx={{ mt: 0.5, mb: -1 }}>
        <Chip label={servey.surveyCategories} />
      </Grid>
    </Grid>
  );
}

export default function CardContainer({ logined }) {
  const [totalSurvey, setTotalSurvey] = useState(null);
  const [surveys, setServeys] = useRecoilState(surveyList);

  useEffect(() => {}, [surveys]);

  return logined ? (
    <Grid container spacing={2}>
      {/* 추천 설문으로 바꿔야함 */}
      {surveys.map((servey) => (
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
      {surveys?.data?.content.map((servey) => (
        <Grid item key={servey.surveyId} xs={6} sm={6} md={4} lg={3} xl={2.4}>
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
