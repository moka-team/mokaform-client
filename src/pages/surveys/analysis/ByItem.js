import { ResponsivePie } from "@nivo/pie";
import styled from "styled-components";
import data from "./data";

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  text-align: center;
`;

const PieContainer = styled.div`
  height: 350px;
`;

export default function ByItem() {
  return (
    <Container>
      {data.map((item, idx) => (
        <Wrapper>
          <Title>{idx + 1}번 문항에 대한 분석결과</Title>
          <PieContainer>
            <ResponsivePie
              data={item}
              margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={3}
              activeOuterRadiusOffset={8}
              borderWidth={1}
              borderColor={{
                from: "color",
                modifiers: [["darker", 0.2]],
              }}
              enableArcLinkLabels={false}
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsTextColor="#333333"
              arcLinkLabelsThickness={2}
              arcLinkLabelsColor={{ from: "color" }}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor={{
                from: "color",
                modifiers: [["darker", 2]],
              }}
              legends={[
                {
                  anchor: "bottom",
                  direction: "row",
                  justify: false,
                  translateX: 0,
                  translateY: 56,
                  itemsSpacing: 0,
                  itemWidth: 100,
                  itemHeight: 18,
                  itemTextColor: "#999",
                  itemDirection: "left-to-right",
                  itemOpacity: 1,
                  symbolSize: 18,
                  symbolShape: "circle",
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemTextColor: "#000",
                      },
                    },
                  ],
                },
              ]}
            />
          </PieContainer>
        </Wrapper>
      ))}
    </Container>
  );
}
