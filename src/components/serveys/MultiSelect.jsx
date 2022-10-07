import * as React from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useRecoilState } from "recoil";
import { categoryState } from "./optionState";

export default function MultiSelect() {
  const [category, setCategory] = useRecoilState(categoryState);
  console.log("category: ", category);
  const onChangeCategory = (e, newValue) => {
    setCategory(newValue);
  };
  return (
    <Stack spacing={3} sx={{ width: 500 }}>
      <Autocomplete
        value={category}
        onChange={onChangeCategory}
        multiple
        id="tags-filled"
        options={categoryList.map((option) => option.title)}
        freeSolo
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              variant="outlined"
              label={option}
              {...getTagProps({ index })}
            />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="filled"
            label="설문과 관련된 카테고리를 골라주세요."
            placeholder=""
          />
        )}
      />
    </Stack>
  );
}

const categoryList = [
  { title: "일상" },
  { title: "IT" },
  { title: "취미" },
  { title: "학습" },
  { title: "심리" },
  { title: "사회정치" },
  { title: "선호도 조사" },
  { title: "+" },
];
