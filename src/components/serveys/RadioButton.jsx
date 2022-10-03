import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RadioButton({ props }) {
  return (
    <FormControl sx={{ mt: -2 }}>
      {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value={props[0].value}
          control={<Radio />}
          label={props[0].label}
        />
        <FormControlLabel
          value={props[1].value}
          control={<Radio />}
          label={props[1].label}
        />
      </RadioGroup>
    </FormControl>
  );
}
