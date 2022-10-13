import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faSortAmountAsc } from "@fortawesome/free-solid-svg-icons";
import Carousel from "./Carousel";
import CircleCarousel from "./CircleCarousel";
import { SortSelect } from "../../../components/main/SortSelect";
import { Grid } from "@mui/material";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import PreferenceCard from "./PreferenceCard";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 90%;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 50px;
`;

const Block = styled.div`
  display: flex;
  p {
    margin-right: 10px;
    font-size: 17px;
    font-weight: 600;
  }
`;

const SortedBtn = styled(Block)`
  background-color: #202632;
  color: white;
  padding: 10px;
  border-radius: 18px;
  cursor: pointer;
`;

function ServeyCard({ servey }) {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ pb: 1 }}>
        <Typography
          variant="body1"
          color="#202632"
          sx={{ fontSize: 18, fontWeight: 600 }}
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

function ListContainer() {
  const preference = ["HOBBY", "PET"];
  return (
    <Container>
      <Header>
        <Block>
          <p>나의 관심사</p>
          <FontAwesomeIcon icon={faEdit} color="gray" />
          {/* <Grid container spacing={2}>
            {preference.map((preference) => (
              <Grid
                item
                key={preference.number}
                xs={6}
                sm={6}
                md={4}
                lg={3}
                xl={2.4}
              >
                <PreferenceCard></PreferenceCard>
                <CardActionArea>
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: 40,
                    }}
                  >
                    <CardMedia
                      component="img"
                      image="https://source.unsplash.com/random"
                      alt="random"
                      sx={{ height: 30 }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      
                    </CardContent>
                  </Card>
                </CardActionArea>
              </Grid>
            ))}
          </Grid> */}
        </Block>
      </Header>
      <CircleCarousel />
      <Header>
        <Block>
          <p>내가 만든 설문</p>
        </Block>
        <SortedBtn>
          <p>Sorted</p>
          <FontAwesomeIcon icon={faSortAmountAsc} color="white" />
        </SortedBtn>
      </Header>
      <Carousel />
      <Header>
        <Block>
          <p>내가 참여한 설문</p>
        </Block>
        <SortedBtn>
          <p>Sorted</p>
          <FontAwesomeIcon icon={faSortAmountAsc} color="white" />
        </SortedBtn>
      </Header>
      <Carousel />
    </Container>
  );
}

export default ListContainer;
