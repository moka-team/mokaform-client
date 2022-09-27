import styled from "styled-components";

const Container = styled.div`
  display: grid;
  width: 95%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 0px 50px;
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
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  &:hover {
    background-color: gray;
  }
`;
function CircleCarousel() {
  return (
    <Container>
      <Card />
      <Card />
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
