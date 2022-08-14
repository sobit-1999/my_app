import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addDataTests,
  editAmountValue,
  editCategoryValue,
} from "./redux/testsSlice";

const Api = () => {
  const dispatch = useDispatch();

  const amount = useSelector((state) => state.test.amountTest);
  const age = useSelector((state) => state.test.categoryTest);

  const categoryApi = [
    "General Knowledge",
    "Entertainment: Books",
    "Entertainment: Film",
    "Entertainment: Music",
    "Entertainment: Musicals & theatres",
    "Entertainment: Television",
    "Entertainment: Video Games",
    "Entertainment: Board Games",
    "Science: Nature",
    "Science: Computers",
    "Science: Mathematics",
    "Mythology",
    "Sports",
    "Geography",
    "History",
    "Politics",
    "Art",
    "Celebrities",
    "Animals",
    "Vehicles",
    "Entertainment: Comics",
    "Science: Gadgets",
    "Entertainment: Japanese Anime & Manga",
    "Entertainment: Carton & Animation",
  ];

  useEffect(() => {
    axios
      .get(`https://opentdb.com/api.php?amount=${amount}&category=${age + 9}`)
      .then((resp) => dispatch(addDataTests(resp)))
      .catch((err) => {
        console.error(err, "Error");
      });
  }, [age, amount]);

  return (
    <div className="App">
      <FormControl sx={{ m: 1, minWidth: 300 }}>
        {/* <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel> */}
        <select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={(e) => dispatch(editCategoryValue(e.target.value))}
          autoWidth
          label="Age"
          defaultValue={1}
        >
          {categoryApi.map((item, i) => {
            return (
              <option key={i} value={i}>
                {item}
              </option>
            );
          })}
        </select>
      </FormControl>
      <input
        sx={{ m: 1, minWidth: 300 }}
        value={amount}
        onChange={(e) => dispatch(editAmountValue(e.target.value))}
        type="number"
      ></input>
      <br />
      <Link to="/test0">
        <button className="start">START</button>
      </Link>
    </div>
  );
};
export default Api;
