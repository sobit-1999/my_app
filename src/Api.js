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
  incrementAmount,
  decrementAmount
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

  const amountDates = [5,10, 15, 20,25,  30,35, 40,45,  50]

  useEffect(() => {
    axios
    .get(`https://opentdb.com/api.php?amount=${amount}&category=${age*1+9}`)
    .then((resp) => dispatch(addDataTests(resp)))
    .catch((err) => {
      console.error(err, "Error");
    });
    console.log(age+9);
  }, [age, amount]);

  return (
    <div className="api">
      <FormControl sx={{ m: 1, minWidth: 300 }}>
      <h3>Category</h3>
        <select
          onChange={(e) => dispatch(editCategoryValue(e.target.value))}
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
      <h3>Number Of Questions</h3>
        <select
          onChange={(e) => dispatch(editAmountValue(e.target.value))}
        >
          {amountDates.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      <br />
      <Link to="/test0">
        <button className="start">START</button>
      </Link>
    </div>
  );
};
export default Api;
