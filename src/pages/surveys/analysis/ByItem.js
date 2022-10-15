import { ResponsivePie } from "@nivo/pie";
import { ResponsiveBar } from "@nivo/bar";

import styled from "styled-components";
import data from "./data";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  text-align: center;
`;

const PieChartContainer = styled.div`
  height: 500px;
  width: 500px;
`;
const BarChartContainer = styled.div`
  height: 200px;
  width: 500px;
`;

export default function ByItem() {
  return (
    <Container>
      {data.map((item, idx) => (
        <Wrapper key={idx}>
          <Title>{idx + 1}번 문항에 대한 분석결과</Title>
          {item.question_type === "MULTIPLE_CHOICE" ? (
            <PieChartContainer>
              <ResponsivePie
                data={item.data}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                colors={{ scheme: "blues" }}
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
            </PieChartContainer>
          ) : item.question_type === "OX" ? (
            <BarChartContainer>
              <ResponsiveBar
                data={item.data}
                keys={["Yes", "No"]}
                indexBy="count"
                margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
                padding={0.3}
                layout="horizontal"
                valueScale={{ type: "linear" }}
                indexScale={{ type: "band", round: true }}
                colors={{ scheme: "paired" }}
                borderColor={{
                  from: "color",
                  modifiers: [["darker", 1.6]],
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={null}
                axisLeft={null}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{
                  from: "color",
                  modifiers: [["darker", 1.6]],
                }}
                legends={[
                  {
                    dataFrom: "keys",
                    anchor: "bottom",
                    direction: "row",
                    translateX: 50,
                    justify: false,
                    itemWidth: 100,
                    itemHeight: 10,
                    itemDirection: "left-to-right",
                    symbolSize: 20,
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemOpacity: 1,
                        },
                      },
                    ],
                  },
                ]}
              />
            </BarChartContainer>
          ) : (
            <div></div>
          )}
        </Wrapper>
      ))}
    </Container>
  );
}
