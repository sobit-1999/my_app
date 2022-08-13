import * as React from 'react';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import { Box } from '@mui/system';
import Header from './Header';
import Option from './Option';
import { useDispatch, useSelector } from 'react-redux';
import { answersPush, editDataIndex } from '../redux/testsSlice';
import OptionAnswer from './OptionAnswer';


export default function Test({data, index}) {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [clickOption, setClickOption] = React.useState('')

  const answer = useSelector((state ) => state.test.answers)
  const  dispatch = useDispatch()
  
  const test = []
    data.incorrect_answers.map(item => {
      return test.push(item)
    })
    test.splice(Math.floor((Math.random() * 40)/10), 0, data.correct_answer)


     const handleRadioChange = (event) => {
       setValue(event.target.value);
     };

     dispatch(editDataIndex(index)) 
   
  const answerFunction = (event) => {
     dispatch(answersPush({id: index, test: test, correct: data.correct_answer, my_answer: value }))
     setClickOption(value)
     if (value.length) { 
       setError(true)
     }
  };

  return (
    <FormControl sx={{ m: 3 }} variant="standard">
        <Header click={setError}  value={setValue}/>
        <h4 >{data.question}</h4>  
       <Link to='/result'> <Button >result</Button></Link>
        {answer[index] ? 
        <> <RadioGroup
        name="quiz"
        value={answer[index].my_answer}
        onChange={handleRadioChange}
      >
          { answer[index].test.map((item, i)=> {
         return   <OptionAnswer
          i={i} 
          item={item} 
          correct={answer[index].correct}
          clickOption={answer[index].my_answer}
          // click={error}
          />
         })}
      </RadioGroup>
                  <Box sx={{
                    display: 'flex'
                }}>
            <Link to={'/test'+(index-1)}>
            <Button sx={{ mt: 1, mr: 1 }}
            onClick={() => {
              setError(false)
              setValue('')
            }}
            >
              {index}
            </Button>
            </Link>
            <Link to={'/test'+(index+1)}> 
            <Button 
            onClick={() => {
              setError(false)
              setValue('')
            }}
            sx={{ mt: 1, mr: 1 }}>
              {index+2}
            </Button>
            </Link>
            </Box>
           </>
      
        :
       <> <RadioGroup
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
            { test.map((item, i)=> {
           return   <Option
            i={i} 
            item={item} 
            correct={data.correct_answer}
            clickOption={clickOption}
            click={error}
            />
           })}
        </RadioGroup>
            <Box sx={{
              display: 'flex'
            }}>
          { value==='' ? '':<Button onClick={answerFunction} sx={{ mt: 1, mr: 1 }} >
          Check Answer
        </Button>}
        </Box>
            </> }
      </FormControl>
    // </form>
  );
}
