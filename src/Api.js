import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { Button, TextField } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
import { editAmountValue, editCategoryValue } from './redux/testsSlice';

// https://opentdb.com/api.php?amount=10&category=32
// https://opentdb.com/api.php?amount=10&category=28


const Api = () => {
    const dispatch = useDispatch()

    const [data, setData] = useState([]);
    // const [age, setAge] = React.useState('');
    const amount = useSelector((state) => state.test.amountTest);
    const age = useSelector((state) => state.test.categoryTest);


console.log(amount);
    const categoryApi = [ 
'General Knowledge', 
'Entertainment: Books', 
'Entertainment: Film',
'Entertainment: Music',
'Entertainment: Musicals & theatres',
'Entertainment: Television',
'Entertainment: Video Games',
'Entertainment: Board Games',
'Science: Nature',
'Science: Computers',
'Science: Mathematics',
'Mythology',
'Sports',
'Geography',
'History',
'Politics',
'Art',
'Celebrities',
'Animals',
'Vehicles',
'Entertainment: Comics',
'Science: Gadgets',
'Entertainment: Japanese Anime & Manga',
'Entertainment: Carton & Animation'
]

useEffect(() => {
    
    axios.get(`https://opentdb.com/api.php?amount=${amount}&category=${age+9}`)
    .then(resp => {
        setData(resp)
    })
    .catch(err => {
        console.error(err);
    });
}, [ age, amount ])

const StartFunction = () => {
    
    console.log(age, amount);
    console.log(data);
}

    return (
      <div className="App">
      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={(e) => dispatch(editCategoryValue(e.target.value))}
          autoWidth
          label="Age"
          defaultValue={1}
        >
          {categoryApi.map((item, i) => {
            return <MenuItem key={i} value={i}>{item}</MenuItem>
          })}
        </Select>
      </FormControl>
        <TextField 
         sx={{ m: 1, minWidth: 300 }}
          value={amount}
          onChange={e => dispatch(editAmountValue(e.target.value))}
          type='number'
        >
        </TextField> 
        <br />
        <Button onClick={StartFunction}>START</Button>

       </div>
    );
  }
// }

export default Api;
