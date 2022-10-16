import { ResponsiveBar } from "@nivo/bar";
import styled from "styled-components";

const BarChartContainer = styled.div`
  height: 200px;
  width: 500px;
  margin-bottom: 50px;
`;

export default function BarChart({ data }) {
  return (
    <BarChartContainer>
      <ResponsiveBar
        data={data}
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
  );
}
