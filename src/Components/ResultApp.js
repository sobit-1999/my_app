import { Button  } from '@mui/material';
import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';

export default function ResultApp() {
    const answer = useSelector((state ) => state.test.answers)
    const data = useSelector((state ) => state.test.dataTests)
   const result = []
   for (let i = 0; i < answer.length; i++) {
      if (answer[i].correct===answer[i].my_answer) {
        result.push('1')
      }    
   }
console.log(result);
  return (
    <div className='result'>
        Result
        <h1>{result.length}</h1>
        /
        <h1>{data.length}</h1>
        <h2>{(result.length/data.length)*100} %</h2>
        <Link to='/test0' ><Button> Test </Button></Link>
    </div>
  )
}
// correct: "Bulldog"
// id: 0
// my_answer: "Yorkshire Terrier"