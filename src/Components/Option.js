import { FormControlLabel, Radio } from "@mui/material";
import React from "react";

export default function Option({ item, i, correct, clickOption, click }) {
  return (
    <div>
      <FormControlLabel
        sx={{
          borderRadius: 2,
          margin: "1px",
          paddingX: 2,
          background:
            click & (item === correct)
              ? "green"
              : click & (item === clickOption)
              ? "red"
              : "",
        }}
        kay={i}
        value={item}
        control={<Radio />}
        label={item}
      />
    </div>
  );
}
