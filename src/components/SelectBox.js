import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectBox({ width, name, items, setItem }) {
  const [field, setField] = React.useState("");
  // console.log(items)
  const handleChange = (event) => {
    setField(event.target.value);
    setItem(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, width: width }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={field}
          label="field"
          onChange={handleChange}
        >
          {items.map((val, key) => {
            return (
              <MenuItem key={key} value={val}>
                {val}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
