import axios from "axios";
import styled from "styled-components";
import { ResponsiveRadar } from "@nivo/radar";
import { useState } from "react";

const Container = styled.div`
  height: 400px;
  width: 400px;
`;
const loop = async (times, callback) => {
  for (let i = 0; i < times; i++) {
    await callback(i);
  }
};

const formatting = async (data) => {
  const totalResult = [];
  const result = [
    {
      emotion: "감정없음",
    },
    {
      emotion: "놀람",
    },
    {
      emotion: "두려움",
    },
    {
      emotion: "불확실",
    },
    {
      emotion: "슬픔",
    },
    {
      emotion: "싫음",
    },
    {
      emotion: "좋음",
    },
    {
      emotion: "지루함",
    },
    {
      emotion: "창피함",
    },
  ];

  const config = {
    headers: {
      "x-api-key": "4a395f44b5577975b95f98095d59fd5c",
      "Content-Type": "application/json",
    },
  };

  for await (const element of data) {
    const res = await axios.post("/analysis", { msg: element }, config);
    totalResult.push(res.data[0].candidates);
  }

  loop(9, (i) => {
    let sum = 0;
    totalResult.forEach((value) => {
      sum += value[i].prob;
    });
    result[i]["value"] = sum;
  });

  return result;
};

export default function Radar({ data }) {
  const [chart, setChart] = useState([]);
  const promise = formatting(data);
  const getData = () => {
    promise.then((appData) => {
      setChart(appData);
      console.log(chart);
    });
  };
  getData();
  return (
    <Container>
      <ResponsiveRadar
        data={chart}
        keys={["value"]}
        indexBy="emotion"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        borderColor={{ from: "color" }}
        gridLabelOffset={36}
        dotSize={10}
        dotColor={{ theme: "background" }}
        dotBorderWidth={2}
        colors={{ scheme: "nivo" }}
        blendMode="multiply"
        motionConfig="wobbly"
        legends={[
          {
            anchor: "top-left",
            direction: "column",
            translateX: -50,
            translateY: -40,
            itemWidth: 80,
            itemHeight: 20,
            itemTextColor: "#999",
            symbolSize: 12,
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
    </Container>
  );
}
