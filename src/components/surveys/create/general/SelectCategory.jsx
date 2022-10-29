import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { useRecoilState } from "recoil";
import { surveyCategory } from "../../../../atoms";

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

const categories = [
  "DAILY_LIFE", // 일상
  "IT", // IT
  "HOBBY", // 취미
  "LEARNING", // 학습
  "PSYCHOLOGY", // 취미
  "SOCIAL_POLITICS", // 사회/정치
  "PREFERENCE_RESEARCH", // 선호도 조사
  "PET", // 반려동물
];

const kCategories = [
  "일상",
  "IT",
  "취미",
  "학습",
  "심리",
  "사회/정치",
  "선호도 조사",
  "반려동물",
];

function getStyles(item, category, theme) {
  return {
    fontWeight:
      category.indexOf(item) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function SelectCategory() {
  const theme = useTheme();
  const [category, setCategory] = React.useState([]);
  const [categoryState, setCatergoryState] = useRecoilState(surveyCategory);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setCategory(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    setCatergoryState(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div>
      <FormControl sx={{ y: 2, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">카테고리</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={categoryState}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {categories.map((item, index) => (
            <MenuItem
              key={item}
              value={item}
              style={getStyles(item, category, theme)}
            >
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
