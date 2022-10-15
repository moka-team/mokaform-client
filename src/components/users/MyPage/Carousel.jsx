import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 95%;
  height: 100%;
  justify-content: space-between;
  margin: 50px 50px;
`;
const Card = styled.div`
  background-color: white;
  width: 30%;
  height: 100%;
  margin-right: 25px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  &:hover {
    background-color: gray;
  }
`;
function Carousel() {
  return (
    <Container>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  );
}
export default Carousel;
