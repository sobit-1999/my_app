import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Header({click, value}) {

    const data = useSelector((state ) => state.test.dataTests)
    const answer = useSelector((state ) => state.test.answers)

    return (
    <div className='header'>
          {data.map((item, i) => {
           return  <Link to={'/test'+i}> <Avatar
            onClick={() => {
              click(false)
             value('')
            }}
            sx={
             answer[i] && answer[i].my_answer === answer[i].correct ? { background:'green'}: answer[i] && answer[i].my_answer !== answer[i].correct? {background:'red'}:{background:''}
            }
            >{i+1}</Avatar> </Link>
        })}
    </div>
  )
}
