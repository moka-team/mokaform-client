import { ResponsivePie } from "@nivo/pie";

import styled from "styled-components";

const PieChartContainer = styled.div`
  height: 500px;
  width: 500px;
  margin-bottom: 50px;
`;

const formatting = (data) => {
  const result = [];
  data.forEach((ele, idx) => {
    const tmp = {};
    tmp.id = idx + 1;
    tmp.label = idx + 1;
    tmp.content = ele.multiQuestionContent;
    tmp.value = ele.multiQuestionContentCount;

    result.push(tmp);
  });
  return result;
};

export default function PieChart({ data }) {
  const result = formatting(data);

  return (
    <PieChartContainer>
      <ResponsivePie
        data={result}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: "paired" }}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
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
  );
}
