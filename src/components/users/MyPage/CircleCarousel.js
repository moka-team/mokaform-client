import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faFaceSmile } from "@fortawesome/free-solid-svg-icons";
const preference = ["HOBBY, PET"];
const preferenceImage = [""];

const Container = styled.div`
  display: grid;
  width: 95%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 20px 50px;
  grid-template-columns: repeat(8, 1fr);
  @media screen and (max-width: 1300px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
const Card = styled.div`
  background-color: white;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 25px;
  margin-bottom: 25px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1), 0 4px 4px rgba(0, 0, 0, 0.19);
  &:hover {
    background-color: gray;
  }
`;
function CircleCarousel() {
  return (
    <Container>
      <Card>
        <FontAwesomeIcon
          icon={faPaw}
          size={"4x"}
          style={{ color: "#636870", marginTop: "16px", marginLeft: "18px" }}
        />
      </Card>
      <Card>
        <FontAwesomeIcon
          icon={faFaceSmile}
          size={"4x"}
          style={{ color: "#636870", marginTop: "17px", marginLeft: "18px" }}
        />
      </Card>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  );
}
export default CircleCarousel;
