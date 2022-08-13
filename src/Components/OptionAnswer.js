import { FormControlLabel, Radio } from '@mui/material'
import React from 'react'

export default function OptionAnswer({ item, correct, clickOption}) {

    return (
    <div>
    <FormControlLabel sx={{
      background: item===correct? 'green'
      :(item===clickOption? 'red':'')}} 
      kay={item} value={item} control={<Radio />} label={item} /></div>
  )
}