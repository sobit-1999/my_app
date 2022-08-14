import { FormControlLabel, Radio } from "@mui/material";

export default function Option({ item, i, correct, clickOption, click}) {
  return (
    <div>
        <FormControlLabel sx={{
                    borderRadius: 2,
                    margin: "1px",
                    paddingX: 2,
          background: item===correct ? 'rgb(85, 205, 85)':'yellow'}} 
          kay={i} value={item} control={<Radio />} label={item} />
    </div>
  )
}
