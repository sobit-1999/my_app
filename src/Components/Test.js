import * as React from "react";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import { Link } from "react-router-dom";
import Header from "./Header";
import Option from "./Option";
import { useDispatch, useSelector } from "react-redux";
import { answersPush, editDataIndex } from "../redux/testsSlice";
import OptionAnswer from "./OptionAnswer";
import OptionFinish2 from "./OptionFinish2";
import ResultApp from "./ResultApp";

export default function Test({ data, index }) {

  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [clickOption, setClickOption] = React.useState("");
  const [answers, setAnswers] = React.useState(false);
  const [opacity, setOpacity] = React.useState(false)
  const dates = useSelector((state) => state.test.dataTests);
  const answer = useSelector((state) => state.test.answers);

  const dispatch = useDispatch();
  console.log(answer);
  const test = [];
  data.incorrect_answers.map((item) => {
    return test.push(item);
  });
  test.splice(Math.floor((Math.random() * 40) / 10), 0, data.correct_answer);

  const handleRadioChange = (event) => {
   answers===false? setValue(event.target.value):setValue('')
  };

  dispatch(editDataIndex(index));

  const answerFunction = (event) => {
    dispatch(
      answersPush({
        id: index,
        test: test,
        correct: data.correct_answer,
        my_answer: value,
      })
    );
    setClickOption(value);
    if (value.length) {
      setError(true);
    }
  };

  return (<>    <FormControl className="test-container" sx={{ m: 3, opacity: opacity ? 0.3 :1 }} variant="standard">
      <div className="finish">
        <h1>MyTest</h1>
          <button onClick={(e) => setAnswers(true)|setOpacity(true)}>Finish</button>
      </div>
      <h3>Category: {data.category}</h3>
      <Header click={setError} value={setValue} />
      <h4><span>{index+1}-question: </span> {data.question}</h4>
      <h2>Option</h2>
      {answer[index] ? (
        <>
          <RadioGroup
            className="test"
            name="quiz"
            value={answer[index].my_answer}
          >
            {answer[index].test.map((item, i) => {
              return (
                <OptionAnswer
                  i={i}
                  key={i}
                  item={item}
                  correct={answer[index].correct}
                  clickOption={answer[index].my_answer}
                  answers={answers}
                  // dataCorrect = {data[]}
                />
              );
            })}
          </RadioGroup>
          <div className="buttons">
            <>
              {index > 0 ? (
                <Link to={"/test" + (index - 1)}>
                  <button
                    className="check2"
                    onClick={() => {
                      setError(false);
                      setValue("");
                    }}
                  >
                    {index}
                  </button>
                </Link>
              ) : (
                <button
                  className="check1"
                  onClick={() => {
                    setError(false);
                    setValue("");
                  }}
                >
                  {index}
                </button>
              )}
              <button className="check1">Check</button>
              {index < dates.length - 1 ? (
                <Link to={"/test" + (index + 1)}>
                  <button
                    className="check2"
                    onClick={() => {
                      setError(false);
                      setValue("");
                    }}
                  >
                    {index + 2}
                  </button>
                </Link>
              ) : (
                <button
                  className="check1"
                  onClick={() => {
                    setError(false);
                    setValue("");
                  }}
                >
                  {index + 2}
                </button>
              )}
            </>
          </div>
        </>
      ) : (
        <>
          <RadioGroup
            name="quiz"
            className="test"
            value={value}
            onChange={handleRadioChange}
          >
           {answers===false ?test.map((item, i) => {
              return (
                <Option
                  i={i}
                  item={item}
                  correct={data.correct_answer}
                  clickOption={clickOption}
                  click={error}
                />
              );
            }) :
                        test.map((item, i) => {
              return (
                <OptionFinish2
                  i={i}
                  item={item}
                  correct={data.correct_answer}
                  clickOption={clickOption}
                  click={error}
                />
              );
            })
      }
          </RadioGroup>
          <div className="buttons">
            {value === "" ? (
              <>
                {index > 0 ? (
                  <Link to={"/test" + (index - 1)}>
                    <button
                      className="check2"
                      onClick={() => {
                        setError(false);
                        setValue("");
                      }}
                    >
                      {index}
                    </button>
                  </Link>
                ) : (
                  <button
                    className="check1"
                    onClick={() => {
                      setError(false);
                      setValue("");
                    }}
                  >
                    {index}
                  </button>
                )}
                <button className="check1">Check</button>
                {index < dates.length - 1 ? (
                  <Link to={"/test" + (index + 1)}>
                    <button
                      className="check2"
                      onClick={() => {
                        setError(false);
                        setValue("");
                      }}
                    >
                      {index + 2}
                    </button>
                  </Link>
                ) : (
                  <button
                    className="check1"
                    onClick={() => {
                      setError(false);
                      setValue("");
                    }}
                  >
                    {index + 2}
                  </button>
                )}{" "}
              </>
            ) : (
              <>
                <button
                  className="check1"
                  onClick={() => {
                    setError(false);
                    setValue("");
                  }}
                >
                  {index}
                </button>
                <button className="check2" onClick={answerFunction}>
                  Check
                </button>

                <button
                  className="check1"
                  onClick={() => {
                    setError(false);
                    setValue("");
                  }}
                >
                  {index + 2}
                </button>
              </>
            )}
          </div>
        </>
      )}
    </FormControl>
    <ResultApp opacity ={opacity } setOpacity = {setOpacity} />
    </>
  );
}
