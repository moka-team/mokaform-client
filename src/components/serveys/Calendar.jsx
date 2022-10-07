import * as React from "react";

import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { dateState } from "./optionState";
import { useRecoilState } from "recoil";

export default function Calendar({ text }) {
  const [date, setDate] = useRecoilState(dateState);
  const [value, setValue] = React.useState(null);
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={text}
        value={date}
        inputFormat={"YYYY-MM-DD"}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} helperText={params?.inputProps?.placeholder} />
        )}
      />
    </LocalizationProvider>
  );
}
