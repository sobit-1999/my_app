import { Avatar, Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header({ click, value }) {
  const data = useSelector((state) => state.test.dataTests);
  const answer = useSelector((state) => state.test.answers);
  const index = useSelector((state) => state.test.dataIndex);

  return (
    <div className="header">
      {data.map((item, i) => {
        return (
          <Link to={"/test" + i}>
            <Box
              className="test-number"
              onClick={() => {
                click(false);
                value("");
              }}
              sx={
                answer[i] && answer[i].my_answer === answer[i].correct
                  ? { background: "green",transform: i === index ? "scale(1.19)" : "scale(1)" }
                  :( answer[i] && answer[i].my_answer !== answer[i].correct
                  ? { background: "red", transform: i === index ? "scale(1.19)" : "scale(1)" }
                  : { transform: i === index ? "scale(1.19)" : "scale(1)" } )
              }
            >
              {i + 1}
            </Box>{" "}
          </Link>
        );
      })}
    </div>
  );
}
