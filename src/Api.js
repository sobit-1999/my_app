import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React, { useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
import { Button, TextField } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
import { addDataTests, editAmountValue, editCategoryValue } from './redux/testsSlice';

const Api = () => {
    const dispatch = useDispatch()

    const amount = useSelector((state) => state.test.amountTest);
    const age = useSelector((state) => state.test.categoryTest);

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
    .then(resp => dispatch(addDataTests(resp)))
    .catch(err => {
        console.error(err, 'Error');
    });
}, [ age, amount ])

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
       <Link to='/test0'> <Button>START</Button></Link>

       </div>
    );
  }
export default Api;
