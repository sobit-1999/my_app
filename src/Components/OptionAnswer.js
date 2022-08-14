import { FormControlLabel, Radio } from "@mui/material";
import React from "react";

export default function OptionAnswer({  item, correct, clickOption }) {
  return (
    <div>
      <FormControlLabel
        sx={{
          borderRadius: 2,
          margin: "1px",
          paddingX: 2,
          background:
            item === correct ? "green" : item === clickOption ? "red" : "",
            "&:focus":{
              transform: "scale(1.15)"
            }
        }}
        kay={item}
        value={item}
        control={<Radio />}
        label={item}
      />
    </div>
  );
}
