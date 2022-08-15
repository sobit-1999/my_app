import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import { answersDelete } from "../redux/testsSlice";

export default function ResultApp({ opacity, setOpacity }) {
  const answer = useSelector((state) => state.test.answers);
  const data = useSelector((state) => state.test.dataTests);
  const result = [];
  const dispatch= useDispatch()

  for (let i = 0; i < answer.length; i++) {
    if (answer[i] && answer[i].my_answer === answer[i].correct) {
      result.push("1");
    }
  }
  return (
    <Box
      sx={{
        zIndex: opacity ? 1 : -1,
      }}
      className="result-container"
    >
      <h1> Your results </h1>
      <div className="result">
        <h2 style={{ marginTop: -3 }}>{result.length}</h2>
        <h1>/</h1>
        <h2 style={{ marginBottom: -3 }}>{data.length}</h2>
      </div>
      <h2>{((result.length / data.length) * 100).toFixed(0)}  %</h2>
      <Link to="/test0">
        <Button sx={{ margin: 2, border: '2px solid orange' }} onClick={() => setOpacity(false)}>
          Ok
        </Button>
        <Link to="/">
          <Button sx={{ margin: 2, border: '2px solid red' }}
          onClick = {(e) => dispatch(answersDelete())}
          > Go home</Button>
        </Link>
      </Link>
    </Box>
  );
}
