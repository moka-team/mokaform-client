import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { ResponsiveRadar } from "@nivo/radar";

const Container = styled.div`
  height: 400px;
  width: 400px;
`;

const totalResult = [];
const result = [
  {
    emotion: "감정없음",
    value: 0,
  },
  {
    emotion: "놀람",
    value: 0,
  },
  {
    emotion: "두려움",
    value: 0,
  },
  {
    emotion: "불확실",
    value: 0,
  },
  {
    emotion: "슬픔",
    value: 0,
  },
  {
    emotion: "싫음",
    value: 0,
  },
  {
    emotion: "좋음",
    value: 0,
  },
  {
    emotion: "지루함",
    value: 0,
  },
  {
    emotion: "창피함",
    value: 0,
  },
];

const loop = async (times, callback) => {
  for (let i = 0; i < times; i++) {
    await callback(i);
  }
};

export default function Radar({ data }) {
  const [chart, setChart] = useState(result);
  const getResult = async (data) => {
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

    setChart(result);
  };

  useEffect(() => {
    getResult(data);
  }, []);

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
