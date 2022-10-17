import { TagCloud } from "react-tagcloud";
import styled from "styled-components";

const WordCloudContainer = styled.div`
  padding: 50px;
`;

const options = {
  luminosity: "light",
  hue: "blue",
};

export default function WordCloud({ item }) {
  const countNum = (data) => {
    const obj = {};

    const json = [];

    data.forEach((element) => {
      element.content.split(" ").map((word) => {
        if (word in obj) {
          obj[word] += 1;
        } else {
          obj[word] = 1;
        }
      });
    });

    Object.keys(obj).map((key) => json.push({ value: key, count: obj[key] }));

    return json;
  };

  return (
    <WordCloudContainer>
      <TagCloud
        minSize={15}
        maxSize={50}
        tags={countNum(item.data)}
        colorOptions={options}
      />
    </WordCloudContainer>
  );
}
